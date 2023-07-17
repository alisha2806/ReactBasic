import React, { useState } from 'react'

export default function AlishaCompon() {
    const clickMe = () => {
        let newText = "Change2";
        setText(newText);

    }
    const [text, setText] = useState('change1');
   
  return (
      <>
            <div>alishaCompon</div>
            <h1>{text}</h1>
            <button className="btn btn-primary" onClick={clickMe}>clickme</button>
      </>

  )
}
