import shoesImg from "../images/shoes.jpeg"
function ProductCard({data}){

    function handleProductClick(data){
         console.log(data)
    }

    return(
        <div key={data.id} className="col-md-4 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4" height="300px">
            <img src={data.image} 
            className="w-full h-56 object-cover" 
            alt={data.title}
            onClick={() => handleProductClick(data)}
            />

            <div className=" " style={{marginTop: "18px"}}>
                <h2 className="fs-5 font-semibold text-gray-800">{data.title.length > 30 ? `${data.title.substring(0,20)}`: data.title} </h2>
                <p className="text-gray-600 mt-2 text-sm">
                     { `${data.description.substring(0, 40)}...more`}
                </p>
                 
                 <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-indigo-600"><i className="bi bi-currency-rupee"></i>{data.price}</span>
                    <button style={{padding:"3px 6px",backgroundColor:"indigo"}} className="px-4 py-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition duration-200">
                        Add to cart
                    </button>
                 </div>
            </div>
        </div>
    )
}

export default ProductCard