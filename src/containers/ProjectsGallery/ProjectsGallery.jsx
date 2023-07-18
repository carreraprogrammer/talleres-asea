import React, { useState, useEffect } from 'react';
import './ProjectsGallery.css';
import rumichacaIpiales from '../../assets/carretera_rumichaca_ipiales.png';
import udenar from '../../assets/udenar.png';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import 'lazysizes'

const ProjectsGallery = () => {
  const projectsObj = {
    rumichacaIpiales: {
      title: 'Consorcio SH',
      description:
        'Construimos formaletas de alta calidad para cajas de iluminación y fibra óptica, viaductos para la segunda calzada Pasto-Ipiales, señalización vial y estructuras metálicas para cubiertas de bodegas.',
      image: rumichacaIpiales,
    },
    udenar: {
      title: 'Universidad de Nariño',
      description:
        'Construimos e instalamos aproximadamente 60.000 kilos de estructura metálica para la Universidad de Nariño en el municipio de Tumaco, Nariño.',
      image: udenar,
    },
  };
  const projectsKeys = Object.keys(projectsObj);
  const [projectKey, setProjectKey] = useState(projectsKeys[0]);

  const activeIntervalTime = 8000; // Cambiar el valor para ajustar el intervalo activo (en milisegundos)
  const pauseTime = 2000; // Tiempo de espera antes de reanudar el cambio de imágenes (en milisegundos)
  const [isGalleryPaused, setGalleryPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isGalleryPaused) {
      interval = setInterval(() => {
        setProjectKey((prevKey) => {
          const currentIndex = projectsKeys.indexOf(prevKey);
          const nextIndex = (currentIndex + 1) % projectsKeys.length;
          return projectsKeys[nextIndex];
        });
      }, activeIntervalTime);
    }

    return () => {
      clearInterval(interval);
    };
  }, [projectsKeys, activeIntervalTime, isGalleryPaused]);

  const handleArrowLeftClick = () => {
    setProjectKey((prevKey) => {
      const currentIndex = projectsKeys.indexOf(prevKey);
      const prevIndex = (currentIndex - 1 + projectsKeys.length) % projectsKeys.length;
      return projectsKeys[prevIndex];
    });
  };

  const handleArrowRightClick = () => {
    setProjectKey((prevKey) => {
      const currentIndex = projectsKeys.indexOf(prevKey);
      const nextIndex = (currentIndex + 1) % projectsKeys.length;
      return projectsKeys[nextIndex];
    });
  };

  const pauseGallery = () => {
    setGalleryPaused(true);
  };

  const resumeGallery = () => {
    setGalleryPaused(false);
    setTimeout(() => {
      setProjectKey((prevKey) => {
        const currentIndex = projectsKeys.indexOf(prevKey);
        const nextIndex = (currentIndex + 1) % projectsKeys.length;
        return projectsKeys[nextIndex];
      });
    }, pauseTime);
  };

  const project = projectsObj[projectKey];

  return (
    <div
      className="galleryContainer lazyload"
      style={{ backgroundImage: `url(${project.image})` }}
      onMouseEnter={pauseGallery}
      onMouseLeave={resumeGallery}
    >
      <div className="gallery"></div>
      <div className="arrowLeftContainer" onClick={handleArrowLeftClick}>
        <BsArrowLeftShort className="arrowLeft" />
      </div>
      <div className="projectInfo">
        <p className="projectSubtitle">QUE PODRIAMOS HACER POR TI?</p>
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
