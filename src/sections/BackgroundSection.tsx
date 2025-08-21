import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  color: white;
  max-width: 1200px;
  width: 100%;
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
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
`;

const PhotoSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px;
`;

const PhotoPlaceholder = styled.div<{ $secondary?: boolean }>`
  width: 350px;
  height: 350px;
  background: rgba(255, 255, 255, ${props => props.$secondary ? '0.08' : '0.1'});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, ${props => props.$secondary ? '0.2' : '0.3'});
  overflow: hidden;
  position: absolute;
  ${props => props.$secondary ? `
    left: 0;
    top: -20px;
    z-index: 2;
  ` : `
    right: 35px;
    top: 20px;
    z-index: 1;
  `}
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .placeholder-text {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 1rem;
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  width: 665px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoItem = styled(motion.div)`
  margin-bottom: 1.5rem;
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

const BackgroundSection: React.FC = () => {
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
        About me
      </Header>
      <ContentGrid>
        <PhotoSection
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <PhotoContainer>
            <PhotoPlaceholder>
              <img 
                src="/images/profile2.jpeg" 
                alt="Profile 2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="placeholder-text">Add profile2.jpeg<br/>to public/images/</div>';
                }}
              />
            </PhotoPlaceholder>
            <PhotoPlaceholder $secondary>
              <img 
                src="/images/profile.jpg" 
                alt="Profile"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="placeholder-text">Add profile.jpg<br/>to public/images/</div>';
                }}
              />
            </PhotoPlaceholder>
          </PhotoContainer>
        </PhotoSection>
        <InfoSection
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <InfoItem variants={itemVariants}>
            <InfoContent style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              I grew up in Spain but have been moving around the world since I was 17, always with some jamón in my suitcase.
            </InfoContent>
          </InfoItem>
          <InfoItem variants={itemVariants}>
            <InfoTitle>Education</InfoTitle>
            <InfoContent>
              Rising senior at Minerva University studying a double major in Politics and Data Science.
            </InfoContent>
          </InfoItem>
          <InfoItem variants={itemVariants}>
            <InfoTitle>Interests</InfoTitle>
            <InfoContent>
              Was always interested in social impact and governance, but my love for puzzles nudged me into coding, down the path of policy analysis.
            </InfoContent>
          </InfoItem>
        </InfoSection>
      </ContentGrid>
    </Container>
  );
};

export default BackgroundSection;