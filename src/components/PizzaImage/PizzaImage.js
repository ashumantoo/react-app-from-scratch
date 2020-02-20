import React from 'react';

import classes from './PizzaImage.module.css';
import pizzaImage from '../../assets/8.2 pizza.jpg.jpg';

const PizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={pizzaImage} alt="Pizza" className={classes.PizzaImg} />
    </div>
);

export default PizzaImage;