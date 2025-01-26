import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShieldAlt, faClipboardCheck, faCertificate } from '@fortawesome/free-solid-svg-icons';

const QualityPageStyles = styled.div`
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
    text-align: center;
  }

  .intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    
    p {
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--text-color);
    }
  }
`;

const PolicyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PolicyCard = styled.div`
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
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-color);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.8rem;
      
      .bullet-icon {
        color: var(--primary-color);
        margin-right: 0.8rem;
        margin-top: 0.3rem;
      }
    }
  }
`;

const CertificationsSection = styled.section`
  background: #f8f8f8;
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
    text-align: center;
  }

  .certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .certification-item {
    text-align: center;

    .icon {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.3rem;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--text-color);
      line-height: 1.6;
    }
  }
`;

function Quality() {
  const policies = [
    {
      icon: faCheckCircle,
      title: 'Quality Standards',
      description: 'We maintain rigorous quality standards throughout all phases of construction:',
      points: [
        'Regular quality audits and inspections',
        'Comprehensive quality control procedures',
        'Continuous improvement processes',
        'Advanced testing methodologies'
      ]
    },
    {
      icon: faShieldAlt,
      title: 'Safety Commitment',
      description: 'Safety is our top priority in every project we undertake:',
      points: [
        'Strict safety protocols and guidelines',
        'Regular safety training programs',
        'Modern safety equipment and gear',
        'Proactive hazard identification'
      ]
    },
    {
      icon: faClipboardCheck,
      title: 'Quality Assurance',
      description: 'Our quality assurance program ensures excellence:',
      points: [
        'Detailed documentation and reporting',
        'Third-party quality verification',
        'Regular team training and development',
        'Client satisfaction surveys'
      ]
    }
  ];

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Certified for Quality Management Systems'
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management System Certification'
    },
    {
      title: 'OHSAS 18001',
      description: 'Occupational Health and Safety Management'
    }
  ];

  return (
    <>
      <SEO title="Quality Policy - SM Construction" />
      <QualityPageStyles>
        <div className="container">
          <h1>Quality Policy</h1>
          
          <div className="intro">
            <p>
              At SM Construction, quality is not just a commitment – it's the foundation 
              of everything we do. Our comprehensive quality policy ensures that we deliver 
              excellence in every project, maintaining the highest standards of construction 
              and safety.
            </p>
          </div>

          <PolicyGrid>
            {policies.map((policy, index) => (
              <PolicyCard key={index}>
                <FontAwesomeIcon icon={policy.icon} className="icon" />
                <h2>{policy.title}</h2>
                <p>{policy.description}</p>
                <ul>
                  {policy.points.map((point, idx) => (
                    <li key={idx}>
                      <FontAwesomeIcon icon={faCheckCircle} className="bullet-icon" size="sm" />
                      {point}
                    </li>
                  ))}
                </ul>
              </PolicyCard>
            ))}
          </PolicyGrid>

          <CertificationsSection>
            <h2>Our Certifications</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div className="certification-item" key={index}>
                  <FontAwesomeIcon icon={faCertificate} className="icon" />
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                </div>
              ))}
            </div>
          </CertificationsSection>
        </div>
      </QualityPageStyles>
    </>
  );
}

export default Quality; 