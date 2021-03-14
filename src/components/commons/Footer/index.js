import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

const FooterWrapper = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('align-items')}
  ${propToStyle('justify-content')}  
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      rodapé
    </FooterWrapper>
  );
}
