import React,{useEffect,useState} from 'react'
import moment from 'moment';
import axios from 'axios';
import Note from './Note'
import Loader from './Loader.jsx'

const NotesList = () => {

    const [notes,setNotes] = useState([])

    async function fetchData(){
        const res = await axios.get('https://noteapp-jm.herokuapp.com/api/notes');
        const reverseData = res.data.reverse();
        setNotes(reverseData);
    }

    useEffect(()=>{
        fetchData();
    },[])
   

    moment.locale('es')

    const onClickDeleteNote = async (id) =>{
       let res =  await axios.delete(`https://noteapp-jm.herokuapp.com/api/notes/${id}`)
       console.log(res);
       fetchData();
    }

    return (
        <div className="row">

            {notes.length === 0 ? <Loader/> :(
                
                
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
