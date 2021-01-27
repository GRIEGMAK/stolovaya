import React from 'react';
import s from "../../styles/AboutCompany.module.sass"

const Service = () => {
    return (
        <div className={s.backColor}>
            <div>
                <h3>Сервис и ремонт</h3>
                <div>Технологическое оборудование относится к разряду технически сложного оборудования, от
                    функционирования которого напрямую зависит работа на кухне, сохранность продуктов, работа всего
                    заведения. Заводы-изготовители постоянно совершенствуют производимое оборудование, добавляя всё
                    большее количество функций, расширяют ассортимент, что позволяет поварам готовить более сложные,
                    изысканные блюда.
                </div>
                <img alt="строитель"/>
                <button>Подать заявку</button>
            </div>
            <div>
                <div>
                    <h3>Услуги</h3>
                    <ol>
                        <li>
                            <h4>Монтаж</h4>
                            <div>Установка и подключение оборудования, согласно технических требований и норм СНИПа.
                            </div>
                        </li>
                        <li>
                            <h4>Пуско-наладочные работы</h4>
                            <div>настройка, позволяющая отрегулировать работу оборудования.</div>
                        </li>
                        <li>
                            <h4>Диагностика</h4>
                            <div>выезд специалиста для определения неисправности оборудования.</div>
                        </li>
                        <li>
                            <h4>Инструктаж</h4>
                            <div>обучение персонала по эксплуатации оборудования.</div>
                        </li>
                        <li>
                            <h4>Шеф-монтаж</h4>
                            <div>консультирование и сопровождение монтажных работ.</div>
                        </li>
                        <li>
                            <h4>Демонтаж</h4>
                            <div>отключение старого оборудования.</div>
                        </li>
                        <li>
                            <h4>Ремонт</h4>
                            <div>замена деталей и узлов, агрегатов вышедших из строя при эксплуатации.</div>
                        </li>
                        <li>
                            <h4>Гарантийный ремонт</h4>
                            <div>при наличии у Заказчика соответствующий документов.</div>
                        </li>
                        <li>
                            <h4>Сервисное обслуживание</h4>
                            <div>комплекс мероприятий направленных на обеспечение бесперебойной работы оборудования.
                            </div>
                        </li>
                        <li>
                            <h4>Оформление необходимых документов</h4>
                            <div>акты рекламации, техническое заключение, разработка технической документации для
                                монтажа крупных объектов.
                            </div>
                        </li>
                    </ol>
                </div>
                <div>
                    <div>
                        <h3>Прайсы</h3>
                        <ol>
                            <li><a target="_blank" href="/upload/prays_na_montazh.pdf">Монтаж</a></li>
                            <li><a target="_blank" href="/upload/prays_list_na_remont_4.pdf">Ремонт</a></li>
                        </ol>
                    </div>
                    <div>
                        <h3>Договоры</h3>
                        <ol>
                            <li><a target="_blank" href="/upload/dogovor_montazh_demontazh_pnr.pdf">Монтаж</a></li>
                            <li><a target="_blank" href="/upload/dogovor_na_tehnicheskoe_obsluzhivanie.pdf">Обслуживание</a></li>
                        </ol>
                    </div>
                    <div>
                        <h3>Преимущества</h3>
                        <div>при заключении годового договора на обслуживание</div>
                        <ol>
                            <li><h4>Скидки на оборудование и запасные части</h4></li>
                            <li><h4>Бесплатный вызов механика и диагностика оборудования</h4></li>
                            <li><h4>Инструктаж персонала по работе на оборудовании и технической безопасности</h4></li>
                            <li><h4>Бесплатный мелкий ремонт</h4>не требующий запасных частей</li>
                            <li><h4>Техническая поддержка специалистов нашей компании</h4></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div>
                <h3>Высока скорость реагирования!
                    Инженер приедет через 2 часа после вызова.</h3>
                <button>Оставить заявку</button>
                <img alt="Unox2печки"/>
            </div>
            <div>
                <div>
                    Сервисные инженеры нашей компании – проходят регулярное обучение и стажировки на
                    заводах-изготовителях оборудования, что позволяет им быть в курсе всех технических новинок,
                    используемых в современном оборудовании.
                    Сервисный центр «Диалог» авторизован заводами-изготовителями оборудования. Мы решаем простые и
                    технологически сложные задачи, связанные с монтажом, ремонтом и сервисным обслуживанием
                    оборудования. Внимательное и бережное отношение к каждому клиенту, позволило нам создать партнерские
                    отношения со многими бюджетными о рганизациями, корпоративными и частными Заказчиками.
                    Для выстраивания долгосрочных отношений мы предлагаем своим клиентам партнерскую программу по
                    обслуживанию технологического оборудования.
                </div>
            </div>
            <div>
                <form>
                    <h3>Отправить заявку</h3>
                    Отправьте заявку на проектирование объекта и мы перезвоним вам в течении дня, или в указанное вами время.
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
    )
};

export default Service;