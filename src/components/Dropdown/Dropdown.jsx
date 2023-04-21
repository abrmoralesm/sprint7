import { Container } from "./DropdownStyled";



import Boto from "../Button/Button";


const Dropdown = ({ pages, languages, setPages, setLanguage, handleClick }) => (
  <Container>
    <div>
      <label htmlFor="pages">Número de páginas</label>
      <div>
        <Boto
          id="pagesDec"
          value="-"
          onClick={(e) => handleClick(e.target.id)}
        />
       
        <input
          id="pages"
          type="text"
          min="0"
          value={pages}
          onChange={(e) => setPages(+e.target.value)}
        />
        <Boto
          id="pagesInc"
          value="+"
          onClick={(e) => handleClick(e.target.id)}
        />
      </div>
    </div>
    <div>
      <label htmlFor="languages">Número de idiomas</label>
      <div>
        <Boto
          id="pagesDec"
          value="-"
          onClick={(e) => handleClick(e.target.id)}
        />

        <input
          id="languages"
          type="text"
          min="0"
          value={languages}
          onChange={(e) => setLanguage(+e.target.value)}
        />
        <Boto
          id="languagesInc"
          value="+"
          onClick={(e) => handleClick(e.target.id)}
        />
      </div>
    </div>
  </Container>
);

export default Dropdown;
