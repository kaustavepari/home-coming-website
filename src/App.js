import { useState, useEffect } from "react";
import gitamLogoWhiteN from "./assets/gitamLogoWhiteN.png";
import HClogoN from "./assets/HClogoN.png";
import "./App.css";
import mainImage from "./assets/Screenshot 2024-11-30 154215.png";
import bharatImage from "./assets/Screenshot 2024-12-01 115259.png";
import bharatBackground from "./assets/Screenshot 2024-12-01 140019.png";
import classroom from "./assets/Screenshot 2024-12-01 120618.png";
import alumni from "./assets/Screenshot 2024-12-01 120827.png";
import friendsInCarnival from "./assets/Screenshot 2024-12-01 120955.png";
import carnival from "./assets/Screenshot 2024-12-01 143029.png";
import racingCar from "./assets/Screenshot 2024-12-01 140444.png";
import vrHeadSet from "./assets/Screenshot 2024-12-01 140824.png"
import singer from "./assets/Screenshot 2024-12-01 115808.png";
import musicBand from "./assets/Screenshot 2024-12-01 120233.png"
import beerParty from "./assets/Screenshot 2024-12-01 141232.png"
import groupPic from "./assets/Screenshot 2024-12-01 141028.png"
import registrationDesk from "./assets/Screenshot 2024-12-02 123104.png"
import registerSpeaker from "./assets/Screenshot 2024-12-02 123722.png"
import cricketMatch from "./assets/Screenshot 2024-11-30 175043.png"
import football from "./assets/Screenshot 2024-12-02 122342.png"
import whiteComedian from "./assets/Screenshot 2024-12-04 221759.png"
import blackComedian from "./assets/Screenshot 2024-12-04 222719.png"

const Carousal = () => {
  const slides = [
    {
      displayUrl: registerSpeaker,
      backgroundUrl: registrationDesk,
      title: "Registrations",
      description: "Kick off your homecoming with a smooth, welcoming registration. Check in, collect your essentials, and get a rundown of the day’s exciting activities—your first step to reconnecting and reliving your time at GITAM!",
      timeAndVenue: "2:00 to 3:00 pm @Open Auditorium",
    },
    
    {
      displayUrl: classroom,
      backgroundUrl: alumni,
      title: "Departmental Visits",
      description: "Revisit the classrooms and labs that shaped your journey. Reconnect with professors, explore new innovations, and see how your department has evolved.",
      timeAndVenue: "3:00 to 5:00 pm @Your Department",
    },
    {
      displayUrl: friendsInCarnival,
      backgroundUrl: carnival,
      title: "Carnival",
      description: "Where nostalgia meets fun! Reconnect with old friends at our vibrant carnival with games, creative workshops, thrilling rides, and live performances. Relive cherished memories while enjoying delicious treats. ",
      timeAndVenue: "5:00 to 6:30 pm @Coke Station Road",
    },
    {
      displayUrl: racingCar,
      backgroundUrl: vrHeadSet,
      title: "Innovation Expo",
      description: "Innovation Expo is where GITAM students, professors, and clubs showcase their innovative projects to esteemed alumni, creating oppurtunities to share ideas, collaborate, and build meaningful connections.",
      timeAndVenue: "5:00 to 6:30 pm @Mother Teresa Road",
    },
    {
      displayUrl: football,
      backgroundUrl: cricketMatch,
      title: "Sports",
      description: "Hit the field, relive the adrenaline, and reignite your competitive spirit! Join friendly matches, cheer for your teams, and celebrate the camaraderie and sportsmanship that made campus life unforgettable.",
      timeAndVenue: "5:00 to 6:30 pm @Open Auditorium",
    },
    {
      displayUrl: bharatImage,
      backgroundUrl: bharatBackground,
      title: "Inaugural",
      description: "The Homecoming inaugural ceremony marks the beginning of the celebrations with a classical performance, traditional lamp lighting, and heartfelt speeches by distinguished guests.",
      timeAndVenue: "6:30 to 7:30 pm @Open Auditorium",
    },
    {
      displayUrl: singer,
      backgroundUrl: musicBand,
      title: "Culturals",
      description: "Celebrate the vibrant spirit of GITAM! Enjoy an evening of music, dance, drama, and art that brings back memories, showcase talent, and reconnects you with the energy of campus life.",
      timeAndVenue: "7:30 to 8:00 pm @Dental Area",
    },
    {
      displayUrl: whiteComedian,
      backgroundUrl: blackComedian,
      title: "Stand-up Comedy",
      description: "Laugh out loud as talented comedians take the stage for a night of fun and nostalgia. Sit back, relax, and enjoy an evening filled with humor that brings back the lighthearted spirit of campus life!",
      timeAndVenue: "8:00 to 8:30 pm @Open Auditorium",
    },{
      displayUrl: beerParty,
      backgroundUrl: groupPic,
      title: "Networking Dinner",
      description: "Connect, collborate, and catch up over an evening of good food and great conversations. Meet fellow alumni, faculty, and students, and build valuable connections that last beyond the event.",
      timeAndVenue: "8:30 to 9:30 pm @Dental Area",
    }
  ];

  const length = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex flex-row justify-between items-center w-full h-[500px] overflow-hidden top-[450px]">
      <div className="w-[50%] text-center text-white mb-6 pl-[20px]">
  {/* Text content */}
  <h1 className="text-3xl  m-4 text-[45px] font-amarante">{slides[activeIndex].title}</h1>
  
  <div className="w-[300px] mx-auto flex items-center justify-center m-3">
    <p>{slides[activeIndex].description}</p>
  </div>
  
  <p className="bg-red-500 rounded-full inline-block mt-2 px-4 py-1 text-white m-3">
    {slides[activeIndex].timeAndVenue}
  </p>
</div>

      <div className="w-[50%] flex flex-row justify-around items-center gap-5 left-[200px]">
        {/* Image elements */}
        <div>
  <img
    src={slides[activeIndex].displayUrl}
    alt="slide-1"
    className="w-[302px] h-[358px] object-cover object-center rounded-lg border-2 border-white"
  />
</div>
<div>
  <img
    src={slides[(activeIndex + 1) % length].displayUrl}
    alt="slide-2"
    className="w-[230px] h-[272px] object-cover object-center rounded-lg border-2 border-white"
  />
</div>
<div>
  <img
    src={slides[(activeIndex + 2) % length].displayUrl}
    alt="slide-3"
    className="w-[230px] h-[272px] object-cover object-center rounded-lg border-2 border-white"
  />
</div>

      </div>

      {/* Dot buttons (no click functionality) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, id) => (
          <button
            key={id}
            className={`h-2 w-2 rounded-full border-0 cursor-pointer transition-all duration-300 ${
              id === activeIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>

      {/* Left and Right arrow buttons */}
      <button
  onClick={handlePrevClick}
  className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
>
  &lt;
</button>
<button
  onClick={handleNextClick}
  className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
>
  &gt;
</button>


      {/* Background image and gradient overlay */}
      <img
        src={slides[activeIndex].backgroundUrl}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-10"></div>

    </div>
  );
};

const App = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-28T00:00:00");
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
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

      <div className="relative w-full h-[500px]">
        <img
          src={mainImage}
          className="w-full h-full object-cover"
          alt="Main Background"
          style={{ opacity: 0.7 }}
        />
        <img
          src={gitamLogoWhiteN}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto"
          alt="Gitam Logo"
        />
        <h1 className="text-[150px] absolute top-[380px] left-[1210px] font-[700] text-blue-400">
          28
        </h1>
        <p className="text-[38px] absolute top-[550px] left-[1210px] font-[700] text-blue-400">
          Dec 2024
        </p>
        <div>
          <h1 className="text-[56px] absolute left-[109px] top-[620px] w-[600px] h-[134px] font-[700] text-blue-400">
            Welcome Back to Where It All Began!
          </h1>
          <p className="w-[600px] h-[243px] absolute top-[640px] left-[770px]">
            Gitam isn’t just a campus; it’s a collection of stories—your stories. From late-night
            canteen chats to last-minute exam prep, from friendships that felt like family to
            moments that shaped your future, every corner of this place holds a memory. Our
            Homecoming is carefully curated to strengthen and engage the vibrant alumni community.
            It’s a chance to reconnect with old friends, relive cherished memories, and forge new
            connections that inspire future journeys. Come back, walk those familiar paths, and
            remember—you never really left. Once a Gitamite, Always a Dynamite!
          </p>
        </div>
        <p className="font-roboto text-[50px] absolute left-[110px] top-[850px]">
          {`${timeLeft.days} : ${timeLeft.hours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
        </p>
        <div className="font-roboto text-[20px] absolute left-[110px] top-[910px] w-[325px] flex flex-row justify-between">
          <p>Days</p>
          <p>Hours</p>
          <p>Mins</p>
          <p>Sec</p>
        </div>
      </div>

      <div className="relative mt-10">
        <Carousal />
      </div>
    </div>
  );
};

export default App;
