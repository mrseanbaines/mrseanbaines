import React, { memo } from 'react';
import { ScrollableContainer } from '../styles';
import projects from '../data/projects';
import Section from './Section';
import vsCodeSrc from '../images/vs-code.png';

export default memo(() => (
  <ScrollableContainer
    pl={[0, 0, 0, '4rem']}
    height="100vh"
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
        projectLink={project.projectLink}
        codeLink={project.codeLink}
        tech={project.tech}
        description={project.description}
        imgSrc={project.imgSrc}
      />
    ))}
  </ScrollableContainer>
));
