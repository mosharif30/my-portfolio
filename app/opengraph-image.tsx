import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { resume } from "@/lib/resume";

export const alt = `${resume.name}, ${resume.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public", resume.photo));
  const [firstName, ...rest] = resume.name.split(" ");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 72,
        background: "#fbfaf6",
        color: "#15202b",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
          {firstName}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#0b5f7c",
          }}
        >
          {rest.join(" ")}
        </div>
        <div style={{ marginTop: 36, fontSize: 28, color: "#55626e" }}>
          {resume.title}
        </div>
        <div style={{ marginTop: 12, fontSize: 28, color: "#55626e" }}>
          {resume.contact.location}
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/alt-text -- rendered to a PNG by Satori */}
      <img
        src={`data:image/jpeg;base64,${photo.toString("base64")}`}
        width={340}
        height={340}
        style={{ borderRadius: 32 }}
      />
    </div>,
    size,
  );
}
