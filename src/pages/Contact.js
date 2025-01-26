import React from 'react';
import SEO from '../components/SEO';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactPageStyles = styled.div`
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

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const ContactInfo = styled.div`
  .info-item {
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    .icon {
      color: var(--primary-color);
      font-size: 1.5rem;
      margin-top: 0.2rem;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      color: var(--primary-color);
    }

    p {
      color: var(--text-color);
      line-height: 1.6;
    }
  }
`;

const ContactForm = styled.form`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--primary-color);
    }

    input,
    textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: var(--primary-color);
      }
    }

    textarea {
      height: 150px;
      resize: vertical;
    }
  }

  button {
    background: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: var(--secondary-color);
    }
  }
`;

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <SEO title="Contact Us - SM Construction" />
      <ContactPageStyles>
        <div className="container">
          <h1>Contact Us</h1>
          <div className="contact-content">
            <ContactInfo>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <div>
                  <h3>Email</h3>
                  <p>info@smconstruction.com</p>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <div>
                  <h3>Office</h3>
                  <p>123 Construction Avenue</p>
                  <p>Business District, City 12345</p>
                </div>
              </div>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </ContactForm>
          </div>
        </div>
      </ContactPageStyles>
    </>
  );
}

export default Contact; 