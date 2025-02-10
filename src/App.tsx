import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Globals';
import Theme from './Themes';

import Home from './pages/Home';
import Matricula from './pages/Matricula';

import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/matricula" element={<Matricula />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
