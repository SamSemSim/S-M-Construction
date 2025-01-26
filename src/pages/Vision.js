import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBullseye, faHandshake, faLeaf, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';

const VisionPageStyles = styled.div`
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
`;

const Section = styled.section`
  margin-bottom: 4rem;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  .icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;

    li {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;
      line-height: 1.6;

      &:before {
        content: "•";
        color: var(--primary-color);
        position: absolute;
        left: 0;
      }
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-color);
  }
`;

function Vision() {
  const values = [
    {
      icon: faLeaf,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible construction practices and sustainable development.'
    },
    {
      icon: faUsers,
      title: 'Collaboration',
      description: 'Working together with stakeholders to achieve exceptional results.'
    },
    {
      icon: faAward,
      title: 'Excellence',
      description: 'Striving for the highest standards in every aspect of our work.'
    }
  ];

  return (
    <>
      <SEO title="Vision & Mission - SM Construction" />
      <VisionPageStyles>
        <div className="container">
          <h1>Vision & Mission</h1>

          <Section>
            <FontAwesomeIcon icon={faLightbulb} className="icon" />
            <h2>Our Vision</h2>
            <p>
              To be the leading construction company recognized for excellence, innovation, 
              and sustainable development. We aim to create lasting value for our clients, 
              employees, and communities while setting new standards in the construction industry.
            </p>
          </Section>

          <Section>
            <FontAwesomeIcon icon={faBullseye} className="icon" />
            <h2>Our Mission</h2>
            <p>
              To deliver exceptional construction projects that exceed client expectations 
              through innovative solutions, quality craftsmanship, and sustainable practices.
            </p>
            <ul>
              <li>Provide innovative and sustainable construction solutions</li>
              <li>Maintain the highest standards of quality and safety</li>
              <li>Foster long-term relationships with clients and partners</li>
              <li>Invest in our employees' growth and development</li>
              <li>Contribute positively to the communities we serve</li>
            </ul>
          </Section>

          <Section>
            <FontAwesomeIcon icon={faHandshake} className="icon" />
            <h2>Our Core Values</h2>
            <p>
              Our values guide every decision we make and every action we take in 
              serving our clients and communities.
            </p>
            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard key={index}>
                  <FontAwesomeIcon icon={value.icon} className="icon" />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ValueCard>
              ))}
            </ValuesGrid>
          </Section>
        </div>
      </VisionPageStyles>
    </>
  );
}

export default Vision; 