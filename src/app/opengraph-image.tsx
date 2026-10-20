import { ImageResponse } from "next/og";

export const alt = "West Coast Services — Business Utilities & Digital Marketing";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#121512",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#FF5B1F",
            }}
          />
          <span
            style={{
              color: "#C9CBC4",
              fontSize: "20px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            UK Business Utilities &nbsp;/&nbsp; Digital Marketing
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <h1
            style={{
              color: "#F1F1EC",
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "1000px",
            }}
          >
            We sort out the bills you hate opening — and the marketing you never get round to.
          </h1>
          <div
            style={{
              width: "220px",
              height: "8px",
              background: "#FF5B1F",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2B302B",
            paddingTop: "28px",
            color: "#8B8F86",
            fontSize: "20px",
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: "#F1F1EC", fontWeight: "bold" }}>WESTCOASTSERVICES.CO.UK</span>
          <span>ELECTRICITY · GAS · WATER · WASTE · WEB · SEO</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
