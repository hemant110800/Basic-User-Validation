import React from "react";
import ReactDOM  from "react-dom";
import './Model.css';
import Card from "./Card";

const Backdrop = (props)=>{
  const ModalClose=()=>{
    props.Modal_close(false);
   }

  return <div className="backdrop_modal" onClick={ModalClose}></div>;
}

const ModelOverlay = (props)=>{
  const ModalClose=()=>{
    props.Modal_close(false);
   }

return (
  <Card style={{"backgroundColor":"#fff",position:"absolute",width:"45%",top:"30%",zIndex:100}}>
  <header className="modal-header">{props.title}</header>
  <div style={{fontWeight:"bold",padding:"16px 11px"}}>{props.alert_message}</div>
  <div style={{display:"flex","flexDirection":"column",alignItems:"end",padding:"10px"}}>
    <button className="userBtn" onClick={ModalClose}>Okay</button>
  </div>
 </Card>
);

}

function Model(props){
   
return (
      <>
      {ReactDOM.createPortal(<Backdrop Modal_close={props.Modal_close}/>,document.getElementById("Backdrop_container"))}
        {ReactDOM.createPortal(<ModelOverlay title={props.title} alert_message={props.alert_message} Modal_close={props.Modal_close}/>,document.getElementById("ModelOverlay_container"))}
        </>
    );
   
}

export default Model;