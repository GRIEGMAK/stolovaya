import React from 'react';
import s from "./../styles/AboutCompany.module.sass"

const AboutCompany = () => {
    return (
        <div className={s.backColor}>
            <div>
                <h2>О компании</h2>
                <div>
                    Сайт «Столовая.РУ» создан компанией «Диалог» для комплексного оснащения предприятий общественного
                    питания любых форматов.
                    Наш многолетний опыт сотрудничества с мировыми лидерами и ведущими российскими производителями
                    пищевого оборудования, мебели, посуды, элементов интерьера позволяют нам реализовать проекты любой
                    сложности.
                    За время работы нами были открыты столовые, кафе, рестораны, магазины розничной торговли, мы
                    участвовали в реконструкции и оснащении школ, больниц, детских садов, войсковых частей. Это
                    позволило нам получить множество рекомендаций и благодарных клиентов. Наша компания является дилером
                    многих отечественных заводов, а также сотрудничает с ведущими зарубежными фабриками по производству
                    технологического и холодильного оборудования.
                    Приоритет компании «Диалог» - оказание полного комплекса услуг при организации предприятий питания,
                    качественное оснащение «под ключ» в кратчайшие сроки.
                    Мы будем рады плодотворному и взаимовыгодному сотрудничеству!
                </div>
                <h2>Комплексный подход</h2>
                <div>
                    Мы предлагаем индивидуальные проектные решения. Наш профессионализм и многолетний опыт, позволяют
                    оказывать полный спектр услуг:
                    <ol>
                        <li>Большой практический опыт проектирования и оснащения позволяет решать все нестандартные
                            задачи и оптимизировать проекты.
                        </li>
                        <li>Широкий выбор современного оборудования и технологических решений.</li>
                        <li>Собственный сервисный центр. Проведение инструктажа и обеспечение беспроблемного ввода в
                            эксплуатацию.
                        </li>
                        <li>Оперативная логистика по всей России.</li>
                        <li>Индивидуальная и оперативная комплектация заказа. Индивидуальный подбор оборудования.</li>
                        <li>Наличие сертификатов и свидетельств СРО, лицензий позволяющих производить работы на
                            различных объектах.
                        </li>
                    </ol>
                </div>
                <div>
                    <a>Проектирование предприятий общественного питания</a>
                    <a>Поставка оборудования, мебели, посуды и инвентаря</a>
                    <a>Монтажные и пуско - наладочные работы</a>
                    <a>Сервисное, гарантийное и после- гарантийное обслуживание</a>
                </div>
            </div>
            <div>
                <h3>Портфолио</h3>
                <div>
                    <div>
                        <img alt="фотка портфолио"/>
                        ГУОВ Космодром "Плесецк" г.Мирный
                    </div>
                    <div>
                        <img alt="фотка портфолио"/>
                        FM Logistic
                    </div>
                    <div>
                        <img alt="фотка портфолио"/>
                        Лицей №15 г.Мытищи
                    </div>
                    <div>
                        <img alt="фотка портфолио"/>
                        Школа г.Красногорск
                    </div>
                    <div>
                        <img alt="фотка портфолио"/>
                        Научно-исследовательский институт скорой помощи имени Н.В.Склифосовского
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2>Cотрудничество с поставщиками</h2>
                    <small>
                        За время работы нами были открыты столовые, кафе, рестораны, магазины розничной торговли, мы
                        участвовали в реконструкции и оснащении школ, больниц, детских садов, войсковых частей.
                        Это позволило нам получить множество рекомендаций и благодарных клиентов.
                        Мы будем рады плодотворному и взаимовыгодному сотрудничеству!
                    </small>
                </div>
                <div className={s.provider}>
                    <div>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                    </div>
                    <div>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                    </div>
                    <div>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                    </div>
                    <div>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                        <img alt="Поставщик"/>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2>Наши клиенты</h2>
                </div>
                <div className={s.ourClients}>
                    <div>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                    </div>
                    <div>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                    </div>
                    <div>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                    </div>
                    <div>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                        <img alt="наш клиент"/>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default AboutCompany;