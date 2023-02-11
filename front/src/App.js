import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
  <BrowserRouter>
  <div className="App">
      <div id="page-body">
        <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}  />
        <Route path='/about' element={<AboutPage />}  />
        <Route path='/articles' element={<ArticlesListPage />}  />
        <Route path='/articles/:articleId' element={<ArticlePage />}  />
      </Routes>
      <Footer />
      </div>
    </div>

  </BrowserRouter>
  );
}

export default App;
