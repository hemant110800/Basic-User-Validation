
import UserItem from "./UserItem";

const User = (props)=>{

    const UserDeatils_to_Add = (obj)=>{
      props.User_to_Add(obj);
    }

    return ( <UserItem AddingUser = {UserDeatils_to_Add} />    );
}

export default User;