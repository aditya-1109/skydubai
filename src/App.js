
import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";
import React from 'react';



function App() {

  const [cardType, setcardType] = useState(null);
  const arr = [{ imag: "1", cont: "Message us on our WhatsApp number" }, { imag: "2", cont: "Customer Satisfy guaranteed with all information" }, { imag: "3", cont: "Start depositing & withdrawal instantly" }, { imag: "4", cont: "Earn from your skills" }]
  const arrowss = [0, 1, 2, 3, 4];
  const celebimg= [{imag: "celeb1"}, {imag: "celeb2"},{imag: "celeb3"}, {imag: "celeb4"}, {imag: "celeb5"}, {imag: "celeb6"}, {imag: "celeb7"}]

  const handlecard = (type) => {
    setcardType(type);
  }

  return (
    <div className="App">
      <div className='heading-add'>

        <p className='heading-content'>Welcome to Dubai Online Book| Get ready for a once in a lifetime gaming experience | 24x7 Instant Withdrawal and Instant Deposit Service</p>
      </div>

      <div className='register'>

        <img src='./images/register.JPG' alt="register" />
      </div>

      <div className='social-container'>
        <div className='social'>
          <div className='socialIcon' style={{ backgroundColor: "#0088cc" }}><div className='telegram'><FontAwesomeIcon icon={faTelegram} style={{ color: '#0088cc', fontSize: "1.5em" }} /></div></div>

          <p className='social-heading'>Telegram</p>
        </div>
        <div className='social'>
          <div className='socialIcon' style={{ background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)' }}><FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: "1.5em" }} /></div>
          <p className='social-heading'>Instagram</p>
        </div>
        <div className='social'>
          <div className='socialIcon' style={{ backgroundColor: "#25D366" }}><FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', fontSize: "1.5em" }} /></div>
          <p className='social-heading'>Whatsapp</p>
        </div>
      </div>

      <div className='heroImage'>
        <img className='heroImagee' src='./images/heroImage.jpg' alt='heroImage' />
        <img className='heroImageMobile' src="./images/heroImageMobile.jpg" alt='heroImage' />
      </div>
      <div className='heroImage'>
        <img className='whatsappImage' src='./images/whatsappImage.jpg' alt='whatsappImage' />
      </div>
      <div className='heroImage'>
        <img className='punterImage' src='./images/punterImage.jpg' alt='punterImage' />
        <img className='punterImageMobile' src='./images/punterImageMobile.jpg' alt='punterImage' />
      </div>
      <div className='card-container'>
        <div className='card'>
          <div onMouseEnter={() => handlecard("first")} onMouseLeave={() => setcardType(null)} className='cardImage-container'>
            {cardType === "first" ? <img src='./images/cardyellowfirst.png' alt='first-card' /> :
              <img src='./images/cardfirst.png' alt='first-card' />}
          </div>
          <p>CREATE ACCOUNT</p>
        </div>
        <div onMouseEnter={() => handlecard("second")} onMouseLeave={() => setcardType(null)} className='card'>
          <div className='cardImage-container'>
            {cardType === "second" ? <img src='./images/cardyellowsecond.png' alt='first-card' /> :
              <img src='./images/cardsecond.png' alt='first-card' />}
          </div>
          <p>JOIN DUBAI BOOK IN MINUTES!</p>
        </div>
        <div className='card'>
          <div onMouseEnter={() => handlecard("third")} onMouseLeave={() => setcardType(null)} className='cardImage-container'>
            {cardType === "third" ? <img src='./images/cardyellowthird.png' alt='first-card' /> :
              <img src='./images/cardthird.png' alt='first-card' />}
          </div>
          <p>PLAY & WIN WITH YOUR SKILLS</p>
        </div>
      </div>

      <div className='heroImage'>
        <img src='./images/whatsappAgain.jpg' alt='whatsappAgain' />
      </div>
      <div className='heroImage'>
        <img className='add' src='./images/add.jpg' alt='add' />
        <img className='addMobile' src='./images/addMobile.jpg' alt='addMobile' />
      </div>

      <div className='trusted-container'>
        <div className='trust-heading'>Trusted Partners</div>
        <div className='trust-cards'>
          <div className='trustAdd-container'>
            <div className='trustedImageContainer'>
              <img src='./images/rubyExch.jpg' alt='rubyExch' />
              <img src='./images/idDetail.jpg' alt='idDetail' />
            </div>
            <div className='trustedButtonContainer'>
              <button className='button'>View Demo</button>
              <button className='button'>Get Id!</button>
            </div>
          </div>
          <div className='trustAdd-container'>
            <div className='trustedImageContainer'>
              <img src='./images/diamondExch.jpg' alt='diamondExch' />
              <img src='./images/idDetail.jpg' alt='idDetail' />
            </div>
            <div className='trustedButtonContainer'>
              <button className='button'>View Demo</button>
              <button className='button'>Get Id!</button>
            </div>
          </div>
          <div className='trustAdd-container'>
            <div className='trustedImageContainer'>
              <img src='./images/silverExch.jpg' alt='silverExch' />
              <img src='./images/idDetail.jpg' alt='idDetail' />
            </div>
            <div className='trustedButtonContainer'>
              <button className='button'>View Demo</button>
              <button className='button'>Get Id!</button>
            </div>
          </div>
        </div>

      </div >

      <div className='heroImage'>
        <img className='playImage' src='./images/play.jpg' alt='play' />
        <img className='playOneImage' src='./images/playOneMobile.jpg' alt='playOne' />
        <img className='playTwoImage'  src='./images/playTwoMobile.jpg' alt='playTwo' />
      </div>

      <div className='heroImage'>
        <img className='rewardImage' src='./images/reward.jpg' alt='reward' />
      </div>


      <div className='trusted-container'>
        <div className='whatsapp-headings'>Whatsapp us on</div>
        <div className='trust-cards'>
          <div className='whatsapp-container'>
            <img src='./images/whatsappIcon.png' alt='rubyExch' />
            <p>GET SPORTS ID</p>
          </div>
          <div className='whatsapp-container'>
            <img src='./images/whatsappIcon.png' alt='rubyExch' />
            <p >GET CASINO ID</p>
          </div>
        </div>
      </div>

      <div className='choose-container'>
        <div className='choose-heading'>
          <div className='whatsapp-heading'>WHY CHOOSE DUBAI ONLINE?</div>
        </div>

        <div className='chooseContent'>
          <div className='choosecard-container'>
            <div className='card'>
              <div onMouseEnter={() => handlecard("first")} onMouseLeave={() => setcardType(null)} className='cardImage-container'>
                {cardType === "first" ? <img src='./images/cardyellowfirst.png' alt='first-card' /> :
                  <img src='./images/cardfirst.png' alt='first-card' />}
              </div>
              <p className='trust-contents'>MOST TRUSTED EXCHANGE</p>
            </div>

            <div className='card'>
              <div onMouseEnter={() => handlecard("first")} onMouseLeave={() => setcardType(null)} className='cardImage-container'>
                {cardType === "first" ? <img src='./images/cardyellowfirst.png' alt='first-card' /> :
                  <img src='./images/cardfirst.png' alt='first-card' />}
              </div>
              <p className='trust-contents'>FASTEST REPLY WITHIN MINUTES</p>
            </div>

            <div className='card'>
              <div onMouseEnter={() => handlecard("first")} onMouseLeave={() => setcardType(null)} className='cardImage-container'>
                {cardType === "first" ? <img src='./images/cardyellowfirst.png' alt='first-card' /> :
                  <img src='./images/cardfirst.png' alt='first-card' />}
              </div>
              <p className='trust-contents'>COIN BASED GAME</p>
            </div>

            <div className='card'>
              <div onMouseEnter={() => handlecard("first")} onMouseLeave={() => setcardType(null)} className='cardImage-container'>
                {cardType === "first" ? <img src='./images/cardyellowfirst.png' alt='first-card' /> :
                  <img src='./images/cardfirst.png' alt='first-card' />}
              </div>
              <p className='trust-contents'>24&times;7 COSTUMER SERVICE</p>
            </div>

            <div className='card'>
              <div onMouseEnter={() => handlecard("first")} onMouseLeave={() => setcardType(null)} className='cardImage-container'>
                {cardType === "first" ? <img src='./images/cardyellowfirst.png' alt='first-card' /> :
                  <img src='./images/cardfirst.png' alt='first-card' />}
              </div>
              <p className='trust-contents'>100% GENUINE SITES</p>
            </div>

          </div>



          <div className='chooseImage'>
            <img src='./images/girl.png' alt='girl' />
          </div>
        </div>


      </div>

      <div className='fixed-background'>
        <div className='trust-heading'>How it works?</div>

        <div className="steps-container">
      {arr.map((obj, index) => (
        <React.Fragment key={index}>
          
          <motion.div
            className="steps"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="step"
              variants={{
                hidden: { boxShadow: "0 0 0px 0px orange", opacity: 1 },
                visible: { boxShadow: "0 0 10px 3px orange", opacity: 1 }
              }}
              transition={{
                delay: index * 1.5+1,
                staggerChildren: 0.3
              }}
            >
              <p>Step</p>
              <img src={`./images/${obj.imag}.JPG`} alt="step-img" />
            </motion.div>
            <p>{obj.cont}</p>
          </motion.div>

          {index !== 3 && (
  <div className="arrow-container">
    {arrowss.map((_, inde) => (
      <motion.div
        key={inde}
        className="arrows"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0.5, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        }}
        transition={{
          delay: index * 1.5 + 1 + inde * 0.3,
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} className="glowing-arrow" />
      </motion.div>
    ))}
  </div>
)}

        
        </React.Fragment>
      ))}
    </div>

    <div className='trust-content'>

        <h2>Name you can play with trust</h2>
        <h3>24x7 Withdrawals, Best in class service.</h3>
        <h5>Play once and you will be a fan of our work!</h5>
        <h1 className='trust-get'>Get yourID here!</h1>

        <div className='button-container'>
        
          <button className='button'>GET CRICKET ID</button>
          <button className='button'>GET CASINO ID</button>
        </div>

        </div>
      </div>

      <div className='celebs-container'>
      <div className='celebs-heading'>CELEBS LOVE US</div>
      <div className='celebImages'>
      {celebimg.map((celeb, index)=>(
        <div key={index} className='image-container'>
          <img src={`./images/${celeb.imag}.jpg`} alt='celebImg' />
        </div>
      ))}

</div>
      </div>

      <div className='heroImage'>
        <img className='footer' src='./images/footer.jpg' alt='footer' />
        <img className='footerMobile' src='./images/footerMobile.jpg' alt='footer' />
      </div>


    </div >
  );
}

export default App;
