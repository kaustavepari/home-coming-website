import { useState,useEffect } from 'react';
import gitamLogoWhiteN from './assets/gitamLogoWhiteN.png';
import HClogoN from './assets/HClogoN.png';
import './App.css';
import mainImage from './assets/Screenshot 2024-11-30 154215.png';

const App = () => {

  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-12-28T00:00:00'); // Target date (28 Dec 2024)
    const currentDate = new Date();
    const difference = targetDate - currentDate;
  
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    
    const paddedDays = days.toString().padStart(2, '0');
    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = seconds.toString().padStart(2, '0');
  
    return { days: paddedDays, hours: paddedHours, minutes: paddedMinutes, seconds: paddedSeconds };
  };
  

  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-around items-center h-[200px]">
        <img src={HClogoN} className="w-[200px] h-auto" alt="HC Logo" />
        <div className="flex flex-row justify-evenly w-[50%] md:w-[400px]">
          <a href="" className="hover:underline">
            About
          </a>
          <a href="" className="hover:underline">
            Events
          </a>
          <a href="" className="hover:underline">
            Gallery
          </a>
          <a href="" className="hover:underline">
            Merch
          </a>
          <h2 className="bg-green-800 rounded-full text-white p-2 w-[80px] text-center h-[35px] flex flex-col justify-center">
            RVSP
          </h2>
        </div>
      </div>

      {/* Main Section */}
      <div className="relative w-full h-[500px]">
        {/* Background Image */}
        <img
          src={mainImage}
          className="w-full h-full object-cover"
          alt="Main Background"
          style={{opacity:0.7,}}
        />
        {/* Centered Logo */}
        <img
          src={gitamLogoWhiteN}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto"
          alt="Gitam Logo"
        />
        <h1 className='text-[150px] absolute top-[380px] left-[1210px] font-[700] text-blue-400'>28</h1>
        <p className='text-[38px] absolute top-[550px] left-[1210px] font-[700] text-blue-400'>Dec 2024</p>
        <div>
         <h1 className='text-[56px] absolute left-[109px] top-[620px] w-[600px] h-[134px] font-[700] text-blue-400'>Welcome Back to Where It All Began!</h1>
         <p className='w-[600px] h-[243px] absolute top-[640px] left-[770px]'>Gitam isn’t just a campus; it’s a collection of stories—your stories. From late-night canteen chats to last-minute exam prep, from friendships that felt like family to moments that shaped your future, every corner of this place holds a memory.
Our Homecoming is carefully curated to strengthen and engage the vibrant alumni community. It’s a chance to reconnect with old friends, relive cherished memories, and forge new connections that inspire future journeys.
Come back, walk those familiar paths, and remember—you never really left. Once a Gitamite, Always a Dynamite!</p>
        </div>
        <p className="font-sans text-[50px] absolute left-[110px] top-[850px] text-blue-500">
  {`${timeLeft.days} : ${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
</p>

      </div>
    </div>
  );
}

export default App;
