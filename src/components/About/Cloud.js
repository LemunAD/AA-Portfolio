import React, {useEffect} from 'react'
import TagCloud from "TagCloud";
const TextSphere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
      return () => {
        const container = ".tagcloud";
        const texts = [
            "Angular",
          "HTML",
          "CSS",
          "Python",
          "JavaScript",
          "React",
          "WordPress",
          "Marketing",
          "Project Management",
          "SEO",
          "SQL",
          "Design",
          "Photoshop",
          "Canva",
          "Figma",
          "Data Analysis",
          "GIT",
          "GITHUB",
          "Shopify",
          "SPSS",
            "Google Analytics",
        ];
        const options = {
            radius: 320,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
    
          TagCloud(container, texts, options);
        };
      }, []);
      return (
        <>
            {/* span tag className must be "tagcloud"  */}
            <span className="tagcloud"></span>
        </>
      );
    };
    
    export default TextSphere;