import React from 'react'
import Slider from './Slider'
import categoryImages from '../javascript/category'
import featuredImages from '../javascript/featuredproduct'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <> 
        <div className="container" style={{marginTop:"110px"}}>
            <Slider />
            <div className="wrapper-content-banner row gx-4 gy-4  m-auto">
                {categoryImages.map((img) => (
                    <div key={img.id} className="col-12 col-sm-6 col-md-3">
                        <Link
                            to="/"
                            className="d-inline-block text-center text-decoration-none w-100 h-100"
                        >
                            <div className="p-3 border rounded shadow-sm h-100">
                                <div style={{ width: "100%" }}>
                                    <img
                                        className="category"
                                        src={img.src}
                                        alt={img.alt}
                                        height="100%"
                                        width="100%"
                                    />
                                </div>
                                <div>
                                    <p className="title py-1 pt-3">{img.title}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>



            <div className="featured">
                <div className="text-center pt-4">
                    <small className="text-muted" style={{ letterSpacing: "4px" }}>AMAZING SHOP</small>

                    <div className="row align-items-center mt-2">
                        <div className="col">
                            <hr className="border-secondary opacity-25"></hr>
                        </div>

                        <div className="col-auto">
                            <h2 className="fw-bold mb-0">FEATURED PRODUCTS</h2>
                        </div>

                        <div className="col">
                            <hr className="border-secondary opacity-25"></hr>
                        </div>
                    </div>
                </div>

            </div>
            <div className="wrapper-content-banner row gx-4 gy-4 m-auto py-1">
                {featuredImages.map((img) => (
                    <div className="col-12 col-sm-6 col-md-3" key={img.id}>
                        <Link to="" className="d-inline-block text-decoration-none w-100 h-100">
                            <div className="p-3 border rounded shadow-sm h-100">
                                <div style={{ width: "100%" }}>
                                    <img
                                        className="category"
                                        src={img.src}
                                        alt=""
                                        height="100%"
                                        width="100%"
                                    />
                                </div>
                                <div className="align-items-left py-3">
                                    <p className="title">{img.title}</p>
                                    <h5 className="price pt-2">
                                        <i className="bi bi-currency-rupee"></i>
                                        {img.price}
                                    </h5>
                                    <label className="d-block free-delivery py-2">{img.delivery}</label>
                                    <label className="rating">
                                        {img.rating} <i className="bi bi-star-fill"></i>
                                    </label>
                                    <span className="review"> {img.review}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center py-4">
                <button className="btn text-uppercase fw-bold px-4 py-2 text-center text-white" style={{ backgroundColor: "#008DB1" }}>
                    <Link to={"./product"} className='text-white text-decoration-none'>Load More Products</Link>
                </button>
            </div>

            <div className="row services p-5 mt-2" style={{backgroundColor: "#f7f7f7"}}>
                <div className="col-md-4 text-center">
                    <i className="d-inline-block bi bi-truck fa-3x mb-2"></i>
                    <h4 className="mb-2  ">Free Shipping & Delivery</h4>
                    <p className="mb-4 text-dark-emphasis">Quam natoque magna conubia odio vestibulum dui sagittis.</p>
                    <a className="text-decoration-none border-bottom text-secondary" to="">View Products</a>
                </div>
                <div className="col-md-4 text-center">
                    <i className="d-inline-block bi bi-gem fa-3x mb-2"></i>
                    <h4 className="mb-2  ">Brilliant Quality Templates</h4>
                    <p className="mb-4 text-dark-emphasis">Quam natoque magna conubia odio vestibulum dui sagittis.</p>
                    <a className="text-decoration-none border-bottom text-secondary" to="">View Products</a>
                </div>
                <div className="col-md-4 text-center">
                    <i className="d-inline-block bi-camera-fill fa-3x mb-2"></i>
                    <h4 className="mb-2">Awesome Products Photo</h4>
                    <p className="mb-4 text-dark-emphasis">Quam natoque magna conubia odio vestibulum dui sagittis.</p>
                    <a className="text-decoration-none border-bottom text-secondary" to="">View Products</a>
                </div>
            </div>


        </div >
        
     
    </> 
    )
}

export default Home