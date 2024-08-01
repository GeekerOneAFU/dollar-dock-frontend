import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import OuterAppContainer from '../components/OuterAppContainer';

const Header = styled(motion.div)`
  width: 100%;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 100;

  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #000;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    margin: 0;
  }

  button:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Section = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Image = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 99;
`;

// Motion variants
const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const sectionVariants = {
  offscreen: { y: 300, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Home = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <OuterAppContainer>
      <Header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Dollar Dock</h1>
        <ul>
          <li>
            <a href="#/">Home</a>
          </li>
          <li>
            <a href="#/">About</a>
          </li>
          <li>
            <a href="#/">Contact</a>
          </li>
        </ul>

        <button onClick={() => scrollYProgress.set(0)}>Scroll to top</button>
      </Header>
      <Section
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <Image bg="/img/1.jpg" />
      </Section>
      <Section
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image bg="/img/2.png" />
      </Section>
      <Section
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image bg="/img/3.png" />
      </Section>
    </OuterAppContainer>
  );
};

export default Home;
