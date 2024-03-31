// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Careers from './components/careers/Careers';
import Services from './components/servises/Servises';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Blog_inner from './components/blog/blog_inner/Blog_inner';
import Blog_header from './components/blog/blog_header/Blog_header';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/servises' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='./inner' element={<Blog_inner />} />
          </Routes>
        </nav>
      </header>
      <footer style={{ background: "#063255" }}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
