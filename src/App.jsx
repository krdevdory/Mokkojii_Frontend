import { useState } from 'react'
import './App.css'
import NavBar from "./components/side_nav";

const HomeScreen = () => <div className="p-8"><h1 className="text-2xl font-bold">홈 화면</h1><p>홈 화면 내용입니다.</p></div>;
const PopularScreen = () => <div className="p-8"><h1 className="text-2xl font-bold">인기 화면</h1><p>인기 콘텐츠 내용입니다.</p></div>;
const CheerScreen = () => <div className="p-8"><h1 className="text-2xl font-bold">응원 화면</h1><p>응원 게시판 내용입니다.</p></div>;
const ManageScreen = () => <div className="p-8"><h1 className="text-2xl font-bold">가게 관리 화면</h1><p>가게 관리 내용입니다.</p></div>;

function App() {
  const [selected, setSelected] = useState("home");

  const renderContent = () => {
    switch (selected) {
      case "home":
        return <HomeScreen />;
      case "crown":
        return <PopularScreen />;
      case "chat":
        return <CheerScreen />;
      case "manage":
        return <ManageScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className='flex'>
      <NavBar selected={selected} onSelectMenu={setSelected} />

      <div className='flex-1 h-screen'>
        {renderContent()}
      </div>
    </div>
  )
}

export default App
