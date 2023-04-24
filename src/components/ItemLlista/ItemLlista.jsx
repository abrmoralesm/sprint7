import { Item } from "./ItemLlistaStyled";

const ItemLlista = ({ pressupost }) => {
  const {
    id,
    data,
    nombreCliente,
    numPresupuesto,
    web: { active: webActive },
    extres: { pages, languages },
    seo: { active: seoActive },
    ads: { active: adsActive },
    total,
  } = pressupost;

  return (
    <Item>
      <div>
        <li>
          <span>Presupuesto número:</span>&nbsp;{id}
        </li>
        <li>
          <span>Fecha:</span>&nbsp;{data}
        </li>
      </div>
      <div>
        <li>
          <span>Cliente:</span>&nbsp;<p> {nombreCliente}</p>
        </li>
        <li>
          <span>Presupuesto:&nbsp;</span>
          <p>{numPresupuesto}</p>
        </li>
      </div>
      <div>
        <li>
          <span>Pedido:</span>
          <ul>
            {webActive && (
              <div>
                <li>1 Pàgina web</li>
                <ul>
                  <li>Pàgines:&nbsp;{pages}</li>
                  <li>Idiomes:&nbsp; {languages}</li>
                </ul>
              </div>
            )}
            {seoActive && <li>1 Consultoria SEO</li>}
            {adsActive && <li>1 Campanya Google Ads</li>}
          </ul>
        </li>
      </div>
      <li>
        <span>Total:</span>&nbsp;
        {total}&nbsp;€
      </li>
    </Item>
  );
};

export default ItemLlista;
