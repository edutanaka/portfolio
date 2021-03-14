import React from 'react';
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

const SectionTitleWrapper = styled.div`
  ${propToStyle('flex')}
`;

export default function SectionTitle(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SectionTitleWrapper {...props}>
      Meus Projetos
    </SectionTitleWrapper>
  );
}
