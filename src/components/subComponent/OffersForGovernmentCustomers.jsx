import React from 'react';
import s from "../../styles/AboutCompany.module.sass";
import SubPortfolio from "../PartComponents/Portfolio";

const OffersForGovernmentCustomers = () => {
    return (
        <div className={s.backColor}>
            <div>
                <h3>Государственным заказчикам</h3>
                <div>Работа на рынке государственныз закупок — один из приоритетов нашей компании. Важнейшим фактов
                    успеха работы с государственным заказчиком является понимание специфики на каждом этапе, от
                    формирования потребности до исполнения государственных контрактов. В нашей компании собрана команда
                    профессионалов в области закупок, что позволяет нам занимать лидирующие позиции в данном сегменте
                    рынка.
                </div>
            </div>
            <div>
                <div>
                    <h3>Подбор оборудования</h3>
                    <div>С указанием возможных параметров</div>
                    <img alt="печки" />
                </div>
                <div>
                    <h3>Наши возможности</h3>
                    <div>Возможности нашей компании позволяют параллельно исполнять десятки контрактов. На нашем счету сотни успешно выполненных государственных контрактов, а выполнение государственного оборонного заказа позволило нашей компании стать основным поставщиком технологического оборудования продовольственной службы для внутренних войск МВД России.</div>
                    <img alt="герб" />
                </div>
                <div>
                    <h3>Выезд специалиста</h3>
                    <div>Определение объема работ и сроков их исполнения </div>
                    <img alt="линейка" />
                </div>
                <div>
                    <h3>Ответсвенность за результат</h3>
                    <div>Исполнение обязательств с учетом условий и сроков, предусмотренных контрактом, а также внутренним регламентом заказчика. Внимательная работа с документацией. </div>
                    <img alt="" />
                </div>
                <div>
                    <h3>Опыт решения нестандартных задач</h3>
                    <div>Мы учитываем все пожелания заказчика, требования законов и специфики государственных торгов. </div>
                    <img alt="" />
                </div>
                <div>
                    <h3>Сметный расчет, проектирование</h3>
                    <img alt="улитка" />
                </div>
                <div>
                    <h3>Работа по 44 и 223 федеральным законам</h3>
                    <div>Участие в любых процедурах на всех госуд-ных и коммерческих площадках и на портале поставщиков. Многолетний опыт работы с государственными корпорациями, а также в конкурентных торгах и переговорах строительных компаний и ритейлеров.</div>
                    <img alt="" />
                </div>
                <div>
                    <h3>Предоставление всей технической докум-ии на оборудование, помощь специалиста</h3>
                    <div> Составление документации закупочных спецификаций и технического задания, с учетом спецификации оборудования </div>
                    <img alt="" />
                </div>
            </div>
            <SubPortfolio />
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

export default OffersForGovernmentCustomers;