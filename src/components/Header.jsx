import React from 'react';

const Header = () => {
    return (
        <div>
            <div>
                <a>Компания</a>
                <a>Портфолио</a>
                <a>Проектирование</a>
                <a>Презентация</a>
                <a>Застройщикам</a>
                <a>Гос.заказчикам</a>
                <a>Таблет-питание</a>
                <a>Сервиз</a>
                <a>Контакты</a>
                <a>info@yandex.ru</a>
                <a>8(982)983-28-09</a>
            </div>
            <hr/>
            <div>
                <img alt="Столовая.ру"/>
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
            </div>
            <hr/>
        </div>
    )
};


export default Header;