const { useState } = React;

export const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div id="toggle-container">
      <button id="toggle-button">Message</button>
      {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};