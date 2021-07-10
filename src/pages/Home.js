import React, { useState } from 'react'

const Home = () => {
    const [formationModal, setFormationModal] = useState(false)
    const [experienceModal, setExperienceModal] = useState(false)
    const [langageModal, setLangageModal] = useState(false)
    const [diverModal, setDiverModal] = useState(false)
    const [familyModal, setFamilyModal] = useState(false)

    const onFormation = () => {
        setFormationModal(true)
    }   
    const onExperience = () => {
        setExperienceModal(true)
    }
    const onLangage = () => {
        setLangageModal(true)
    }
    const onDiver = () => {
        setDiverModal(true)
    }
    const onFamily = () => {
        setFamilyModal(true)
    }
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
                    <div className='left'>
                        <h2 className='id-1'>RAMAROSON</h2>
                        <h3 className='id-2'>Rovatiana Nambinintsoa</h3>
                        <h3 className='id-2'>IGGLIA 3</h3> 
                        <div className='content-temp'>
                            <p className='para'>Célibataire</p>
                            <p className='para'>Malagasy</p>
                            <p className='para'>22 ans</p>
                        </div>
                    </div>
                    <div className='rigth'>
                        <p>E-mail : rovatiana1@gmail.com</p>
                        <p>contact: 032 91 365 27 | 034 08 971 32</p>
                        <p>Adresse : Lot VA 33 CE tsiadana</p>
                    </div>
                    <div className='button-container'>
                        <div className='button'>                            
                            <div className='title' onClick={onFormation}>
                                <h3>Formations</h3>
                            </div>
                            <div className='title' onClick={onExperience}>
                                <h3>Experiences</h3>
                            </div>
                            <div className='title' onClick={onLangage}>
                                <h3>Langues</h3>
                            </div>
                            <div className='title' onClick={onDiver}>
                                <h3>Divers</h3>
                            </div>
                            <div className='title' onClick={onFamily}>
                                <h3>Famille</h3>
                            </div>
                        </div>
                    </div>
                    { formationModal && 
                        <div className='modal-container'>
                            <div className='modal'>                                
                                <h3>Formation</h3>
                                <span className='cross' onClick={() => setFormationModal(false)}>&#10005;</span>                                
                                <div className='modal-content'>
                                    <p><span>2017 : </span>BACCALAUREAT Série D</p>
                                    <p><span>2018 - 2021 : </span>Formation en Informatique de Gestion Génie Logiciel et Intelligence Artificiel auprès de l’Institut Supérieur Polytechnique de Madagascar</p>
                                    <ul>
                                        <li>Programmation front-end et back-end</li>
                                        <li>Développement d'un jeux video</li>
                                        <li>Développement d'une logiciel</li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                    }
                    {experienceModal && 
                        <div className='modal-container'>
                            <div className='modal'>
                                <h3>Experience</h3>
                                <span className='cross' onClick={() => setExperienceModal(false)}>&#10005;</span>                                    
                                <div className='modal-content'>
                                    <p><span>Depuis 2012 </span> musiciens « Percussionniste » du Groupe « TAMBOURS GASY ».</p>
                                    <p><span>Décembre 2018 - Juin 2019 : </span> « Coopérative de Madagascar » , un site Web pour le service de transport</p>
                                    <p><span>Octobre 2019 : </span>« TaniGasy », un jeu vidéo visant à illustrer l’époque du « Fahampanjaka » à Madagascar</p>
                                    <p><span>Octobre 2020: </span>Mini projet « PacMan », un petit jeux PacMan développer avec phaserJs</p>
                                    <p><span>Octobre 2020: </span>Mini projet « Getsion des Ressources Humaines », une logiciel de bureau qui consiste a gérer les Ressources Humaines</p>
                                </div>
                            </div>
                        </div>
                    }
                    {langageModal && 
                        <div className='modal-container'>
                            <div className='modal'>
                                <h3>Langues</h3>
                                <span className='cross' onClick={() => setLangageModal(false)}>&#10005;</span>                                    
                                <div className='modal-content'>
                                    <p><span>Malagasy : </span> maternelle</p>
                                    <p><span>Francais : </span> courrament</p>
                                    <p><span>Anglais : </span> grammatical</p>
                                </div>
                            </div>
                        </div>
                    }
                    {diverModal && 
                        <div className='modal-container'>
                            <div className='modal'>          
                                <h3>Divers</h3>
                                <span className='cross' onClick={() => setDiverModal(false)}>&#10005;</span>                                
                                <div className='modal-content'>
                                    <p>Jeux video, football, musique, lecture</p>
                                </div>
                            </div>
                        </div>
                    }
                    {familyModal && 
                        <div className='modal-container'>
                            <div className='modal'>          
                                <h3>Situation familiale</h3>
                                <span className='cross' onClick={() => setFamilyModal(false)}>&#10005;</span>                                
                                <div className='modal-content'>
                                    <p><span>Père : </span> RAMAROKOTO Clément Faly Tiana</p>
                                    <p><span>Mère : </span> RASAONDRANIRINA Maria Yvette</p>
                                    <p>J'ai quatre frères dont les noms sont <span>Sitraka, Sarobidy, Tiavina</span> et <span>Anjara</span></p>
                                    <p> et pas de soeur . . . </p>
                                </div>
                            </div>
                        </div>
                    }      
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