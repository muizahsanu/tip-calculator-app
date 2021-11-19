import './App.scss';

import { useEffect, useState } from 'react';
import InputIcon from './components/InputIcon/InputIcon';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {
  const recommendationTips = [5,10,15,25,50]
  const [tip, setTip] = useState(0)
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    if(tip && bill && people){
      let getTip = tip / 100
      let getTotal = bill / people
      let getTipAmount = getTotal * getTip
      setTipAmount(getTipAmount)
      setTotal(getTotal + getTipAmount)
    }
  }, [tip, bill, people])
  
  const handleBill = (_bill) => {
    setBill(_bill)
  }
  const handleTip = (_tip) => {
    setTip(_tip)
  }
  const handlePeople = (_people) =>{
    setPeople(_people)
  }
  console.log("bill", bill);
  console.log("tip", tip);
  console.log("people", people);
  const handleReset = () =>{
    setBill(0)
    setTip(0)
    setPeople(0)
    setTipAmount(0)
    setTotal(0)
    console.log("reset");
  }

  return (
    <div className="App">
      <div className="brand">
        <img src="/images/logo.svg" alt="Logo Brand Splitter" />
      </div>

      <div className="container">
        {/* INPUT */}
        <div className="form-input">
          <div className="form-group">
            <label>Bill</label>
            <InputIcon 
              iconSource="/images/icon-dollar.svg" 
              inputType="number"
              handleBill={handleBill}
              value={bill} />
          </div>

          <div className="form-group">
            <label>Select Tip %</label>
            <div className="select-tip">
              {recommendationTips.map((_tip, index)=>(
                <Button
                  key={index} 
                  buttonText={_tip+"%"}
                  value={_tip} 
                  selected={tip === _tip}
                  handleTip={handleTip}
                />
              ))}
              <Input 
                inputType="number"
                placeholder="Custom"
                handleTip={handleTip}
                value={tip} />
            </div>
          </div>

          <div className="form-group">
            <label>Number of People</label>
            <InputIcon 
              iconSource="/images/icon-person.svg" 
              inputType="number"
              handlePeople={handlePeople}
              value={people} />
          </div>
        </div>

        {/* OUTPUT */}
        <div className="output">
          <div className="output-item">
            <div className="title">
              <span>Tip Amount</span>
              <span>/ person</span>
            </div>
            <span className="value">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="output-item">
            <div className="title">
              <span>Total</span>
              <span>/ person</span>
            </div>
            <span className="value">${total.toFixed(2)}</span>
          </div>
          <Button 
            buttonText={"reset"}
            handleReset={handleReset}
            background={"bg-primary"}
          />
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/muizahsanu" target="_blank" rel="noreferrer">Muiz Ahsanu</a>.
        </div>
      </div>

    </div>
  );
}

export default App;
