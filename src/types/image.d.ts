export type ShapeStyle = "circle" | "square";

type ValidImageExtension = ".webp" | ".png" | ".jpg" | ".avif";

type HTTP = "http" | "https";

export type RefT = `${HTTP}://${string}.${string}`;

export type PublicPath = `assets/${string}${ValidImageExtension}`;
