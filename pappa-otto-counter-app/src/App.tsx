import { useEffect, useState } from '@lynx-js/react'
import pappaOtto from './assets/pappa-otto.png'
import './App.css'

// You'll need to add this image to your assets folder
// import pappaOtto from './assets/pappa-otto.png'

export function App() {
  const [countdownText, setCountdownText] = useState('');
  const [isBack, setIsBack] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-09-01T09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsBack(true);
        setRotate(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdownText(`${days} dagar, ${hours} timmar, ${minutes} minuter och ${seconds} sekunder`);
    };

    updateCountdown();

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  console.log('Rendering with countdown:', countdownText);

  return (
    <page>
      <view className="App">
        <view className="ImageContainer">
          <image
            src={pappaOtto}
            className={rotate ? "PappaOtto RotateCenter" : "PappaOtto"}
          />
        </view>
        <view className="Banner">
          {isBack ? (
            <text className="Title">Pappa Otto är tillbaka!</text>
          ) : (
            <>
              <text className="Title">Det är</text>
              <text className="Countdown">{countdownText}</text>
              <text className="Title">tills Otto är tillbaka.</text>
            </>
          )}
        </view>
      </view>
    </page>
  )
}
