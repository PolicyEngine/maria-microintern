import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  color: white;
  max-width: 1000px;
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

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled(motion.button)<{ $active: boolean }>`
  padding: 0.8rem 1.5rem;
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  border: 2px solid ${props => props.$active ? 'white' : 'transparent'};
  color: white;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  min-height: 400px;
`;

const Section = styled(motion.div)`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.95);
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
`;

const Quote = styled(motion.blockquote)`
  font-size: 1.3rem;
  font-style: italic;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-left: 4px solid rgba(255, 255, 255, 0.5);
  margin: 2rem 0;
  color: rgba(255, 255, 255, 0.9);
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
`;

const HighlightItem = styled(motion.li)`
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &:before {
    content: '✨';
    font-size: 1.5rem;
  }
`;

const ThankYou = styled(motion.div)`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  margin-top: 2rem;
`;

type TabType = 'learnings' | 'gratitude' | 'future';

const ReflectionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('learnings');

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Container>
      <Header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Reflections
      </Header>

      <TabContainer>
        <Tab
          $active={activeTab === 'learnings'}
          onClick={() => setActiveTab('learnings')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Key takeaways
        </Tab>
        <Tab
          $active={activeTab === 'gratitude'}
          onClick={() => setActiveTab('gratitude')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Gratitude
        </Tab>
        <Tab
          $active={activeTab === 'future'}
          onClick={() => setActiveTab('future')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Looking forward
        </Tab>
      </TabContainer>

      <ContentCard
        key={activeTab}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {activeTab === 'learnings' && (
          <>
            <Section variants={itemVariants}>
              <SectionTitle>Valuable lessons</SectionTitle>
              <HighlightList>
                <HighlightItem variants={itemVariants}>
                  I now know what start up culture is like. I loved working with a small team, seeing everyone's contributions being valued. I also love the dynamism and everyone's flexibility to adapt to changes and jump between tasks when someone needs help.
                </HighlightItem>
                <HighlightItem variants={itemVariants}>
                  I gained a deeper understanding and commitment to open-source projects, especially in the context of public policy and social impact, where transparent and reliable data can make such a difference.
                </HighlightItem>
                <HighlightItem variants={itemVariants}>
                  I knew GitHub was cool but, damn, it can do so much! I really like how it supports collaboration and project management. 
                </HighlightItem>
                <HighlightItem variants={itemVariants}>
                  Working remotely is very comfortable, but there is still so much value in in-person collaboration. I loved the experience of working with the team in London, and even if not the most time efficient, stand-ups were the highlight of my days and kept me motivated.
                </HighlightItem>
              </HighlightList>
            </Section>
            <Section variants={itemVariants}>
              <SectionTitle>Professional growth</SectionTitle>
            </Section>
            <Quote variants={itemVariants}>
              I think I've built a lot of technical skills, but also a lot of dynamism and adaptability. I feel more confident in my ability to contribute to complex projects and jump from one thing to another to be there where I can be of most help.
            </Quote>
          </>
        )}

        {activeTab === 'gratitude' && (
          <>
            <Section variants={itemVariants}>
              <SectionTitle>Thank you to the team</SectionTitle>
              <Paragraph>
                Thank you so much everyone for keeping me motivated and supporting my learning throughout. Special mention to Nikhil for being such a great mentor, always so fast to answer my questions and with so many examples and guidance for me to know what to do next.
              </Paragraph>
            </Section>
            <Section variants={itemVariants}>
              <SectionTitle>Memorable moments</SectionTitle>
              <HighlightList>
                <HighlightItem variants={itemVariants}>
                  I really enjoyed the two days that Ben and I spent diving into every imputation model while in London. I felt so much more comfortable with the results I was producing and started to truly understand the math behind it all.
                </HighlightItem>
                <HighlightItem variants={itemVariants}>
                  I really appreciated when Max invited me to a meeting with Urban Institute to discuss the Social Genome Project they were working on. I loved seeing how our work interacts with the broader policy and social impact landscape and how we can contribute to it. I learned a lot debriefing about it with him afterwards.
                </HighlightItem>
                <HighlightItem variants={itemVariants}>
                  There's been a couple stand-ups and post-scrums that were particularly fun and engaging, for example the time we spent like three hours discussing a new dataset schema and just nerded around possible implementations with Anthony, Ben and Mike.
                </HighlightItem>
              </HighlightList>
            </Section>
            <ThankYou variants={itemVariants}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🙏 Thank you!</h2>
              <p>To everyone at PolicyEngine for this incredible opportunity</p>
            </ThankYou>
          </>
        )}

        {activeTab === 'future' && (
          <>
            <Section variants={itemVariants}>
              <SectionTitle>How this experience shapes my future</SectionTitle>
              <Paragraph>
                Well, now I have a lot of developer skills that I never thought I would even seek. I feel closer to what data science is especially in interaction with the social sciences and public policy. I hope to continue working in this field, contributing to open-source projects that have a positive social impact. I must admit I didn't think I would work in econ related topics, but more and more, I find I get really curious and excited about modeling all these complex behaviors.
              </Paragraph>
            </Section>
            <Section variants={itemVariants}>
              <SectionTitle>Continued contributions</SectionTitle>
              <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                In the short term, I plan to keep contributing to microimpute as part of my thesis, focusing on improving its performance and usability. I really hope to get that paper out and contribute to research in the field. If new ideas about data imputation and its applications arise, please reach out! I'd love to hear them and keep them in mind while I work on microimpute.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                And of course, if you have any questions about the things I have been working on or need a quick clarification please let me know! I will be happy to help. I will also keep an eye on the PolicyEngine slack and may show up to a stand-up if to share microimpute updates.
              </p>
            </Section>
            <Section variants={itemVariants}>
              <SectionTitle>Next steps</SectionTitle>
              <HighlightList>
                <HighlightItem variants={itemVariants}>
                  For now, writing my thesis on microimpute, taking my last data science courses and graduating!
                </HighlightItem>
                <HighlightItem variants={itemVariants}>
                  I hope to explore more about the intersection of data science and social impact, and attend a couple conferences to learn more about the latest developments, that was great fun.
                </HighlightItem>
              </HighlightList>
            </Section>
          </>
        )}
      </ContentCard>
    </Container>
  );
};

export default ReflectionSection;