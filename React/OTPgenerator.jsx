const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(0);
  // true when countdown is active, used to disable button and show timer
  const isCounting = secondsLeft > 0;
  // generates a random 6-digit number between 100000 and 999999
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

  const handleGenerateOtp = () => {
    // call generateOtp() with parentheses to get the actual number, not the function
    setOtp(generateOtp());
    setSecondsLeft(5);
  };

  useEffect(() => {
    // do nothing if countdown isn't active
    if (!isCounting) return;

    // decrement secondsLeft by 1 every second
    const intervalId = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    // clear the interval when secondsLeft changes or component unmounts
    return () => clearInterval(intervalId);
  }, [secondsLeft]); // re-run every time secondsLeft changes to keep countdown accurate

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">{otp !== null ? otp : "Click 'Generate OTP' to get a code"}</h2>

      {/* aria-live="assertive" announces timer changes to screen readers immediately */}
      <p id="otp-timer" aria-live="assertive">
        {isCounting ? `Expires in: ${secondsLeft} seconds` : otp && "OTP expired. Click the button to generate a new OTP."}
      </p>

      <button id="generate-otp-button" disabled={isCounting} onClick={handleGenerateOtp}>Generate OTP</button>
    </div>
  );
};