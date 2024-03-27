import './App.css';
import image from './assests/back.jpg'
import {useEffect} from 'react'

function App() {
    useEffect(() => {
      window.scrollTo(0, 1);
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newMargin = 165 + scrollPosition / 2; // Adjust this value as needed

            // Limit the minimum margin
            if (newMargin < 20) {
                newMargin = 20;
            }

            // Set the new margin
            document.querySelector('#back').style.top = newMargin + 'px';
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures that this effect only runs once, like componentDidMount
  const handleClick = () => {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
      })};
  return (
    <>
    <nav class="navbar">
        <div class="logo">
            <img src={require("./assests/logo.png")} alt="Logo"/>
        </div>
        <div class="title">
            Atom Space
        </div>
      </nav>
      <section>
        <img src={image} alt="" id="back"/>
      <div id="connect">
        <div>
            <p class="title1">Atom Space.</p>
        </div>
        <div>
            <a href="https://calendly.com/shryasbhurat"><button>Connect With Us</button></a>
        </div>
      </div>
      <div class="flex">
        <div>
            <img id="arrow" src={require("./assests/down-arrow.png")} alt="" onClick={handleClick}/>
        </div>
        <div>
            <p class="statement"><b>High Energy Structures </b> for Satellite Buses.</p>
        </div>
        <div>
        <p class="statement" id="state2">We are currently in <b>Stealth</b>, More Information Coming Soon. </p>
        </div>
      </div>
      </section>
      </>
  );
}

export default App;
