import React, {useState} from 'react';

//pair programming with Eric, Josh, Anthony, Richard, Daisy, Christian, Kye


const PersonCard = (props) => {
    const{ firstName, lastName, hairColor}= props
        //you could also keep age in the const above and do this
        //const[ageActual, setAgeActua]= useState(age)
    const[age, setAge]=useState(props.age)

    const addAge = () => {
        setAge(age+1)
        //setAgeActual(ageActual+1)
    }

    return(
        <div>
            <h1 style={{color:"red"}}>{firstName} {lastName}</h1>
            <p>Age: {age}</p>
            {/* you would put ageActual */}
            <p>Hair Color: {hairColor}</p>
            <button onClick={addAge}>Happy Birthday {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;
