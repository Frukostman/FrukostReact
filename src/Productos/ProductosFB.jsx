// import {useState, useEffect} from 'react'
// import { getFirestore } from '../firebase/index';

// console.log(1)

// export default function ProdsDeFirebase() {

//     const [producto, setProducto] = useState({})
  
//     useEffect(() => {
//         const db = getFirestore();
//         const itemCollection = db.collection("productos");
//         itemCollection.get().then((response) => {
         
//           let producto = response.docs.map((element) => {
//               return element.data();           
//           });
//           console.log(producto)
//           setProducto(producto)
//          });

//       }, []);
//       return producto
//   }
