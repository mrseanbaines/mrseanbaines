import React, { memo } from 'react';
import { Flex, Box, P, H6, H1, PreviewImg } from '../styles';
import colorKeywordsSrc from '../images/color-keywords.png';

export default memo(() => (
  <Flex flexDirection="column">
    <Box p={['2rem', '2rem', '2rem', '4rem']}>
      <H6 textAlign="right" color="greys.light">
        Projects
      </H6>

      <Box p={['2rem', '2rem', '2rem', '4rem']}>
        <Box width="100%" maxWidth={['100%', '65vw', '100%', '35vw']}>
          <H1>Color keywords</H1>
          <H6 mt="1rem" color="greys.light">
            JavaScript | React | TypeScript | Styled Components
          </H6>
          <P mt="1rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vitae perferendis obcaecati reiciendis id eligendi nesciunt modi
            cupiditate, mollitia, laborum eius minima aliquid veritatis magni
            iste atque suscipit commodi necessitatibus!
          </P>
        </Box>

        <Box mt={['3rem', '3rem', '4rem']}>
          <a
            href="https://www.colorkeywords.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PreviewImg src={colorKeywordsSrc} alt="Color keywords" />
          </a>
        </Box>
      </Box>
    </Box>
  </Flex>
));
