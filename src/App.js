import React, { useState } from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import ch1 from './images/ch1.jpg';
import ch2 from './images/ch2.jpg';
import ch3 from './images/ch3.jpg';
import ch4 from './images/ch4.jpg';
import ch5 from './images/ch5.jpg';
import ch6 from './images/ch6.jpg';
import sd1 from './images/sd1.jpg';
import sd2 from './images/sd2.jpg';
import sd3 from './images/sd3.jpg';
import sd4 from './images/sd4.jpg';
import sd5 from './images/sd5.jpg';
import sd6 from './images/sd6.jpg';
import smp1 from './images/smp1.jpg';
import smp2 from './images/smp2.jpg';
import smp3 from './images/smp3.jpg';
import smp4 from './images/smp4.jpg';
import smp5 from './images/smp5.jpg';
import smp6 from './images/smp6.jpg';
import sma1 from './images/sma1.jpg';
import sma2 from './images/sma2.jpg';
import sma3 from './images/sma3.jpg';
import sma4 from './images/sma4.jpg';
import sma5 from './images/sma5.jpg';
import sma6 from './images/sma6.jpg';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleMoreInfoClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="background-image">
      <div className="overlay">
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
            <nav className="nav-links ml-8">
              <a href="#">Home</a>
              <a href="#">TV Shows</a>
              <a href="#">Movies</a>
              <a href="#">New & Popular</a>
              <a href="#">My List</a>
              <a href="#">Browse by Language</a>
            </nav>
          </div>
          <div className="flex items-center">
            <i className="fas fa-search text-xl mr-4"></i>
            <i className="fas fa-bell text-xl mr-4"></i>
            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center">
              <i className="fas fa-smile"></i>
            </div>
          </div>
        </header>
        <main className="flex flex-col justify-center items-start p-8">
          <div>
            <h2 className="text-4xl font-bold">
              <span className="text-red-600">5</span> APRIL
            </h2>
            <h1 className="text-6xl font-bold">
              WINDAH AYU PUTRI
              <span className="block text-6xl mt-2 font-bold">APRILIANO</span>
            </h1>
            <h3 className="text-2xl mt-4">Watch The Short Movie</h3>
            <div className="flex items-center mt-4">
              <button className="bg-white text-black py-2 px-4 flex items-center mr-4">
                <i className="fas fa-play mr-2"></i> Play
              </button>
              <button
                className="bg-black text-white py-2 px-4 flex items-center"
                onClick={handleMoreInfoClick}
              >
                A Little Message
              </button>
            </div>
          </div>
          <div className="bg-gray-800 text-white text-xl py-1 px-2 age-rating">+19</div>
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Happy Birthday Message!</h2>

            <p>
              Happy Birthday My Lovely, Windah Ayu Putri Apriliano!
              May each step you take bring you closer to your dreams. On this special day, I wish you endless happiness, health, and success in everything you pursue. You are such an inspiration, and we’re all so proud to see you grow into the amazing person you are.
              Keep shining bright, and never stop being your incredible self! May this year be a colorful chapter, even more beautiful than the last. Enjoy your special day to the fullest! Love U Always Sayang❤️            </p>            <button
                className="bg-red-600 text-white py-2 px-4 mt-4 rounded-lg"
                onClick={handleCloseModal}
              >
              Close
            </button>
          </div>
        </div>
      )}

      <Sections /> {/* Komponen Sections */}
    </div>
  );
}

// Komponen Section
const Section = ({ title, items, marginTop, imageSize }) => (
  <div className={`${marginTop}`}>
    <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
    <div className="flex space-x-4 overflow-x-auto no-scrollbar pr-4">
      {items.map((item, index) => (
        <div key={index} className="relative flex-shrink-0">
          <img
            src={item.src}
            alt={item.alt}
            className="object-cover rounded-md"
            style={{ width: imageSize.width, height: imageSize.height }}
          />
        </div>
      ))}
    </div>
  </div>
);

// Komponen Sections
const Sections = () => {
  const imageSize = { width: '300px', height: '200px' };

  return (
    <div className="p-4">
      <Section title="Childhood" items={[{ src: ch1, alt: "ch1" }, { src: ch2, alt: "ch2" }, { src: ch3, alt: "ch3" }, { src: ch4, alt: "ch4" }, { src: ch5, alt: "ch5" }, { src: ch6, alt: "ch6" }]} marginTop="mt-2" imageSize={imageSize} />
      <Section title="Elementary School" items={[{ src: sd1, alt: "sd1" }, { src: sd2, alt: "sd2" }, { src: sd3, alt: "sd3" }, { src: sd4, alt: "sd4" }, { src: sd5, alt: "sd5" }, { src: sd6, alt: "sd6" }]} marginTop="mt-10" imageSize={imageSize} />
      <Section title="Junior High School" items={[{ src: smp1, alt: "smp1" }, { src: smp2, alt: "smp2" }, { src: smp3, alt: "smp3" }, { src: smp4, alt: "smp4" }, { src: smp5, alt: "smp5" }, { src: smp6, alt: "smp6" }]} marginTop="mt-10" imageSize={imageSize} />
      <Section title="Senior High School" items={[{ src: sma1, alt: "sma1" }, { src: sma2, alt: "sma2" }, { src: sma3, alt: "sma3" }, { src: sma4, alt: "sma4" }, { src: sma5, alt: "sma5" }, { src: sma6, alt: "sma6" }]} marginTop="mt-10" imageSize={imageSize} />
    </div>
  );
};

export default App;
