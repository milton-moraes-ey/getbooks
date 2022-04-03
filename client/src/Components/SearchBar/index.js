import React from "react";

import { Container } from "./styles";

function SearchBar() {
  return (
    <Container>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Procure por livros, autores, categorias..."
      />
      <label name="search" className="search">
        
        <button>
          Procurar</button>
      </label>
    </Container>
  );
}

export default SearchBar;
