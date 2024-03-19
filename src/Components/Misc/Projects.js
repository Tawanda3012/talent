import { useState } from "react";
const Projects = () => {
    const [projectData] = useState([
        {
            image: require('../../Assets/Images/insta 1.png'),
            name: 'Bancabc',
            project: 'banking app Project',
            link: 'https://www.google.com/',
            id: 1
        },
        {
            image: require('../../Assets/Images/insta 1.png'),
            name: 'Bancabc',
            project: 'banking app Project',
            link: 'https://www.google.com/',
            id: 2
        },
        {
            image: require('../../Assets/Images/insta 1.png'),
            name: 'Bancabc',
            project: 'banking app Project',
            link: 'https://www.google.com/',
            id: 3
        },
        {
            image: require('../../Assets/Images/insta 1.png'),
            name: 'Bancabc',
            project: 'banking app Project',
            link: 'https://www.google.com/',
            id: 4
        },
    ])
    return (
        <>
            <h2>Projects</h2>
            {projectData.map((project) => (
                <div className="col-12 col-sm-12 col-md-6" key={project.id}>
                    <div className="innerProject mb-3">
                        <img src={project.image} alt={project.name} className="img-fluid" />
                        <div className="captions">
                            <h5>{project.name}</h5>
                            <p>{project.project}</p>
                            <a href={project.link} className="nav-link">view Project</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Projects;
