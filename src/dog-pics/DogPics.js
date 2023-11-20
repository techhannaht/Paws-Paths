import { useEffect } from "react"
import { useState } from "react"




export const DogPicWidget = () => {
const [DogPic, setDogPic] = useState({})

useEffect(() => {
fetch(`https://dog.ceo/api/breeds/image/random`)
.then(response => response.json())
.then(dogObject => setDogPic(dogObject))

}, [])


    return (
        <>
<div id="dogfactcard" className="card">
<p id="dogpictext"  className="card-header-title">
     Random Dog Pic:
    </p>
  <div className="card-content">
    <a id="dogpictext" className="subtitle">
   <img src={DogPic.message}/>
    </a>
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