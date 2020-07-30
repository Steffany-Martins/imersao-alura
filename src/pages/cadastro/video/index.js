import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

const CadastroVideo = () => {
  return (
    <>
      <PageDefault>
        <Link to="/cadastro/video">Cadastrar video</Link>
      </PageDefault>
    </>
  );
};

export default CadastroVideo;
