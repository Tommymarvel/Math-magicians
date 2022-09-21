import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import QuotesPage from './pages/QuotesPage';
import CalculatePage from './pages/CalculatePage';
import NavBar from './component/NavBar';
import './style.css';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calculator" element={<CalculatePage />} />
          <Route path="/quote" element={<QuotesPage />} />
        </Routes>
      </>
    );
  }
}
export default App;
