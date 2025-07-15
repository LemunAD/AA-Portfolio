import React, { useState, useEffect } from "react";
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from "../../data/portfolio.json";
import './index.scss';

const Portfolio = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover') 
        }, 4000)
        }, []);


        const renderPortfolio = (portfolio) => {
            return(
                <div className="images-container">
                    {
                        portfolio.map((port, idx) => {
                         return(
                            <div key={idx} className="image-wrapper">
                                <img src={port.cover} className="thumbnail" alt={port.title} />
                            </div>
                        )

        })
                    }
                </div>
            );
                }
               

    return <>
    <div className="container portfolio-page">
        <h1 className="page-title">
            <AnimatedLetters letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
            />
            </h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
            
    </div>
    <Loader type ='cube-transition'/>
    </>
    

}
export default Portfolio;