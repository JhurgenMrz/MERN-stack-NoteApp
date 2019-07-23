import React,{useState, useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const CreateNote = () => { 
    const UrlUsers = 'http://localhost:4000/api/users'
    const UrlNotes = 'http://localhost:4000/api/notes'
    //GET Users
    const [users, setUsers] = useState([])

    //Select User

    const [note, setNote] = useState({
        author:'',
        title:'',
        content:'',
        date: new Date()
    })

    const fetchData = async () => {
        let result = await axios.get(UrlUsers);
        setUsers(result.data.map((user)=> user.username));
        setNote({...note, author: result.data[0].username});
    }

    useEffect(()=>{
        fetchData()
    },[])

    const onSubmit = async (e)=>{
        e.preventDefault()
        const newNote = {
            title: note.title,
            author: note.author,
            content: note.content,
            date: note.date,
        };

        const res = await axios.post(UrlNotes, newNote);
        console.log(res.data.message);
        window.location.href = "/";
    }


    return users.length === 0 ? <h4>Cargando...</h4> : (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>Create a Note</h4>
                <form onSubmit={onSubmit}>

                    {/* SELECT USER */}
                    <div className="form-group">
                        <select className="form-control"
                            name="author"
                            required
                            defaultValue="Select" 
                            onChange={e => setNote({...note, author: e.target.value})}
                            >
                            <option disabled value="Select">Seleccionar</option>
                            {
                                users.map((user,index)=> 
                                <option key={user} value={user}>
                                    {user}
                                </option> )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Title"
                        name="title"
                        required
                        onChange={e => setNote({...note, title: e.target.value}) }
                        />
                    </div>

                    <div className="form-group">
                        <textarea 
                        name="content" 
                        className="form-control" 
                        placeholder="Content" 
                        required 
                        onChange={e => setNote({...note, content: e.target.value})}
                        >
                        </textarea>
                    </div>

                    <div className="form-group">
                        <DatePicker 
                        className="form-control"
                        selected={note.date}
                        onChange={(date)=>setNote({...note, date: date})}
                        />
                    </div>
                      


                    <button type="submit" className="btn btn-primary">
                        Save Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateNote
