import React,{ useEffect,useState} from "react";

function homePage(){

    const [data,setData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setData(res)
        })
        
    },[])

    return(

        <div>
            <h1>homePage</h1>
            {data}
        </div>
    )
}

export default homePage