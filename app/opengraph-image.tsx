import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Omikron-Software — aplikacje szyte na miarę, Elbląg";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f172a",
          color: "#f8fafc",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#f59e0b",
              color: "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div style={{ fontSize: "36px", fontWeight: 700 }}>Omikron-Software</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.1, maxWidth: "900px" }}>
            Aplikacje szyte na miarę
          </div>
          <div style={{ fontSize: "32px", color: "#fbbf24" }}>Elbląg</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
