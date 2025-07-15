import heroImage from "../assets/images/heroImage.webp"
function Home(){
    return(
        <>
          <div className="w-full">
             <div className="relative w-full">
                <img src={heroImage} alt="hero" />
                <div className="absolute right-[6rem] bottom-[8rem] w-1/4">
                    <h2 className="text-white text-3xl pb-3 font-bold">Smart Shopping</h2>
                    <button className="px-3 py-1 bg-white rounded-2xl">Shop Now</button>
                </div>
             </div>
          </div>
        </>
    )
}
export default Home