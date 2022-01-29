import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPet = (props) => {
    const {_id} = useParams();
    const history = useHistory();
    const [pets, setPets] = useState({});
    const [errors, setErrors] = useState({});



    useEffect(() => {
        axios.get("http://localhost:8000/api/petshelters/one/" + _id)
            .then(res => {
                console.log(res);
                setPets(res.data.petshelter);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])



    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");
        

        axios.put("http://localhost:8000/api/petshelters/update/" + _id,
            pets)
            .then(res => {
                console.log(res);
                // window.location.reload(false);
                history.push("/")
                
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });

    }


    const onChangeHandler = (event) => {
        setPets({
            ...pets,
            [event.target.name]: event.target.value
        })
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <a href='/' >Home </a>
            <h2>Edit Pet Information</h2>
            
            <div>
                <div>
                    <label htmlFor='name'>Pet Name</label>
                    <input type="text" name="name" value={pets.name} onChange={onChangeHandler} />
                    <span>{errors.name && errors.name.message}</span>
                </div>
                <div>
                    <label htmlFor='petType'>Pet Type</label>
                    <input type="text" name="petType" value={pets.petType} onChange={onChangeHandler} />
                    <span>{errors.petType && errors.petType.message}</span>
                </div>
                <div>
                    <label htmlFor='description'>Pet Description</label>
                    <input type="text" name="description" value={pets.description} onChange={onChangeHandler} />
                    <span>{errors.description && errors.description.message}</span>
                </div>
            </div>
            <h2>Skills (Optional)</h2>
            <div>
                <div>
                    <label htmlFor='skill1'>Skill 1</label>
                    <input type="text" name="skill1" value={pets.skill1} onChange={onChangeHandler} />
                </div>
                <div>
                    <label htmlFor='skill2'>Skill 2</label>
                    <input type="text" name="skill2" value={pets.skill2} onChange={onChangeHandler} />
                </div>
                <div>
                    <label htmlFor='skill3'>Skill 3</label>
                    <input type="text" name="skill3" value={pets.skill3} onChange={onChangeHandler} />
                </div>
                <div>
                    <input type="submit" value="SUBMIT" />
                </div>
            </div>
        </form>
    )
}

export default EditPet;