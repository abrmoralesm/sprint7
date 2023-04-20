import { Container } from "./DropdownStyled";

const Dropdown = ({ pages, languages, setPages, setLanguage }) => (
  <Container>
    <div>
      <label htmlFor="pages">Número de páginas</label>
      <div>
        <input
          id="pages"
          type="text"
          min="0"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
      </div>
    </div>
    <div>
      <label htmlFor="languages">Número de idiomas</label>
      <div>
        <input
          id="languages"
          type="text"
          min="0"
          value={languages}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>
    </div>
  </Container>
);

export default Dropdown;
