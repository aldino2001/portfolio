import React from 'react';

// Dummy data for the projects
const projects = [
    {
        title: 'Simple Chat',
        description: 'Symple projet chat pour etablir une communication sur une groupe en Flask, Javascript , HTML/CSS',
        image: require('../Asset/opensource.png')
    },
    {
        title: 'WEB Mapping',
        description: "ces projet est orienté web conçu pour aidé des gens à interpreter la securité dans une cartier , c'est une application pour aide à la prise de decision , et aussi j'integré une vente immobilier à l'aide d'une map pour que le gens puissent voir l'emplacement des immobilier, developper avec typescript, SQL, Laravel",
        image: require('../Asset/developer.jpg')
    },
    {
        title: 'Project Three',
        description: 'Description for project three. It showcases my expertise in frontend with Vue.js and TailwindCSS.',
        image: require('../Asset/opensource.png')
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
