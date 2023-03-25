import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Icons from '../components/Icons';
import profil from '../image/profile.png'
import sneakerz from '../image/projects/projectSneakerz.png'
import spacewar from '../image/projects/projectPygame.png'
import schoolyte from '../image/projects/projectSchoolyte.png'
import ncit from '../image/projects/ncit.png'
import javascript from '../image/javascript.png'
import bootstrap from '../image/bootstrap.png'
import python from '../image/python.png'
import pygame from '../image/pygame.png'
import flutter from '../image/flutter.png'
import dart from '../image/dart.png'
import laravel from '../image/laravel.png'
import react from '../image/react.png'

const Home = () => {
  return (
    <div>
      <div className="container-body">
      <Navbar/>
      <div className="home page-scroll" id='home'>
        <div className="container-name">
          <p className='hey'>Hey there!, i'm-</p>
          <p className='myName'>Budiono Arya Wisanto.</p>
        </div>
        <div className="container-profesi">
          <p className='profesi'><span className='profesi-first'>Software Engineer.</span> A self-taught developer with an
interest in Computer Science.</p>
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
          <div className="container-project-card">
            <div className="explore-more">
              <h2>All Creative Works.</h2>
              <p>Here's some of my projects that I have worked on.</p>
              <a href="#">Explore more →</a>
          </div>
            <Project link='https://budionoaryawisanto.github.io/Sneakerz/' image={sneakerz} alt='sneakerz' title='Sneakerz' github='https://github.com/budionoaryawisanto/Sneakerz' externallink='https://budionoaryawisanto.github.io/Sneakerz/' detail='A web app for a sale sneakers with categories feature to make easier user to found sneakers who they want. This web app still in development' tool1={<Icons class='javascript' image={javascript} title='Javascript' />} tool2={<Icons class='bootstrap' image={bootstrap} title='Bootstrap' />} />
            <Project link='https://budionoaryawisanto.github.io/campus/' image={ncit} alt='NCIT' title='NCIT' github='https://github.com/budionoaryawisanto/campus' externallink='https://budionoaryawisanto.github.io/campus/' detail='A web for a campus to show some activities and news, this web i build for a assignment to make modern campus static website'  tool1={<Icons class='react' image={react} title='ReactJs' />} tool2={<Icons class='javascript' image={javascript} title='Javascript' />} />
            <Project link='https://github.com/budionoaryawisanto/SpaceWar' image={spacewar} alt='Space War' title='Space War' github='https://github.com/budionoaryawisanto/SpaceWar' externallink='https://github.com/budionoaryawisanto/SpaceWar' detail="A game that take a background war in space, this game have a feature like score, live and level. This game also have's a sound effect" tool1={<Icons class='python' image={python} title='Python' />} tool2={<Icons class='pygame' image={pygame} title='Pygame' />} />
            <Project link='https://drive.google.com/drive/folders/16135iXiFbYraaNK5qSLgc47O7quxzynH?usp=sharing' image={schoolyte} alt='Schoolyte' title='Schoolyte' github='https://github.com/budionoaryawisanto/Schoolyte' externallink='https://drive.google.com/drive/folders/16135iXiFbYraaNK5qSLgc47O7quxzynH?usp=sharing' detail="A Smart school mobile app thats have many feature like balance, canteen and many more. This mobile app also have many role, more than 10 role adn every role is unique. This project is not yet 100% done, but this is my biggest project and this my first project that involve many people" tool1={<Icons class='flutter' image={flutter} title='Flutter' />} tool2={<Icons class='dart' image={dart} title='Dart' />}  tool3={<Icons class='laravel' image={laravel} title='Laravel' />} />
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
        <Footer/>
      </div>
    </div>
    
  )
}

export default Home
