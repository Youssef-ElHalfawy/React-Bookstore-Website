import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Books from "./components/Books";
import BookDetails from './components/BookDetails';
import EditDetails from './components/EditDetails';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NotFoundPage from './components/404NotFound';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="books" element={<Books />} >
        </Route>
        <Route path='view/:id' element={<BookDetails />} />
        <Route path='edit/:id' element={<EditDetails />} />
        <Route path="add" element={<EditDetails />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
      {console.log("rendered..")}
    </>
  );
}

export default App;