import React,{useState, useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {withRouter} from 'react-router-dom'

const CreateNote = ( props ) => { 
    const UrlNotes = 'https://noteapp-jm.herokuapp.com/api/notes'
    const [users, setUsers] = useState([])
    //Select User
    const [note, setNote] = useState({
        author:'',
        title:'',
        content:'',
        date: new Date(),
        idNote:''
    })
    const [edit,setEdit] = useState(false)

    const fetchData = async () => {

        if(props.match.params.id){
            setNote({...note, idNote: props.match.params.id})
            setEdit(true)
            let id = props.match.params.id;
            const UrlNote = `https://noteapp-jm.herokuapp.com/api/notes/${id}`;
            let result = await axios.get(UrlNote);
            let resNote = await result.data
            setNote({
                author: resNote.author,
                title: resNote.title,
                content: resNote.content,
                date: new Date(resNote.date)
            })
            const UrlUsers = 'https://noteapp-jm.herokuapp.com/api/users'
            let resultUser = await axios.get(UrlUsers);
            setUsers( await resultUser.data.map((user)=> user.username))

        }
        else{
            const UrlUsers = 'https://noteapp-jm.herokuapp.com/api/users'
            let result = await axios.get(UrlUsers);
            setUsers( await result.data.map((user)=> user.username));
            setNote({...note, author: await result.data[0].username})
                     
        }

    }
    
    useEffect(()=>{
        fetchData();
    },[])

    const onSubmit = async (e)=>{
        e.preventDefault()
        const newNote = {
            title: note.title,
            author: note.author,
            content: note.content,
            date: note.date,
        };
        if(edit){
            let resPut = await axios.put(`https://noteapp-jm.herokuapp.com/api/notes/${props.match.params.id}`,newNote)
            console.log(resPut);
        }else{
            const res = await axios.post(UrlNotes, newNote);
            console.log(res.data.message);
        }
        props.history.push('/');
    }

    const onChangeDate = (date) =>{
        setNote({...note, date: date});
        // console.log(note);
    }


    return (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>Create a Note</h4>
                <form onSubmit={onSubmit}>

                    {/* SELECT USER */}
                    <div className="form-group">
                        <select className="form-control"
                            name="author"
                            required
                            value={note.author}
                            onChange={e => setNote({...note, author: e.target.value})}
                            >
                            <option disabled value="Select">Seleccionar</option>
                            {
                                users.map((user)=> 
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
                        value={note.title}
                        onChange={e => setNote({...note, title: e.target.value}) }
                        />
                    </div>

                    <div className="form-group">
                        <textarea 
                        name="content" 
                        className="form-control" 
                        placeholder="Content" 
                        required
                        value={note.content}
                        onChange={e => setNote({...note, content: e.target.value})}
                        >
                        </textarea>
                    </div>

                    <div className="form-group">
                        <DatePicker
                        className="form-control"
                        selected={note.date}
                        onChange={onChangeDate}
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
