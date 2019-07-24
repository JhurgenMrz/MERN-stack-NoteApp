import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Loader from './Loader.jsx'

const CreateUser = () => {
    const [users,setUsers] = useState([])
    const [userName,setUserName] = useState('')
    const URL = 'http://localhost:4000/api/users';
    
    const fetchData = async () => {
            let result = await axios.get(URL);
            let res = result.data;
            setUsers(res);
            // console.log(res);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const onChangeUserName = (e) => {
    setUserName(e.target.value)
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post(URL, {
            username: userName
        })
        fetchData();
        setUserName('');
        // console.log(res);

    }


    const deleteUserClick = async (id) =>{
        await axios.delete(`${URL}/${id}`)
        fetchData();
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Create new User</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                value={userName}
                                type="text" 
                                className="form-control" 
                                onChange={onChangeUserName}/>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                {users.length === 0 ? <Loader/> :
                <div>
                    <ul className="list-group">
                    {
                        users.map((user)=>(
                            <li 
                            key={user._id} 
                            onDoubleClick={()=> deleteUserClick(user._id)}
                            className="list-group-item list-group-item-action">
                                {user.username}
                            </li>
                        ))
                    }
                    </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default CreateUser
