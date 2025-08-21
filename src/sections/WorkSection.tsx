import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: -40px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechBadge = styled.a`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  font-size: 0.85rem;
  font-family: 'Roboto Mono', monospace;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SmallLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const repoLinks: { [key: string]: string } = {
  'policyengine_us': 'https://github.com/PolicyEngine/policyengine-us',
  'microimpute': 'https://github.com/PolicyEngine/microimpute',
  'microcalibrate': 'https://github.com/PolicyEngine/microcalibrate',
  'l0': 'https://github.com/PolicyEngine/l0',
  'microdf': 'https://github.com/PolicyEngine/microdf',
  'policyengine_uk': 'https://github.com/PolicyEngine/policyengine-uk',
  'policyengine_us_data': 'https://github.com/PolicyEngine/policyengine-us-data',
  'us_congressional_districts': 'https://github.com/PolicyEngine/us-congressional-districts',
  'policyengine_data': 'https://github.com/PolicyEngine/policyengine-data',
  'policyengine_core': 'https://github.com/PolicyEngine/policyengine-core',
};

const projects = [
  {
    id: 1,
    title: "Parameter updates",
    icon: "🔄",
    description: "Updated tax and benefit parameters in PolicyEngine US to reflect latest legislation",
    tech: ["policyengine_us"],
    route: "/projects/parameter-updates"
  },
  {
    id: 2,
    title: "MicroImpute",
    icon: "🎯",
    description: "Statistical imputation framework for transferring variables between surveys with method benchmarking and evaluation tools",
    tech: ["microimpute"],
    route: "/projects/microimpute"
  },
  {
    id: 3,
    title: "MicroCalibrate",
    icon: "⚖️",
    description: "Survey weight calibration using gradient descent with real-time visualization dashboard",
    tech: ["microcalibrate", "l0"],
    route: "/projects/microcalibrate"
  },
  {
    id: 4,
    title: "Cross-repo contributions",
    icon: "🔧",
    description: "Bug fixes, feature additions, and documentation improvements across PolicyEngine repositories",
    tech: ["microdf", "policyengine_uk", "policyengine_us", "policyengine_us_data"],
    route: "/projects/cross-repo"
  },
  {
    id: 5,
    title: "Congressional district calibration",
    icon: "🏛️",
    description: "Created calibration routines compatible with the new targets database and helped calibrate at state and congressional district levels",
    tech: ["us_congressional_districts", "policyengine_us_data", "policyengine_data"],
    route: "/projects/congressional-districts"
  },
  {
    id: 6,
    title: "New data schema",
    icon: "📊",
    description: "Generalized SingleYearDataset and MultiYearDataset enabling some new functionality and a more linear, function-based dataset generation process",
    tech: ["policyengine_data", "policyengine_core"],
    route: "/projects/data-schema"
  },
];

const WorkSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My work at PolicyEngine
      </Header>
      
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate(project.route)}
          >
            <ProjectTitle>
              <span style={{ fontSize: '1.8rem' }}>{project.icon}</span>
              {project.title}
            </ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechStack>
              {project.tech.map((tech) => (
                <TechBadge 
                  key={tech} 
                  href={repoLinks[tech]} 
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  {tech}
                </TechBadge>
              ))}
            </TechStack>
            <LinkRow>
              <SmallLink>
                Click to explore →
              </SmallLink>
            </LinkRow>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  );
};

export default WorkSection;