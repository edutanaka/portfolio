import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import Nav from './Nav';
import { Logo } from '../../../theme/Logo';

const CabecalhoWrapper = styled.div`
  ${propToStyle('flex')}    
`;

export default function Cabecalho(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CabecalhoWrapper {...props}>
      <Logo />
      <Nav />
    </CabecalhoWrapper>
  );
}
