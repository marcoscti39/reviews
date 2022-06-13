import React from 'react'

import './Person.css'

function Person({data}) {
    let [changePerson, setChangePerson] = React.useState(0)

    const {image, name, job, text} = data[changePerson]


    function indexController(number){
        if(number < 0){
            return number = data.length -1
        }
        if(number > data.length - 1){
            return number = 0
        }
        else{
            return number
        }
    }
    const previousPerson = () =>{
        setChangePerson((changePerson) =>{
            let newPerson = changePerson - 1
            return indexController(newPerson)
        })
    }
    function nextPerson(){
        setChangePerson((changePerson) =>{
            let newPerson = changePerson + 1
            return indexController(newPerson)
        })
        
    }

    const pickRandom = () =>{
        let randomNumber = Math.floor(Math.random() * data.length)
        if(randomNumber === changePerson){
            randomNumber = randomNumber + 1
        }
        
        setChangePerson((changePerson) =>{
            changePerson = indexController(randomNumber)
            return changePerson
        })
    }

    return (
        <section className="person">
            <div className="person-photo">
                <img src={image} alt="" />
            </div>
            
            <span className="person-name" >{name}</span>
            <span className="person-profession" >{job}</span>
            <p className="person-statement" >{text}</p>
            <div className="person-change-wrapper">
                <span className="person-previous" onClick={previousPerson} > <i className="fa-solid fa-angle-left"></i> </span>
                <span className="person-next" onClick={nextPerson} >
                    <i className="fa-solid fa-angle-right"></i>
                </span>
            </div>
            <button className="surprise-btn" onClick={pickRandom} >surprise me</button>
        </section>
    )
}

export default Person
