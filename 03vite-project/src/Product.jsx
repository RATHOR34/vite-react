function Product(){

    let data = [
        {
            product: "ipad",
            price: 22,
            quantity:10
        },
        {
            product: "iphone",
            price: 30,
            quantity: 20
        },
        {
            product: "mac",
            price: 22,
            quantity: 15
        }
    ]

    return(
        <div>
            {
                data.map((dt,index)=>{

                    return (
                        <div key={index}>
                               <p>product:{dt.product}</p>
                               <p>price:{dt.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Product