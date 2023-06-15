import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Location1() {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!location.state) {
          console.log("ไม่มีค่า location state");
          alert("กรุณาส่งค่า state มาด้วย");
          navigate("/uselocation");
        } else {
          console.log(location.state);
        }
      }, [location.state])

      const handleNextPage = (location) => {
        console.log("location ====> ", location)
        switch(location){
            case "location2" :
                navigate("/location2")
                break
            default :
            navigate("/uselocation")
        }
    }
  return (
    <div>
        Location1<br/>
        <button onClick={() => handleNextPage("uselocation")}>Use Location</button><br/>
        <button onClick={() => handleNextPage("location2")}>Go Location2</button>
    </div>
  )
}

export default Location1