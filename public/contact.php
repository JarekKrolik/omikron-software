<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Niedozwolona metoda.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$configPath = __DIR__ . '/mail-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Wysyłka nie jest skonfigurowana.'], JSON_UNESCAPED_UNICODE);
    exit;
}

/** @var array{host: string, port: int, user: string, pass: string, to: string} $config */
$config = require $configPath;

$payload = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['error' => 'Niepoprawne dane.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$problems = [
    'Chcę zautomatyzować dokumenty',
    'Potrzebuję apki dla pracowników',
    'Chcę usprawnić procesy',
    'Chcę wdrożyć AI w firmie',
    'Inny problem',
];

$name = clip((string) ($payload['name'] ?? ''), 120);
$contact = clip((string) ($payload['contact'] ?? ''), 160);
$problem = clip((string) ($payload['problem'] ?? ''), 80);
$description = clip((string) ($payload['description'] ?? ''), 4000);

if ($name === '' || $contact === '' || !in_array($problem, $problems, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Uzupełnij wymagane pola.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$replyTo = filter_var($contact, FILTER_VALIDATE_EMAIL) ? $contact : null;
$subject = 'Zapytanie ze strony: ' . $problem;
$body = implode("\n", [
    'Nowe zapytanie z formularza Omikron-Software',
    '',
    'Imię / firma: ' . $name,
    'Telefon / e-mail: ' . $contact,
    'Problem: ' . $problem,
    '',
    'Opis:',
    $description !== '' ? $description : '(brak)',
]);

try {
    smtp_send(
        $config['host'],
        (int) $config['port'],
        $config['user'],
        $config['pass'],
        $config['to'],
        $subject,
        $body,
        $replyTo
    );
} catch (Throwable $error) {
    error_log('Contact form mail failed: ' . $error->getMessage());
    http_response_code(502);
    echo json_encode(['error' => 'Nie udało się wysłać wiadomości.'], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(['ok' => true]);

function clip(string $value, int $max): string
{
    $value = trim(str_replace(["\r\n", "\r"], "\n", $value));
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max);
    }

    return substr($value, 0, $max);
}

function smtp_send(
    string $host,
    int $port,
    string $user,
    string $pass,
    string $to,
    string $subject,
    string $body,
    ?string $replyTo
): void {
    $socket = stream_socket_client(
        'tcp://' . $host . ':' . $port,
        $errno,
        $errstr,
        20,
        STREAM_CLIENT_CONNECT
    );

    if ($socket === false) {
        throw new RuntimeException('Połączenie SMTP nie powiodło się.');
    }

    stream_set_timeout($socket, 20);

    try {
        smtp_expect($socket, [220]);
        smtp_command($socket, 'EHLO omikron-software.pl', [250]);
        smtp_command($socket, 'STARTTLS', [220]);

        $crypto = stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        if ($crypto !== true) {
            throw new RuntimeException('STARTTLS nie powiódł się.');
        }

        smtp_command($socket, 'EHLO omikron-software.pl', [250]);
        smtp_command($socket, 'AUTH LOGIN', [334]);
        smtp_command($socket, base64_encode($user), [334]);
        smtp_command($socket, base64_encode($pass), [235]);
        smtp_command($socket, 'MAIL FROM:<' . $user . '>', [250]);
        smtp_command($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
        smtp_command($socket, 'DATA', [354]);

        $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        $headers = [
            'From: Omikron-Software <' . $user . '>',
            'To: <' . $to . '>',
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
        ];
        if ($replyTo !== null) {
            $headers[] = 'Reply-To: <' . $replyTo . '>';
        }

        $safeBody = preg_replace('/^\./m', '..', str_replace("\n", "\r\n", $body));
        fwrite($socket, implode("\r\n", $headers) . "\r\n\r\n" . $safeBody . "\r\n.\r\n");
        smtp_expect($socket, [250]);
        smtp_command($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

function smtp_command($socket, string $command, array $expected): string
{
    fwrite($socket, $command . "\r\n");

    return smtp_expect($socket, $expected);
}

function smtp_expect($socket, array $expected): string
{
    $response = '';
    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expected, true)) {
        throw new RuntimeException('Odpowiedź SMTP: ' . trim($response));
    }

    return $response;
}
