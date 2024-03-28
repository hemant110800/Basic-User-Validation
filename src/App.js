
import { useState } from 'react';
import './App.css';
import NewUserDisplay from './components/UserDisplay/NewUserDisplay';
import User from './components/UserInput/User';
import React from 'react';

function App() {


  const [userList,set_userList] = useState([]);

  const userUpdate = (newUser)=>{
    console.log(newUser);
   set_userList((prevuserlist)=>{
    return [...prevuserlist,newUser];
   });
  }

  return (
    <div>
       <User User_to_Add={userUpdate}/>
       <NewUserDisplay user_list={userList}/>
        </div>
  );
}

export default App;
