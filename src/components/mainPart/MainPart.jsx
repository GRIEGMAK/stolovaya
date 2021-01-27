import React from 'react';
import s from "../../styles/MainPart.module.sass"

const MainPart = () => {
    return (
        <div className={s.mainPart}>
            <div>
                <div>
                    <h3>Целевые предложения ></h3>
                    <a>Государственным заказчикам ></a>
                    <a>Кафе, барам, ресторанам ></a>
                    <a>Детским садам и школам ></a>
                    <a> Таблет-питание для больниц ></a>
                    <a>Оборудование для кондитерских ></a>
                    <a>Оборудование для пиццерии ></a>
                    <a>Для малого бизнеса ></a>
                    <a>Оборудование для мини кафе ></a>
                    <a>Все предложения ></a>
                </div>
                <div>
                    Слайдер
                    <h3>Комбинат питания МФТИ</h3>
                    <div>Проектирование и комплексное снабжение</div>
                    <img alt="бар"/>
                    <button>Подробнее</button>
                </div>
                <div>
                    <div>Самые низкие цены</div>
                    <h4>Распродажа</h4>
                    <small>Каталог распродаж ></small>
                </div>
            </div>
            <div>
                <div><img alt="Abat"/></div>
                <div><img alt="Hicold"/></div>
                <div><img alt="POLAIR"/></div>
                <div><img alt="Simeco"/></div>
                <div><img alt="Rada"/></div>
                <div>Все бренды</div>
            </div>
            <div>
                <div>
                    <div><h4>Специальные предложения</h4></div>
                    <div>
                        <div>
                            Льдогенератор чешуйчатого льда ЛГ-620Ч-02
                            357 000 руб.
                        </div>
                        <div>
                            Льдогенератор чешуйчатого льда ЛГ-250Ч-02
                            229 900 руб.
                        </div>
                        <div>
                            Льдогенератор кубикового льда ЛГ-37/15К-01
                            73 000 руб.
                        </div>
                    </div>
                </div>
                <div>
                    Слайдер
                    <img alt="каска"/>
                    <h3>Сервис</h3>
                    <div>Гарантийный ремонт, монтажи и т.д.</div>
                    <a>Подробнее ></a>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
};


export default MainPart;