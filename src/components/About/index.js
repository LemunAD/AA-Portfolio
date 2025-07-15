import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import {useState,useEffect} from 'react';
import TextSphere from './Cloud';
const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover') 
        }, 3000)
        }, []);
    return(
        <>
        <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>Meet the man ready to make your vision a reality, <a href='https://www.linkedin.com/in/adnane-ait-hamou/' className='devName'>Adnane</a> is a data analyst and Marketing specialist whose purpose
                        is to extract valuable insights from data to set up marketing strategies that help grow your business and reach your goals.
                       <span className='tool'> Python, Databases and machine learning</span> are the tools and his attention to detail and analysis skills are the driving force to turn numbers into narratives.
                        My journey is fueled by ambition, creativity, and an unquenchable thirst for improvement and constant learning.
                    </p>
                    <p>On the flip side,I am also well versed in social media and email marketing, with tools such as <span className='tool'>Meta Business Suite, Mail Chimp</span> and    
                     <span className='tool'>LinkedIn sales navigator </span> My skills and expertise will help you grow your brand image, generate more sales and make your dreams a reality.
                        
                    </p>
                    <p>In the heart of our potential collaboration will be a shared commitment to constant evolution and delivering top notch work.
                         Passion is the fuel that propels our journey forward, 
                         whether it's building a brand from the ground up or solidifying an existing one. 
                         I believe that the pursuit of improvement is a never-ending adventure, and my ambition lights the way,
                          guiding us through the ever-changing landscape of the digital realm.
</p>
                </div>
                <div className='cloud-zone'>
                <TextSphere/>
                    </div>
            </div>
            <Loader type ='cube-transition'/>
            </>
    )
}


export default About