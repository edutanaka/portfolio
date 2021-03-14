import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';
import Card from '../Card';

const WrapperProjetosWrapper = styled.div`
  ${propToStyle('flex')}
`;

export default function WrapperProjetos(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <WrapperProjetosWrapper {...props}>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
    </WrapperProjetosWrapper>
  );
}
