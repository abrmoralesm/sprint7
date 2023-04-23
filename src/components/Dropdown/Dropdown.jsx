import { Container } from "./DropdownStyled";
import Push from "../Button/Button";
import PushInfo from "../ButtonInfo/ButtonInfo";

const Dropdown = ({
  pages,
  languages,
  setPages,
  setLanguages,
  handleClick,
  handleModalInfo,
}) => (
  <Container>
    <div>
      <label htmlFor="pages">Número de págines</label>
      <div>
        <Push
          id="pagesDown"
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
        <Push
          id="pagesUp"
          value="+"
          onClick={(e) => handleClick(e.target.id)}
        />
        <PushInfo
          id="infoPages"
          onClick={(e) => handleModalInfo(e.target.id)}
        />
      </div>
    </div>
    <div>
      <label htmlFor="languages">Número de idiomas</label>
      <div>
        <Push
          id="languagesDown"
          value="-"
          onClick={(e) => handleClick(e.target.id)}
        />
        <input
          id="languages"
          type="text"
          min="0"
          value={languages}
          onChange={(e) => setLanguages(+e.target.value)}
        />
        <Push
          id="languagesUp"
          value="+"
          onClick={(e) => handleClick(e.target.id)}
        />
        <PushInfo
          id="infoLanguages"
          onClick={(e) => handleModalInfo(e.target.id)}
        />
      </div>
    </div>
  </Container>
);
export default Dropdown;
