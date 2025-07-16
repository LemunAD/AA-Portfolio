import React, { useState, useEffect } from "react";
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from "../../data/portfolio.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover') 
        }, 4000)
    }, []);

    const openModal = (project, imageIndex = 0) => {
        setSelectedProject(project);
        setCurrentImageIndex(imageIndex);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        if (selectedProject && selectedProject.images) {
            setCurrentImageIndex((prev) => 
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject && selectedProject.images) {
            setCurrentImageIndex((prev) => 
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((port, idx) => (
                    <div 
                        key={idx} 
                        className="image-box"
                        onClick={() => openModal(port)}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        <img 
                            src={port.cover} 
                            className="portfolio-image" 
                            alt={port.title}
                        />
                        <div className="content">
                            <p className="title">{port.title}</p>
                            <h4 className="description">{port.description}</h4>
                            <button className="btn">
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderModal = () => {
        if (!isModalOpen || !selectedProject) return null;

        const currentImages = selectedProject.images || [selectedProject.cover];
        const currentImage = currentImages[currentImageIndex];

        return (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={closeModal}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    
                    <div className="modal-header">
                        <h2>{selectedProject.title}</h2>
                    </div>

                    <div className="image-gallery">
                        {currentImages.length > 1 && (
                            <button className="nav-btn prev-btn" onClick={prevImage}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                        )}
                        
                        <div className="main-image-container">
                            <img 
                                src={currentImage} 
                                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                                className="modal-image"
                            />
                            {currentImages.length > 1 && (
                                <div className="image-counter">
                                    {currentImageIndex + 1} / {currentImages.length}
                                </div>
                            )}
                        </div>

                        {currentImages.length > 1 && (
                            <button className="nav-btn next-btn" onClick={nextImage}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        )}
                    </div>

                    {currentImages.length > 1 && (
                        <div className="thumbnail-strip">
                            {currentImages.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(idx)}
                                />
                            ))}
                        </div>
                    )}

                    <div className="modal-notes">
                        <h3>Project Details</h3>
                        <p>{selectedProject.description}</p>
                        {selectedProject.notes && <p>{selectedProject.notes}</p>}
                        {selectedProject.technologies && (
                            <div className="technologies">
                                <strong>Technologies used:</strong>
                                <div className="tech-tags">
                                    {selectedProject.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {selectedProject.url && (
                            <a 
                                href={selectedProject.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Live Project <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="portfolio-content">
                    {renderPortfolio(portfolioData.portfolio)}
                </div>
            </div>
            {renderModal()}
            <Loader type='cube-transition'/>
        </>
    );
};

export default Portfolio;
