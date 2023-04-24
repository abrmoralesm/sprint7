export const ordenarLlista = (ordre, registre) => {
  switch (ordre) {
    case "alfabetic":
      return [...registre].sort(
        (previ, actual) =>
          previ.nombreCliente.toLowerCase() > actual.nombreCliente.toLowerCase()
      );
    case "cronologic":
      return [...registre].sort((previ, actual) => previ.data + actual.data);
    default:
      return registre;
  }
};
