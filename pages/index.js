import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import { Box } from '../src/components/foundation/layout/Box';

export default function Home() {
  return (
    <Box>
      <Capa />
      <Cabecalho />
    </Box>
  );
}
