import styled from 'styled-components';

const ProjectsShowcase = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Commercial Building',
      image: '/images/commercial_building.jpg',
      description: 'State-of-the-art office complexes and shopping centers'
    },
    {
      id: 2,
      title: 'Residential Complex',
      image: '/images/residential_complex.jpg',
      description: 'Modern living spaces with premium amenities'
    },
    {
      id: 3,
      title: 'Infrastructure Development',
      image: '/images/infrastructure_development.jpg',
      description: 'Bridges, highways, and urban development projects'
    }
  ];

  return (
    <Section>
      <h2>Featured Projects</h2>
      <ProjectGrid>
        {featuredProjects.map(project => (
          <ProjectCard key={project.id}>
            <img src={project.image} alt={project.title} />
            <ProjectContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  position: relative;
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
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  background: white;

  h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-color);
    font-size: 0.9rem;
  }
`;

export default ProjectsShowcase; 