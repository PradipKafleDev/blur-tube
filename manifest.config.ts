import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "BlurTube",

  version: "1.0.0",

  description: "Blur YouTube thumbnails for more private browsing.",

  permissions: ["storage"],

  action: {
    default_popup: "src/popup/index.html",
    default_title: "BlurTube",
  },

  content_scripts: [
    {
      matches: ["https://www.youtube.com/*"],
      js: ["src/content/content.ts"],
      run_at: "document_start",
    },
  ],
});