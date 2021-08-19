import React, { useState } from 'react'
import data from './data'
import './App.css'




export default function Stuff () {
    
    let [index, setIndex] = useState(0)
    
    const { name, city, country, employer, title, favoriteMovies } = data[index]
   
    
    function clickNext() {
        if (index<24) {
        setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    function clickPrevious() {
        if (index> 1) {
            setIndex(index - 1)
        } else {
            setIndex(24)
    }
    }
 return (
        <div className="infoGroup">
            <div>
                {/* <h2>{data[1].name.first}</h2> */}
                <h1>{`${name.first} ${name.last}`}</h1>
                <h2>{`From: ${city}, ${country}`}</h2>
                <h2>{`Job Title: ${title}`}</h2>
                <h2>{`Employer: ${employer}`}</h2><br></br>
                <h2>Favorite Movies:</h2>
                <ol>
                    {favoriteMovies.map((favMovie) => {
                         return <li>{favMovie}</li>
                    })}
                </ol>
            </div>
            <div>
                <button onClick={() => clickPrevious()}>Previous</button>
                <button onClick={() => clickNext()}>Next</button>
                <h5>{`${index+1}/25`}</h5>
            </div>
            
        </div>
    )
}