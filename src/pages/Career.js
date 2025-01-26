import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';

const CareerPageStyles = styled.div`
  padding: 10rem 0 5rem 0;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .career-content {
    display: grid;
    gap: 3rem;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .job-listing {
    background: #f8f8f8;
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }
  .job-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }
  .job-description {
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  .apply-button {
    background: #007bff;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      background: #0056b3;
    }
  }
`;

function Career() {
  return (
    <>
      <SEO title="Careers - SM Construction" />
      <CareerPageStyles>
        <div className="container">
          <div className="career-content">
            <h1>Join Our Team</h1>
            <div className="job-listing">
              <h2 className="job-title">Construction Project Manager</h2>
              <p className="job-description">
                We are seeking an experienced Construction Project Manager to join our growing team. 
                The ideal candidate will have 5+ years of experience in managing large-scale construction 
                projects and a proven track record of successful project delivery.
              </p>
              <button className="apply-button">Apply Now</button>
            </div>
            <div className="job-listing">
              <h2 className="job-title">Site Engineer</h2>
              <p className="job-description">
                Looking for a skilled Site Engineer with 3+ years of experience in construction. 
                Must have strong technical knowledge and the ability to coordinate with multiple 
                stakeholders.
              </p>
              <button className="apply-button">Apply Now</button>
            </div>
          </div>
        </div>
      </CareerPageStyles>
    </>
  );
}

export default Career; 