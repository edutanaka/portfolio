import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  background-color: #FAFAFA;
  color: black;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      rodapé
    </FooterWrapper>
  );
}
