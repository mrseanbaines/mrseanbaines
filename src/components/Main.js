import React, { memo } from 'react';
import { Flex, Box, P, H6, H1, PreviewImg } from '../styles';
import projects from '../data/projects';

export default memo(() => (
  <Box pl={[0, 0, 0, '4rem']} overflow="hidden auto" height="100vh">
    {projects.map(project => (
      <Flex
        key={project.title}
        id={project.title.toLowerCase().replace(' ', '-')}
        px={['3rem', '4rem']}
        flexDirection="column"
        minHeight="100vh"
      >
        <div>
          <H6
            mt={['3rem', '3rem', '4rem']}
            textAlign="right"
            color="greys.light"
          >
            Projects
          </H6>

          <Box
            mt={['3rem', '3rem', '4rem']}
            width="100%"
            maxWidth={['100%', '65vw', '100%', '45vw', '35vw']}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <H1>{project.title}</H1>
            </a>
            <H6 mt="1rem" color="greys.light">
              {project.tech.map(
                (item, i, arr) => item + (i !== arr.length - 1 ? ' | ' : '')
              )}
            </H6>
            <P mt="1rem">{project.description}</P>
          </Box>
        </div>

        <Box mt={['3rem', '4rem']}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <PreviewImg
              width={['130vw', '100vw', '50vw', '70vw']}
              src={project.imgSrc}
              alt={project.title}
            />
          </a>
        </Box>
      </Flex>
    ))}
  </Box>
));
