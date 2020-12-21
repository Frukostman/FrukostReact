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

      let products = getFirestore().collection("productos");

      if (cat) products = products.where("type", "==", `${cat}`);
      
      if (sea) products = products.where("season", "==", `${sea}`);

      console.log("cat: " + cat);
      console.log("sea: " + sea);

      products.get().then((response) => {

          if (response.size === 0) {
              reject('No hay registros');   
          }

          const data = response.docs.map((doc) => ({...doc.data(), id: doc.id }));

          console.table(data)
          resolve(data);
      })
  })

}

export default TraerProdFB


