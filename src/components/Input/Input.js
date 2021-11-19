import './Input.scss'

export default function Input(props){

  const handleChange = (_value) =>{
    if(!_value){
      _value = 0
    }
    if(props.handleTip){
      props.handleTip(parseFloat(_value))
    }
  }

  return (
    <div className="input">
      <input type={props.inputType} min="0" placeholder={props.placeholder} 
        value={props.value > 0 ? props.value : '' }
        onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}