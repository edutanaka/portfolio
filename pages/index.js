import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import { Box } from '../src/components/foundation/layout/Box';
import SectionTitle from '../src/components/commons/SectionTitle';
import Footer from '../src/components/commons/Footer';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Capa
        flex="3"
      />
      <Cabecalho
        flex="1"
      />
      <SectionTitle
        flex="1"
      />
      <WrapperProjetos
        flex="8"
      />
      <Footer
        display="flex"
        flex="1"
        align-items="center"
        justify-content="center"
      />
    </Box>
  );
}
