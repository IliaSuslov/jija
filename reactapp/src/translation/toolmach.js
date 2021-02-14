import RU from "./ru-RU";

const Dictionary = {
  "ru-RU": RU,
}
export const translate = (s = "") => {
  if (s==="") return ""
  const lang = navigator.language;
  if (!Dictionary[lang] || !Dictionary[lang][s]) {
    console.error("Please add message to " + lang + '.js  "' + s + '":"",')
    return s;
  }
  return Dictionary[lang][s];
}
export default translate;
