import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convert To Uppercase","success")
    }
    const handleLowClick=()=>{
        let newText1=text.toLowerCase();
        setText(newText1)
        props.showAlert("Convert To lowercase","success")
    }
    const handleCopy=()=>{
      let newtext3= document.getElementById("mybox");
      newtext3.select();
      navigator.clipboard.writeText(newtext3.value)
      props.showAlert("Text has been copied","success")
  }
  const handleExtraSpaces=()=>{
    let newtext4= text.split(/[ ]+/);
    setText(newtext4.join(" "))
    props.showAlert("Extra Space has been handled","success")
}

    const handleclearClick=()=>{
        let newText2=""
        setText(newText2)
        props.showAlert("Text has been cleared","success")
        
}
const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  

const handleonChange=(event)=>{
        setText(event.target.value)
    }
    
    

  const[text , setText]=useState("")
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
          <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="7" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white',color:props.mode === 'dark' ? 'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Space</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak} >Text Speak</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{(text.split(" ").length)-1}words and {text.length}characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter in the above textbox to preview here"}</p>
    </div>
   </>
  )
}
