/**
 * he esarrollado este proyecto siguiendo las instrucciones proporcionadas, apoyandome en el tutorial/video facilitado por la academia
 * ademas he adaptado y actualizado algunas partes del codigo para utilizar librerias mas recientes y optimizadas, 
 * en lugar de las versiones mostradas en el material original, asi aseguraba la compatibilidad y el buen funcionamiento del contador que estaba creando.
 * Anyadir que he indagado y buscado todo lo posible para poder importar la libreria FontAwesome de la mejor manera y sin tener que ejecutar nada en la 
 * terminal y no de errores y porblemas en la ejecucion. El unico erro observado en la consola es que el codigo y la informacion no se guarda en la api
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import 'bootstrap';
import './icons.js';
import '../styles/index.css';

// importo FontAwesome para poder renderizar el icono del reloj
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number.isRequired,
    digitThree: PropTypes.number.isRequired,
    digitTwo: PropTypes.number.isRequired,
    digitOne: PropTypes.number.isRequired
};

let counter = 0;

const updateCounter = () => {
    const four = Math.floor(counter / 1000);
    const three = Math.floor((counter / 100) % 10);
    const two = Math.floor((counter / 10) % 10);
    const one = Math.floor(counter % 10);

    counter++;

    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
        document.querySelector('#app')
    );
};

setInterval(updateCounter, 1000);
