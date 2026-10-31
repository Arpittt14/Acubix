import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Acubix Technologies",
    short_name: "A Cube Tech",
    description:
      "Career support for international graduates — resume optimisation, LinkedIn branding, job applications, and interview preparation.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f3ef",
    theme_color: "#0066ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

