import React from 'react';

// Dummy data for the projects
const projects = [
    {
        title: 'Simple Chat 💬',
        description: '📤Symple projet chat pour etablir une communication sur une groupe en Flask, Javascript , HTML/CSS📥',
        image: require('../Asset/opensource.png')
    },
    {
        title: 'WEB Mapping 🌍',
        description: "📍ces projet est orienté web conçu pour aidé des gens à interpreter la securité dans une cartier , c'est une application pour aide à la prise de decision , et aussi j'integré une vente immobilier à l'aide d'une map pour que le gens puissent voir l'emplacement des immobilier, developper avec typescript, SQL, Laravel",
        image: require('../Asset/ebmapping2.jpg')
    },
    {
        title: 'Jeux Fanorona ',
        description: " Opposant 2 joueurs, le but du jeu est d'aligner le premier ses 3 pions. Le plateau de jeu est vide initialement, les joueurs posant leurs pions un à un, puis les déplaçant d'une intersection vers une autre afin de tenter de former un alignement. coder en Python Avec la module pygame et puis j'integrer une jeux en reseau local ",
        image: require('../Asset/fanorona-3.png')
    },
    {
        title: 'Jeux serpent 🐍',
        description: "Il n'y a que deux règles que vous devez suivre lorsque vous jouez : ne frappez pas un mur et ne vous mordez pas la vous même 😂😂. ",
        image: require('../Asset/snake.png')
    },

];

const HeroSection = () => {

    return (
        <section className="hero-section">
            <div className="project-content">
                <div className="greeting">
                    <span style={{ fontSize: '22px' }}>👋 Hi There! I'm Aldino</span>
                </div>
                
            </div>
            <div className="projects-section">
                <h3 style={{ color: '#fff', marginBottom: '20px', fontSize: '28px' }}>My Projects</h3>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h4 className="project-title">{project.title}</h4>
                            <p className="project-description">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
