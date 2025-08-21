import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  color: white;
  max-width: 1200px;
  width: 100%;
  padding-bottom: 80px;
`;

const Header = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 3rem;
  align-items: center;
  margin-top: -20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TeamImage = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .placeholder-text {
    padding: 4rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1rem;
  }
`;

const InfoSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
`;

const InfoItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const InfoContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const BulletItem = styled.li`
  padding: 0.5rem 0;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  
  &:before {
    content: '•';
    color: rgba(255, 255, 255, 0.5);
    font-weight: bold;
  }
`;

const LondonSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Container>
      <Header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My time in London
      </Header>
      <ContentGrid>
        <ImageSection
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <TeamImage>
            <img 
              src="/images/team.png" 
              alt="PolicyEngine team"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div class="placeholder-text">Add team.png<br/>to public/images/</div>';
              }}
            />
          </TeamImage>
        </ImageSection>
        <InfoSection
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <InfoItem variants={itemVariants}>
            <InfoTitle>The experience</InfoTitle>
            <InfoContent>
              I fell in love with the city! It was great to work in person with Nikhil and Vahid and finally meeting Ben and Max. I became much faster and dynamic in my coding after seeing Nikhil work in real time. Got amazing life advice from Vahid. I was always so excited to go to the WeWork! I also learned a lot about EA, attending conferences, and talking about PolicyEngine's work. I identified the best climbing gyms in the city (let me know if you need recommendations ;).
            </InfoContent>
          </InfoItem>
          <InfoItem variants={itemVariants}>
            <InfoTitle>Cultural immersion</InfoTitle>
            <InfoContent>
              Living and working in London was a truly transformative experience:
            </InfoContent>
            <BulletList>
              <BulletItem>Drank £8.50 pints</BulletItem>
              <BulletItem>Commuted over 2 hours on any given day</BulletItem>
              <BulletItem>Had a cup of tea with my housemates every evening</BulletItem>
              <BulletItem>Ate food from around the world without leaving my neighborhood</BulletItem>
              <BulletItem>Enjoyed so many free museums</BulletItem>
            </BulletList>
          </InfoItem>
          <InfoItem variants={itemVariants}>
            <InfoTitle>Key memories</InfoTitle>
            <InfoContent>
              Thank you for the pool masterclasses, they were a game changer!
            </InfoContent>
          </InfoItem>
        </InfoSection>
      </ContentGrid>
    </Container>
  );
};

export default LondonSection;