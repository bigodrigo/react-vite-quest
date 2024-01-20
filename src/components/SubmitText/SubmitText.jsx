import { useState } from 'react'

export default function SubmitText() {
    const [inputSubmitText, setInputSubmitText] = useState('');
    const [transformedSubmitText, setTransformedSubmitText] = useState('');
  
    const handleInputSubmitChange = (e) => {
      const text = e.target.value;
      setInputSubmitText(text);
    };

    const handleSubmit = () => {
        setTransformedSubmitText(inputSubmitText.toUpperCase());
      };
    return(
        <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '10px', margin: '10px' }}>
            <p>Type anything and press the button to see it with UPPERCASE!</p>
            <input
                type="text"
                value={inputSubmitText}
                onChange={handleInputSubmitChange}
                placeholder="Type here..."
            />
            <button onClick={handleSubmit}>Send</button>
            <p style={{ color: 'black', fontWeight: 'bold' }}>{transformedSubmitText}</p>
        </div>
    )
}