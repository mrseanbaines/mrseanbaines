import React, { memo } from 'react';
import { Flex, Box, P, H6, StyledSidebar, SocialLinks } from '../styles';
import '@fortawesome/fontawesome-free/css/all.min.css';

const socialLinks = [
  {
    href: 'https://github.com/mrseanbaines',
    icon: 'fab fa-github-alt',
    title: 'GitHub',
  },
  {
    href: 'https://twitter.com/mrseanbaines',
    icon: 'fab fa-twitter',
    title: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/seanbaines',
    icon: 'fab fa-linkedin',
    title: 'LinkedIn',
  },
  {
    href: 'https://medium.com/@mrseanbaines',
    icon: 'fab fa-medium-m',
    title: 'Medium',
  },
  {
    href: 'https://www.instagram.com/mrseanbaines',
    icon: 'fab fa-instagram',
    title: 'Instagram',
  },
  {
    href: 'mailto:mrseanbaines@gmail.com',
    icon: 'fas fa-at',
    title: 'Email',
  },
];

export default memo(() => (
  <StyledSidebar>
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      p="4rem"
    >
      <Box>
        <P>Sean Baines</P>
        <H6>Frontend | JavaScript | React | Redux</H6>
      </Box>

      <Box>
        <Box mt="4rem">
          <H6>About</H6>
          <P mt="1rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            vitae perferendis obcaecati reiciendis.
          </P>
        </Box>
        <Box mt="4rem">
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
