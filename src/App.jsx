import { Routes, Route, Link } from 'react-router-dom'
import SignIn from './pages/Sign/SignIn'
import SignUp from './pages/Sign/SignUp'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Link to="/signup">회원가입 페이지</Link>
            <Link to="/signin">로그인 페이지</Link>
          </div>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App