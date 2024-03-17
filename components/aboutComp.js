"use client";

import React, {useEffect, useState} from "react";

const dogs = [
    {name:"undertaker", age: 6},
    {name:"John Cena", age: 2},
    {name:"The Rock", age: 10},
    {name:"The Hulk", age: 6},

]

const AboutComp = ({dogs, setDogs}) => {
    const [] = useState(dogs)

    return (
    <div>
        <div className="p-2">
            <ul>
                {dogs.map((dog)=>(
                <li key={dog.name}>
                    <span className="font-semibold">Name:</span>{dogs.name},{""}
                    <span className="font-semibold">Age:</span>{dogs.age}
                </li>
            ))}
            </ul>
        </div>
    </div>
    );
}

export default AboutComp;