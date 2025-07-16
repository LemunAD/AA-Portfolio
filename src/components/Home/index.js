import './index.scss'
import{ useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-aa.png';
import { Link} from 'react-router-dom'
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['','P','o','r','t','f','o','l','i','o'];
    const welcomeArray = ['W','e','l','c','o','m','e',' ','t','o',' '];
    const jobArray = ['f','o','r','','D','i','g','i','t','a','l','','S','e','r','v','i','c','e','s'];


 useEffect(() => {
  setTimeout(() => {
    setLetterClass('text-animate-hover') 
  }, 4000)
  }, []);

    return(
      <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={letterClass}>i</span>
          <span className={letterClass}>!</span><br/>
          
         <AnimatedLetters letterClass={letterClass}
        strArray={welcomeArray}
        idx={4}/>

        &nbsp;< img src={LogoTitle} alt='developer'/>
        &nbsp;
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15}/>
        <br/>
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22}/>
        </h1>
        <h2>Web Dev & Programming / Marketing services / Data analysis</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>

    </div>
    <Loader type ='cube-transition'/>
    </>
  );
}

export default Home
