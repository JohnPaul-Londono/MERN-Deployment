import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PetList = (props) => {
    const [pets, setPets] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/petshelters")
            .then(res => {
                console.log(res);
                setPets(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Link to="/add"><button>Add</button></Link>
            <h2>All Pets</h2>

            <table>
                <th> Name</th>
                <th> Type</th>
                <th> Actions</th>
                {
                    pets.map((pet, i) => {
                        return <tr key={i}>
                            <td>{pet.name}</td>
                            <td>{pet.petType}</td>
                            <td>
                                <Link to={`/api/petshelters/one/${pet._id}`}><button>Details</button></Link>
                                <Link to={`/api/petshelters/edit/${pet._id}`}><button>Edit</button></Link>
                            </td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default PetList;