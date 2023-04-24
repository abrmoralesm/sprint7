export const ordenarLlista = (ordre, registre, search) => {
  switch (ordre) {
    case "alfabetic":
      return [...registre].sort((a, b) =>
        a.numPresupuesto
          .toLowerCase()
          .localeCompare(b.numPresupuesto.toLowerCase())
      );
    case "cronologic":
      return [...registre].sort(
        (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()
      );
    case "search":
      return registre.filter((element) =>
        element.numPresupuesto.toLowerCase().includes(search)
      );
    case "perDefecte":
      return registre;
    default:
      console.log("Opción no disponible");
      return registre;
  }
};
