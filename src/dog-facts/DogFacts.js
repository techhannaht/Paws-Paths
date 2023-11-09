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
<div id="dogfactcard" class="card">
<p id="weathertext"  class="card-header-title">
     Random Dog Fact:
    </p>
  <div class="card-content">
    <p id="weathertext" class="subtitle">
    {DogFact?.attributes?.body}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        Share on <a href="https://twitter.com/i/flow/login">X</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="https://www.facebook.com/login">Facebook</a>
      </span>
    </p>
  </footer>
</div>
    </>

    )
}