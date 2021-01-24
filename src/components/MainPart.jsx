import React from 'react';
import s from "./../styles/MainPart.module.sass"
import Card from "./Card";

const MainPart = () => {
    return (
        <div className={s.mainPart}>
            MainPart
            <Card />
        </div>
    )
};


export default MainPart;