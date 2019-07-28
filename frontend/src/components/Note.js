import React from 'react'
import {Link} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
import './Note.css'



const Note = (props) => {
    return (
        <div>
            <div key={props.note._id} >
                        <div className="card ">
                            <div className="card-header d-flex justify-content-between">
                                <h5 className="card-title col-6">{props.note.title}</h5>
                                {props.note.date > new Date() 
                                ?
                                <p className="col-4 text-muted">{moment(props.note.date).toNow()}</p>
                                :
                                <p className="col-4 text-muted">{moment(props.note.date).fromNow()}</p>
                                }
                                <Link 
                                to={`/edit/${props.note._id}`} 
                                className="btn-edit">
                                    <i class="far fa-edit"></i>
                                </Link>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{props.note.content}</p>
                                <h6 className="card-subtitle mb-2 blockquote-footer">{props.note.author}</h6>
                                
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button 
                                className="btn btn-danger" 
                                onClick={() =>{props.onClickDeleteNote(props.note._id);
                                }}
                                >
                                Delete
                                </button>
                                <p>{moment(props.note.createdAt).fromNow()}</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Note
