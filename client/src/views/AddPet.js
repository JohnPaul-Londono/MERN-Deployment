import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddPet = (props) => {
    const [name, setName] = useState('');
    const [petType, setPetType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState({});



    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted");

        axios.post("http://localhost:8000/api/petshelters/new", {
            name, petType, description, skill1, skill2, skill3,
        })

            .then(res => {
                console.log(res);
                history.push("/")

            })

            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })

    }


    // axios.post("http://localhost:8000/api/petshelters/new", {
    //     name,petType,description,skill1,skill2,skill3,
    // })

    //     .then(res => {
    //         console.log(res);
    //         history.push("/")

    //     })

    //     .catch(err => {
    //         console.log(err.response.data.err.errors);
    //         setErrors(err.response.data.err.errors);
    //     })







    return (
        <form onSubmit={onSubmitHandler}>
            <a href='/' >Home </a>
            <h2>Pet Information</h2>

            <div>
                <div>
                    <label htmlFor='name'>Pet Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <span>{errors.name && errors.name.message}</span>
                </div>
                <div>
                    <label htmlFor='petType'>Pet Type</label>
                    <input type="text" name="petType" value={petType} onChange={(e) => setPetType(e.target.value)} />
                    <span>{errors.petType && errors.petType.message}</span>
                </div>
                <div>
                    <label htmlFor='description'>Pet Description</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <span>{errors.description && errors.description.message}</span>
                </div>
            </div>
            <h2>Skills (Optional)</h2>
            <div>
                <div>
                    <label htmlFor='skill1'>Skill 1</label>
                    <input type="text" name="skill1" value={skill1} onChange={(e) => setSkill1(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='skill2'>Skill 2</label>
                    <input type="text" name="skill2" value={skill2} onChange={(e) => setSkill2(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='skill3'>Skill 3</label>
                    <input type="text" name="skill3" value={skill3} onChange={(e) => setSkill3(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="SUBMIT" />
                </div>
            </div>
        </form>
    )
}


export default AddPet;