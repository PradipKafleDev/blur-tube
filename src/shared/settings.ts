/**
 * User-configurable BlurTube privacy settings.
 * Each option controls which area of the YouTube watch page is blurred.
 */
export type BlurTubeSettings = {
    /** Blur the current video's title, channel name, and channel avatar. */
    blurChannelThumbnail: boolean;

    /** Blur thumbnails and titles in the playlist / queue panel. */
    blurPlaylistItems: boolean;

    /** Blur thumbnails and titles for recommended videos. */
    blurRecommendations: boolean;
};

/** Default BlurTube settings used when no saved preference exists. */
export const DEFAULT_SETTINGS: BlurTubeSettings = {
    blurChannelThumbnail: false,
    blurPlaylistItems: false,
    blurRecommendations: false,
};

/** Key used to persist BlurTube settings in Chrome local storage. */
export const SETTINGS_KEY = "settings";