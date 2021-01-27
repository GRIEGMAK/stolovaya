import React from 'react';
import s from "../../styles/AboutCompany.module.sass"

const Design = () => {
    return (
        <div className={s.backColor}>
            <div>
                <h3>Профессиональное проектирование позволяет оптимизировать бюджет и повысить эффективность предприятия
                    питания!</h3>
                <small>Проектирование – важнейший этап открытия нового, или реконструкции действующего объекта от
                    которого в полной мере зависит его функционирование. Грамотно составленный проект поможет Вам
                    оптимизировать расходы, и увеличить доходы, Вашего заведения. Для наших клиентов мы предоставляем
                    полный спектр услуг по проектированию предприятий общепита и торговли.</small>
            </div>
            <div>
                <img alt="кухня"/>
                <h4>Что включает рабочий проект</h4>
                <ol>
                    <li>Определение концепции работы предприятия питания.</li>
                    <li>Подбор оборудования.</li>
                    <li>Планировочные решения, расстановка оборудования, с определением точек подключения.</li>
                    <li>Согласование с Заказчиком, эксплуатирующей организацией.</li>
                    <li>Раздел ТХ, разделы ОВ, ВК, ЭМ (монтажные схемы).</li>
                    <li>Спецификация и пояснительная записка.</li>
                </ol>
                <button>Заполнить анкету</button>
            </div>
            <div>
                <h3>Наши проекты</h3>

                <div>Трапезный Храм 1 этаж</div>

                <div>Ресторан
                    План расстановки
                </div>
                <div>Столовая.РУ
                    11.11.2015
                </div>
                <div>Пекарня
                    Пекарня
                </div>
                <div>Пиццерия
                    Щелково
                </div>
                <div>Школьная столовая
                    Новое Домодедово
                    01.10.2014
                </div>
                <div>Комбинат питания
                    МФТИ
                    02.02.2016
                </div>
                <div>Бар. Фаст-Фуд
                    Якутск.
                    2 этаж
                </div>
                <div>Офисная столовая
                    Столовая
                    11.11.2015
                </div>
                <div>Касмет
                    Кондитерская
                </div>
                <div>Кафе
                    Кафе
                </div>
                <div>Заводская столовая
                    ЛЗМА 2 этаж
                    25.04.2014
                </div>
            </div>
            <div>
                <h4>При заказе оборудования от 1 000 000 руб.</h4>
                <h3>Рабочий проект бесплатно!</h3>
                Заполните заявку и мы перезвоним вам в течении дня!
                <button>Отправить заявку</button>
                <img alt="печка"/>
            </div>
            <div>
                <h2>Так же мы проектируем с нуля!</h2>
                Работы по проектированию делятся на 2 этапа. Предпроектные работы и рабочий проект. В данные этапы
                входит: Определение концепции работы предприятия питания и дизайн проект. После осуществляется подбор
                оборудования, планировочные решения, расстановка оборудования, с определением точек подключения.
                Согласование с Заказчиком, эксплуатирующей организацией, а так же раздел ТХ, разделы ОВ, ВК, ЭМ
                (монтажные схемы), спецификация и пояснительная записка. По дополнительной договорённости возможно
                проведение всех инженерных работ, согласно выполненным проектам.
                <h2>Виды работ:</h2>
                <ol>
                    <li>Расстановка оборудования в существующих помещениях предприятия питания.</li>
                    <li>Расстановка оборудования в существующих помещениях предприятия питания на существующие
                        инженерные сети.
                    </li>
                    <li>Расстановка оборудования с планировкой помещений.</li>
                    <li>Расстановка оборудования с планировкой помещений и привязками оборудования к инженерным сетям.</li>
                    <li>Выполнение раздела проекта «ТХ».</li>
                    <li>Расстановка оборудования по согласованной планировке помещения с расстановкой оборудования.</li>
                    <li>Расстановка оборудования по согласованной планировке помещений с расстановкой оборудования и
                        привязками к инженерным сетям.</li>
                    <li>Выполнение раздела "ТХ" по утверждённому заказчиком проекту.</li>
                </ol>
            </div>
            <div>
                <div>
                    <form>
                        <h3>Отправить заявку</h3>
                        Отправьте заявку на проектирвоание объекта и мы перезвоним вам в течении дня, или в указанное вами время.
                        <div>
                            Имя
                            <input type="text" />
                        </div>
                        <div>
                            Фамилия
                            <input type="text" />
                        </div>
                        <div>
                            Удобное время
                            <input type="text" />
                        </div>
                        <div>
                            Комментарий
                            <textarea placeholder="Комментарий..." />
                        </div>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Design;