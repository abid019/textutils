import React from 'react'
import { useState } from 'react'

export default function Form(props) {
  const [text,settext] = useState("");
   const handleOnChange = (event) =>{
      settext(event.target.value);
      // console.log(event.target.value);
   }
   const handleOnclick = () =>{
      settext(text.toUpperCase());
      props.showAlert('text is converted to upper Case','success');
   }
   const handlelowclick = ()=>{
    settext(text.toLowerCase());
    props.showAlert('text is converted to lower Case','success');
   }
   const handleCopy = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert('text is Copied sucessfully','success');
   }
  return (
    <>
      <div className={`container text-${props.mode=== 'light' ? 'Dark' : 'light'}`}>
      
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className='btn mx-1 btn-primary' onClick={handleOnclick} >UpperCase</button>
        <button className='btn mx-1 btn-primary' onClick={handlelowclick}>LowerCase</button>
        <button className='btn mx-1 btn-primary' onClick={handleCopy}>copy text</button>
    </div>
    <div className={`container my-3 text-${props.mode=== 'light' ? 'Dark' : 'light'}`}>
      <h2 className='my-0'>Preview</h2>
      <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words {text.length} letters</p>
      <p className='my-0'>{0.008*text.split(" ").length}</p>
      <h3>Summary</h3>
      <p>{text.length > 0 ? text:'Enter something to get the result'}</p>
    </div>
    </>
  )
}
