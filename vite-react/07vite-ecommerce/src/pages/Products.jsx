import { useState, useEffect } from "react";
import axios from "axios";
// Uncomment the following line if ProductCard exists
import ProductCard from "../assets/components/ProductCard.jsx";
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from "../redux/features/productSlice.js";


// useSelector = current state
// useDispatch = action

function Products() {
  // const [productsData, setProductsData] = useState([]);
  
  const dispatch  = useDispatch()
  const { items,loading,error } = useSelector((state => state.products))

  useEffect(()=>{
     
  //   function fetchData(){ 
  //   axios.get("https://fakestoreapi.com/products")
  //   .then((res)=>{
  //             //  console.log(res.data);
  //             setProductsData(res.data)
  //   })
  // }
  // fetchData()
         dispatch(fetchProducts())

  },[])

  if(loading) return <p style={{margin:"3rem"}}>Loading Products...</p>

  if(error) return <p style={{margin:"3rem"}}>Error: {error}</p>
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       // if (!res.ok) {
  //       //   throw new Error("Network response was not ok");
  //       // }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProductsData(data);
  //     })
  //     // .catch((error) => {
  //     //   console.error("Error fetching products:", error);
  //     // });
  // }, []);
   
  console.log(items,loading,error)
  return ( 
    <div className="row gap-4 m-auto container">
      {items.map((product,index) => (
        <ProductCard key={index}  productData={product} />
      ))}
    </div>
  );
}
// flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
export default Products;