import { Item } from "./ItemLlistaStyled";

const ItemLlista = ({ pressupost }) => {
  const {
    id,
    data,
    nombreCliente,
    numPresupuesto,
    web: { actiu: webActiu },
    extres: { pagines, idiomes },
    seo: { actiu: seoActiu },
    ads: { actiu: adsActiu },
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
            {webActiu && (
              <div>
                <li>1 Pàgina web</li>
                <ul>
                  <li>Pàgines:&nbsp;{pagines}</li>
                  <li>Idiomes:&nbsp; {idiomes}</li>
                </ul>
              </div>
            )}
            {seoActiu && <li>1 Consultoria SEO</li>}
            {adsActiu && <li>1 Campanya Google Ads</li>}
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
