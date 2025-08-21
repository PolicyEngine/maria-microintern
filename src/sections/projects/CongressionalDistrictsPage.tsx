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

const CodeBlock = styled.pre`
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  border-radius: 10px;
  overflow-x: auto;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 1rem 0;
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

const NotebookContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const NotebookHeader = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 600;
`;

const NotebookLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const NotebookContent = styled.div`
  max-height: 500px;
  overflow-y: auto;
  padding: 1.5rem;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const NotebookCell = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CellHeader = styled.h4`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const CongressionalDistrictsPage: React.FC = () => {
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
        Congressional district calibration
      </Header>
      
      <Subtitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Enabling granular policy analysis at the congressional district level through survey weight reweighting
      </Subtitle>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Project overview</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
          Congressional district-level analysis is crucial for understanding how federal policies affect 
          different constituencies across the United States. This project developed calibration 
          routines to reweight Current Population Survey (CPS) data to administrative targets to accurately represent demographics and 
          economic characteristics at the state and congressional district levels.
        </p>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <SectionTitle>Technical approach</SectionTitle>
        <p style={{ marginBottom: '1rem' }}>
          Building on the database that Ben created in policyengine_us_data to store all calibration targets, the calibration routines adjust survey weights using gradient descent optimization:
        </p>
        <NotebookContainer>
          <NotebookHeader>
            📓 Calibration routines documentation
            <NotebookLink href="https://github.com/PolicyEngine/policyengine-data/blob/main/docs/calibration.ipynb" target="_blank">
              View full notebook →
            </NotebookLink>
          </NotebookHeader>
          <NotebookContent>
            <NotebookCell>
              <CellHeader style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.95)' }}>
                Method 1: Geographic level iteration
              </CellHeader>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6, opacity: 0.9 }}>
                This approach calibrates one geographic level at a time, moving from the lowest (e.g., state) to highest (e.g., national) in the hierarchy.
              </p>
            </NotebookCell>
            
            <NotebookCell>
              <CellHeader>Step 1: State level calibration with sparsity</CellHeader>
              <CodeBlock>
{`# Use a small subset of states for demonstration
demo_state_areas = {
    "California": "0400000US06",
    "Texas": "0400000US48",
    "New York": "0400000US36"
}

state_level_calibrated_dataset = calibrate_single_geography_level(
    microsimulation_class=Microsimulation,
    calibration_areas=demo_state_areas,
    dataset="hf://policyengine/policyengine-us-data/cps_2023.h5",
    db_uri=db_uri,
    dataset_subsample_size=10000,  # Small sample for faster execution
    use_dataset_weights=False,  # Start with equal weights
    regularize_with_l0=True,  # Enable sparsity
    noise_level=10.0
)`}
              </CodeBlock>
            </NotebookCell>

            <NotebookCell>
              <CellHeader>Step 2: National level using state-calibrated weights</CellHeader>
              <CodeBlock>
{`demo_national_areas = {
    "United States": "0100000US"
}

national_level_calibrated_dataset = calibrate_single_geography_level(
    microsimulation_class=Microsimulation,
    calibration_areas=demo_national_areas,
    dataset="Demo_Dataset_state_level.h5",  # Use state-calibrated dataset
    db_uri=db_uri,
    stack_datasets=False,  # Don't stack since we're using pre-stacked data
    noise_level=0.0,  # Minimal noise to preserve state calibration
    use_dataset_weights=True,  # Start from state-calibrated weights
    regularize_with_l0=False  # No sparsity at national level
)`}
              </CodeBlock>
            </NotebookCell>

            <NotebookCell>
              <CellHeader style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.95)' }}>
                Method 2: All levels at once
              </CellHeader>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6, opacity: 0.9 }}>
                This approach stacks the base dataset for multiple geographic areas and calibrates all levels simultaneously.
              </p>
            </NotebookCell>

            <NotebookCell>
              <CellHeader>Simultaneous calibration across all levels</CellHeader>
              <CodeBlock>
{`# Use the same subset of states for fair comparison
fully_calibrated_dataset = calibrate_all_levels(
    microsimulation_class=Microsimulation,
    database_stacking_areas=demo_state_areas,
    geo_hierarchy=["0100000US", "0400000US"],
    dataset="hf://policyengine/policyengine-us-data/cps_2023.h5",
    db_uri=db_uri,
    dataset_subsample_size=1000,  # Sample size per area
    regularize_with_l0=True,  # Enable sparsity
    noise_level=10.0,
    raise_error=False  # Don't fail if some targets have no contributing records
)`}
              </CodeBlock>
            </NotebookCell>

            <NotebookCell>
              <CellHeader>When to use each method</CellHeader>
              <p style={{ marginBottom: '1rem', lineHeight: 1.6, opacity: 0.9 }}>
                <strong>Geographic level iteration:</strong> Use when you have limited computational resources, need fine-grained control, or have hierarchical targets.
              </p>
              <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
                <strong>All levels at once:</strong> Use when you have sufficient resources, want to optimize across all levels simultaneously, or need maximum data richness.
              </p>
            </NotebookCell>
          </NotebookContent>
        </NotebookContainer>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <SectionTitle>My contributions</SectionTitle>
        <List>
          <ListItem>
            It all started with discussions around calibrating with a matrix in wide or long format. After deciding to move on with long, I spent time helping develop the new matrix structure to calibrate at multiple geographic levels simultaneously.
          </ListItem>
          <ListItem>
            I also spent some time pulling new targets, particularly from the SOI IRS data. Shoutout to Pavel for reviewing my lengthy document where I tried identifying which variables we model in policyengine_us.
          </ListItem>
          <ListItem>
            After many discussions, we decided to store all calibration targets in a database, thanks Ben for all the work creating this in policyengine_us_data. It became clear we would need new code to handle data retrieval and updates efficiently, generalizing calibration routines to any dataset. policyengine_data was born.
          </ListItem>
          <ListItem>
            I worked in policyengine_data to implement the new calibration routines compatible with the database structure. I enabled both single geographic level calibration and simultaneous calibration across multiple levels, allowing more flexibility for the data enhancement goals PolicyEngine may develop.
          </ListItem>
        </List>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <SectionTitle>Learnings</SectionTitle>
        <List>
          <ListItem>
            I've learned so much about practical applications of ML and taking the theory to production.
          </ListItem>
          <ListItem>
            Designing the policyengine_data package from scratch, not only to achieve calibration but also keeping in mind compatibility with other repos and making it easy to develop for those working on it after me gave me a new perspective on developing large codebases.
          </ListItem>
          <ListItem>
            I've also gained a better understanding of how survey design, data sources, and data quality impact data science pipelines. It's mindblowing how many tools are out there for data enhancement and how much is yet to come to support representative and reliable policy analysis.
          </ListItem>
        </List>
        
        <div style={{ marginTop: '2rem' }}>
          <LinkButton href="https://github.com/PolicyEngine/us-congressional-districts" target="_blank">
            View US Congressional Districts →
          </LinkButton>
          <LinkButton href="https://github.com/PolicyEngine/policyengine-data" target="_blank">
            View PolicyEngine Data →
          </LinkButton>
        </div>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
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
          The Congressional Districts project is close to the finish line, but there are a couple things left to do:
        </p>
        <List>
          <ListItem>
            The UCGID geographic identifier does not represent a household's geographic location fully accurately, and it makes the current implementation not fully agnostic to the data's country of origin. Once policyengine_us is updated with a new geographic identifier, the calibration routines will need to be updated accordingly.
          </ListItem>
          <ListItem>
            Running calibration for all targets of all geographic levels at once is still a challenge given computational costs. We'll have to break down the calibration process, run it in a larger machine or use cloud computing. 
          </ListItem>
          <ListItem>
            Integration with policyengine_us_data!
          </ListItem>
        </List>
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>Related GitHub issues:</p>
          <div>
            <IssueBadge href="https://github.com/PolicyEngine/policyengine-data/issues" target="_blank">
              policyengine_data issues
            </IssueBadge>
            <IssueBadge href="https://github.com/PolicyEngine/policyengine-us-data/issues" target="_blank">
              policyengine_us_data issues
            </IssueBadge>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default CongressionalDistrictsPage;