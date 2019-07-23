import React,{useEffect,useState} from 'react'
import moment from 'moment';
import axios from 'axios';
import Note from './Note'

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
            {notes.length === 0 ? <h2>{`No hay Notas :D`}</h2> :(

                notes.map((note)=>(
                <div className="col-md-6 p-3 ">
                    <Note key={note._id} onClickDeleteNote={onClickDeleteNote} note={note} />
                </div>
                
                    ))
            )
            }
        </div>
    )
}

export default NotesList;
