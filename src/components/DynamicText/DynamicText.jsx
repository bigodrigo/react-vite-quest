import { useState } from 'react'

export default function DynamicText() {
    const [inputDynamicText, setInputDynamicText] = useState('');
    const [transformedDynamicText, setTransformedDynamicText] = useState('');
  
    const handleInputDynamicChange = (e) => {
      const text = e.target.value;
      setInputDynamicText(text);
      setTransformedDynamicText(text.toUpperCase());
    };

    return(
        <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '10px', margin: '10px' }}>
            <p>Type anything and see it with UPPERCASE!</p>
            <input
                type="text"
                value={inputDynamicText}
                onChange={handleInputDynamicChange}
                placeholder="Type here..."
            />
            <p style={{ color: 'black', fontWeight: 'bold' }}>{transformedDynamicText}</p>
        </div>
    )
}