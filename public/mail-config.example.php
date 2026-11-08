<?php

if (basename($_SERVER['SCRIPT_FILENAME'] ?? '') === 'mail-config.example.php') {
    http_response_code(404);
    exit;
}

return [
    'host' => 'host227407.hostido.net.pl',
    'port' => 587,
    'user' => 'kontakt@omikron-software.pl',
    'pass' => '',
    'to' => 'kontakt@omikron-software.pl',
];
