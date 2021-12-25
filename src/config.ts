const FPS = 30;
const VIDEO_DURATION_IN_SECONDS = 10;
const VIDEO_DURATION_IN_FRAMES = VIDEO_DURATION_IN_SECONDS * FPS;
const VIDEO_WIDTH = 1080;
const VIDEO_HEIGHT = 1920;
const VIDEO_ID = 'IsIsRaining';

export const VIDEO_CONFIG = {
  FPS,
  VIDEO_DURATION_IN_FRAMES,
  VIDEO_WIDTH,
  VIDEO_HEIGHT,
  VIDEO_ID,
}

export const APP_CONFIG = {
  CITY: 'Wroclaw',
  PERSONAL_PAGE_URL: 'https://github.com/Mateusz-Zygadlo',
  WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
}

export const COMPOSITION_CONFIG = {
  VIDEO: {
    BACKGROUND_COLOR: '#cccccc',
    OUTRO_BACKGROUND_COLOR: '#0E0E0E',
  },
  TEXT: {
    FONT_SIZE: {
      SMALL: '26px',
      MEDIUM: '36px',
      LARGE: '75px',
      EXTRA_LARGE: '94px',
    },
    COLOR: {
      REGULAR: '#ffffff',
      ACCENT: '#FF4C4C'
    }
  }
}