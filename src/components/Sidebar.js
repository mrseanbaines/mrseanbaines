import React, { memo } from 'react';
import { Flex, Box, P, H6, StyledSidebar, SocialLinks } from '../styles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import socialLinks from '../data/socialLinks';

export default memo(() => (
  <StyledSidebar>
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      p="3rem"
    >
      <Box pt={['2rem', 0]}>
        <P>Sean Baines</P>
        <H6>Frontend | JavaScript | React | Redux</H6>
      </Box>

      <Box>
        <Box mt={['3rem', '4rem']}>
          <H6>About</H6>
          <P mt="1rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vitae perferendis obcaecati reiciendis.
          </P>
        </Box>
        <Box mt={['3rem', '4rem']}>
          <H6>Contact</H6>
          <SocialLinks>
            {socialLinks.map(({ href, icon, title }) => (
              <li key={title}>
                <P mt="1rem">
                  <a
                    title={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={icon} />
                  </a>
                </P>
              </li>
            ))}
          </SocialLinks>
        </Box>
      </Box>
    </Flex>
  </StyledSidebar>
));
