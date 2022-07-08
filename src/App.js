
import './App.css';
import React, { useState } from 'react';


function App() {
  const initialValues ={ name:"" , phone_No:"" , Date:"" ,gender:"",education:""}
  const [formValue , setFormValue] =useState(initialValues)
  const [name, setName] = useState("")
  const [nameErr, setNameErr] = useState(false)
  const [phone, setPhone] = useState("")
  const [phoneErr, setPhoneErr] = useState(false)
  const [formet , setFormet]=useState("")
  const [select, setSelect] =useState("")
 

  function userHandler(e) {
    const {name , value} = e.target;
    setFormValue({...formValue, [name]: value})
    console.log(formValue)
    let item = e.target.value;
    if (item.length < 4) {
      setNameErr(true)
    }
    else {
      setNameErr(false)
    }
    setName(item)
  }


  function phoneHandler(e) {
    const {name , value} = e.target;
    setFormValue({...formValue, [name]: value})
    console.log(formValue)
    let num = e.target.value;
    if (num.length > 10) {
      setPhoneErr(true)
    } else if (num.length < 10) {
      setPhoneErr(true)
    }
    else {
      setPhoneErr(false)
    }
    setPhone(num)
  }

  function handleChange(e) {
    const {name , value} = e.target;
    setFormValue({...formValue, [name]: value})
    console.log(formValue)
  }

function genderChange(e){
  const {name , value} = e.target;
    setFormValue({...formValue, [name]: value})
    console.log(formValue)
  }
   
  function selectChange(e){
    const {name , value} = e.target;
    setFormValue({...formValue, [name]: value})
    console.log(formValue)

  }  
  




  function submitHandler(e) {
   
    e.preventDefault()
  }

 

  return (
    <div className="container">
  <pre>{JSON.stringify(formValue , undefined ,2)}</pre>
 <form onSubmit={submitHandler}>
        <h1>SAMPLE FORM</h1>
        <div className="sub_con">

          <div className="field">
            <label>Name</label>
            <input type="text"
              placeholder="Name"
              name='name'
              required
              value={formValue.name}
              onChange={userHandler} />
            {nameErr ? <span>Invalid Name</span> : null}

          </div>

          <div className="field">
            <label>Phone No.</label>
            <input type="number"
              placeholder="99********"
              name='phone_No'
              required
              value={formValue.phone_No}
              onChange={phoneHandler} />
            {phoneErr ? <span>Invalid Phone No.</span> : null}
          </div>

          <div className="field">
            <label>Date of Birth</label>
            <input className='date'
              type="date"
              name='Date'
              value={formValue.Date}
              required 
              onChange={handleChange}/>
          </div>

          <div className="field">
            <label>Gender</label>
            <input className="rd_btn" 
            type="radio"
             name="gender" required 
             value={formValue.gender}
             onChange={genderChange}
            />Male
            <input className="rd_btn" 
            type="radio" 
            name="gender" required
            value={formValue.gender}
            onChange={genderChange}
             />Female
          </div>

          <div className="field">
            <label>Education</label>
            <select value={formValue.education} onChange={selectChange}>
              <option>Select Option</option>
              <option>School</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
            </select>
          </div>

          <button className='btnn' type='submit' >Submit</button>


        </div>

      </form>

     
    </div>
  );
}

export default App;
