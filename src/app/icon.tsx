import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg viewBox="0 0 64 50" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" fill="#031b2a" />
        <path d="M1 48 32 2l31 46H52L32 17 12 48Z" fill="#ffffff" />
        <path d="m24 34 5-5 4 5 4-5 5 5-9 13Z" fill="#c60016" />
        <path d="m30 25 4-6 10 15-4 5Z" fill="#dce2e7" />
      </svg>
    ),
    size,
  );
}
