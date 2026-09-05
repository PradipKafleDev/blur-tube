# BlurTube

BlurTube is a lightweight Chrome extension that improves privacy while watching YouTube by blurring selected content on the watch page.

The video you are currently watching remains visible, while surrounding titles, thumbnails, and channel information can be hidden.

## Features

BlurTube provides three independent privacy controls.

### Video Details

Blur information shown around the current video:

- Current video title
- Channel name
- Channel avatar

The actual playing video remains visible.

### Playlist Videos

Blur content inside the playlist or queue panel:

- Video thumbnails
- Video titles

### Recommended Videos

Blur recommended content displayed around the current video:

- Video thumbnails
- Video titles

Each setting can be enabled or disabled independently from the BlurTube popup.

## Tech Stack

- React
- TypeScript
- Vite
- Chrome Extension Manifest V3
- `@crxjs/vite-plugin`
- `lucide-react`

## Project Structure

```text
src/
├── content/
│   └── content.ts
├── popup/
│   ├── components/
│   │   └── Setting.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.html
│   └── main.tsx
└── shared/
    └── settings.ts

manifest.config.ts
vite.config.ts
package.json
README.md
LICENSE
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd blur-tube
```

### Install dependencies

```bash
npm install
```

### Build the extension

```bash
npm run build
```

The production build will be generated in:

```text
dist/
```

### Load BlurTube in Chrome

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the generated `dist` directory.

BlurTube should now appear in your installed extensions.

Open YouTube and use the BlurTube popup to configure which content should be blurred.

## Development

After making code changes, rebuild the extension:

```bash
npm run build
```

Then:

1. Open `chrome://extensions`.
2. Find **BlurTube**.
3. Click **Reload**.
4. Refresh the YouTube page.

Typical development workflow:

```text
Edit code
→ npm run build
→ Reload BlurTube
→ Refresh YouTube
→ Test
```

## Available Scripts

Start Vite:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

Automatically fix supported lint issues:

```bash
npm run lint:fix
```

Format the project with Prettier:

```bash
npm run format
```

Check formatting without modifying files:

```bash
npm run format:check
```

## How It Works

BlurTube uses a Chrome Manifest V3 content script that runs on YouTube.

User preferences are stored using `chrome.storage.local`.

When a setting is enabled, BlurTube applies a corresponding CSS class to the YouTube page. The content script injects styles that blur only the elements associated with that setting.

For example:

```text
blur-tube-video-details
blur-tube-playlist-items
blur-tube-recommendations
```

The actual YouTube video player is not modified.

## Settings

BlurTube settings are defined in:

```text
src/shared/settings.ts
```

Example:

```ts
export type BlurTubeSettings = {
  blurVideoDetails: boolean;
  blurPlaylistItems: boolean;
  blurRecommendations: boolean;
};
```

Default values are applied when no saved preferences exist.

Any changes made from the BlurTube popup are persisted using Chrome local storage.

## Permissions

BlurTube requires the Chrome `storage` permission:

```json
{
  "permissions": ["storage"]
}
```

This permission is used only to persist BlurTube settings.

The BlurTube content script runs only on:

```text
https://www.youtube.com/*
```

## Privacy

BlurTube operates locally inside the browser.

BlurTube does not:

- collect personal information
- collect browsing history
- track users
- send YouTube activity to external servers
- require an account

All user preferences are stored locally using Chrome storage.

## Limitations

YouTube regularly changes its page structure and internal components.

Because BlurTube targets specific YouTube elements, changes to the YouTube DOM may occasionally require the extension's selectors to be updated.

## Future Improvements

Potential improvements include:

- configurable blur strength
- additional YouTube privacy controls
- support for more YouTube layouts
- automated tests
- improved extension icons and store assets
- Chrome Web Store publishing

## License

This project is licensed under the MIT License.

See the `LICENSE` file for details.
