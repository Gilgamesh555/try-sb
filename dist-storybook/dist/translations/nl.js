import {
  registerTranslation
} from "../chunks/chunk.75KWNL5E.js";
import "../chunks/chunk.TFZ3PZ4B.js";
import "../chunks/chunk.DJOAQ4JU.js";

// src/translations/nl.ts
var translation = {
  $code: "nl",
  $name: "Nederlands",
  $dir: "ltr",
  carousel: "Carrousel",
  clearEntry: "Invoer wissen",
  decreaseValue: "Waarde verlagen",
  increaseValue: "Verhoog de waarde",
  close: "Sluiten",
  copy: "Kopi\xEBren",
  currentValue: "Huidige waarde",
  goToSlide: (slide, count) => `Ga naar slide ${slide} van ${count}`,
  hidePassword: "Verberg wachtwoord",
  loading: "Bezig met laden",
  nextSlide: "Volgende dia",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Geen optie geselecteerd";
    if (num === 1)
      return "1 optie geselecteerd";
    return `${num} opties geselecteerd`;
  },
  previousSlide: "Vorige dia",
  progress: "Voortgang",
  remove: "Verwijderen",
  resize: "Formaat wijzigen",
  scrollToEnd: "Scroll naar einde",
  scrollToStart: "Scroll naar begin",
  selectAColorFromTheScreen: "Selecteer een kleur van het scherm",
  showPassword: "Laat wachtwoord zien",
  slideNum: (slide) => `Schuif ${slide}`,
  toggleColorFormat: "Wissel kleurnotatie"
};
registerTranslation(translation);
var nl_default = translation;
export {
  nl_default as default
};
//# sourceMappingURL=nl.js.map
