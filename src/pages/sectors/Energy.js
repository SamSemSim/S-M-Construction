import React from 'react';
import SEO from '../../components/SEO';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faWind, faBolt, faCertificate } from '@fortawesome/free-solid-svg-icons';

const SectorPageStyles = styled.div`
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

  .sector-intro {
    margin-bottom: 4rem;
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--text-color);
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .expertise-section {
    background: #f8f8f8;
    padding: 3rem;
    border-radius: 8px;
    margin-bottom: 4rem;

    h2 {
      font-size: 2rem;
      color: var(--primary-color);
      margin-bottom: 2rem;
    }

    ul {
      list-style: none;
      padding: 0;
      
      li {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 1.1rem;
        
        .icon {
          color: var(--primary-color);
          margin-right: 1rem;
        }
      }
    }
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-color);
    line-height: 1.6;
  }
`;

function Energy() {
  const services = [
    {
      icon: faSun,
      title: 'Solar Energy Solutions',
      description: 'Design and installation of solar power systems for residential and commercial applications.'
    },
    {
      icon: faWind,
      title: 'Wind Energy Projects',
      description: 'Development and construction of wind farms and turbine installations.'
    },
    {
      icon: faBolt,
      title: 'Energy Infrastructure',
      description: 'Building and maintaining power distribution networks and smart grid solutions.'
    }
  ];

  return (
    <>
      <SEO title="Energy Solutions - SM Construction" />
      <SectorPageStyles>
        <div className="container">
          <h1>Energy Solutions</h1>
          
          <div className="sector-intro">
            <p>
              We are committed to building a sustainable future through innovative 
              energy solutions. Our expertise in renewable energy construction and 
              infrastructure development helps clients transition to cleaner, more 
              efficient energy systems.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <FontAwesomeIcon icon={service.icon} className="icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            ))}
          </div>

          <div className="expertise-section">
            <h2>Our Expertise</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Renewable energy system design and implementation
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Energy efficiency consulting and solutions
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Smart grid and power distribution infrastructure
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Energy storage and management systems
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Sustainable energy project management
              </li>
            </ul>
          </div>
        </div>
      </SectorPageStyles>
    </>
  );
}

export default Energy; 