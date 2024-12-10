import styled from "styled-components";
import { motion } from "framer-motion";


export const Title = styled(motion.span)`
  
  color: white;
  font-size: 2.4rem;
  font-weight:700;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 0.1s infinity;
`;


export const AnimationBody = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
`;