import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ManagementPageStyles = styled.div`
  padding: 10rem 0 5rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
  }

  .intro {
    margin-bottom: 4rem;
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--text-color);
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
`;

const TeamMemberCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .image-container {
    height: 300px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 1.5rem;
    text-align: center;

    h3 {
      font-size: 1.5rem;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .position {
      color: #666;
      font-style: italic;
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-color);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .social-link {
      color: var(--primary-color);
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }
`;

function Management() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Chief Executive Officer",
      description: "With over 25 years of experience in construction and project management, John leads our company with vision and expertise.",
      linkedin: "https://linkedin.com",
      image: "/images/commercial_building.jpg"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Operations Officer",
      description: "Sarah brings 20 years of operational excellence and strategic planning to ensure efficient project delivery.",
      linkedin: "https://linkedin.com",
      image: "/images/residential_complex.jpg"
    },
    {
      name: "Michael Chen",
      position: "Technical Director",
      description: "Michael's innovative approach to construction technology has revolutionized our project execution methods.",
      linkedin: "https://linkedin.com",
      image: "/images/infrastructure_development.jpg"
    }
  ];

  return (
    <>
      <SEO title="Management Team - SM Construction" />
      <ManagementPageStyles>
        <div className="container">
          <h1>Our Management Team</h1>
          
          <div className="intro">
            <p>
              Our leadership team brings together decades of experience in construction, 
              project management, and sustainable development. Their combined expertise 
              drives our commitment to excellence and innovation in every project we undertake.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index}>
                <div className="image-container">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="content">
                  <h3>{member.name}</h3>
                  <div className="position">{member.position}</div>
                  <p>{member.description}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </TeamMemberCard>
            ))}
          </div>
        </div>
      </ManagementPageStyles>
    </>
  );
}

export default Management; 