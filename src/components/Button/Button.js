import "./Button.scss"

export default function Button(props){

  const handleClick = () =>{
    if(props.handleReset){
      props.handleReset()
    }
    else if(props.handleTip){
      props.handleTip(props.value)
    }
  }

  return (
    <button 
      className={"button" 
        + (props.selected ? " selected" : "") 
        + (props.background ? " bg-primary" : "")}
      onClick={handleClick}
    >{props.buttonText}</button>
  )
}