import React, {useState, useEffect} from 'react'
import axios from 'axios';

const CreateUser = () => {
    const [users,setUsers] = useState([])
    const [name,setName] = useState('')
    const URL = 'http://localhost:4000/api/users'
    
    useEffect(()=>{
        const fetchData = async ()=>{
            let result = await axios.get(URL);
            let res = result.data
            setUsers(res);
            console.log(res);
        }
        fetchData();
    },[]);

    const onChangeUserName = (e) => {
    let nameUser = e.target.value;
    setName(nameUser)
    console.log(name);
    }

    return users.length === 0 ? <h1>Cargando...</h1> :(
        <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Create new User</h3>
                    <form>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={onChangeUserName}/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    {
                        users.map((user, index)=>(
                            <li key={`user-${index}`} className="list-group-item list-group-item-action">{user.username}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CreateUser
