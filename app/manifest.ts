import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Suleman Gill — Junior Software Developer",
    short_name: "Suleman Gill",
    description: "Portfolio of Suleman Gill, a Computer Science graduate and junior software developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f2e8",
    theme_color: "#174a35",
    lang: "en-US",
  };
}
