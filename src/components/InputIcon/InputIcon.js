import './InputIcon.scss'

export default function InputIcon(props){

  const handleChange = (_inputValue) =>{
    if(!_inputValue){
      _inputValue = 0
    }

    if(props.handleBill){
      props.handleBill(parseFloat(_inputValue))
    }
    if(props.handlePeople){
      props.handlePeople(parseFloat(_inputValue))
    }
  }

  return (
    <div className="input">
      <img className="icon" src={props.iconSource} alt={props.iconSource} />
      <input 
        type={props.inputType} min="0" 
        onChange={(e) => handleChange(e.target.value)}
        value={props.value === 0 ? '' : props.value}
        placeholder={props.value} />
    </div>
  )
}