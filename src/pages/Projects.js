import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';

const ProjectsPageStyles = styled.div`
  padding: 10rem 0 5rem 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .project-category {
    margin-bottom: 4rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--primary-color);
    }
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .content {
    padding: 1.5rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    p {
      color: var(--text-color);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .details {
      font-size: 0.9rem;
      color: #666;
    }
  }
`;

function Projects() {
  const projects = {
    ongoing: [
      {
        id: 1,
        title: 'Modern Office Complex',
        image: '/images/commercial_building.jpg',
        description: 'A state-of-the-art office complex with sustainable features',
        location: 'Downtown Business District',
        completion: 'Expected 2024'
      },
      {
        id: 2,
        title: 'Luxury Apartments',
        image: '/images/residential_complex.jpg',
        description: 'Premium residential complex with modern amenities',
        location: 'Suburban Area',
        completion: 'Expected 2025'
      }
    ],
    completed: [
      {
        id: 3,
        title: 'Highway Extension',
        image: '/images/infrastructure_development.jpg',
        description: 'Major infrastructure project improving city connectivity',
        location: 'Metropolitan Area',
        completion: '2023'
      }
    ]
  };

  return (
    <>
      <SEO title="Projects - SM Construction" />
      <ProjectsPageStyles>
        <div className="container">
          <h1>Our Projects</h1>
          
          <div className="project-category">
            <h2>Ongoing Projects</h2>
            <div className="projects-grid">
              {projects.ongoing.map(project => (
                <ProjectCard key={project.id}>
                  <img src={project.image} alt={project.title} />
                  <div className="content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="details">
                      <p>Location: {project.location}</p>
                      <p>Completion: {project.completion}</p>
                    </div>
                  </div>
                </ProjectCard>
              ))}
            </div>
          </div>

          <div className="project-category">
            <h2>Completed Projects</h2>
            <div className="projects-grid">
              {projects.completed.map(project => (
                <ProjectCard key={project.id}>
                  <img src={project.image} alt={project.title} />
                  <div className="content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="details">
                      <p>Location: {project.location}</p>
                      <p>Completed: {project.completion}</p>
                    </div>
                  </div>
                </ProjectCard>
              ))}
            </div>
          </div>
        </div>
      </ProjectsPageStyles>
    </>
  );
}

export default Projects; 