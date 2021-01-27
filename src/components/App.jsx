import React from 'react';
import Header from "./Header";
import Top from "./Top";
import MainPart from "./mainPart/MainPart";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutCompany from "./mainPart/AboutCompany";
import Portfolio from "./mainPart/Portfolio";
import Design from "./mainPart/Design";
import OffersForBuildCompany from "./subComponent/OffersForBuildCompany";
import Contacts from "./mainPart/Contacts";
import Service from "./mainPart/Service";
import TabletFood from "./subComponent/TabletFood";
import OffersForGovernmentCustomers from "./subComponent/OffersForGovernmentCustomers";


const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <MainPart/>
                </Route>
                <Route exact path="/o-kompanii">
                    <AboutCompany />
                </Route>
                <Route exact path="/oborudovanie-dlya-pishhebloka">
                    <Portfolio />
                </Route>
                <Route exact path="/proektirovanie">
                    <Design/>
                </Route>
                <Route exact path="/predlozheniya/dlya-stroitelnykh-kompaniy">
                    <OffersForBuildCompany />
                </Route>
                <Route exact path="/predlozheniya/gosydarstvenym_zakazchikam">
                    <OffersForGovernmentCustomers/>
                </Route>
                <Route exact path="/predlozheniya/tablet-pitanie">
                    <TabletFood/>
                </Route>
                <Route exact path="/servis-i-remont">
                    <Service />
                </Route>
                <Route exact path="/kontakty">
                    <Contacts />
                </Route>
            </Switch>
            <Top/>
        </BrowserRouter>
    )
};

export default App;
/*https://codepen.io/hartzis/pen/VvNGZP*/
/*http://fh7922mg.bget.ru/articles/file-api-in-javascript/file-api-in-javascript.html*/
