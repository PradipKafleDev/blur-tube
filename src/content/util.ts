import {CLASS_NAMES} from "./content.ts";

export const getVideoDetailsStyles = () => `
  html.${CLASS_NAMES.blurVideoDetails}
    ytd-watch-metadata h1,

  html.${CLASS_NAMES.blurVideoDetails}
    ytd-watch-metadata h1 yt-formatted-string,

  html.${CLASS_NAMES.blurVideoDetails}
    ytd-video-owner-renderer #avatar img,

  html.${CLASS_NAMES.blurVideoDetails}
    ytd-video-owner-renderer yt-img-shadow img,

  html.${CLASS_NAMES.blurVideoDetails}
    ytd-video-owner-renderer #channel-name,

  html.${CLASS_NAMES.blurVideoDetails}
    ytd-video-owner-renderer ytd-channel-name {
    filter: blur(20px) !important;
  }
`;

export const getPlaylistStyles = () => `
  html.${CLASS_NAMES.blurPlaylistItems}
    ytd-playlist-panel-video-renderer ytd-thumbnail img,

  html.${CLASS_NAMES.blurPlaylistItems}
    ytd-playlist-panel-video-renderer yt-thumbnail-view-model img,

  html.${CLASS_NAMES.blurPlaylistItems}
    ytd-playlist-panel-video-renderer #video-title {
    filter: blur(20px) !important;
  }
`;

export const getRecommendationStyles = () => `
  html.${CLASS_NAMES.blurRecommendations}
    ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer ytd-thumbnail img,

  html.${CLASS_NAMES.blurRecommendations}
    ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer yt-thumbnail-view-model img,

  html.${CLASS_NAMES.blurRecommendations}
    ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer #video-title,

  html.${CLASS_NAMES.blurRecommendations}
    ytd-watch-next-secondary-results-renderer yt-lockup-view-model yt-thumbnail-view-model img,

  html.${CLASS_NAMES.blurRecommendations}
    ytd-watch-next-secondary-results-renderer yt-lockup-view-model .yt-lockup-metadata-view-model__title,

  html.${CLASS_NAMES.blurRecommendations}
    ytd-watch-next-secondary-results-renderer yt-lockup-view-model h3 {
    filter: blur(20px) !important;
  }
`;
