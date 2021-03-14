import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.ul`
  display: flex;    
  flex: 1;
  justify-content: flex-end;
  align-items: center;  
  
  li {
    margin: 0 20px;
  };
  
`;

export default function Nav() {
  return (
    <NavWrapper>
      <li>sobre mim</li>
      <li>projetos</li>
    </NavWrapper>
  );
}
