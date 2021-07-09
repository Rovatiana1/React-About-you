import React from 'react';

const Profil = () => {
    return (
        <div className='profile'>
            <div className='container'>
                <div className='modal'>
                    <img src='./img/rova.jpg' alt='rova' />
                    <h2>RAMAROSON</h2>
                    <h3>Nambinintsoa Rovatiana</h3>
                    <h4>IGGLIA 3</h4>
                    <p className='para'>Célibataire</p>
                    <p className='para'>Malagasy</p>
                    <p className='para'>22 ans</p>
                    <p id='email'>E-mail : rovatiana1@gmail.com</p>
                    <p id='contact'>contact: 032 91 365 27 | 034 08 971 32</p>
                    <p id='adress'>Adresse : Lot VA 33 CE tsiadana</p>
                    <div className='presentation'>
                        <p><span>Nom du père : </span> RAMAROKOTO Max Clément Faly Tiana</p>
                        <p><span>Nom de la mère : </span> RASAONDRANIRINA Maria Yvette</p>
                        <p>J'ai quatre (4) frères</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;