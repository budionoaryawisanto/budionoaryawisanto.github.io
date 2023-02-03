import './style/home.css'
import profil from './image/profile.png'
import { useState } from 'react';
import sneakerz from './image/projects/projectSneakerz.png'
import spacewar from './image/projects/projectPygame.png'
import schoolyte from './image/projects/projectSchoolyte.png'
import github from './image/githubwhite.png'
import link from './image/externallink.png'
import javascript from './image/javascript.png'
import bootstrap from './image/bootstrap.png'
import python from './image/python.png'
import pygame from './image/pygame.png'
import flutter from './image/flutter.png'
import dart from './image/dart.png'
import laravel from './image/laravel.png'

function App() {
  const [toggleButton, setToggleButton] = useState(false);
  const toggleSwitch = () => {
    toggleButton ? setToggleButton(false) : setToggleButton(true);
  }
  const toggleOff = () => {
    toggleButton ? setToggleButton(false) : setToggleButton(false);
  }
  function scroll(tujuan){
    toggleOff();
    const element = document.getElementById(tujuan);
    if (tujuan == 'project'){
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center'});
    }
    else{
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
    }
  };

  return (
    <div>
      <div className="container-body">
      <nav className='container-nav'>
      <a className='wrapper-logo mt-3' href="#">
      <p className='logo-navbar'>
        <span className='kurawal'>{'{'}</span>
        A
        <span className='kurawal'>{'}'}</span>
      </p>
    </a>
    <div>
    <ul className={`container-navitem ${toggleButton ? 'slide' : null}`}>
      <div className="wrapper-navitem">
      <a className='navitem' onClick={() => scroll('home')}>Home</a>
      <a className='navitem' onClick={() => scroll('profil')}>Profil</a>
      <a className='navitem' onClick={() => scroll('project')}>Project</a>
      </div>
    </ul>
    <div className="menu-toggle" onClick={toggleSwitch}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
      </nav>
      <div className="home page-scroll" id='home'>
        <div className="container-name">
          <p className='hey'>Hey there!, i'm-</p>
          <h2 className='myName'>Budiono Arya Wisanto.</h2>
        </div>
        <div className="container-profesi">
          <h2 className='profesi'><span className='profesi-first'>Software Engineer.</span> A self-taught developer with an
interest in Computer Science.</h2>
        </div>
        <div className="second-profesi">
          <p className='second-profesi-1'>🚀 Exploring opportunities and side projects.
          <br />
          💻 Currently specializing in <span className='detail-profesi'> Front-end Development</span>
          </p>
        </div>
        <div className="container-button">
          <a className='button' target={'_blank'} href="https://github.com/budionoaryawisanto">
            <div className="container-icons-github"></div>
           <span>Github</span>
            </a>
          <a className='button' target={'_blank'} href="https://www.linkedin.com/in/budiono-arya-wisanto-91196b260/">
            <div className="container-icons-linkedin"></div>
           <span>LinkedIn</span>
            </a>
          <a className='button' target={'_blank'} href="mailto:budionoarya.w@gmail.com">
            <div className="container-icons-mail"></div>
           <span>Email</span>
            </a>
        </div>
      </div>
      <div className="profil" id='profil'>
        <div className="aboutme">
          <h2>⚡About Me</h2>
          <p>Hey! I'm Arya, college Student at Universitas Negeri Surabaya (UNESA). Since Im study at UNESA, I choose to learn more about programming, specially for <span>Frontend Developer</span>. Im very interested about programming and start to learn more about programming since semester 4.
            <br />
            <br />
            While Im study at Universitas Negeri Surabaya I develop several project like make a Frontend Smart School Mobile Apps, make a Frontend for Web Store until make a Game. I develop a project with several programming language like <span>Javascript, Dart, Python,</span> and <span>Java</span>
            <br />
            <br />
            When I'm not coding, I go hangout with my friends, play online games with friends, watch some show on Netflix, watch a Anime, and play basketball🏀
          </p>
        </div>
        <div className="container-img-profil">
          <div className="wrapper-img-profil">
            <img src={profil} alt="Budiono Arya Wisanto" className='img-profil' />
          </div>
        </div>
      </div>
      <div className="project" id='project'>
        <div className="left">
          <div className="explore-more">
            <h2>All Creative Works.</h2>
            <p>Here's some of my projects that I have worked on.</p>
            <a href="#">Explore more →</a>
          </div>
          <a className="project-card" href='https://budionoaryawisanto.github.io/Sneakerz/' target='_blank'>
            <img src={sneakerz} alt="Sneakerz" />
            <div className="detail-card">
              <div className="title">
                <p>Sneakerz</p>
                <div className="icons-card">
                  <a href="https://github.com/budionoaryawisanto/Sneakerz" target='_blank'><img src={github} alt="github"/></a>
                  <a href="https://budionoaryawisanto.github.io/Sneakerz/" target='_blank'><img src={link} alt="link"/></a>
                  </div>
              </div>
              <div className="tools">
                <div className="javascript tools-item">
                  <img src={javascript}/>
                  <span>Javascript</span>
                </div>
                <div className="bootstrap tools-item">
                  <img src={bootstrap}/>
                  <span>Bootstrap</span>
                </div>
              </div>
              <p className='detail-project'>A web app for a sale sneakers with categories feature to make easier user to found sneakers who they want. This web app still in development</p>
            </div>
          </a>
          <a className="project-card" href='https://github.com/budionoaryawisanto/SpaceWar' target='_blank'>
            <img src={spacewar} alt="Space war" />
            <div className="detail-card">
              <div className="title">
                <p>Space War</p>
                <div className="icons-card">
                  <a href="https://github.com/budionoaryawisanto/SpaceWar" target='_blank'><img src={github} alt="github"/></a>
                  <a href="https://github.com/budionoaryawisanto/SpaceWar" target='_blank'><img src={link} alt="link"/></a>
                </div>
              </div>
              <div className="tools">
                <div className="python tools-item">
                  <img src={python}/>
                  <span>Python</span>
                </div>
                <div className="pygame tools-item">
                  <img src={pygame}/>
                  <span>Pygame</span>
                </div>
              </div>
              <p className='detail-project'>A game that take a background war in space, this game have a feature like score, live and level. This game also have's a sound effect</p>
            </div>
          </a>
        </div>
        <div className="right">
        <a className="project-card" href='https://drive.google.com/drive/folders/16135iXiFbYraaNK5qSLgc47O7quxzynH?usp=sharing' target='_blank'>
            <img src={schoolyte} alt="Schoolyte" />
            <div className="detail-card">
              <div className="title">
                <p>Schoolyte</p>
                <div className="icons-card">
                  <a href="https://github.com/budionoaryawisanto/Schoolyte" target='_blank'><img src={github} alt="github"/></a>
                  <a href='https://drive.google.com/drive/folders/16135iXiFbYraaNK5qSLgc47O7quxzynH?usp=sharing' target='_blank'><img src={link} alt="link"/></a>
                </div>
              </div>
              <div className="tools">
                <div className="flutter tools-item">
                  <img src={flutter}/>
                  <span>Flutter</span>
                </div>
                <div className="dart tools-item">
                  <img src={dart}/>
                  <span>Dart</span>
                </div>
                <div className="laravel tools-item">
                  <img src={laravel}/>
                  <span>Laravel</span>
                </div>
              </div>
              <p className='detail-project'>A Smart school mobile app thats have many feature like balance, canteen and many more. This mobile app also have many role, more than 10 role adn every role is unique. This project is not yet 100% done, but this is my biggest project and this my first project that involve many people</p>
            </div>
          </a>
        </div>
      </div>
      <div className="closing">
        <h2>Keep In Touch.</h2>
        <p>I'm currently specializing in <span>Front-end Development</span>.
        <br />
        Feel free to get in touch and talk more about your projects.
        </p>
        <div className="icons-closing">
        <a className='button' target={'_blank'} href="https://github.com/budionoaryawisanto">
            <div className="container-icons-github"></div>
           <span>Github</span>
            </a>
          <a className='button' target={'_blank'} href="https://www.linkedin.com/in/budiono-arya-wisanto-91196b260/">
            <div className="container-icons-linkedin"></div>
           <span>LinkedIn</span>
            </a>
          <a className='button' target={'_blank'} href="mailto:budionoarya.w@gmail.com">
            <div className="container-icons-mail"></div>
           <span>Email</span>
            </a>
        </div>
      </div>
      <div className="footer">
        <p>Designed and Developed by <a href='https://www.instagram.com/budionoarya.w/' target='_blank'>Budiono Arya Wisanto</a>.
          <br />
          Built with <span>React.js</span>
        </p>
      </div>
      </div>
    </div>
    );
}

export default App;
