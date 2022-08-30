import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success")
    }

    const [text, setText] = useState('');
    // text = new text; // wrong way to change the text
    // setText = ('new text'); // correct way to change the text
  return (
      <>
        <div className="container" style = {{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" style={{backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white', color: props.mode === 'dark'?'white':'#042743' , height:'300px'}} id="myBox" value={text} onChange={handleOnChange}></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
        </div>
      </>
  )
}
