// ============================================
// SINGLE SOURCE OF TRUTH FOR ALL SITE IMAGES
// ============================================
// When a real photo arrives:
//   1. Drop it in /public/photos/
//   2. Change ONLY that one line below (PLACEHOLDER → "/photos/filename.jpg")
// No component edits ever needed. That's the whole point.

const PLACEHOLDER = "https://placehold.co/600x600/ffd700/081A33?text=Coming+Soon";

export const images = {
  // --- "Why Choose Us" section (replacing the 3 emojis) ---
  whyChooseUs: {
    realIngredients: PLACEHOLDER, // → "/photos/fresh-fruit.jpg"
    familyOwned:     PLACEHOLDER, // → "/photos/family.jpg"
    communityFirst:  PLACEHOLDER, // → "/photos/stand-event.jpg"
  },

  // --- Drink menu (all 11) ---
  drinks: {
    ogOriginal:       PLACEHOLDER, // → "/photos/og-original.jpg"
    laFresa:          PLACEHOLDER, // → "/photos/la-fresa.jpg"
    blueDream:        PLACEHOLDER, // → "/photos/blue-dream.jpg"
    berryBabe:        PLACEHOLDER, // → "/photos/berry-babe.jpg"
    blackberryBaby:   PLACEHOLDER, // → "/photos/blackberry-baby.jpg"
    pickleLicious:    PLACEHOLDER, // → "/photos/pickle-licious.jpg"
    strawberryCream:  PLACEHOLDER, // → "/photos/strawberry-cream.jpg"
    pinaLoca:         PLACEHOLDER, // → "/photos/pina-loca.jpg"
    cucumberCutie:    PLACEHOLDER, // → "/photos/cucumber-cutie.jpg"
    sandiaSweetie:    PLACEHOLDER, // → "/photos/sandia-sweetie.jpg"
    limonadaPreparada:PLACEHOLDER, // → "/photos/limonada-preparada.jpg"
  },
};
