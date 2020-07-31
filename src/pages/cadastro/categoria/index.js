import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    );
  }

  // ============

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = "http://localhost:8080/categorias";
      fetch(URL).then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error("Não foi possível pegar os dados");
      });
    }
  }, []);

  return (
    <PageDefault>
      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          setCategorias([...categorias, values]);

          setValues(valoresIniciais);
        }}
      >
        <h1>Cadastro de Categoria: {values.nome}</h1>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button
          style={{
            width: "90%",
            textAlign: "center",
            margin: "5vh",
            borderRadius: "14px",
            borderColor: "#5358",
            background: "#a51c3171",
          }}
        >
          Cadastrar
        </Button>
      </form>

      {categorias.titulo === "" && (
        <div>
          {/*Carregando*/}
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categorias, indice) => {
          return (
            <li key={`${categorias.titulo}${indice}`}>{categorias.titulo}</li>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
