export type ShapeStyle = "circle" | "square";

type ValidImageExtension = ".webp" | ".png" | ".jpg" | ".avif";

export type PublicPath = `assets/${string}${ValidImageExtension}`;
