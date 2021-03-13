import React from 'react';
import styled from 'styled-components';

const SectionTitleWrapper = styled.div`
  outline: 1px solid orange;
`;

export default function SectionTitle() {
  return (
    <SectionTitleWrapper>
      Meus Projetos
    </SectionTitleWrapper>
  );
}
