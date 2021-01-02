import { getFirestore } from "../firebase/index";

// //Funcion para llamar a firebase "productos"
const TraerProdFB = (cat, sea) => {

  return new Promise((resolve, reject) => {

    //llamada a la coleccion productos
      let products = getFirestore().collection("productos");

    // Filtro por tipo
      if (cat) products = products.where("type", "==", `${cat}`);
    // Filtro por estacion
      if (sea) products = products.where("season", "==", `${sea}`);

      products.get().then((response) => {
        //chequeo de validez de url
          if (response.size === 0) {
              reject('No hay registros');   
          }
          //Devolucion de objetos
          const data = response.docs.map((doc) => ({...doc.data(), id: doc.id }));

          resolve(data);
      })
  })
}

export default TraerProdFB


