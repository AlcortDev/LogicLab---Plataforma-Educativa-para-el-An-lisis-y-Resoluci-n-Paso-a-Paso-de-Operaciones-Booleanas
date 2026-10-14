import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LogicLab | Laboratorio de lógica digital",
    short_name: "LogicLab",
    description: "Aprende operaciones booleanas paso a paso.",
    start_url: "/",
    display: "standalone",
    background_color: "#101613",
    theme_color: "#101613",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
