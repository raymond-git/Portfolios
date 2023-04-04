import Head from 'next/head'
import { GiAbstract047 } from "react-icons/gi"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raymond Huang Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>myPortfolio</h1>
            <ul className='flex items-center'>
              <li><GiAbstract047 className='cursor-pointer text-2xl' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' target="_blank" href="https://publuu.com/flip-book/109878/294049">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '>Raymond H.</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
              Hi! I am a frontend developer with a passion for creating beautiful and functional web experiences for users.
            </p>
          </div>
          <div className='flex justify-center gap-16 text-5xl py-3 text-gray-600'>
            <a href="https://www.linkedin.com/in/raymondhuang-" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/raymond-git" target="_blank"><AiFillGithub /></a>
            <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" aria-label="Go to Gmail">
              <SiGmail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 mt-8 md:w-94 md:h-94">
            <img className="mx-auto w-44 h-44 flex" src="man.png" style={{ transform: 'translateY(40px)' }}></img>
          </div>
        </section>
        <section className='hello'>
          <div>
            <h3 className='text-3xl'>Coding Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Welcome to my portfolio page! This is a collection of my personal projects, which I have designed and developed over the
              course of my career. Each project represents a unique challenge and opportunity to explore new technologies and design
              principles. I have worked hard to create projects that not only demonstrate my technical skills, but also showcase my
              creativity and problem-solving abilities. I hope you enjoy browsing through my portfolio and learning more about my work!
            </p>
            <div className='lg:flex justify-between gap-10'>
              <div className='rounder-xl p-10 shadow-lg my-10 border'>
                <h1 className='text-2xl text-center'>DogApi</h1>
                <img className='mt-6 w-80 h-50 mx-auto' src="DogApi.jpg"></img>
                <p className='mt-6 leading-6 py-2'>
                  This project serves two main purposes. Firstly, it provides users with a fun and relaxing activity by allowing them
                  to browse cute and funny dog images. Secondly, it offers an opportunity for me to learn a new skills such as React,
                  a JavaScript framework and library.
                </p>
                <h2 className='text-lg mt-4 font-bold text-teal-600'>Technologies Used</h2>
                <div className='lg:flex justify-start gap-6'>
                  <div>
                    <p>HTML5</p>
                    <p>Tailwind</p>
                    <p>MongoDB</p>
                  </div>
                  <div>
                    <p>ReactJS</p>
                    <p>NodeJS</p>
                    <p>Webpack</p>
                  </div>
                </div>
                <div className='py-2'>
                  <h2 className='text-lg mt-4 font-bold text-teal-600'>Project Difficulties</h2>
                  <p>
                    When developing this website, I encountered various obstacles, and one of them was the difficulty in establishing
                    a connection to MongoDB and second deploying the backend server where users are able to login without localhost.
                  </p>
                </div>
                <div className='py-2'>
                  <h2 className='text-lg mt-4 font-bold text-teal-600'>Solution</h2>
                  <p>
                    I spent considerable time researching and watching tutorial videos to complete this project. Even though I faced
                    challenges in deploying the backend server, I was able to deploy the website as a first-timer for the client side,
                    which is a notable achievement.
                  </p>
                  <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-3 mt-12 rounded-md flex justify-center project-card btn btn-lg btn-block btn-outline-primary font-medium' href="https://docs.google.com/document/d/19MyHJZL4rbaXQrNRvM1wqrJPSv1XTFDYcbO4ucB57ns/edit?usp=sharing" target="_blank">View Project</a>
                </div>
              </div>
              <div className='rounder-xl p-10 shadow-lg my-10 border'>
                <h1 className='text-2xl text-center'>Valorant</h1>
                <img className='mt-6 w-80 h-50 mx-auto' src="Valorants.jpg"></img>
                <p className='mt-6 leading-6 py-2'>
                  I am a fan of the PC game, Valorant, and I find it exciting to work on a project related to my favorite game. I
                  discovered that Valorant provides a free API, and I am eager to take advantage of this opportunity to gain hands-on
                  experience working with API data.
                </p>
                <h2 className='text-lg mt-4 font-bold text-teal-600'>Technologies Used</h2>
                <div className='lg:flex justify-start gap-6'>
                  <div>
                    <p>HTML5</p>
                    <p>CSS</p>
                    <p>NodeJS</p>
                  </div>
                  <div>
                    <p>ReactJS</p>
                    <p>Tailwind</p>
                    <p>Webpack</p>
                  </div>
                </div>
                <div className='py-2'>
                  <h2 className='text-lg mt-4 font-bold text-teal-600'>Project Difficulties</h2>
                  <p>
                    Designing a responsive interface that works well across various devices with varying screen sizes has been one of
                    the most significant challenges I've dealt with working on this project. I tried bootstrap responsiveness
                    but that didn't solve it.
                  </p>
                </div>
                <div className='py-2'>
                  <h2 className='text-lg mt-4 font-bold text-teal-600'>Solution</h2>
                  <p>
                    One of the solutions I found was to use CSS media queries to help me
                    target specific screen sizes and adjust website layout accordingly. By incorporating media queries,
                    I successfully achieved responsiveness for both mobile and desktop devices.
                  </p>
                  <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-3 mt-12 rounded-md flex justify-center project-card btn btn-lg btn-block btn-outline-primary font-medium' target="_blank" href="https://main--legendary-crostata-bdcd7b.netlify.app/">View Project</a>
                </div>
              </div>
              <div className='rounder-xl p-10 shadow-lg my-10 border'>
                <h1 className='text-2xl text-center'>Portfolio</h1>
                <img className='mt-6 w-80 h-50 mx-auto rounder-xl border to-black ' src="PortfolioImage.jpg"></img>
                <p className='mt-6 leading-6 py-2'>
                  I have decided to create a portfolio page where I can consolidate all my projects into a single location. As my
                  resume was becoming too cluttered with my work experience, having a dedicated space to organize and showcase my
                  projects makes a lot more sense.
                </p>
                <h2 className='text-lg mt-4 font-bold text-teal-600'>Technologies Used</h2>
                <div className='sm:flex-row lg:flex justify-start gap-6'>
                  <div>
                    <p>HTML5</p>
                    <p>CSS</p>
                    <p>tailwind</p>
                  </div>
                  <div>
                    <p>Tailwind</p>
                    <p>Next.js</p>
                  </div>
                </div>
                <div className='py-2'>
                  <h2 className='text-lg mt-4 font-bold text-teal-600'>Project Difficulties</h2>
                  <p>
                    One of the challenges I face in creating my portfolio website is making it easily
                    digestible for the user. As my portfolio includes both coding and UX design projects, I need to ensure that
                    it presents information in a clear and organized manner.
                  </p>
                </div>
                <div className='py-2'>
                  <h2 className='text-lg mt-4 font-bold text-teal-600'>Solution</h2>
                  <p>
                    As an individual passionate about UX design and committed to understanding user needs, I sought feedback from a group of people on three
                    different variations. I chose the most positively received design to create an engaging
                    and visually appealing portfolio page.
                  </p>
                  <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-3 mt-12 rounded-md flex justify-center project-card btn btn-lg btn-block btn-outline-primary font-medium' target="_blank" href="https://main--joyful-peony-82d08a.netlify.app/">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl mt-14'>UX Design Projects</h3>
          </div>
          <div className='lg:flex justify-between gap-10'>
            <div className='rounder-xl p-10 shadow-lg my-10 border'>
              <h1 className='text-2xl text-center'>AdaLace</h1>
              <img className='mt-6 w-80 h-50 mx-auto' src="AdaLace.jpg"></img>
              <p className='mt-6 leading-6 py-2 '>
                AdaLace is an existing web application that help students search for pre-college prepartory program.
                The objective of this project is to overhaul the entire website of a pre-college preparatory program
                in order to enhance the user's experience.
              </p>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-3 mt-12 rounded-md flex justify-center project-card btn btn-lg btn-block btn-outline-primary font-medium' target="_blank" href="https://uxfol.io/4f1d82af">View Project</a>
            </div>
            <div className='rounder-xl p-10 shadow-lg my-10 border'>
              <h1 className='text-2xl text-center'>EcoFoodie</h1>
              <img className='mt-11 w-80 h-50 mx-auto' src="Ecofoodie.jpg"></img>
              <p className='mt-6 leading-6 py-2 '>
                During the time at the Uber Fellowship program, my team and I were tasked with leveraging technology
                to address local issues. One of our goals is to create an app that educates individuals on proper waste
                disposal techniques at local restaurants.
              </p>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-3 mt-12 rounded-md flex justify-center project-card btn btn-lg btn-block btn-outline-primary font-medium' target="_blank" href="https://raymondhuang515.wixsite.com/ecofoodie">View Project</a>
            </div>
            <div className='rounder-xl p-10 shadow-lg my-10 border'>
              <h1 className='text-2xl text-center'>StreamHub</h1>
              <img className='mt-14 w-50 h-36 mx-auto' src="StreamHub.jpg"></img>
              <p className='mt-4 leading-6 py-2 '>
                During my time in college I took a human interaction course where our team and I have to design any
                products and systems that are easy and intuitive to use. We applied the concepts/principles we learned throughout
                the course to our final project.
              </p>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-3 mt-12 rounded-md flex justify-center project-card btn btn-lg btn-block btn-outline-primary font-medium' target='_blank' href="https://www.figma.com/file/KAT2vZVEhMmLgNPl0IHkXV/StreamHub?node-id=0-1">View Project</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a className="text-xs px-2" href="https://www.flaticon.com/free-icons/boy" title="boy icons">Boy icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  )
} 
