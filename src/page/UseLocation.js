import React from 'react'
import Location1 from './Location1'
import { useLocation, useNavigate } from 'react-router-dom'

function UseLocation() {
    const navigate = useNavigate()
    const location = useLocation()
    const handleNextPage = (location) => {
        console.log("location ====> ", location)
        switch(location){
            case "location1" :
                navigate("/location1" , { state: { location , data_name:"blueZ" }} )
                break
            case "location2" :
                navigate("/location2" , { state: { location }} )
                break
            default :
        }
    }
  return (
    <>
        UseLocation<br/>
        <button onClick={() => handleNextPage("location1")}>Location 1</button><br/>
        <button onClick={() => handleNextPage("location2")}>Location 2</button>
    </>
  )
}

export default UseLocation