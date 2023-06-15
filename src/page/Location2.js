import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Location2() {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state)

    const handleNextPage = (location) => {
        console.log("location ====> ", location)
        switch(location){
            case "location1" :
                navigate("/location1" )
                break
            default :
            navigate("/uselocation")
        }
    }
  return (
    <div>
        Location2<br/>
        <button onClick={() => handleNextPage("uselocation")}>Go Use Location</button><br/>
        <button onClick={() => handleNextPage("location1")}>Location 1</button>
    </div>
  )
}

export default Location2