import "normalize.css";
import "./index.scss";
import createMenu from '../../components/menu/menu';

var menu = createMenu(['Главная', 'Блог', 'Контакты'], 'menu');
document.body.appendChild(menu);
console.log("index.js");
console.log($);