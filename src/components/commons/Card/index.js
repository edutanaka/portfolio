import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`  
  padding: 20px;
`;

export default function Card(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CardWrapper {...props}>
      Card
    </CardWrapper>
  );
}
