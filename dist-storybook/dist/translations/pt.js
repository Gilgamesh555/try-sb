import {
  registerTranslation
} from "../chunks/chunk.75KWNL5E.js";
import "../chunks/chunk.TFZ3PZ4B.js";
import "../chunks/chunk.DJOAQ4JU.js";

// src/translations/pt.ts
var translation = {
  $code: "pt",
  $name: "Portugu\xEAs",
  $dir: "ltr",
  carousel: "Carrossel",
  clearEntry: "Limpar entrada",
  decreaseValue: "Diminuir valor",
  increaseValue: "Aumentar valor",
  close: "Fechar",
  copy: "Copiar",
  currentValue: "Valor atual",
  goToSlide: (slide, count) => `V\xE1 para o slide ${slide} de ${count}`,
  hidePassword: "Esconder a senha",
  loading: "Carregando",
  nextSlide: "Pr\xF3ximo slide",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Nenhuma op\xE7\xE3o selecionada";
    if (num === 1)
      return "1 op\xE7\xE3o selecionada";
    return `${num} op\xE7\xF5es selecionadas`;
  },
  previousSlide: "Slide anterior",
  progress: "Progresso",
  remove: "Remover",
  resize: "Mudar o tamanho",
  scrollToEnd: "Rolar at\xE9 o final",
  scrollToStart: "Rolar at\xE9 o come\xE7o",
  selectAColorFromTheScreen: "Selecionar uma cor da tela",
  showPassword: "Mostrar senhaShow password",
  slideNum: (slide) => `Diapositivo ${slide}`,
  toggleColorFormat: "Trocar o formato de cor"
};
registerTranslation(translation);
var pt_default = translation;
export {
  pt_default as default
};
//# sourceMappingURL=pt.js.map
