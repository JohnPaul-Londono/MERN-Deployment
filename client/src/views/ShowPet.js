import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const ShowPet = (props) => {
    const { _id } = useParams();
    const [pet, setPet] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/petshelters/one/${_id}`)
            .then(res => {
                console.log(res);
                setPet(res.data.petshelter);
            })
            .catch(err => {
                console.log(err);
            })
    }, [_id])


    const onDeleteHandler = (_id, index) => {
        // console.log(_id);
        // console.log(index);
        axios.delete(`http://localhost:8000/api/petshelters/delete/${_id}`)
        .then(res=>{
            console.log(res);
            history.push("/")
        })
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <a href='/' >Home </a>
            <button onClick={()=>onDeleteHandler(pet._id)}>Adopt Me</button>
            <h2> Details about : {pet.name}</h2>
            <h3>Pet Type:{pet.petType} </h3>
            <h3>Pet Description:{pet.description} </h3>
            <h3>Skill:{pet.skill1} </h3>
            <h3>Skill:{pet.skill2} </h3>
            <h3>Skill:{pet.skill3} </h3>

        </div>

    )
}

export default ShowPet;