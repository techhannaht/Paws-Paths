import { useEffect, useState } from "react"
import { getAllJournalEntries } from "../api/APIManager"
import { JournalForm } from "../journal/JournalForm"
import { JournalList } from "../journal/JournalList"
import { Weather } from "../weather/Weather"
import { DogFactWidget } from "../dog-facts/DogFacts"
import logo from "../image/Paws&Paths.png"
import "./Dashboard.css"
import { DogPicWidget } from "../dog-pics/DogPics"
import dashgreeting from "../image/Dash-Greeting.png"
import logo2 from "../image/PawsandPathsLogo.png"


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
    <>

      <div className="column is-12" >
        <div className="container">
          <h1 id="dashtext" className="title">
            <img id="greetingpic" src={logo2} />
          </h1>
          <div className="columns">
            <div className="column is-3">
              <DogFactWidget />
            </div>

            <div id="pawsdash" className="column is-half">
              <JournalForm updateJournalState={updateJournalState} />
              <JournalList journalEntries={journalEntries} updateJournalState={updateJournalState} deleteJournalEntry={deleteJournalEntry} />
            </div>
            {/* <div className="column is-3">
              <Weather />
            </div> */}
            {/* <div className="column is-3">
              <DogFactWidget />
            </div> */}
            <div className="column is-3">
              <DogPicWidget />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}