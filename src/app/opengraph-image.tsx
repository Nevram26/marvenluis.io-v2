import { ImageResponse } from "next/og";
export const alt = "Marven Luis — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fafaf8",
        color: "#222a27",
        width: "100%",
        height: "100%",
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 26 }}>Marven Luis.</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -3,
          lineHeight: 1.1,
        }}
      >
        <span>Thoughtful engineering.</span>
        <span style={{ color: "#1f6b53" }}>Useful software.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#626a66",
        }}
      >
        <span>Full-Stack Software Engineer</span>
        <span>marvenluis.io</span>
      </div>
    </div>,
    size,
  );
}
