import React from 'react'
import Person from './Person'

import './Reviews.css'
import data from './data'


function Reviews() {
    return (
        <>
            <main>
                <h1 className="title">Our Reviews</h1>
                <Person data={data}/>
            </main>
        </>
    )
}

export default Reviews
