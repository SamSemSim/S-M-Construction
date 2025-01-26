import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';

const AboutPageStyles = styled.div`
  padding: 10rem 0 5rem 0;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .about-content {
    display: grid;
    gap: 3rem;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  p {
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

function About() {
  return (
    <>
      <SEO title="About - SM Construction" />
      <AboutPageStyles>
        <div className="container">
          <div className="about-content">
            <h1>About SM Construction</h1>
            <div>
              <p>
                SM Construction has been a trusted name in the construction industry for over two decades. 
                Our commitment to quality, innovation, and customer satisfaction has made us a leader in 
                delivering exceptional construction projects.
              </p>
              <p>
                We specialize in both residential and commercial construction, bringing the same level 
                of dedication and expertise to every project, regardless of size. Our team of skilled 
                professionals ensures that each project is completed to the highest standards of quality 
                and safety.
              </p>
              <p>
                With a focus on sustainable building practices and cutting-edge technology, we're 
                building not just for today, but for the future. Our vision is to create spaces that 
                inspire, endure, and enhance the lives of those who use them.
              </p>
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}

export default About; 