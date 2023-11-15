import { FaStar } from 'react-icons/fa'
import "./StarRating.css"
import { useState } from 'react';


function StarRating({updateJournalState}) {

    const [rating, setRating] = useState([])
    const [hover, setHover] = useState(null)

    const handleControlledInputChange = (e) => {

        const newRating = { ...rating }

        newRating[`${e.target.name}`] = e.target.value

        setRating(newRating)
    }

    const saveEntry = (e) => {
        e.preventDefault()

        const entryToSend = { ...rating }

        fetch("http://localhost:8088/rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entryToSend),
        }).then(setRating(rating))
            .then(updateJournalState)
    }




    return (
        <div className='starRating'>
            {[...Array(5)].map((star, index) => {
                const walkRating = index + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={walkRating}
                            onClick={(clickEvent) => saveEntry(clickEvent)}
                            onChange={handleControlledInputChange}
                        />
                        <FaStar
                            className="star"
                            size={35}
                            color={walkRating <= (hover || walkRating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(walkRating)}
                            onMouseLeave={() => setHover(null)
                            }
                        />
                    </label>
                )
            })}

            <p> You gave this walk {rating.rating} stars! </p>
        </div>

    )

}

export default StarRating