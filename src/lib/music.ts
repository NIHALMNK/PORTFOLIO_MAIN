import { Howl } from "howler";

// Guard against duplicate instantiation during development Hot Module Replacement (HMR) / Fast Refresh
let ambientMusic: Howl | null = null;

if (typeof window !== "undefined") {
  const globalObj = window as any;
  if (globalObj.__ambientMusic) {
    ambientMusic = globalObj.__ambientMusic;
  }
}

export const getAmbientMusic = (): Howl | null => {
  if (typeof window === "undefined") return null;

  if (!ambientMusic) {
    ambientMusic = new Howl({
      src: ["/music/ambient.mp3"],
      loop: true,
      volume: 0,
      html5: true,
      preload: true,
    });
    
    // Attach to window to guarantee persistence across Fast Refresh re-imports
    const globalObj = window as any;
    globalObj.__ambientMusic = ambientMusic;
  }

  return ambientMusic;
};

// Global playback preferences and UI state subscription hooks
let isMusicEnabled = false;
const listeners = new Set<(state: boolean) => void>();

if (typeof window !== "undefined") {
  const saved = localStorage.getItem("music-enabled");
  isMusicEnabled = saved === "true";

  // Handle browser autoplay policy restrictions gracefully
  if (isMusicEnabled) {
    const handleFirstUserInteraction = () => {
      const music = getAmbientMusic();
      if (isMusicEnabled && music) {
        if (!music.playing()) {
          music.play();
          music.fade(0, 0.2, 1200);
        }
        window.removeEventListener("click", handleFirstUserInteraction);
        window.removeEventListener("touchstart", handleFirstUserInteraction);
      }
    };

    window.addEventListener("click", handleFirstUserInteraction);
    window.addEventListener("touchstart", handleFirstUserInteraction);
  }
}

export const subscribeToMusicState = (listener: (state: boolean) => void) => {
  listeners.add(listener);
  listener(isMusicEnabled);
  return () => {
    listeners.delete(listener);
  };
};

const notifyStateChange = () => {
  listeners.forEach((listener) => listener(isMusicEnabled));
};

export const getMusicPlayState = () => isMusicEnabled;

export const toggleMusic = () => {
  const music = getAmbientMusic();
  if (!music) return false;

  if (isMusicEnabled) {
    isMusicEnabled = false;
    localStorage.setItem("music-enabled", "false");
    
    // Smooth cinematic fade-out before pausing
    music.fade(music.volume(), 0, 1200);
    setTimeout(() => {
      if (!isMusicEnabled && music) {
        music.pause();
      }
    }, 1200);
  } else {
    isMusicEnabled = true;
    localStorage.setItem("music-enabled", "true");
    
    // Safe playback guard to prevent duplicate playback instances
    if (!music.playing()) {
      music.play();
    }
    music.fade(music.volume(), 0.2, 1200);
  }

  notifyStateChange();
  return isMusicEnabled;
};
