import { getFirestore } from "../firebase/index";


// //Funcion para llamar a firebase "productos"
// export default function TraerProdFB(cat) {

//   console.log(cat)

//   return new Promise((resolve, reject) => {
//     let productosFB = getFirestore().collection("productos");

//     // Se solicita la informacion
//     productosFB.get().then((response) => {
//       if (response.size === 0) reject(<h1>"Empty"</h1>);
//       const data = response.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
        
//       }));
//       //se reciben objetos como data 
//       resolve(data);

//     });
//   });
// }

// collection("productos").where("type", "==", "Fruta");


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


