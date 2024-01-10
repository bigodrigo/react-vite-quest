# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Acho q o desafio pede para fazer com props então talvez fosse algo tipo o seguinte, lembrando q é o texto e a cor:
```
//component
import PropTypes from "prop-types";
import './DynamicText.css'

export default function DynamicText({inputText,handleInputChange,transformedText}) {

    DynamicText.propTypes = {
        inputText: PropTypes.string.isRequired,
        handleInputChange: PropTypes.func.isRequired,
        transformedText: PropTypes.string.isRequired,
    }
    return(
        <div>
            <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type here..."
            />
            <p style={{ color: 'blue' }}>{transformedText}</p>
        </div>
    )
}

//app
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState('');

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setTransformedText(text.toUpperCase());
  };
  ...
        <DynamicText 
          inputText={inputText}
          handleInputChange={handleInputChange}
          transformedText={transformedText} 
        />
```