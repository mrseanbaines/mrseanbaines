import React, { memo } from 'react';
import { ScrollableContainer } from '../styles';
import sections from '../data/sections';
import Section from './Section';

export default memo(() => (
  <ScrollableContainer
    pl={[0, 0, 0, '4rem']}
    height="100vh"
    id="scroll-snap-container"
  >
    {sections.map(section => (
      <Section
        key={section.title}
        category={section.category}
        title={section.title}
        projectLink={section.projectLink}
        codeLink={section.codeLink}
        tech={section.tech}
        description={section.description}
        imgSrc={section.imgSrc}
      />
    ))}
  </ScrollableContainer>
));
