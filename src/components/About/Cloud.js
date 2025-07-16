import React, { useEffect, useRef, useState } from 'react'

const TextSphere = () => {
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tagCloudFailed, setTagCloudFailed] = useState(false);
    const animationRef = useRef(null);

    const skills = [
        "Angular", "React", "JavaScript", "HTML", "CSS", 
"Python", "SQL", "SPSS", "Data Analysis",  
"Git", "GitHub", "APIs", "REST",  
"WordPress", "Elementor", "WooCommerce",  
"Shopify", "SEO", "SEM", "Google Ads",  
"Google Analytics", "Search Console", "Content",  
"Marketing", "Email Marketing", "Social Media", "Branding",  
"Photoshop", "Figma", "Canva", "UI", "UX",  
"Project Management", "Agile", "Trello",  "Meta Ads",
"Web Design", "Responsive", "No-Code", "Automation",  
"Creative", "Problem Solving", "A/B Testing",  
"Digital Strategy", "Remote Work", "Sales", "Consulting"
    ];

    useEffect(() => {
        let mounted = true;
        let timeoutId;

        const initializeTagCloud = async () => {
            if (!mounted || !containerRef.current) return;

            try {
                // Clear any existing content
                containerRef.current.innerHTML = '';
                
                const TagCloudModule = await import('TagCloud');
                const TagCloud = TagCloudModule.default || TagCloudModule;
                
                if (!mounted || !containerRef.current) return;

                // Create a new container div for TagCloud
                const cloudContainer = document.createElement('div');
                cloudContainer.className = 'tagcloud-wrapper';
                containerRef.current.appendChild(cloudContainer);

                const options = {
                    radius: 420,
                    maxSpeed: "normal",
                    initSpeed: "normal",
                    direction: 135,
                    keep: true,
                    useContainerInlineStyles: false,
                    useItemInlineStyles: true
                };

                // Initialize TagCloud
                const instance = TagCloud(cloudContainer, skills, options);
                
                // Give it time to render
                timeoutId = setTimeout(() => {
                    if (mounted && cloudContainer.children.length > 0) {
                        setIsLoaded(true);
                        // Apply our custom styles to each tag
                        Array.from(cloudContainer.children).forEach(child => {
                            if (child.tagName === 'SPAN') {
                                child.style.color = '#00ced1';
                                child.style.fontSize = '16px';
                                child.style.fontWeight = '600';
                                child.style.textTransform = 'uppercase';
                                child.style.cursor = 'pointer';
                                child.style.transition = 'all 0.3s ease';
                                
                                // Add hover effects
                                child.addEventListener('mouseenter', () => {
                                    child.style.color = '#ffffff';
                                    child.style.fontSize = '18px';
                                });
                                
                                child.addEventListener('mouseleave', () => {
                                    child.style.color = '#00ced1';
                                    child.style.fontSize = '16px';
                                });
                            }
                        });
                    } else if (mounted) {
                        setTagCloudFailed(true);
                    }
                }, 500);
                
            } catch (error) {
                console.warn('TagCloud initialization failed:', error);
                if (mounted) {
                    setTagCloudFailed(true);
                }
            }
        };

        // Delay initialization to ensure DOM is ready
        const initTimeout = setTimeout(initializeTagCloud, 200);

        return () => {
            mounted = false;
            clearTimeout(initTimeout);
            clearTimeout(timeoutId);
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    // 3D Sphere Fallback Component
    const SphereCloud = () => {
        const sphereRef = useRef(null);
        const [hoveredIndex, setHoveredIndex] = useState(null);

        useEffect(() => {
            if (!sphereRef.current) return;

            const radius = 300;
            const tags = sphereRef.current.children;
            
            const animate = () => {
                const time = Date.now() * 0.0005;
                
                Array.from(tags).forEach((tag, index) => {
                    const phi = Math.acos(-1 + (2 * index) / tags.length);
                    const theta = Math.sqrt(tags.length * Math.PI) * phi + time;
                    
                    const x = radius * Math.cos(theta) * Math.sin(phi);
                    const y = radius * Math.sin(theta) * Math.sin(phi);
                    const z = radius * Math.cos(phi);
                    
                    const scale = (z + radius) / (2 * radius);
                    
                    tag.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
                    tag.style.opacity = scale;
                    tag.style.zIndex = Math.floor(scale * 100);
                });
                
                animationRef.current = requestAnimationFrame(animate);
            };
            
            animate();
            
            return () => {
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            };
        }, []);

        return (
            <div className="sphere-cloud-container">
                <div ref={sphereRef} className="sphere-cloud">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className={`sphere-tag ${hoveredIndex === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    if (tagCloudFailed) {
        return <SphereCloud />;
    }

    return (
        <div className="text-sphere-container">
            <div 
                ref={containerRef} 
                className="tagcloud-container"
                style={{ 
                    width: '100%',
                    height: '600px',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            />
            {!isLoaded && !tagCloudFailed && (
                <div className="loading-sphere">
                    <div className="loading-text" style={{ color: '#00ced1' }}>
                        Initializing skills sphere...
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextSphere;