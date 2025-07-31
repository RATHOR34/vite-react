import { useState, useEffect } from "react";
import axios from "axios";
// Uncomment the following line if ProductCard exists
import ProductCard from "../assets/components/ProductCard.jsx";

function Products() {
  const [productsData, setProductsData] = useState([]);
 
  useEffect(()=>{
     
    function fetchData(){ 
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
              //  console.log(res.data);
              setProductsData(res.data)
    })
  }
  fetchData()

  },[])

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

  return ( 
    <div className="row gap-4 m-auto container">
      {productsData.map((product,index) => (
        <ProductCard key={index}  productData={product} />
      ))}
    </div>
  );
}
// flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
export default Products;