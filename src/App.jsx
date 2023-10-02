import { useState } from "react"
import {FaBattleNet} from 'react-icons/fa'
import "./app.css"
import { useSpring, animated } from 'react-spring';
import assistantImage from '/public/cool.png';

function App() {
 
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [isBlackBackground, setIsBlackBackground] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
    const [hovered, setHovered] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const iconPosition = hovered ? { top: "30%", right: "10%" } : { top: "3%", right: "3%" };

  const iconSpring = useSpring({
    to: iconPosition,
    config: { tension: 200, friction: 20 },
  });

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // const backgroundColor = isDarkMode ? "black" : "white";


    

  const objectSpringProps = useSpring({
    to: {
      left: isMoving ? '50%' : '3%',
      bottom: isMoving ? '50%' : '3%',
    },
  });

  const imageSpringProps = useSpring({
    to: {
      left: isMoving ? '50%' : '3%',
      bottom: isMoving ? '50%' : '3%',
    },
  });

  const moveObjectToButton = () => {
    setIsMoving(true);
    setIsBlackBackground(!isBlackBackground);
    setBackgroundColor(isBlackBackground ? 'white' : 'black');
  };

  const moveObjectToInitialPosition = () => {
    setIsMoving(false);
  };

  const toggleBackgroundColor = () => {
    if (isMoving) {
      moveObjectToInitialPosition();
    }
    // setIsBlackBackground(!isBlackBackground);
    // setBackgroundColor(isBlackBackground ? 'white' : 'black');
  };

  return (
    <div className={`App ${isBlackBackground ? 'black-bg' : 'white-bg'}`} onClick={toggleBackgroundColor}>

      <div className="App" style={{ backgroundColor }}>
      <div className="icon-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <animated.div className="cursor-pointer rounded-full duration-300 hover:bg-purple-500 bg-zinc-900 p-2" style={iconSpring}>
            <FaBattleNet className="text-white" size={28}/>
        </animated.div>
      </div>
      {/* <button className="toggle-button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button> */}
    </div>
      
      

      <button className="bg-zinc-900 border border-black text-white font-mono text-[.9rem] tracking-wider py-2 px-8 rounded-lg"
        id="action-button"
        onClick={moveObjectToButton}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Click Me
      </button>
      <animated.div
        className="relative w-[50%]"
        style={{
            position: 'absolute',
            left: imageSpringProps.left,
            bottom: imageSpringProps.bottom,
          }}
      >
        <animated.img 
          className="animate-bounce"
          src={assistantImage}
          alt="Assistant"
          width="100px"
          height="auto"
          
        />

        <p className="bg-zinc-900 animate-bounce p-2 lg:w-[55%] rounded-lg rounded-bl-none text-white text-center absolute bottom-[80%] left-[10%] font-mono tracking-widest">Chirp, this button can change the background color of your page. It is {backgroundColor} now.</p>
      </animated.div>
    </div>
  )
}

export default App
