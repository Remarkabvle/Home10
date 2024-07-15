import Image from 'next/image';
import { FaLeaf, FaRegSmile, FaHandPaper, FaClock } from 'react-icons/fa';
import image from '../../assets/image.png';
import './CandleSection.css';

const CandleSection = () => {
  return (
    <section className="candleSection">
      <div className="textContainer container">
        <h1>Clean and fragrant soy wax</h1>
        <p>Made for your home and for your wellness</p>
        <ul className="features">
          <li>
            <FaLeaf style={{marginRight: '10px', color: '#28a745', fontSize: '20px'}} />
            <strong> Eco-sustainable:</strong> All recyclable materials, 0% CO2 emissions
          </li>
          <li>
            <FaRegSmile style={{marginRight: '10px', color: '#28a745', fontSize: '20px'}} />
            <strong> Hypoallergenic:</strong> 100% natural, human friendly ingredients
          </li>
          <li>
            <FaHandPaper style={{marginRight: '10px', color: '#28a745', fontSize: '20px'}} />
            <strong> Handmade:</strong> All candles are craftly made with love.
          </li>
          <li>
            <FaClock style={{marginRight: '10px', color: '#28a745', fontSize: '20px'}} />
            <strong> Long burning:</strong> No more waste. Created for last long.
          </li>
        </ul>
        <button className="hero-button" style={{border: 'none', marginTop:'76px'}}>Learn more</button>
      </div>
      <div className="imageContainer">
        <Image
          src={image} 
          alt="Candles"
          width={500} 
          height={500}  
        />
      </div>
    </section>
  );
};

export default CandleSection;