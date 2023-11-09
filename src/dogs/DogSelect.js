import { useEffect, useState } from "react"
import "./DogSelect.css"

export const DogSelect = ({ handleControlledInputChange, journalEntry }) => {
    const [dogs, setDogs] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [newDog, setNewDog] = useState({})


    //rename this later
    const handleControlledInputChangeHere = (e) => {

        const newNewDog = { ...newDog }

        newNewDog[`${e.target.name}`] = e.target.value

        setNewDog(newNewDog)
    }

    const saveNewDog = (e) => {
        e.preventDefault()
        return fetch("http://localhost:8088/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDog),
        }).then(() => {
            return fetch("http://localhost:8088/dogs")
                .then(r => r.json())
                .then(dogs => setDogs(dogs))
        })
            .then(() => setShowForm(false))

    }

    useEffect(() => {
        fetch("http://localhost:8088/dogs")
            .then(r => r.json())
            .then(dogs => setDogs(dogs))
    }, [])

    return (

        !showForm ?
            <div className="field has-addons">
                <label className="label"></label>
                <div className="control">

                    <div className="select">
                        <select name="dogId" onChange={handleControlledInputChange} value={journalEntry.dogId}>
                            <option> Who did you walk with? </option>
                            {
                                dogs.map(dog => <option key={dog.id} value={dog.id}>{dog.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="control" >
                    <button id="dogbutton" className="button is-link" onClick={() => {
                        setShowForm(!showForm)
                    }}><strong>Add a dog</strong></button>
                </div>

            </div>
            :

            <div className="field has-addons">
                <div className="control">
                    <input className="input" name="name" type="text" placeholder="Add a dog" value={newDog.name} onChange={handleControlledInputChangeHere} />
                </div>
                <div className="control">
                    <button className="button is-info" onClick={saveNewDog}>
                        Add
                    </button>
                    <button className="button is-danger" onClick={() => setShowForm(!showForm)}> Cancel </button>
                </div>
            </div>


    )
}