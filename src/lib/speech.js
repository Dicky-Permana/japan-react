export const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window;

function pickJapaneseVoice() {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => v.lang === 'ja-JP') || voices.find((v) => v.lang.startsWith('ja'));
}

/** Membacakan teks Jepang memakai suara bawaan peramban (Web Speech API). */
export function speak(text) {
  if (!canSpeak || !text) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ja-JP';
  utter.rate = 0.8;
  const voice = pickJapaneseVoice();
  if (voice) utter.voice = voice;
  synth.speak(utter);
}
