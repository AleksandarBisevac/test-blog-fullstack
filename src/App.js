import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './Modules/NavBar';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles' element={<ArticleListPage />} />
          <Route path='/article/:name' element={<ArticlePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
