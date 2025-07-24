import { useState, useEffect } from "react";
// Uncomment the following line if ProductCard exists
import ProductCard from "./ProductCard"
import "./Products.css"

function Products() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProductsData(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="bg-gray"> 
            <div className="container py-4">
                <div className="row find-job justify-content-between mt-2 px-3 px-lg-0">
                    <div className="col-md-6">
                        <h4 className="mb-4">Find a job with Us</h4>
                        <div className="d-flex pb-4 pb-lg-0">
                            <a href="#" className="tab-link active fs-14px text-color" >Freelance (220)</a>
                            <a href="#" className="tab-link fs-14px text-color" >Full-Time (331)</a>
                            <a href="#" className="tab-link align-items-center fs-14px text-color">
                                Hire for Creatives<i className="fas fa-share-square text-dark ps-2 fs-14px text-color"  ></i>
                            </a>
                        </div>
                    </div>
                    <div className=" search col-md-6 d-flex justify-content-md-end">
                        <div className="input-group search-input">
                            <span className="input-group-text bg-white border-end-0">
                                <i className="bi bi-search text-color"  ></i>
                            </span>
                            <input type="text" className="form-control border-start-0 text-color" placeholder="Search..."
                            />
                        </div>
                        <button className="btn btn-outline-secondary ms-2"  > <i
                            className="bi bi-plus-lg text-color"></i> Filter</button>
                    </div>
                </div>
            </div> 
     <div className="">        
    <div className="d-flex flex-wrap gap-2 job-list w-100 m-auto container">
      {productsData.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
    </div>
    </div>
  );
}
export default Products