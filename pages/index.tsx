'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Code, Briefcase, Users, Zap, Mail, Github, Linkedin, Cloud, Activity, UserPlus, Car, Stethoscope, Droplet } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface AccordionButtonProps {
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const AccordionButton: React.FC<AccordionButtonProps> = ({ isOpen, onClick, children }) => {
  return (
    <button onClick={onClick} className="w-full text-left font-semibold text-xl flex justify-between items-center">
      {children}
      <span>{isOpen ? '-' : '+'}</span>
    </button>
  );
};

const Home = () => {
  const [currentMember, setCurrentMember] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const teamMembers = [
    {
      name: 'Elvis Kimathi',
      role: 'Full Stack Developer & UI/UX Designer',
      description: 'Combines backend and frontend development with UI/UX design to create powerful, user-friendly web applications.',
      image: '/Elvis Kimathi.jpeg',
      email: 'elviskimathi@gmail.com',
      github: 'https://github.com/kyme19',
      linkedin: 'https://www.linkedin.com/in/kim-elvis-83492a215/'
    },
    {
      name: 'Wanjohi Ian Kinyua',
      role: 'Software Architect',
      description: 'Designs robust, scalable, and secure software systems, translating business needs into technical solutions.',
      image: '/Wanjohi Ian Kinyua.jpeg',
      email: 'iankinyua322@gmail.com',
      github: 'https://github.com/WanjohiIanKinyua',
      linkedin: 'https://www.linkedin.com/in/ian-kinyua-7b421721b/'
    },
    {
      name: 'Rukia Omar',
      role: 'Quality Assurance Specialist',
      description: 'Ensures high-quality software products through thorough testing and collaboration with developers.',
      image: '/Rukia Omar.jpeg',
      email: 'rukiyaomar149@gmail.com',
      github: 'https://github.com/RukiaOmar'
    },
    {
      name: 'Katrina Najaru',
      role: 'Data Analyst',
      description: 'Analyzes complex datasets to extract meaningful insights and drive informed business decisions.',
      image: '/Katrina Najaru.jpeg',
      email: 'najarulekalkuli@gmail.com',
      github: 'https://github.com/katrinanajaru',
      linkedin: 'https://www.linkedin.com/in/katrina-lekalkuli-201953242/'
    },
    {
      name: 'Stacy Mwaniki',
      role: 'Technical Writer',
      description: 'Creates clear and concise documentation to help users understand complex technical concepts and processes.',
      image: '/Stacy Mwaniki.jpeg'
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length)
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const faqIndex = urlParams.get('faq');
      if (faqIndex !== null) {
        setActiveFaq(parseInt(faqIndex, 10));
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    { title: 'OpenCloud', description: 'An open-source weather app providing accurate forecasts.', link: 'https://github.com/kyme19/opencloudv2', icon: <Cloud className="w-12 h-12 text-[#74b850] mb-4" /> },
    { title: 'COVID-19 Prediction', description: 'AI/ML analysis for predicting COVID-19 rates using Hadoop.', link: 'https://github.com/kyme19/PySpark-COVID-19-Hospital-Capacity-Prediction', icon: <Activity className="w-12 h-12 text-[#74b850] mb-4" /> },
    { title: 'Recruitment Portal', description: 'A job recruitment website where users can post and apply for jobs.', link: 'https://github.com/kyme19/Recruitment-Portal-', icon: <UserPlus className="w-12 h-12 text-[#74b850] mb-4" /> },
    { title: 'Self-Driving Car Simulation', description: 'A JavaScript-based simulation tool for self-driving cars.', link: 'https://github.com/kyme19/Self-driving-car-with-JS-no-Libraries-', icon: <Car className="w-12 h-12 text-[#74b850] mb-4" /> },
    { title: 'Diabetes Monitoring App', description: 'An application for monitoring and managing diabetes.', link: '#', icon: <Stethoscope className="w-12 h-12 text-[#74b850] mb-4" /> },
    { title: 'Water Level Tracker', description: 'React app using ESP32 and ultrasonic sensors to track water levels in tanks.', link: '#', icon: <Droplet className="w-12 h-12 text-[#74b850] mb-4" /> },
  ]

  const faqs = [
    {
      id: 1,
      question: 'How much will it cost?',
      answer: 'To get a better idea of the cost of what you want to build, give us a quick phone call. We’ll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. Then we’ll be able to give you a ballpark figure. If you’re still interested, we’ll come to your place of business and come up with a firm quote.'
    },
    {
      id: 2,
      question: 'How long it takes to design?',
      answer: 'The time limit of any assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client.'
    },
    {
      id: 3,
      question: 'How do I associate with IT Company?',
      answer: 'The process begins when you contact us with your requirements. We analyze your requirements and respond to you. On the basis of the further discussion, you can choose an engagement model that suits you the best. After that, we begin the process of development.'
    },
    {
      id: 4,
      question: 'Can you help my current site look more professional?',
      answer: 'Yes. Give us your requirements and we have experienced expertise to help you give a new professional look that really wonders!'
    },
    {
      id: 5,
      question: 'When do I pay?',
      answer: 'For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs. We understand that this is a big investment and want to help you budget for the expense in whatever way possible. We accept checks, PayPal, and all major credit cards.'
    }
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#f6faf4] text-[#080d06]">
        <div className="flex flex-col items-center">
          <Image src="/nexify.png" alt="Nexify Logo" width={100} height={100} className="animate-pulse" />
          <p className="mt-4 text-xl">Please wait as we try to make your future brighter</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#f6faf4] text-[#080d06] min-h-screen pt-16">
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 transition-colors duration-300 ${isScrolled ? 'bg-[#74b850] text-[#f6faf4]' : 'bg-transparent text-[#080d06]'}`}>
        <div className="flex items-center">
          <Image src="/nexify.png" alt="Nexify Logo" width={40} height={40} className="mr-2" />
          <h1 className="text-2xl font-bold">Nexisfy</h1>
        </div>
        <div className="space-x-4 hidden md:flex">
          <Link href="#home" scroll={false} className="hover:text-[#b4dba0] transition-colors duration-300">Home</Link>
          <Link href="#projects" scroll={false} className="hover:text-[#b4dba0] transition-colors duration-300">Projects</Link>
          <Link href="#about" scroll={false} className="hover:text-[#b4dba0] transition-colors duration-300">About Us</Link>
          <Link href="#contact" scroll={false} className="hover:text-[#b4dba0] transition-colors duration-300">Contact Us</Link>
        </div>
        <button onClick={() => {
          const faqSection = document.getElementById('faq');
          if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth' });
          }
        }} className="bg-[#94ce74] text-[#080d06] px-4 py-2 rounded hover:bg-[#b4dba0] transition-colors duration-300">F.A.Q</button>
      </nav>

      <header id="home" className="text-center py-20 bg-gradient-to-r from-[#74b850] to-[#94ce74] animate-gradient-x">
        <h1 className="text-5xl font-bold text-[#f6faf4] mb-4">Nexisfy Tech Solutions</h1>
        <p className="text-xl text-[#f6faf4] max-w-2xl mx-auto">
          We provide rapid and efficient technological solutions to boost your business. Our innovative approaches and cutting-edge technologies ensure that your company stays ahead in the digital landscape, maximizing productivity and growth.
        </p>
      </header>

      <div className="border-t border-[#b4dba0] my-8"></div>

      <section className="py-12 bg-[#f6faf4]">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Code className="w-24 h-24 text-[#74b850]" />, title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions' },
            { icon: <Briefcase className="w-24 h-24 text-[#74b850]" />, title: 'Professionalism', description: 'Delivering excellence in every project' },
            { icon: <Users className="w-24 h-24 text-[#74b850]" />, title: 'Collaboration', description: 'Working together to achieve greatness' },
            { icon: <Zap className="w-24 h-24 text-[#74b850]" />, title: 'Efficiency', description: 'Optimizing processes for maximum impact' },
          ].map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#b4dba0] my-8"></div>

      <section className="py-12 bg-[#f6faf4] overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col md:flex-row">
            <button onClick={() => setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)} className="p-2 mb-4 md:mb-0 md:mr-4">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center mx-4 w-full max-w-4xl transition-all duration-500 ease-in-out transform">
              <div className="w-64 h-64 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-8">
                <Image
                  src={teamMembers[currentMember].image}
                  alt={teamMembers[currentMember].name}
                  width={256}
                  height={256}
                  className="object-cover w-full h-full animate-fade-in"
                />
              </div>
              <div className="text-center md:text-left animate-slide-up">
                <h3 className="text-2xl font-bold mb-2">{teamMembers[currentMember].name}</h3>
                <p className="text-xl mb-4">{teamMembers[currentMember].role}</p>
                <p className="mb-4">{teamMembers[currentMember].description}</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  {teamMembers[currentMember].email && (
                    <a href={`mailto:${teamMembers[currentMember].email}`} aria-label={`Email ${teamMembers[currentMember].name}`} className="text-[#74b850] hover:text-[#94ce74] transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </a>
                  )}
                  {teamMembers[currentMember].github && (
                    <a href={teamMembers[currentMember].github} target="_blank" rel="noopener noreferrer" aria-label={`${teamMembers[currentMember].name}'s GitHub`} className="text-[#74b850] hover:text-[#94ce74] transition-colors duration-300">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {teamMembers[currentMember].linkedin && (
                    <a href={teamMembers[currentMember].linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${teamMembers[currentMember].name}'s LinkedIn`} className="text-[#74b850] hover:text-[#94ce74] transition-colors duration-300">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button onClick={() => setCurrentMember((prev) => (prev + 1) % teamMembers.length)} className="p-2 mt-4 md:mt-0 md:ml-4">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <div className="border-t border-[#b4dba0] my-8"></div>

      <section id="projects" className="py-12 bg-[#f6faf4]">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-4 flex flex-col items-center h-full">
                {project.icon}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-center flex-grow">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-[#74b850] text-white px-4 py-2 rounded hover:bg-[#94ce74] transition-colors duration-300 inline-block mt-auto">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#b4dba0] my-8"></div>

      <section className="py-12 bg-[#f6faf4] text-center">
  <h2 className="text-3xl font-bold mb-4">Current Project</h2>
  <div className="container mx-auto max-w-2xl">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">GreenGuard - Plant Disease Detector</h3>
      <p className="mb-4">A project to build an app called Plant Disease Detector that utilizes AI technology to detect plants and their illnesses and recommend the right suggestions to cure the plants. This project is currently under development.</p>
      <a href="https://green-guard-e1rf.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-[#74b850] text-white px-4 py-2 rounded hover:bg-[#94ce74] transition-colors duration-300 inline-block mt-auto">View Project</a>
    </div>
  </div>
</section>


      <div className="border-t border-[#b4dba0] my-8"></div>

      <section id="faq" className="py-12 bg-[#f6faf4]">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="container mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md">
              <AccordionButton isOpen={activeFaq === faq.id} onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}>
                {faq.question}
              </AccordionButton>
              {activeFaq === faq.id && (
                <div className="mt-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-[#b4dba0] my-8"></div>

      <section id="about" className="py-12 bg-[#f6faf4] text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-xl mb-6">"Innovating for a brighter future"</p>

          <p>
            We are a group of passionate professionals who have embarked on an exciting journey through the world of technology. Our diverse experiences and shared enthusiasm drive us to create innovative solutions. We believe in the power of code to transform ideas into reality and are committed to making a positive impact in the tech industry.
          </p>
        </div>
      </section>

      <div className="border-t border-[#b4dba0] my-8"></div>

      <footer id="contact" className="bg-gradient-to-r from-[#74b850] to-[#94ce74] animate-gradient-x text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Nexisfy</h2>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow p-2 rounded-l text-[#080d06]" />
                <button type="submit" className="bg-[#94ce74] text-[#080d06] px-4 py-2 rounded-r hover:bg-[#b4dba0] transition-colors duration-300">Subscribe</button>
              </form>
            </div>
            <div>
              <h3 className="font-semibold mb-2">About Us</h3>
              <ul>
                <li><a href="#" className="hover:text-[#b4dba0] transition-colors duration-300">Team</a></li>
                <li><a href="#" className="hover:text-[#b4dba0] transition-colors duration-300">Projects</a></li>
                <li><a href="#" className="hover:text-[#b4dba0] transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul>
                <li><a href="#" className="hover:text-[#b4dba0] transition-colors duration-300">Web Development</a></li>
                <li><a href="#" className="hover:text-[#b4dba0] transition-colors duration-300">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-[#b4dba0] transition-colors duration-300">AI Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <ul>
                <li>nextifytech@soln.com</li>
                <li>0701429094</li>
                <li>420 Next, Juja, Kiambu, KE</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;
