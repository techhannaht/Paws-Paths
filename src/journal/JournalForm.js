import { useState } from "react"
import "./JournalForm.css"
import { DogSelect } from "../dogs/DogSelect"


export const JournalForm = ({updateJournalState}) => {
 const [journalEntry, setJournalEntry] = useState({
    route: "",
    dateTime: "",
    entryText: ""
 })

 const handleControlledInputChange = (e) => {

    const newJournalEntry = {...journalEntry}

    newJournalEntry[`${e.target.name}`] = e.target.value

    setJournalEntry(newJournalEntry)
 }
    

 const saveEntry = (e) => {
    e.preventDefault()

    const entryToSend = {...journalEntry}
    entryToSend.userId = 1

    
        fetch("http://localhost:8088/journalEntries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entryToSend),
        }).then(setJournalEntry({  route: "",
        dateTime: "",
        entryText: ""}))
        .then(updateJournalState)
 }

 function refreshPage(){
    window.location.reload();
} 

    return ( 
        
        <form id="myForm" onSubmit={saveEntry}>
            <div className="field">
                <label className="label">Where did you walk?</label>
                <div className="control">
                    <input name="route" className="input" type="text" placeholder="You can just give it a nickname if you want, we don't need exact coordinates here..." value={journalEntry.route} onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
                <label className="label">When did you walk?</label>
                <div className="control">
                    <input className="input" type="Date" name="dateTime" value={journalEntry.dateTime}  onChange={handleControlledInputChange}/>
                </div>
            </div>
            <DogSelect handleControlledInputChange={handleControlledInputChange} journalEntry={journalEntry} />
            <div className="field">
                <label className="label">Give Us the Details!</label>
                <div className="control">
                    <textarea name="entryText" className="textarea" placeholder="Feel free to paint vivid descriptions of your chosen paths, whether they wind through scenic parks, urban neighborhoods, or tranquil woodlands. Share the funny antics, unexpected encounters, and heartwarming moments that occur during your walks with your doggos." value={journalEntry.entryText}  onChange={handleControlledInputChange}></textarea> 
                </div>
            </div>
            <div className="control">
                <button id="submitbutton" type="submit" className="button is-primary" onClick={refreshPage}>Submit</button>
            </div>
     
        </form>

    )
}