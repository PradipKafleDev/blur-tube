import {
    DEFAULT_SETTINGS,
    SETTINGS_KEY,
    type BlurTubeSettings,
} from "../shared/settings";
import {getPlaylistStyles, getRecommendationStyles, getVideoDetailsStyles} from "./util.ts";

const STYLE_ID = "blur-tube-styles";

export const CLASS_NAMES = {
    blurChannelThumbnail: "blur-tube-channel-thumbnail",
    blurPlaylistItems: "blur-tube-playlist-items",
    blurRecommendations: "blur-tube-recommendations",
} satisfies Record<keyof BlurTubeSettings, string>;

const addStyles = () => {
    if (document.getElementById(STYLE_ID)) {
        return;
    }

    const style = document.createElement("style");

    style.id = STYLE_ID;

    style.textContent = [
        getVideoDetailsStyles(),
        getPlaylistStyles(),
        getRecommendationStyles(),
    ].join("\n");

    document.documentElement.appendChild(style);
};
const applySettings = (settings: BlurTubeSettings) => {
    Object.entries(CLASS_NAMES).forEach(([key, className]) => {
        document.documentElement.classList.toggle(
            className,
            settings[key as keyof BlurTubeSettings],
        );
    });
};

const loadSettings = async () => {
    const result = await chrome.storage.local.get(SETTINGS_KEY);

    const settings: BlurTubeSettings = {
        ...DEFAULT_SETTINGS,
        ...(result[SETTINGS_KEY] as Partial<BlurTubeSettings> | undefined),
    };

    applySettings(settings);
};

addStyles();
void loadSettings();

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== "local") return;

    const settingsChange = changes[SETTINGS_KEY];

    if (!settingsChange) return;

    const settings: BlurTubeSettings = {
        ...DEFAULT_SETTINGS,
        ...(settingsChange.newValue as Partial<BlurTubeSettings> | undefined),
    };

    applySettings(settings);
});