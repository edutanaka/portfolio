import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { Logo } from '../../../theme/Logo';

const CabecalhoWrapper = styled.div`
  outline: 1px solid red;
  display: flex;  
  
`;

export default function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <Logo />
      <Nav />
    </CabecalhoWrapper>
  );
}
