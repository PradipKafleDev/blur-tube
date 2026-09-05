import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "BlurTube",
  version: "1.0.0",

  description:
      "A lightweight Chrome extension for blurring YouTube thumbnails, titles, and channel information.",

  permissions: ["storage"],

  icons: {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png",
  },

  action: {
    default_popup: "src/popup/index.html",
    default_title: "BlurTube",
    default_icon: {
      "16": "icons/icon16.png",
      "32": "icons/icon32.png",
      "48": "icons/icon48.png",
    },
  },

  content_scripts: [
    {
      matches: ["https://www.youtube.com/*"],
      js: ["src/content/content.ts"],
      run_at: "document_start",
    },
  ],
});