import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/Menu/components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import ButtonLink from '../../../components/Menu/components/ButtonLink';

function CadastroCategoria () {
  const [categorias, setCategorias] = useState([]);
  const valoresInicias = {
    nome:'',
    descricao:'',
    cor:'',
  }
  const [values, setvalues] = useState(valoresInicias);

  function setValue(chave, valor){
    setvalues({
      ...values,
      [chave]:valor,
    })
  }

  function handleChange(infosDoEvento){
    const { getAttribute, value } = infosDoEvento.target;
    setValue(infosDoEvento.target.getAttribute('name'),value);
  }



  useEffect(() => {
    console.log('Alo brasil');
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta, 
        ]);
      })
  }, [

  ]);


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setvalues(valoresInicias);
      }}>
        
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField 
          label="Descrição"
          type=""
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />


        {/* <div>
          <label>
            Descrição:
            <textarea type="text" value={values.descricao} name="descricao" onChange={handleChange}/>
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
            <input  type="color" value={values.cor} name="cor" onChange={handleChange}/>
          </label>
        </div> */}
        <ButtonLink>Cadastrar</ButtonLink>
      </form>

      
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}


export default CadastroCategoria;