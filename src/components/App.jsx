import React from 'react';
import Header from "./Header";
import Top from "./Top";
import MainPart from "./MainPart";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutCompany from "./AboutCompany";
import Portfolio from "./Portfolio";
import Design from "./Design";
import OffersForBuildCompany from "./OffersForBuildCompany";
import Contacts from "./Contacts";
import Service from "./Service";
import TabletFood from "./TabletFood";
import OffersForGovernmentCustomers from "./OffersForGovernmentCustomers";


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
