import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText]= useState("");
    // const [text1,setText1]= useState();
    const btn1 =(event)=>{
        console.log("you clicked the button");
        // console.log("you clicked the button"+text);
        // console.log("you clicked the button"+event.target.value);
        // alert("you clicked the button");
        let newText = text.toUpperCase();
        // let newText = text1.toUpperCase();
        setText(newText);
        // setText1(newText.toS);
    }
    const btn2 =(event)=>{
        
        let newText = "";
        setText(newText);
    }
    const textonchange=(event)=>{
        console.log("text updated");
        // alert("text updated");
        setText(event.target.value);
    }
    return (
        <>
        <div className='container'>
            <div className="mb-3 my-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" placeholder="Enter Your Text here.." value={text}  onChange={textonchange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="wordcount"><p>words:{text.split(" ").length-1} and characters:{text.length}</p></div>
            <button className="btn btn-primary" onClick={btn1}>Convert to uppercase</button>
            <button className="btn btn-danger mx-2" onClick={btn2}>Clear text</button>
        </div>
        </>
    )
}
