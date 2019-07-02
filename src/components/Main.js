import React, { memo } from 'react';
import { Box } from '../styles';
import projects from '../data/projects';
import Section from './Section';
import vsCodeSrc from '../images/vs-code.png';

export default memo(() => (
  <Box
    pl={[0, 0, 0, '4rem']}
    overflow="hidden auto"
    height="100vh"
    style={{ scrollSnapType: 'y mandatory' }}
    id="scroll-snap-container"
  >
    <Section
      category="Welcome"
      title="Hello world!"
      tech={['Sean Baines', 'Front end developer']}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit temporibus architecto consectetur, aperiam sapiente voluptate quo ipsa voluptatum quas corporis vero voluptates et excepturi veniam fuga id corrupti molestias"
      imgSrc={vsCodeSrc}
    />

    {projects.map(project => (
      <Section
        key={project.title}
        category="Projects"
        title={project.title}
        link={project.link}
        tech={project.tech}
        description={project.description}
        imgSrc={project.imgSrc}
      />
    ))}
  </Box>
));
