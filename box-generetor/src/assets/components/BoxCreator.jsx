import React, { useState } from 'react';
const BoxCreator = () => {

  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    setBoxes(prevBoxes => [
      ...prevBoxes,
      {
        color: color,
        width: width,
        height: height
      }
    ]);

    setColor('');
    setWidth('');
    setHeight('');
  };

  return (
    <div>
      <h2>Box Creator</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="colorInput">Color:</label>
        <input
          type="text"
          id="colorInput"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />

        <label htmlFor="widthInput">Width:</label>
        <input
          type="number"
          id="widthInput"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />

        <label htmlFor="heightInput">Height:</label>
        <input
          type="number"
          id="heightInput"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />

        <button type="submit">Add Box</button>
      </form>

      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{
              backgroundColor: box.color,
              width: `${box.width}px`,
              height: `${box.height}px`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxCreator;
