import { useEffect } from "react"
import { useState } from "react"
import "./DogsFacts.css"



export const DogFactWidget = () => {
const [DogFact, setDogFact] = useState({})

useEffect(() => {
fetch(`https://dogapi.dog/api/v2/facts?limit=1`)
.then(response => response.json())
.then(dogObject => setDogFact(dogObject.data[0]))

}, [])


    return (
        <>
<div id="dogfactcard" className="card">
<p id="weathertext"  className="card-header-title">
     Did you know? 🐶
    </p>
  <div className="card-content">
    <p id="weathertext" className="subtitle">
    {DogFact?.attributes?.body}
    </p>
  </div>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        Share on <a href="https://twitter.com/i/flow/login">X</a>
      </span>
    </p>
    <p className="card-footer-item">
      <span>
        Share on <a href="https://www.facebook.com/login">Facebook</a>
      </span>
    </p>
  </footer>
</div>
    </>

    )
}