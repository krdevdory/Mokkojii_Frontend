import { Routes, Route, Link } from 'react-router-dom'
import SignIn from './pages/Sign/SignIn'
import SignUp from './pages/Sign/SignUp'
import Home from './pages/Home/HomeScreen'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className='min-h-screen flex justify-center items-center flex-col'>
            <div>
              <Link to="/signup">회원가입 페이지</Link>
            </div>
            <div>
              <Link to="/signin">로그인 페이지</Link>
            </div>
            <div>
              <Link to="/home">홈스크린 페이지 이동</Link>
            </div>          
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