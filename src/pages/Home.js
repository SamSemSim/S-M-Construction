import styled from 'styled-components';
import HeroSlider from '../components/HeroSlider';
import ProjectsShowcase from '../components/ProjectsShowcase';
import NewsSection from '../components/NewsSection';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="S&M Construction - Building Excellence Since 2000"
        description="Leading construction company specializing in commercial, residential, and infrastructure projects. Quality craftsmanship and innovative solutions."
      />
      <Main>
        <HeroSlider />
        <ProjectsShowcase />
        <NewsSection />
      </Main>
    </>
  );
};

const Main = styled.main`
  margin-top: 80px;
`;

export default Home; 