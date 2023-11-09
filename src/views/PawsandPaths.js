import { useEffect, useState } from "react"
import { getAllJournalEntries } from "../api/APIManager"
import { JournalForm } from "../journal/JournalForm"
import { JournalList } from "../journal/JournalList"
import { Weather } from "../weather/Weather"
import { DogFactWidget } from "../dog-facts/DogFacts"
import logo from "../image/Paws&Paths.png"


export const PawsandPathsDash = () => {

  const localPathsUser = localStorage.getItem("activeUser");
  const pathsUserObject = JSON.parse(localPathsUser);

  const [journalEntries, setJournalEntries] = useState([])

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
      .then("")
  }


  const deleteJournalEntry = (id) => {
    return fetch(`  http://localhost:8088/journalEntries/${id}`, { method: "DELETE" })
      .then(updateJournalState)
  }


  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Welcome back!
        </h1>
        <p className="subtitle">
          How was your dog walk today?
        </p>
        <div className="columns">
          <div className="column is-three-fifths">
            <JournalForm updateJournalState={updateJournalState} />
          </div>
          <div className="column">
            <Weather />
          </div>
          <div className="column">
            <DogFactWidget />
          </div>

        </div>
        <JournalList journalEntries={journalEntries} updateJournalState={updateJournalState} deleteJournalEntry={deleteJournalEntry} />

      </div>
    </section>


  )
}