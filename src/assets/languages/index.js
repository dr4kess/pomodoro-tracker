import am from './jsons/am.json';
import ru from './jsons/ru.json';
import en from './jsons/en.json';

const languages = {
  en,
  ru,
  am,
};

const getActiveLanguages = (lang) => languages[lang] || languages['en'];

export default getActiveLanguages;
