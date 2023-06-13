import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home.jsx"
import App from './routes/App.jsx';
import Error from './components/Error.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<App />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);


