import styled from 'styled-components';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'New Project Launch',
      image: '/images/new_project.jpg',
      date: 'March 15, 2024',
      excerpt: 'S&M Construction announces new major development project'
    },
    {
      id: 2,
      title: 'Industry Award',
      image: '/images/industry_award.jpg',
      date: 'March 10, 2024',
      excerpt: 'Recognized for excellence in sustainable construction'
    }
  ];

  return (
    <Section>
      <h2>Latest News</h2>
      <NewsGrid>
        {news.map(item => (
          <NewsCard key={item.id}>
            <img src={item.image} alt={item.title} />
            <NewsContent>
              <span className="date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <ReadMore href="#">Read More</ReadMore>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: var(--light-gray);

  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 3rem;
    font-size: 2.5rem;
  }
`;

const NewsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const NewsCard = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const NewsContent = styled.div`
  padding: 1.5rem;

  .date {
    color: #666;
    font-size: 0.9rem;
  }

  h3 {
    color: var(--primary-color);
    margin: 0.5rem 0;
  }

  p {
    color: var(--text-color);
    margin-bottom: 1rem;
  }
`;

const ReadMore = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default NewsSection; 