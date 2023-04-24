export const ordenarLlista = (ordre, registre, search) => {
  switch (ordre) {
    case "alfabetic":
      return [...registre].sort(
        (previ, actual) =>
          previ.numPresupuesto.toLowerCase() >
          actual.numPresupuesto.toLowerCase()
      );
    case "cronologic":
      return [...registre].sort((previ, actual) => previ.data + actual.data);

    case "search":
      const trobat = registre.filter((element) =>
        element.numPresupuesto.toLowerCase().includes(search)
      );
      return trobat;
    case "perDefecte":
      return registre;
    default:
      return console.log("Opción no disponible");
  }
};
