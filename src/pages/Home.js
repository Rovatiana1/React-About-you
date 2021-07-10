import React from 'react'

const Home = () => {
    return(
        <div className='home'>
            <div className='home-header'>
                <h1>A propos de Rovatiana</h1>
            </div>
            <div className='home-content'>
                <div className='left-container'>
                    <img src='./img/rova.jpg' alt='rova' />
                </div>
                <div className='rigth-container'>
                    <h2>RAMAROSON</h2>
                    <h3>Nambinintsoa Rovatiana</h3>
                    <p className='para'>Célibataire</p>
                    <p className='para'>Malagasy</p>
                    <p className='para'>22 ans</p>
                    <p id='email'>E-mail : rovatiana1@gmail.com</p>
                    <p id='contact'>contact: 032 91 365 27 | 034 08 971 32</p>
                    <p id='adress'>Adresse : Lot VA 33 CE tsiadana</p>
                    <div className='card-container'>
                        <div className='card'>
                            <h3>Formation</h3>
                            <p><span>2018 - 2021 : </span>Formation en Informatique de Gestion Génie Logiciel et Intelligence Artificiel auprès de l’Institut Supérieur Polytechnique de Madagascar</p>
                            <ul>
                                <li>Programmation front-end et back-end</li>
                                <li>Développement d'un jeux video</li>
                                <li>Développement d'une logiciel</li>
                            </ul>
                            <p><span>2017 : </span>BACCALAUREAT Série D</p>
                        </div>
                        <div className='card'>
                            <h3>Experience</h3>
                            <p><span>Depuis 2012 </span> musiciens « Percussionniste » du Groupe « TAMBOURS GASY ».</p>
                            <p><span>Décembre 2018 - Juin 2019 : </span> « Coopérative de Madagascar » , un site Web pour le service de transport</p>
                            <p><span>Octobre 2019 : </span>« TaniGasy », un jeu vidéo visant à illustrer l’époque du « Fahampanjaka » à Madagascar</p>
                            <p><span>Octobre 2020: </span>Mini projet « PacMan », un petit jeux PacMan développer avec phaserJs</p>
                            <p><span>Octobre 2020: </span>Mini projet « Getsion des Ressources Humaines », une logiciel de bureau qui consiste a gérer les Ressources Humaines</p>
                        </div>
                        <div className='card'>
                            <h3>Langues</h3>
                            <ul>
                                <li><span>Malagasy : </span>maternelle</li>
                                <li><span>Francais : </span>courrament</li>
                                <li><span>Anglais : </span>Grammatical</li>
                            </ul>
                        </div>
                        <div className='card'>
                            <h3>Divers</h3>
                            <p>Jeux video, football, musique, lecture</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-footer'>
                <h3>By Gosse.Dev</h3>
                <p>032 91 365 27 | 034 08 971 32</p>
            </div>
        </div>
    )
}

export default Home