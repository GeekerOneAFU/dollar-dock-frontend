import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import OuterAppContainer from '../components/OuterAppContainer';
import OuterAppHeader from '../partials/OuterAppHeader';

const Section = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 1;

  & h1 {
    width: clamp(300px, 70vw, 70%);
    font-size: clamp(50px, 10vw, 90px);
    font-weight: 700;
    color: white;
    margin: 0;
    padding: 10px 0;
    box-sizing: border-box;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    text-align: center;
  }

  & .call-to-action {
    color: white;
    text-transform: uppercase;
    word-spacing: 2px;
    font-weight: bold;
    font-size: 20px;
    width: fit-content;
    text-shadow: 6px 6px 12px Teal;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -5%;
    padding: 15px 50px;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
    background: rgba(0, 128, 128, 1);
    border-radius: 5px;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    white-space: nowrap;
    line-height: 20px;
    transition: all 0.1s ease;

    &:hover {
      box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.8);
      outline: 3px solid rgba(255, 255, 255, 0.8);
      outline-offset: 1px;
    }
  }
`;

const SubSection = styled(motion.div)` 
    width: 100%;
    height: fit-content;
    min-height: 120vh;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 50px 0;
    box-sizing: border-box;
    margin: 0;
    z-index: 2;
`;

const sectionVariants = {
  intial: { y: 300, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const subSectionVariants = {
  intial: { y: 300, opacity: 0 },
  animate: {
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

  return (
    <OuterAppContainer>
      <OuterAppHeader />
      <Section
        as={motion.div}
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.8 }}
        style={{
            backgroundImage: "url(/img/4.jpg)",
            borderRadius: "25px 25px 0 0",
            height: "500vh",
        }}
      >

        <SubSection
          as={motion.div}
          variants={subSectionVariants}
          viewport={{ once: true, amount: 0.8 }}
          style={{
              background: "none",
              justifyContent: 'center',
              flexDirection: 'column',
              position: "relative",
          }}
        >

        <motion.h1
            initial={{ y: -800 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 1.5 }}
            style={{ 
                margin: "-150px 0 0 0",
                lineHeight: "80px",
            }}
        >
            Your finance <br /> manager
        </motion.h1>

        <motion.button
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            className="call-to-action"
        >
            Start your journey
            <br />
            <sub style={{ fontSize: "15px" }}>It's Free & will always be!</sub>
        </motion.button>

        </SubSection>

        <SubSection
          as={motion.div}
          variants={subSectionVariants}
          viewport={{ once: true, amount: 0.8 }}
          style={{
              background: "rgba(255, 255, 255, 1)",
              borderRadius: "0 0 25px 25px",
              justifyContent: 'space-around',
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        >
            
            <div 
                style={{ 
                    width: "40vw", 
                    height: "100%", 
                    position: "relative" 
                }}>
                <img 
                    src="/img/2.png" 
                    alt="DollarDock" 
                    style={{ 
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        maxWidth: "100%", 
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        borderRadius: "25px",
                        zIndex: 9,
                        position: "absolute",
                        top: "-16%",
                        left: "8%",
                    }} 
                />
            </div>
            <div
                style={{ 
                    width: "50vw",
                    textAlign: "left", 
                }}
            >
                <h2 
                    style={{ 
                        fontSize: "45px",
                        textAlign: "left", 
                        fontWeight: "bold", 
                        color: "teal",
                        padding: "10px 40px",

                    }}>Why DollarDock?</h2>
                <p 
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 0 40px", 
                    }}
                >
                    At DollarDock, we believe managing your finances should be straightforward, 
                    intuitive, and empowering. With our innovative platform, 
                    we bring you a suite of tools designed to 
                    not only simplify your financial 
                    management but also amplify 
                    your financial growth.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>One-Stop Dashboard:</strong> Get a clear view of your finances at a glance. 
                    Our dashboard integrates your spending, savings, investments, and upcoming bills, 
                    so you know exactly where you stand at any moment.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Real-Time Updates:</strong> Your financial data is refreshed in real-time, 
                    providing you with up-to-the-minute information on your financial status.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Customizable Budgets:</strong> Create budgets that truly fit your lifestyle. 
                    Adjust and set up rules that help you manage your spending according to your priorities.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Insightful Reports:</strong> Understand your spending habits with detailed reports 
                    that help you see spending trends, potential savings areas, and opportunities to cut costs.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Bank-Level Security:</strong>Your security is our top priority.  
                    DollarDock uses advanced encryption and security protocols to keep your data safe and secure.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Privacy-First Policy:</strong> We never sell your data or share it with third parties 
                    without your explicit consent.
                </p>
            </div>
        </SubSection>

        <SubSection
          as={motion.div}
          variants={subSectionVariants}
          viewport={{ once: true, amount: 0.8 }}
          style={{
              background: "rgba(0, 0, 0, 0.2)",
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row-reverse',
              padding: '50px 0 50px 0',
          }}
        >

            <div 
                style={{ 
                    width: "40vw", 
                    height: "100%", 
                    position: "relative" 
                }}>
                <img 
                    src="/img/3.png" 
                    alt="DollarDock" 
                    style={{ 
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        maxWidth: "100%", 
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        borderRadius: "25px",
                        zIndex: 9,
                        position: "absolute",
                        top: "8%",
                        right: "8%",
                    }} 
                />
            </div>
            
            <div
                style={{ 
                    width: "50vw",
                    textAlign: "left",
                    padding: "15px 0 30px 0", 
                    color: "white",
                }}
            >
                <h2 
                    style={{ 
                        fontSize: "45px",
                        textAlign: "left", 
                        fontWeight: "bold", 
                        padding: "10px 40px",

                    }}>Join Thousands of Satisfied Users!</h2>
                <p 
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 0 40px", 
                    }}
                >
                    Discover why so many people are choosing DollarDock to manage their finances. 
                    Sign up today and take the first step towards a brighter, more secure financial future. 
                    Experience the difference with DollarDock — where your financial wellness is our mission.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>One-Stop Dashboard:</strong> Get a clear view of your finances at a glance. 
                    Our dashboard integrates your spending, savings, investments, and upcoming bills, 
                    so you know exactly where you stand at any moment.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Real-Time Updates:</strong> Your financial data is refreshed in real-time, 
                    providing you with up-to-the-minute information on your financial status.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Customizable Budgets:</strong> Create budgets that truly fit your lifestyle. 
                    Adjust and set up rules that help you manage your spending according to your priorities.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Insightful Reports:</strong> Understand your spending habits with detailed reports 
                    that help you see spending trends, potential savings areas, and opportunities to cut costs.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Bank-Level Security:</strong>Your security is our top priority.  
                    DollarDock uses advanced encryption and security protocols to keep your data safe and secure.
                </p>

                <p
                    style={{ 
                        textAlign: "justify",
                        fontSize: "16px",
                        padding: "10px 40px 5px 40px", 
                    }}
                >
                    <strong>Privacy-First Policy:</strong> We never sell your data or share it with third parties 
                    without your explicit consent.
                </p>
            </div>

        </SubSection>

      </Section>
      <Section
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        style={{
            borderRadius: "25px",
        }}
      >
        <motion.h2 style={{ color: "white" }}>The system is upto date.</motion.h2>
      </Section>
      <Section
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        style={{
            backgroundColor: "teal",
            margin: "0 0 50px 0",
        }}
      >
        <motion.h2 style={{ color: "white" }}>The system is upto date.</motion.h2>
      </Section>
    </OuterAppContainer>
  );
};

export default Home;
