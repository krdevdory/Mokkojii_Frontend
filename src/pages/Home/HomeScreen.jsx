import { useState } from 'react'
// import '../../App.css'
import NavBar from "../../components/side_nav";
import SearchHome from '../../components/search_home';
import CardHome from '../../components/card_home';
import KakaoMap from "../../components/map_home";

const HomeScreen = () =>
  <div className="flex w-full h-screen">
    <div className='w-[498px] flex-shrink-0'>
      <div className='flex justify-center w-full h-[136px] pt-[48px] bg-white'>
        <SearchHome />
      </div>
      <div className='flex flex-col items-center mt-[8px] overflow-y-auto h-[calc(100vh-144px)]'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CardHome
            key={index}
            image="https://upload.wikimedia.org/wikipedia/commons/9/9c/Garak-guksu.jpg"
            storeName="우동가조쿠"
            description="쫄깃한 면발이 맛있는 우동집입니다. 붓카케우동부터 카레우동까지쫄깃한 면발이 맛있는 우동집입니다. 붓카케우동부터 카레우동까지"
            cheerCount={128}
            tags={["칼국수", "한식", "맛집"]}
          />
        ))}
      </div>
    </div>
    <div className='flex-1 bg-blue-100'>
      <KakaoMap />
    </div>
  </div>
  ;
const PopularScreen = () => <div className="p-8"><h1 className="text-2xl font-bold">인기 화면</h1><p>인기 콘텐츠 내용입니다.</p></div>;
const CheerScreen = () => <div className="p-8"><h1 className="text-2xl font-bold">응원 화면</h1><p>응원 게시판 내용입니다.</p></div>;
const ManageScreen = () => <div className="p-8"><h1 className="text-2xl font-bold">가게 관리 화면</h1><p>가게 관리 내용입니다.</p></div>;

function Home() {
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

      <div className='w-full h-screen'>
        {renderContent()}
      </div>
    </div>
  )
}

export default Home
