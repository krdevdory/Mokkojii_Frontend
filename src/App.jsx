import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import SignIn from './pages/Sign/SignIn'
import SignUp from './pages/Sign/SignUp'
import Home from './pages/Home/HomeScreen'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Link to="/signup">회원가입 페이지 이동</Link>
            <Link to="/signin">로그인 페이지 이동</Link>
            <Link to="/home">홈스크린 페이지 이동</Link>
          </div>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App