import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SendMessage from "./pages/sendMessage.jsx";
import ReadMessage from "./pages/readMessage.jsx";
import "./App.css"
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/read/:urlSuffix" element={<ReadMessage />} />
          <Route path="/" element={<SendMessage />} />
        </Routes>
      </Router>
  )
}

export default App
