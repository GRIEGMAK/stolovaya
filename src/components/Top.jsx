import React from 'react';
import s from "./../styles/Top.module.sass"
import {NavLink} from "react-router-dom";

const Top = () => {
    return (
        <div className={s.top}>
            <div>
                <div>
                    <h3>Информация</h3>

                    <NavLink to="/o-kompanii">Компания</NavLink>
                    <NavLink to="/oborudovanie-dlya-pishhebloka">Портфолио</NavLink>
                    <NavLink to="/proektirovanie">Проектирование</NavLink>
                    <NavLink to="/predlozheniya/restoranam">Ресторанам</NavLink>
                    <NavLink to="/predlozheniya/dlya-stroitelnykh-kompaniy">Застройщикам</NavLink>
                    <NavLink to="/predlozheniya/gosydarstvenym_zakazchikam">Гос.заказчикам</NavLink>
                    <NavLink to="/predlozheniya/tablet-pitanie">Таблет-питание</NavLink>
                    <NavLink to="/servis-i-remont">Сервис</NavLink>
                    <NavLink to="/kontakty">Контакты</NavLink>
                </div>
                <div>
                    <h3>Оборудование</h3>
                    <a>Тепловое</a>
                    <a>Холодильное</a>
                    <a>Электромеханическое</a>
                    <a>Посудомоечное</a>
                    <a>Линии раздачи</a>
                    <a>Нейтральное</a>
                    <a>Для фаст фуда</a>
                    <a>Для залов</a>
                    <a>Вспомогательное</a>
                    <a>Для магазинов</a>
                </div>
                <div>
                    <h3>Предложения</h3>
                    <a>Детским садам и школам</a>
                    <a>Для кондитерских</a>
                    <a>Для пиццерий</a>
                    <a>Для магазинов</a>
                    <a>Для буфетов</a>
                    <a>Для пищеблоков</a>
                    <a>Для кафе</a>
                    <a>Для горячих цехов</a>
                    <a>Все предложения</a>
                </div>
                <div>
                    <h3>Контакты</h3>

                    <div>8 495 790-72-05</div>
                    <div>8 800 333-88-31</div>
                    <div>звонок бесплатный</div>
                    <div>Пн-Пт</div>
                    <div>09:00 до 18:00</div>
                    <div>info@stolovay.ru</div>
                    <div>109428, Москва,</div>
                    <div>Большая Семеновская 43с2</div>
                </div>

            </div>
            <div>
                <img alt="Столовая.ру Создание оптимальных пищеблоков"/>
                <img alt="Сделано с love от request=t.me/UXUI_design" />
            </div>
        </div>
    )
};


export default Top;
