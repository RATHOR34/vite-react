import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './App.css'


function App() {

  const [cityName, setCityName] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [data, setData] = useState({})
 
  useEffect(() => {

    function fetchData() {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=1a4e51c7377e8cf939cbc51bb433a57f")
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          setData(result)
        })
        .catch((err) => {
          console.log(err)
        })
    }

   if(selectedCity !== ""){
     fetchData()
   }
  }, [selectedCity])


  function handleClick(){
    setSelectedCity(cityName)
  }

  return (
    <>
      <div>
        <h1>Weather Data</h1>
          <Link to="/testing">testing</Link>
        <select id="city" onChange={(e) =>  setSelectedCity(e.target.value)}>
          <option  disabled>select your city name</option>
          <option value="jaipur">jaipur</option>
          <option value="delhi">delhi</option>
          <option value="nagpur">nagpur</option>
          <option value="indore">indore</option>
          <option value="bindayka">bindayka</option>
          <option value="bhilwara">bhilwara</option>
          <option value="punjab">bhilwara</option>
        </select>

        <input type="text" placeholder='enter city name' value={cityName} onChange={(e) =>  setCityName(e.target.value)} />
        <button onClick={handleClick} >get</button>
        {/* {console.log(data.name)} */}
        {/* {data.name !== undefined &&
          <div className='result'>

            <h5>city:{data.name}</h5>
            <p>Temprature:{Math.round(data.main.temp - 273)}° celcius</p>
            <p>humidity:{data.main.humidity}</p>

          </div>} */}

        {
          data.name !== undefined ? (
            <div className='result'>
              <h3>City {data.name}</h3>
              <p>Temprature {Math.round(data.main.temp - 273)}° celcius</p>
              <p>Weather {data.weather[0].main}</p>
              <p>Humidity {data.main.humidity}</p>
              <p>Country {data.sys.country}</p>
            </div>
          ) : ""
        }
      </div>
    </>
  )
}

export default App
