import React from 'react';
import SEO from '../../components/SEO';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faBridge, faWater, faCertificate } from '@fortawesome/free-solid-svg-icons';

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

function Infrastructure() {
  const services = [
    {
      icon: faRoad,
      title: 'Transportation Infrastructure',
      description: 'Construction of highways, roads, and transportation networks that connect communities.'
    },
    {
      icon: faBridge,
      title: 'Bridges & Tunnels',
      description: 'Design and construction of bridges and tunnels with advanced engineering solutions.'
    },
    {
      icon: faWater,
      title: 'Water Infrastructure',
      description: 'Development of water supply, treatment, and distribution systems for urban areas.'
    }
  ];

  return (
    <>
      <SEO title="Infrastructure Development - SM Construction" />
      <SectorPageStyles>
        <div className="container">
          <h1>Infrastructure Development</h1>
          
          <div className="sector-intro">
            <p>
              We specialize in developing robust infrastructure that forms the backbone 
              of modern cities and communities. Our projects combine innovative engineering, 
              sustainable practices, and careful consideration of environmental impact.
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
                Urban infrastructure planning and development
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Transportation network optimization
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Environmental impact assessment and mitigation
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Smart city infrastructure integration
              </li>
              <li>
                <FontAwesomeIcon icon={faCertificate} className="icon" />
                Public-private partnership project management
              </li>
            </ul>
          </div>
        </div>
      </SectorPageStyles>
    </>
  );
}

export default Infrastructure; 