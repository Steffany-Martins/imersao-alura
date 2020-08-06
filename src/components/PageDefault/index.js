import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import styled from "styled-components";

const Main = styled.main`
  background: linear-gradient(9deg, #580c1f 10%, #141414 50%);
  color: var(--white);
  flex: 1;
  padding: -8px 5% 0 2%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
