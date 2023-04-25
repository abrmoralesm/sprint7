import useForm from "../../lib/hooks/useForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { setStorage } from "../../lib/utils/localStorage";
import {
  Container,
  ButtonCalc,
  ContainerTaula,
  Container2,
  BotoRegistre,
} from "./CheckedStyled";
import ModalInfo from "../ModalInfo/ModalInfo";
import { useModal } from "../../lib/hooks/useModal";
import { useRegistre } from "../../lib/hooks/useRegistre";
import Llista from "../Llista/Llista";
import { orderList } from "../../lib/utils/orderList";
import ButtonSearch from "../ButtonSearch/ButtonSearch";

const Checked = () => {
  const navega = useNavigate();
  const { form, setDades, setOption, setPages, setLanguages, handleClick } =
    useForm();

  const {
    id,
    nombreCliente,
    numPresupuesto,
    web: { active: webActive },
    extres: { pages, languages },
    seo: { active: seoActive },
    ads: { active: adsActive },
    total,
  } = form;
  const { registro, handleRegistre } = useRegistre();

  const [ordre, setOrdre] = useState("perDefecte");
  const [search, setSearch] = useState("");

  const listaOrdenada = orderList(ordre, registro, search, setSearch);

  const { modal, handleModalInfo } = useModal();
  const { open, idp, ids, text, valor } = modal;

  const [parametres, setParametres] = useSearchParams({});
  console.log(parametres);

  useEffect(() => {
    setStorage("id", id);
    setStorage("nombreCliente", nombreCliente);
    setStorage("numPresupuesto", numPresupuesto);
    setStorage("webActive", webActive);
    setStorage("pagesWebWeb", pages);
    setStorage("idiomesWeb", languages);
    setStorage("seoActive", seoActive);
    setStorage("adsActive", adsActive);
    setStorage("total", total);
    setStorage("registro", registro);
    setParametres({
      nombreCliente: nombreCliente,
      paginaWeb: webActive,
      campaniaSeo: seoActive,
      campaniaAds: adsActive,
      paginasWeb: pages,
      idiomasWeb: languages,
    });
  }, [
    id,
    nombreCliente,
    numPresupuesto,
    webActive,
    seoActive,
    adsActive,
    pages,
    languages,
    total,
    registro,
    setParametres,
  ]);

  return (
    <div style={{ width: "100%", height: "50rem" }}>
      <ContainerTaula>
        <Container>
          <h2>¿Qué quieres hacer?</h2>
          <div>
            <div>
              <label htmlFor="nombreCliente">Cliente</label>
              <input
                id="nombreCliente"
                type="text"
                min="0"
                value={nombreCliente}
                onChange={(e) => setDades(e.target.id, e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="numPresupuesto">Nombre Presupuesto</label>
              <input
                id="numPresupuesto"
                type="text"
                min="0"
                value={numPresupuesto}
                onChange={(e) => setDades(e.target.id, e.target.value)}
              />
            </div>
            <hr />

            <label htmlFor="inputWeb">
              <input
                id="inputWeb"
                type="checkbox"
                checked={webActive}
                onChange={(e) => setOption("web")}
              />
              Una página web (500€)
            </label>
            {webActive && (
              <Dropdown
                pages={pages}
                languages={languages}
                setPages={setPages}
                setLanguages={setLanguages}
                handleClick={handleClick}
                handleModalInfo={handleModalInfo}
              />
            )}
            <label htmlFor="inputSeo">
              <input
                id="inputSeo"
                type="checkbox"
                checked={seoActive}
                onChange={(e) => setOption("seo")}
              />
              Una consultoria SEO (300€)
            </label>
            <label htmlFor="inputAds">
              <input
                id="inputAds"
                type="checkbox"
                checked={adsActive}
                onChange={(e) => setOption("ads")}
              />
              Una campaña de Google Ads (200€)
            </label>
            <hr />
            <div className="total">
              <p>Precio:&nbsp;{total}€</p>
              <BotoRegistre onClick={(e) => handleRegistre(form)}>
                Guardar Presupuesto
              </BotoRegistre>
            </div>
          </div>
        </Container>
        <Container2>
          <h2>Listado presupuestos</h2>

          <div>
            <BotoRegistre onClick={(e) => setOrdre("alfabetic")}>
              Orden Alfabético
            </BotoRegistre>
            <BotoRegistre onClick={(e) => setOrdre("cronologic")}>
              Orden Cronológico
            </BotoRegistre>
            <BotoRegistre onClick={(e) => setOrdre("perDefecte")}>
              Ordre de Registro
            </BotoRegistre>
          </div>
          <div>
            <label htmlFor="nomSearch">Buscar: </label>
            <input
              id="nomSearch"
              type="text"
              min="0"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ButtonSearch onClick={(e) => setOrdre("search")} />
          </div>
          <Llista listaOrdenada={listaOrdenada} />
        </Container2>
        {open && (
          <ModalInfo
            id="modal"
            onClick={(e) => handleModalInfo(e.target.id)}
            idp={idp}
            ids={ids}
            text={text}
            valor={valor}
          />
        )}
        <ButtonCalc onClick={() => navega("/")}>CERRAR</ButtonCalc>
      </ContainerTaula>
    </div>
  );
};

export default Checked;
