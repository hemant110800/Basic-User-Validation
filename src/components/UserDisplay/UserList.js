import './NewUserDisplay.css'
 
function UserList(props){
 
console.log(props.Userlist);

 return <ul className="user_list">{props.Userlist.map((user_det)=>{
    return <li key={user_det.uid} style={{"border":"1px solid #000","padding":"15px"}}>{user_det.uname}{" "}{user_det.uage}</li>;
 })}</ul>;
}

export default UserList;