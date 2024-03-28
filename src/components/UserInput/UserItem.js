import { useState,useRef } from "react";
import Card from "../UI/Card";
import './UserItem.css';
import Model from "../UI/Model";
function UserItem(props) {

    // const [userName, setuserName] = useState("");
    const [userAge, setuserAge] = useState("");
    const [modal_value, set_modalFlag] = useState();
    const userNameasref = useRef();
    const userAgeasref = useRef();

    const age_listener = (event) => {
        setuserAge(event.target.value);
    }

    // const username_listener = (event) => {
    //     setuserName(event.target.value);
    // }

    const AddUsr = () => {
        // console.log(userName, userAge);
        console.log(userNameasref,userAgeasref);
        //We can use reference variable in place of states they will keep track of all enetered values
        // as state varaible do but again and again component re-rendering can be stopped with reference varaible
        // and main thing is like try to not change the reference varaible manually in code mostly for reading purpose
        //reference variable being used and where both changing and reading together needed state varaible we can use.

        if (userNameasref.current.value.length === 0 && userAge.length === 0) {
            set_modalFlag(<Model title="Username - Age Validation" alert_message="Username and Age cannot be empty!" Modal_close={Modal_closeHandler}></Model>);
            //    window.confirm("Username and Age cannot be empty!");
        }
        else if (userAge.length === 0) {
            // window.confirm("Age cannot be empty!");
            set_modalFlag(<Model title="Age Validation" alert_message="Age cannot be empty!" Modal_close={Modal_closeHandler}></Model>);

        }
        else if (userNameasref.current.value.length === 0) {
            // window.confirm("Username cannot be empty!");
            set_modalFlag(<Model title="Username Validation" alert_message="Username cannot be empty!" Modal_close={Modal_closeHandler}></Model>);
        }
        else if (userAge < 0) {
            // window.confirm("Username cannot be empty!");
            set_modalFlag(<Model title="Age Validation" alert_message="Age cannot be negative" Modal_close={Modal_closeHandler}></Model>);
        }
        else {
            set_modalFlag();
            props.AddingUser({ "uname": userNameasref.current.value, "uage": userAge, "uid": Math.random() });
        }
    
    setuserAge("");
    // setuserName("");
    userNameasref.current.value = "";
    //try to avoid changing DOM though reference variable
}

    const Modal_closeHandler = (val) => {
        set_modalFlag();
    }

    return (
        <>
            {modal_value}
            <Card className="user_inputContainer">
                {/* <Model title="Error Occured" alert_message = "Username and Age cannot be empty!"></Model> */}
                <div style={{ "display": "flex", "flexDirection": "column", "rowGap": "5px" }}>
                    <label style={{ "fontWeight": "bold" }}>Username</label>
                    <input type="text" style={{padding:'5px'}} ref={userNameasref}></input> 
                    {/* no need of onchange handler as reference will contain the updated entered value only  */}
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "rowGap": "5px" }}>
                    <label style={{ "fontWeight": "bold" }}>Age (Years)</label>
                    <input type="number" style={{padding:'5px'}} onChange={age_listener} value={userAge} ref={userAgeasref}></input>
                </div>
                <button className="userBtn" onClick={AddUsr} >Add User</button>
            </Card></>
    );

}

export default UserItem;