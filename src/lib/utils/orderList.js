export const orderList = (ordre, registro, search) => {
  switch (ordre) {
    case "alfabetic":
      return [...registro].sort((a, b) =>
        a.numPresupuesto
          .toLowerCase()
          .localeCompare(b.numPresupuesto.toLowerCase())
      );
    case "cronologic":
      return [...registro].sort(
        (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()
      );
    case "search":
      return registro.filter((element) =>
        element.numPresupuesto.toLowerCase().includes(search)
      );
    case "perDefecte":
      return registro;
    default:
      console.log("Opción no disponible");
      return registro;
  }
};
