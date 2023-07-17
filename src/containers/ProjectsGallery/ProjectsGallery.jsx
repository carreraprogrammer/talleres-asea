import React, { useState, useEffect } from 'react';
import './ProjectsGallery.css';
import rumichacaIpiales from '../../assets/carretera_rumichaca_ipiales.png';
import rumichacaIpialesHover from '../../assets/rumichaca_ipiales_gallery.png';
import udenar from '../../assets/udenar.png';
import udenarHover from '../../assets/udenar_gallery.png';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';

const ProjectsGallery = () => {
  const projectsObj = {
    rumichacaIpiales: {
      title: 'Consorcio SH',
      description: 'Construimos formaletas de alta calidad para cajas de iluminación y fibra óptica, viaductos para la segunda calzada Pasto-Ipiales, señalización vial y estructuras metálicas para cubiertas de bodegas.',
      image: rumichacaIpiales,
      imageHover: rumichacaIpialesHover
    },
    udenar: {
      title: 'Universidad de Nariño',
      description: 'Construimos e instalamos aproximadamente 60.000 kilos de estructura metálica para la Universidad de Nariño en el municipio de Tumaco, Nariño.',
      image: udenar,
      imageHover: udenarHover
    }
  };
  const projectsKeys = Object.keys(projectsObj);
  const [isHovered, setIsHovered] = useState(false);
  const [projectKey, setProjectKey] = useState(projectsKeys[0]);

  useEffect(() => {
    let interval;

    const handleMouseEnter = () => {
      clearInterval(interval);
    };

    const handleMouseLeave = () => {
      const currentIndex = projectsKeys.indexOf(projectKey);
      const nextIndex = (currentIndex + 1) % projectsKeys.length;
      setProjectKey(projectsKeys[nextIndex]);
    };

    if (!isHovered) {
      interval = setInterval(handleMouseLeave, 4000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isHovered, projectKey, projectsKeys]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleArrowLeftClick = () => {
    const currentIndex = projectsKeys.indexOf(projectKey);
    const prevIndex = (currentIndex - 1 + projectsKeys.length) % projectsKeys.length;
    setProjectKey(projectsKeys[prevIndex]);
  };

  const handleArrowRightClick = () => {
    const currentIndex = projectsKeys.indexOf(projectKey);
    const nextIndex = (currentIndex + 1) % projectsKeys.length;
    setProjectKey(projectsKeys[nextIndex]);
  };

  const project = projectsObj[projectKey];

  return (
    <div
      className="galleryContainer"
      style={{ backgroundImage: `url(${isHovered ? project.imageHover : project.image})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="gallery"></div>
      <div className="arrowLeftContainer" onClick={handleArrowLeftClick}>
        <BsArrowLeftShort className="arrowLeft" />
      </div>
      <div className="projectInfo">
        <p className='projectSubtitle'>QUE PODRIAMOS HACER POR TI?</p>
        <h3 className="projectTitle">{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
      </div>
      <div className="arrowRightContainer" onClick={handleArrowRightClick}>
        <BsArrowRightShort className="arrowRight" />
      </div>
    </div>
  );
};

export default ProjectsGallery;
