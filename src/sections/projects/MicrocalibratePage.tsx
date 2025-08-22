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

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FeatureTitle = styled.h3`
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

const MicrocalibratePage: React.FC = () => {
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
        MicroCalibrate
      </Header>
      
      <Subtitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Survey weight calibration using gradient descent optimization
      </Subtitle>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Project overview</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
          MicroCalibrate is a calibration framework that adjusts survey weights to match 
          administrative targets. Using gradient descent 
          optimization, it ensures that weighted survey statistics align with known population totals, 
          crucial for accurate policy modeling and distributional analysis. An interactive dashboard supports detailed exploration of calibration results.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          The framework addresses the challenge of making survey data representative of the true population 
          when certain demographics are under or over-represented, enabling PolicyEngine to produce more 
          accurate policy impact estimates across different demographic groups.
        </p>
      </Section>

      <ContentGrid>
        <FeatureCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FeatureTitle>⚡ Key capabilities</FeatureTitle>
          <List>
            <ListItem>Gradient descent optimization with L0 regularization</ListItem>
            <ListItem>Multi-target calibration in long format (a single weight per record)</ListItem>
            <ListItem>Target assessment based on data availability to warn the user of complex optimization problems</ListItem>
            <ListItem>Evaluation of analytical solutions of the optimization process to help the user understand calibration constraints</ListItem>
            <ListItem>Optional target exclusion to select the targets being calibrated at once</ListItem>
            <ListItem>Evaluation of calibration performance for each target based on user-provided tolerance levels</ListItem>
          </List>
        </FeatureCard>

        <FeatureCard
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FeatureTitle>📊 Dashboard features</FeatureTitle>
          <List>
            <ListItem>Calibration quality assessment based on loss and distance of final estimates from targets</ListItem>
            <ListItem>Summary of the calibration process with loss and estimate-value curves</ListItem>
            <ListItem>Interactive filtering and exploration of each target's calibration results</ListItem>
            <ListItem>Tables for detailed result inspection with sorting utilities to identify best and worst performing targets</ListItem>
            <ListItem>Comparison of two calibration runs supported</ListItem>
            <ListItem>Multiple data sources supported, from file uploads to GitHub artifacts</ListItem>
          </List>
        </FeatureCard>
      </ContentGrid>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <SectionTitle>Interactive dashboard</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
          Explore real-time calibration monitoring with loss curves, target performance metrics, and weight distributions:
        </p>
        <div style={{ 
          position: 'relative',
          width: '100%',
          borderRadius: '15px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          background: 'rgba(0, 0, 0, 0.3)',
          cursor: 'pointer'
        }}
        onClick={() => window.open('https://microcalibrate-git-maria-dashboard-updates-policy-engine.vercel.app/', '_blank')}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/images/dashboard-screenshot.png`}
            alt="MicroCalibrate Dashboard Preview"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.minHeight = '400px';
              e.currentTarget.parentElement!.style.display = 'flex';
              e.currentTarget.parentElement!.style.alignItems = 'center';
              e.currentTarget.parentElement!.style.justifyContent = 'center';
              e.currentTarget.parentElement!.innerHTML = `
                <div style="text-align: center; color: rgba(255, 255, 255, 0.7);">
                  <div style="font-size: 3rem; margin-bottom: 1rem;">📊</div>
                  <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">MicroCalibrate Dashboard</div>
                  <div style="font-size: 0.9rem;">Click to explore the interactive dashboard</div>
                </div>
              `;
            }}
          />
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '0.8rem 1.5rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            <span style={{ fontSize: '1.2rem' }}>🚀</span>
            <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>Open interactive dashboard</span>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7, textAlign: 'center' }}>
          💡 Click the preview above to explore the full interactive dashboard with real calibration data
        </p>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <SectionTitle>My contributions</SectionTitle>
        <List>
          <ListItem>
            Setting up the repo structure and initial configuration
          </ListItem>
          <ListItem>
            Built on Nikhil's reweighting algorithm to develop the Calibration class with methods to support the user's understanding of the calibration process
          </ListItem>
          <ListItem>
            Integrated the L0 regularization technique implemented by Ben and Max, adding hyperparameter tuning capabilities
          </ListItem>
          <ListItem>
            Added evaluation through holdout-targets and robustness checks
          </ListItem>
          <ListItem>
            Leveraged AI to build a comprehensive dashboard enabling calibration monitoring and comparison
          </ListItem>
        </List>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
      >
        <SectionTitle>Learnings</SectionTitle>
        <List>
          <ListItem>
            I gained a much better understanding of regularization techniques and their tradeoffs, as well as the importance of balancing reweighting features like the learning rate, dropout, and noise levels.  
          </ListItem>
          <ListItem>
            I had a lot of fun implementing the dashboard, which was my first time using AI to build a UI. It was a great way to empathize with the needs a user may have to visualize and understand the calibration process.
          </ListItem>
        </List>
        
        <div style={{ marginTop: '2rem' }}>
          <LinkButton href="https://github.com/PolicyEngine/microcalibrate" target="_blank">
            View Microcalibrate →
          </LinkButton>
          <LinkButton href="https://microcalibrate-git-maria-dashboard-updates-policy-engine.vercel.app/" target="_blank">
            View the calibration dashboard →
          </LinkButton>
        </div>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95 }}
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
          I think the repo is in a good place to be used by other PolicyEngine repos, but there are always improvements to be made and new features that can be added. Keeping an eye out for user suggestions and new issues both in L0 and Microcalibrate never hurts!
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>Related GitHub issues:</p>
          <div>
            <IssueBadge href="https://github.com/PolicyEngine/microcalibrate/issues" target="_blank">
              microcalibrate issues
            </IssueBadge>
            <IssueBadge href="https://github.com/PolicyEngine/L0/issues" target="_blank">
              l0 issues
            </IssueBadge>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default MicrocalibratePage;