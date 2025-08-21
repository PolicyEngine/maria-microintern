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

const DataSchemaPage: React.FC = () => {
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
        New data schema
      </Header>
      
      <Subtitle
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Modernizing PolicyEngine's data architecture for improved performance and flexibility
      </Subtitle>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <SectionTitle>Project overview</SectionTitle>
        <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
          PolicyEngine's growth demanded a more scalable and maintainable data architecture. This project 
          involved redesigning how PolicyEngine builds, stores, and retrieves datasets, moving from a class-based  
          structure full of inheritance, to a more function-based approach improving clarity and
          developer experience.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          The new schema introduces the simple SingleYearDataset and MultiYearDataset classes (building on Nikhil's work) that provide 
          a consistent interface for all data entities (loaded in tables) while supporting dataset generation operations with functions.
        </p>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <SectionTitle>Technical implementation</SectionTitle>
        <NotebookContainer>
          <NotebookHeader>
            📓 Dataset classes documentation
            <NotebookLink href="https://github.com/PolicyEngine/policyengine-data/blob/main/docs/dataset.ipynb" target="_blank">
              View full notebook →
            </NotebookLink>
          </NotebookHeader>
          <NotebookContent>
            <NotebookCell>
              <CellHeader style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.95)' }}>
                SingleYearDataset - Creating datasets for a single time period
              </CellHeader>
            </NotebookCell>
            
            <NotebookCell>
              <CellHeader>Method 1: From entity DataFrames</CellHeader>
              <CodeBlock>
{`# Create sample data for demonstration
np.random.seed(42)

# Person-level data
person_data = pd.DataFrame({
    'person_id': range(1000),
    'age': np.random.randint(18, 80, 1000),
    'income': np.random.normal(50000, 15000, 1000),
    'household_id': np.repeat(range(400), [3, 2, 3, 2] * 100)  # Varying household sizes
})

# Household-level data
household_data = pd.DataFrame({
    'household_id': range(400),
    'household_size': np.random.randint(1, 6, 400),
    'housing_cost': np.random.normal(1200, 300, 400),
    'state': np.random.choice(['CA', 'TX', 'NY', 'FL'], 400)
})

# Create entities dictionary
entities = {
    'person': person_data,
    'household': household_data
}

# Create SingleYearDataset
dataset_2023 = SingleYearDataset(
    entities=entities,
    time_period=2023
)`}
              </CodeBlock>
            </NotebookCell>

            <NotebookCell>
              <CellHeader>Method 2: Loading from HDF5 file</CellHeader>
              <CodeBlock>
{`# Save the dataset to an HDF5 file
file_path = "sample_dataset_2023.h5"
dataset_2023.save(file_path)
print(f"Dataset saved to {file_path}")

# Load the dataset from the HDF5 file
loaded_dataset = SingleYearDataset(file_path=file_path)
print(f"Dataset loaded from file for year: {loaded_dataset.time_period}")
print(f"Loaded entities: {list(loaded_dataset.entities.keys())}")`}
              </CodeBlock>
            </NotebookCell>

            <NotebookCell>
              <CellHeader>Method 3: From a PolicyEngine MicroSimulation</CellHeader>
              <CodeBlock>
{`from policyengine_us import Microsimulation

start_year = 2023
dataset = "hf://policyengine/policyengine-us-data/cps_2023.h5"

sim = Microsimulation(dataset=dataset)

single_year_dataset = SingleYearDataset.from_simulation(sim, time_period=start_year)
single_year_dataset.time_period = start_year

print(f"Dataset created from PolicyEngine US microdata stored in {dataset}")
print(f"Dataset created for time period: {single_year_dataset.time_period}")`}
              </CodeBlock>
            </NotebookCell>

            <NotebookCell>
              <CellHeader style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.95)' }}>
                MultiYearDataset - Handling data across multiple years
              </CellHeader>
            </NotebookCell>
            
            <NotebookCell>
              <CellHeader>Creating MultiYearDataset from SingleYearDataset list</CellHeader>
              <CodeBlock>
{`# Create datasets for multiple years
datasets_by_year = []

for year in [2021, 2022, 2023, 2024]:
    # Create slightly different data for each year (e.g., income growth)
    year_person_data = person_data.copy()
    year_person_data['income'] = year_person_data['income'] * (1.03 ** (year - 2023))  # 3% annual growth
    
    year_household_data = household_data.copy()
    year_household_data['housing_cost'] = year_household_data['housing_cost'] * (1.05 ** (year - 2023))  # 5% annual growth
    
    year_entities = {
        'person': year_person_data,
        'household': year_household_data
    }
    
    year_dataset = SingleYearDataset(
        entities=year_entities,
        time_period=year
    )
    datasets_by_year.append(year_dataset)

# Create MultiYearDataset
multi_year_dataset = MultiYearDataset(datasets=datasets_by_year)`}
              </CodeBlock>
            </NotebookCell>
          </NotebookContent>
        </NotebookContainer>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <SectionTitle>My contributions</SectionTitle>
        <List>
          <ListItem>
            Generalized Nikhil's SingleYearDataset and MultiYearDataset classes design with some new touches
          </ListItem>
          <ListItem>
            Adapted Nikhil's key normalization functionality for dataset stacking
          </ListItem>
          <ListItem>
            Developed class conversion functions for compatibility with the old Dataset class and PolicyEngine's microsimulation objects
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
            I learned the intricacies of the Dataset class and how it can be loaded or retrieved from Hugging Face
          </ListItem>
          <ListItem>
            I had a lot of fun working with the new data schema, building on Nikhil's design and adding my own contributions
          </ListItem>
        </List>
        
        <div style={{ marginTop: '2rem' }}>
          <LinkButton href="https://github.com/PolicyEngine/policyengine-data" target="_blank">
            View PolicyEngine Data →
          </LinkButton>
          <LinkButton href="https://github.com/PolicyEngine/policyengine-core" target="_blank">
            View PolicyEngine Core →
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
          Given that the policyengine_core Simulation object only works with the old Dataset class, updating _core to use the new schema may be a ride. Once that's done though, the policyengine_data repo could be simplified significantly. 
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>Related GitHub issues:</p>
          <div>
            <IssueBadge href="https://github.com/PolicyEngine/policyengine-core/issues/394" target="_blank">
              policyengine_core
            </IssueBadge>
            <IssueBadge href="https://github.com/PolicyEngine/policyengine-data/issues/21" target="_blank">
              policyengine_data
            </IssueBadge>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default DataSchemaPage;