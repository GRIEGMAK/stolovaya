import React from 'react';
import s from "./../styles/Header.module.sass"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <NavLink to="/o-kompanii">Компания</NavLink>
                <NavLink to="/oborudovanie-dlya-pishhebloka">Портфолио</NavLink>
                <NavLink to="/proektirovanie">Проектирование</NavLink>
                <a>Презентация</a>
                <NavLink to="/predlozheniya/dlya-stroitelnykh-kompaniy">Застройщикам</NavLink>
                <NavLink to="/predlozheniya/gosydarstvenym_zakazchikam">Гос.заказчикам</NavLink>
                <NavLink to="/predlozheniya/tablet-pitanie">Таблет-питание</NavLink>
                <NavLink to="/servis-i-remont">Сервис</NavLink>
                <NavLink to="/kontakty">Контакты</NavLink>
                <a>info@yandex.ru</a>
                <a>8(982)983-28-09</a>
            </div>
            <hr/>
            <div>
                <NavLink to="/"><img alt="Столовая.ру"/></NavLink>
                <select>
                    <option>Все</option>
                    <option>Весовое</option>
                    <option>Для магазинов</option>
                    <option>Для обеденных залов</option>
                    <option>Нейтральное</option>
                    <option>Для бара</option>
                    <option>Для фаст-фуд</option>
                    <option>Посудомоечное</option>
                    <option>Тепловое</option>
                    <option>Термоподносы</option>
                    <option>Хлебопекарное</option>
                    <option>Холодильное</option>
                    <option>Электромеханическое</option>
                </select>
                <input type="text"/>
                <button>Поиск</button>
                <a>Мы на портале поставщиков</a>
                <button>корзина: 0 руб</button>
            </div>
            <hr/>
            <div>
                <small>
                    <a>Тепловое</a>
                    <a>Холодильное</a>
                    <a>Электромеханическое</a>
                    <a>Посудомоечное</a>
                    <a>Хлебопекарное</a>
                    <a>Линии раздачи</a>
                    <a>Нейтральное</a>
                    <a>Для фаст фуда</a>
                    <a>Для залов</a>
                    <a>Вспомогательное</a>
                    <a>Для магазинов</a>
                </small>
            </div>
            <hr/>
        </div>
    )
};


export default Header;