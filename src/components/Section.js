import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, P, H6, H1, PreviewImg } from '../styles';

const Section = memo(({ category, title, link, tech, description, imgSrc }) => (
  <Flex
    className="scroll-snap-element"
    px={['3rem', '4rem']}
    flexDirection="column"
    minHeight="100vh"
    style={{ scrollSnapAlign: 'start' }}
  >
    <div>
      <H6 mt="3rem" textAlign="right" color="greys.light">
        {category}
      </H6>

      <Box
        mt={['3rem', '3rem', '4rem']}
        width="100%"
        maxWidth={['100%', '65vw', '100%', '45vw', '35vw']}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <H1>{title}</H1>
        </a>
        <H6 mt="1rem" color="greys.light">
          {tech.map(
            (item, i, arr) => item + (i !== arr.length - 1 ? ' | ' : '')
          )}
        </H6>
        <P mt="1rem">{description}</P>
      </Box>
    </div>

    <Box mt={['3rem', '4rem']}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <PreviewImg
          width={['140vw', '100vw', '70vw']}
          src={imgSrc}
          alt={title}
        />
      </a>
    </Box>
  </Flex>
));

Section.defaultProps = {
  link: undefined,
  tech: [],
};

Section.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Section;
