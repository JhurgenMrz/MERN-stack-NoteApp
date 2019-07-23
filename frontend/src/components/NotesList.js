import React,{useEffect,useState} from 'react'
import moment from 'moment';
import axios from 'axios';

const NotesList = () => {

    const [notes,setNotes] = useState([])

    async function fetchData(){
        const res = await axios.get('http://localhost:4000/api/notes');
        setNotes(res.data);
    }

    useEffect(()=>{
        fetchData();
    },[])
   

    moment.locale('es')

    const onClickDeleteNote = async (id) =>{
       let res =  await axios.delete(`http://localhost:4000/api/notes/${id}`)
       console.log(res);
       fetchData();
    }

    return (
        <div className="row">
            {notes.length == 0 ? <h2>No hay notas 😁</h2> :(
                notes.map((note)=>(
                    <div key={note._id} className="col-md-4 p-2">
                        <div className="card">
                            <div className="card-header">
                                <h5>{note.title}</h5>
                                {note.date > new Date() 
                                ?
                                <p>{moment(note.date).toNow()}</p>
                                :
                                <p>{moment(note.date).fromNow()}</p>
                                }
                            </div>
                            <div className="card-body">
                                <p className="card-text">{note.content}</p>
                                <h6 className="card-subtitle mb-2 text-muted">{note.author}</h6>
                                
                                <p>{moment(note.createdAt).fromNow()}</p>
                            </div>
                            <div className="card-footer">
                                <button 
                                className="btn btn-danger" 
                                onClick={() =>{
                                    onClickDeleteNote(note._id);
                                }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )
            }
        </div>
    )
}

export default NotesList;
