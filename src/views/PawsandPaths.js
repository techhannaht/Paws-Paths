import { useEffect, useState } from "react"
import { getAllJournalEntries } from "../api/APIManager"
import { JournalForm } from "../journal/JournalForm"
import { JournalEntry } from "../journal/JournalEntry"
import { JournalList } from "../journal/JournalList"
import { Weather } from "../weather/Weather"
import { NavBar } from "../navbar/NavBar"

export const PawsandPathsDash = () => {

    const [journalEntries, setJournalEntries ] = useState([])

    useEffect(
        () => {
          getAllJournalEntries()
          .then((journalArray) => {
            setJournalEntries(journalArray)
          })
        },
        [] //where we observe state - if empty we are just watching intial component state
      )

      const updateJournalState = () => {
        return getAllJournalEntries()
          .then((journalArray) => {
            setJournalEntries(journalArray)
          })
        }


        const deleteJournalEntry = (id)=> {
            return fetch(`  http://localhost:8088/journalEntries/${id}`, {method: "DELETE"})
            .then(updateJournalState)
          }
      


    return (
        
        <section className="section">
            <figure class="image is-128x128">
  <img class="is-rounded" src="https://img.freepik.com/premium-vector/editable-vector-clipart-animals-footprint-eps10_272515-10.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=ais"/>
</figure>
        <div className="container">
            <h1 className="title">
                Welcome back!
            </h1>
            <p className="subtitle">
               How was your walk today?
            </p>
            <div className="columns">
                <div className="column is-three-fifths">
                  <JournalForm updateJournalState={updateJournalState}/>
                </div>
                <div className="column">
                   <Weather/>
                </div>
            </div>
            <JournalList journalEntries={journalEntries} updateJournalState={updateJournalState}  deleteJournalEntry={deleteJournalEntry}/>
    
    </div>
    </section>
    
        
    )
}