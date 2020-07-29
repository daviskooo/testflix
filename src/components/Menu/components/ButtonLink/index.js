import React from 'react';

function ButtonLink(props) {
    console.log(props)
    return(
        // Definindo propriedades no componentes.
        <a href={props.href} className={props.className}>
            {props.children}
        </a>

    );
}

export default ButtonLink;