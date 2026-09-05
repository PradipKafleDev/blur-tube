import { useEffect, useState } from "react";
import {EyeOff, ListVideo, PanelRight, UserRound} from "lucide-react";

import {
  DEFAULT_SETTINGS,
  SETTINGS_KEY,
  type BlurTubeSettings,
} from "../shared/settings";

import "./App.css";
import Setting from "./components/Setting.tsx";

function App() {
  const [settings, setSettings] =
      useState<BlurTubeSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    chrome.storage.local.get(SETTINGS_KEY).then((result) => {
      setSettings({
        ...DEFAULT_SETTINGS,
        ...(result[SETTINGS_KEY] as Partial<BlurTubeSettings> | undefined),
      });
    });
  }, []);

  const updateSetting = async (
      key: keyof BlurTubeSettings,
      value: boolean,
  ) => {
    const updatedSettings: BlurTubeSettings = {
      ...settings,
      [key]: value,
    };

    setSettings(updatedSettings);

    await chrome.storage.local.set({
      [SETTINGS_KEY]: updatedSettings,
    });
  };

  const enabled = Object.values(settings).some(Boolean);

  return (
      <main className="popup">
        <header className="header">
          <div className="logo">
            <EyeOff size={22} />
          </div>

          <div>
            <h1>BlurTube</h1>
            <p>Hide distracting YouTube content.</p>
          </div>
        </header>

        <section className="status-card">
          <div>
            <strong>
              {enabled ? "Privacy mode is on" : "Privacy mode is off"}
            </strong>

            <span>
            {enabled
                ? "Your selected content is blurred."
                : "Everything is visible normally."}
          </span>
          </div>
        </section>

          <Setting
              icon={<UserRound size={18} />}
              title="Channel thumbnail"
              description="Blur the channel image below the video"
              enabled={settings.blurChannelThumbnail}
              onChange={(value) => updateSetting("blurChannelThumbnail", value)}
          />

          <Setting
              icon={<ListVideo size={18} />}
              title="Playlist videos"
              description="Blur playlist thumbnails and titles"
              enabled={settings.blurPlaylistItems}
              onChange={(value) => updateSetting("blurPlaylistItems", value)}
          />

          <Setting
              icon={<PanelRight size={18} />}
              title="Recommended videos"
              description="Blur recommended thumbnails and titles"
              enabled={settings.blurRecommendations}
              onChange={(value) => updateSetting("blurRecommendations", value)}
          />
      </main>
  );
}

export default App;