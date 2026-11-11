import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Omikron-Software — aplikacje szyte na miarę, Elbląg";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1a2e",
          color: "#f8fafc",
          padding: "72px",
        }}
      >
        <img src={src} width={420} height={131} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.1, maxWidth: "900px" }}>
            Aplikacje szyte na miarę
          </div>
          <div style={{ fontSize: "32px", color: "#fb923c" }}>Elbląg</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
