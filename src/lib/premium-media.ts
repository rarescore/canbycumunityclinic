export type MediaTier = "mobile" | "desktop";

export type PremiumSource = {
  mp4?: string;
  poster: string;
  width: number;
  height: number;
};

export function mediaTier(width = typeof window === "undefined" ? 1440 : window.innerWidth): MediaTier {
  return width < 768 ? "mobile" : "desktop";
}

export const PHONE_FILM: PremiumSource = {
  mp4: "/media/hero-phone.mp4?v=4",
  poster: "/media/hero-phone-poster.jpg?v=4",
  width: 540,
  height: 960,
};

export const DESK_STILL: PremiumSource = {
  poster: "/media/hero-desk.webp",
  width: 1672,
  height: 941,
};

export const PHONE_POSTER_PRELOAD = PHONE_FILM.poster;
export const DESK_POSTER_PRELOAD = DESK_STILL.poster;
