import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  padding: 3rem;
  color: white;
  max-width: 1400px;
  margin: 0 auto;
`;

const BackButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Header = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const Section = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: '→';
    color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  margin-right: 1rem;
  margin-top: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const IssueBadge = styled.a`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  margin: 0.3rem;
  font-size: 0.9rem;
  font-family: 'Roboto Mono', monospace;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
  
  &:before {
    content: '#';
    opacity: 0.7;
  }
`;

const ParameterUpdatesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton
        onClick={() => navigate('/work')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to work overview
      </BackButton>

      <Header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Parameter updates
      </Header>
      
      <Subtitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Keeping PolicyEngine US current with the latest tax and benefit legislation
      </Subtitle>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Project overview</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
          An important element in maintaining the accuracy of microsimulation analyses is updating tax and benefit 
          parameters to reflect the latest federal and state legislation. I helped update some state parameters like Minnesota, Arkansas, Indiana and Arizona. 
        </p>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <SectionTitle>My contributions</SectionTitle>
        <List>
          <ListItem>
            Updated YAML configuration files with new tax brackets, rates, and deduction amounts 
            for the 2024 tax year
          </ListItem>
          <ListItem>
            Updated unit tests to validate parameter updates
          </ListItem>
        </List>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <SectionTitle>Learnings</SectionTitle>
        <List>
          <ListItem>
            Learned the policyengine_us repo structure and got a better sense of how microsim works
          </ListItem>
          <ListItem>
            Practiced a lot of git commands, learned the importance of changelog entries, linting...
          </ListItem>
          <ListItem>
            Got SO EXCITED when my Minnesota PR was finally merged, after over a month and like 10 rounds of reviews (thanks Pavel, David and Max!!)
          </ListItem>
        </List>
        
        <div style={{ marginTop: '2rem' }}>
          <LinkButton href="https://github.com/PolicyEngine/policyengine-us" target="_blank">
            View on GitHub →
          </LinkButton>
        </div>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 200, 0.1), rgba(0, 150, 255, 0.1))',
          border: '2px solid rgba(0, 255, 200, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          fontSize: '120px',
          opacity: 0.05,
          transform: 'rotate(-15deg)'
        }}>
          🚀
        </div>
        <SectionTitle style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🎯</span>
          Next steps
        </SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem', fontWeight: 500 }}>
          Shoutout to Pavel, David, Ziming, and Daphne who regularly update the model! 
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>Related GitHub issues:</p>
          <div>
            <IssueBadge href="https://github.com/PolicyEngine/policyengine-us/issues" target="_blank">
              policyengine_us issues
            </IssueBadge>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default ParameterUpdatesPage;