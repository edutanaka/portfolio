import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

const CapaWrapper = styled.div`
  ${propToStyle('flex')}  
`;

export default function Capa(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CapaWrapper {...props}>
      <h1>Capa</h1>
    </CapaWrapper>
  );
}
