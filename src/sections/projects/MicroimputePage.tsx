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

const MicroimputePage: React.FC = () => {
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
        MicroImpute
      </Header>
      
      <Subtitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A powerful framework for statistical variable imputation, method comparison and benchmarking
      </Subtitle>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Project overview</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
          MicroImpute enables variable imputation through different statistical methods, facilitating comparison 
          and benchmarking across methods through quantile loss calculations. This framework provides researchers 
          and data scientists with a consistent interface to compare different imputation techniques and determine 
          which method provides the most accurate results for their specific use case.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          The framework was designed to address the challenge of transferring statistically complex information from 
          surveys and data sources, enabling more comprehensive economic analyses, using wealth imputation from the Survey of Consumer Finances (SCF) to the Current Population 
          Survey (CPS), as an example.
        </p>
      </Section>

      <ContentGrid>
        <FeatureCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FeatureTitle>🔧 Imputation methods</FeatureTitle>
          <List>
            <ListItem>Statistical matching with flexible distance metrics</ListItem>
            <ListItem>Ordinary least squares (OLS) regression</ListItem>
            <ListItem>Quantile regression forests (QRF)</ListItem>
            <ListItem>Quantile regression with multiple quantiles</ListItem>
          </List>
        </FeatureCard>

        <FeatureCard
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FeatureTitle>✨ Key features</FeatureTitle>
          <List>
            <ListItem>Unified API across all imputation methods</ListItem>
            <ListItem>Quantile loss benchmarking for method comparison</ListItem>
            <ListItem>AutoImpute for automatic method selection</ListItem>
            <ListItem>Comprehensive visualization tools</ListItem>
          </List>
        </FeatureCard>
      </ContentGrid>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <SectionTitle>Documentation preview</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
          Explore the comprehensive documentation with examples, API reference, and method comparisons:
        </p>
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '600px',
          borderRadius: '15px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          background: 'rgba(0, 0, 0, 0.3)',
          cursor: 'pointer'
        }}
        onClick={() => window.open('https://policyengine.github.io/microimpute/', '_blank')}
        >
          <iframe
            src="https://policyengine.github.io/microimpute/"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              background: 'white'
            }}
            title="MicroImpute Documentation"
          />
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '0.8rem 1.5rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
            pointerEvents: 'none'
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
            <span style={{ fontSize: '1rem' }}>📚</span>
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>Open Full Documentation</span>
          </div>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7, textAlign: 'center' }}>
          💡 The documentation includes installation guides, API reference, method comparisons, and example notebooks
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
            Set up the repo structure and configuration
          </ListItem>
          <ListItem>
            Designed and implemented the core Imputer class providing a common framework for imputation models allowing 
            easy addition of new statistical methods
          </ListItem>
          <ListItem>
            Created comprehensive evaluation and benchmarking tools (cross-validation, quantile loss comparison) to compare imputation accuracy across different methods
          </ListItem>
          <ListItem>
            Developed the AutoImpute function that automates a full imputation pipeline, training all methods, selecting the best 
            based on quantile loss metrics and producing final imputations with it
          </ListItem>
          <ListItem>
            Implemented visualization tools for comparing imputation results and understanding 
            method performance across income deciles
          </ListItem>
          <ListItem>
            Implemented features for microdata handling like survey weights integration, quantile-based evaluation, and sequential imputation of related variables
          </ListItem>
          <ListItem>
            Built the SCF to CPS wealth imputation pipeline, enabling PolicyEngine to incorporate 
            wealth data into policy simulations
          </ListItem>
          <ListItem>
            Wrote a paper on the methodology and findings of the MicroImpute framework
          </ListItem>
        </List>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <SectionTitle>Paper results</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Our empirical analysis demonstrates that Quantile Regression Forests (QRF) significantly outperforms traditional imputation methods 
          for wealth imputation from the Survey of Consumer Finances (SCF) to the Current Population Survey (CPS):
        </p>
        
        <ContentGrid style={{ marginBottom: '1.5rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px'
          }}>
            <img 
              src="/images/qrf-comparison-chart.png" 
              alt="QRF Performance Comparison"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `
                  <div style="text-align: center; color: rgba(255, 255, 255, 0.5);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
                    <div>Quantile Loss Comparison Chart</div>
                  </div>
                `;
              }}
            />
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px'
          }}>
            <img 
              src="/images/wealth-distribution-chart.png" 
              alt="Wealth Distribution Results"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `
                  <div style="text-align: center; color: rgba(255, 255, 255, 0.5);">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">📈</div>
                    <div>Wealth Distribution Chart</div>
                  </div>
                `;
              }}
            />
          </div>
        </ContentGrid>
        
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '1.5rem',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h4 style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.95)' }}>Key findings:</h4>
          <List>
            <ListItem>
              <strong>20.5% reduction</strong> in average quantile loss compared to OLS regression
            </ListItem>
            <ListItem>
              <strong>14.8% improvement</strong> over Hot Deck Matching methods
            </ListItem>
            <ListItem>
              <strong>6% better performance</strong> than standard Quantile Regression
            </ListItem>
            <ListItem>
              Using 5-fold cross-validation on 22,975 SCF households, QRF achieves an average quantile loss of $6.6M, 
              demonstrating superior distributional accuracy, particularly in the 10th-80th percentile range
            </ListItem>
          </List>
          <p style={{ marginTop: '1rem', lineHeight: 1.6, opacity: 0.9 }}>
            These improvements enable more accurate policy impact analysis for wealth taxes, asset-dependent benefit qualifications, 
            and distributional studies across wealth deciles.
          </p>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <LinkButton href="https://github.com/PolicyEngine/microimpute/blob/main/paper/paper.pdf" target="_blank">
            Read Full Paper →
          </LinkButton>
        </div>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <SectionTitle>Learnings</SectionTitle>
        <List>
          <ListItem>
            Developing microimpute helped me gain so many developer skills! It helped me understand the necessary setup for building a robust repo and python package (it was the perfect hands-on project to get started with before jumping to cross-repo development).
          </ListItem>
          <ListItem>
            When I started this project I didn't even know what "imputation" really entailed, but now I have a solid understanding of statistical matching, regression techniques, the workings of random forests and quantile loss metrics.
          </ListItem>
          <ListItem>
            Building the imputation API and pipeline from scratch, testing it, using it in  a real-world example, and then writing a paper on it was very interesting and rewarding from the perspective of understanding the end-to-end process of developing software tools.
          </ListItem>
        </List>
        
        <div style={{ marginTop: '2rem' }}>
          <LinkButton href="https://github.com/PolicyEngine/microimpute" target="_blank">
            View Microimpute →
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
          I will continue working on MicroImpute for my undergrad thesis (if you are interested, keep an eye out for updates). I will focus on implementing:
        </p>
        <List>
          <ListItem>
            A random classifier embedded in the QRF model for better handling of categorical variables
          </ListItem>
          <ListItem>
            Log-loss metric to evaluate imputation accuracy for categorical and boolean variables
          </ListItem>
          <ListItem>
            New imputation methods like Extremal Random Forests for improved performance at extreme quantiles
          </ListItem>
          <ListItem>
            Cosine similarity metrics for better evaluation of imputation results 
          </ListItem>
          <ListItem>
            Predictor correlation and selection tools
          </ListItem>
          <ListItem>
            An imputation dashboard!
          </ListItem>
          <ListItem>
            And more...
          </ListItem>
        </List>
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>Related GitHub issues:</p>
          <div>
            <IssueBadge href="https://github.com/PolicyEngine/microimpute/issues" target="_blank">
              microimpute issues
            </IssueBadge>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default MicroimputePage;