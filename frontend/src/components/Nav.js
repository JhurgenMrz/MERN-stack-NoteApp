import React,{useState} from "react";
import { Link } from "react-router-dom";
require('./Nav.css')

const Nav = () => {

  const [menu,setMenu] = useState({
    state: false,
    circle:'',
    links:'',
    button:''
  })


  const handleClickMenu = ()=>{
      if(menu.state === false){
        setMenu({state:true,circle:'open', links:'fade',button:'close'})
      }else{
        setMenu({state:false,circle:'', links:'',button:''})
      }
  }


  return (
    <nav>
    <div className={`hamburger ${menu.button}`}  onClick={handleClickMenu}>
        <div className={`line ${menu.links}`}></div>
        <div className={`line ${menu.links}`}></div>
        <div className={`line ${menu.links}`}></div>
      </div>
      <ul className={`nav-links ${menu.circle}`}>
        <li><Link to="/">Notes</Link></li>
        <li><Link to="/create">Create Note</Link></li>
        <li><Link to="/user">Create User</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
