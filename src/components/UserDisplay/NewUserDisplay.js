import Card from "../UI/Card";
import UserList from "./UserList";
import './NewUserDisplay.css';

function NewUserDisplay(props){

    console.log(props.user_list);
    let user_d;
    if(props.user_list.length === 0){
      user_d = <h4 style={{"textAlign":"center"}}>No users to show!</h4>;
    }
    else{
        user_d = <UserList Userlist = {props.user_list}></UserList>
    }

    return (
    <Card className="user_display">
     {user_d}
    </Card>
)
}

export default NewUserDisplay;