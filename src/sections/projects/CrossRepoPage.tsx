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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RepoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const RepoTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const CrossRepoPage: React.FC = () => {
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
        Cross-repo contributions
      </Header>
      
      <Subtitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Bug fixes, feature additions, and documentation improvements across the PolicyEngine ecosystem
      </Subtitle>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Project overview</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
          Beyond my main projects, I contributed across PolicyEngine's codebase ecosystem addressing small issues that required quick fixes.
        </p>
      </Section>

      <ContentGrid>
        <RepoCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <RepoTitle>📊 MicroDF</RepoTitle>
          <List>
            <ListItem>Fixed bugs in microseries and microdataframe methods</ListItem>
            <ListItem>Removed visualization functionality we weren't using anymore</ListItem>
          </List>
        </RepoCard>

        <RepoCard
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <RepoTitle>💾 PolicyEngine US Data</RepoTitle>
          <List>
            <ListItem>Imputed new variables for OBBA</ListItem>
            <ListItem>Helped improving calibration</ListItem>
            <ListItem>Tested dataset minimizing techniques</ListItem>
          </List>
        </RepoCard>

        <RepoCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <RepoTitle>🇺🇸 PolicyEngine US</RepoTitle>
          <List>
            <ListItem>Added new variables for OBBA and calibration</ListItem>
          </List>
        </RepoCard>

        <RepoCard
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <RepoTitle>🇬🇧 PolicyEngine UK</RepoTitle>
          <List>
            <ListItem>Addressed a couple code-health issues</ListItem>
          </List>
        </RepoCard>
      </ContentGrid>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <SectionTitle>My contributions</SectionTitle>
        <List>
          <ListItem>
            Generally helping improve code quality and maintainability across the codebase
          </ListItem>
          <ListItem>
            I even filed a PR in policyengine_canada once!
          </ListItem>
        </List>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <SectionTitle>Learnings</SectionTitle>
        <List>
          <ListItem>
            I got more familiar with the PolicyEngine codebase and how all repos interact with each other
          </ListItem>
          <ListItem>
            It gave me side-quests to work on while waiting for reviews on my main projects
          </ListItem>
        </List>
        
        <div style={{ marginTop: '2rem' }}>
          <LinkButton href="https://github.com/PolicyEngine" target="_blank">
            View PolicyEngine's GitHub →
          </LinkButton>
        </div>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
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
          I'm sure there will be plenty of issues to address on the side for many years to come, but for now, I have a couple of PRs open that are ready for review (or may need to be closed as no longer relevant):
        </p>
        <List>
          <ListItem>
            Fixing the microdataframe sum function to respect the `axis` argument in microdf
          </ListItem>
          <ListItem>
            Making all files and directories in the UK repo be lower case
          </ListItem>
          <ListItem>
            Adding a test to policyengine_us_data to ensure the repo works with its direct dependencies
          </ListItem>
        </List>
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>Related GitHub issues:</p>
          <div>
            <IssueBadge href="https://github.com/PolicyEngine/policyengine-uk/pull/1238" target="_blank">
              policyengine_uk
            </IssueBadge>
            <IssueBadge href="https://github.com/PolicyEngine/microdf/pull/263" target="_blank">
              microdf
            </IssueBadge>
            <IssueBadge href="https://github.com/PolicyEngine/policyengine-us-data/pull/397" target="_blank">
              policyengine_us_data
            </IssueBadge>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default CrossRepoPage;