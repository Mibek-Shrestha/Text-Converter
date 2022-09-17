import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
      var capitalixedString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

      var  capitalizedwords = (str) => str.split(' ').map(capitalixedString).join(' ');
      setText(capitalizedwords)
      // console.log(capitalizedwords(text)); 
      props.showAlert("Connverted to sentenceCase","success")
  }
  const handleUpClicks = ()=>{
    console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("connverted to lowercase","success")
  }
const handleUpClear = ()=>{
  let newText = '';
  setText(newText);
  props.showAlert("text cler","success")
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

const handlecopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard","success")
}
const handleOnChange = (event) =>{

  setText(event.target.value);
  }
  const [text, setText] = useState('');
  // setText("write something");
return (
  <>
  <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}> 
  
  <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea  className="form-control" style={{backgroundColor: props.mode==='dark'?'#c1a8a8':'white',color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" cols="30" rows="10" onChange={handleOnChange}></textarea>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Sentence Case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClicks}>Convert to lower Case</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClear}>Clear</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handlecopy}>copy</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
      
      </div>
  </div>
  <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text summaary</h1>
    <p> {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length} minute read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
  </>
)
}
