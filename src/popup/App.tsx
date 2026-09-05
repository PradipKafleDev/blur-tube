import { useEffect, useState } from "react";
import {
  ListVideo,
  PanelRight,
  UserRound,
} from "lucide-react";

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

  return (
      <main className="popup">
        <header className="header">
          <img
              src="/icons/icon48.png"
              alt="BlurTube"
              className="logo"
          />

          <div className="header-content">
            <h1>BlurTube</h1>
            <p>A cleaner, more focused YouTube experience</p>
          </div>
        </header>

        <p className="section-title">
          Privacy Controls
        </p>

        <div className="settings">
          <Setting
              icon={<UserRound size={18} />}
              title="Blur video details"
              description="Title, channel name and avatar"
              enabled={settings.blurVideoDetails}
              onChange={(value) => updateSetting("blurVideoDetails", value)}
          />

          <Setting
              icon={<ListVideo size={18} />}
              title="Blur playlist videos"
              description="Thumbnails and titles"
              enabled={settings.blurPlaylistItems}
              onChange={(value) =>
                  updateSetting("blurPlaylistItems", value)
              }
          />

          <Setting
              icon={<PanelRight size={18} />}
              title="Blur recommended videos"
              description="Thumbnails and titles"
              enabled={settings.blurRecommendations}
              onChange={(value) =>
                  updateSetting("blurRecommendations", value)
              }
          />
        </div>

        <footer className="footer">
          <strong>Your video. Your focus.</strong>
          <span>Blur the noise. Enjoy what you watch.</span>
        </footer>
      </main>
  );
}

export default App;