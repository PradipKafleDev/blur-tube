/**
 * User-configurable BlurTube privacy settings.
 *
 * Each option controls which section of the YouTube watch page
 * should be blurred.
 */
export type BlurTubeSettings = {
  /** Blur the current video's title, channel name, and channel avatar. */
  blurVideoDetails: boolean;

  /** Blur thumbnails and titles in the playlist or queue panel. */
  blurPlaylistItems: boolean;

  /** Blur thumbnails and titles for recommended videos. */
  blurRecommendations: boolean;
};

/**
 * Default BlurTube settings used when no saved preferences exist.
 *
 * All privacy controls are disabled by default so YouTube remains
 * unchanged until the user explicitly enables a setting.
 */
export const DEFAULT_SETTINGS: BlurTubeSettings = {
  blurVideoDetails: false,
  blurPlaylistItems: false,
  blurRecommendations: false,
};

/** Chrome local storage key used to persist BlurTube settings. */
export const SETTINGS_KEY = "settings";
