const {useState} = React;

export const ColorPicker = () => {
  
  const [bgColor, setBgColor] = useState("#ffffff")

  function handleColorChange(e){
    console.log(e.target.value)
    setBgColor(e.target.value)
  }

  return (
    <div
      id="color-picker-container"
      style={{ backgroundColor: bgColor }}>
        <input 
          type="color"
          value= {bgColor}
          id="color-input"
          onChange= {handleColorChange}
        />
      
    </div>
  );
};

