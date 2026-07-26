import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dipendra Bhatta - Full-Stack Engineer & Builder",
    short_name: "Dipendra Bhatta",
    description:
      "Portfolio of Dipendra Bhatta (Dipen). Full-Stack Engineer building with AI. LLM orchestration, Kubernetes, distributed systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#00ffcc",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
