import React, { useState, useEffect } from 'react';
// import '../../App.css'
import NavBar from "../../components/side_nav";
import SearchHome from '../../components/search_home';
import CardHome from '../../components/card_home';
import KakaoMap from "../../components/map_home";
import close from "../../assets/icons/chevron-left.svg";
import PopularScreen from './PopularScreen';
import CheerScreen from './CheerScreen';
import ManageScreen from './ManageScreen';

const HomeScreen = () => {
  // 상세 정보 표시 상태 관리
  const [showDetail, setShowDetail] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/api/charts/new');
        const buffer = await response.arrayBuffer();


        const decoder = new TextDecoder('utf-8');
        const text = decoder.decode(buffer);

        const result = JSON.parse(text);
        setStores(result.data);
      } catch (error) {
        console.error('데이터 로딩 실패:', error);
      }
    };

    loadData();
  }, []);




  // 카드 클릭 핸들러
  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setShowDetail(true);
  };

  // 상세 보기 닫기
  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const [dummy, setDummy] = useState({
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Garak-guksu.jpg",
    storeName: "우동가조쿠",
    description: "쫄깃한 면발이 맛있는 우동집입니다. 붓카케우동부터 카레우동까지쫄깃한 면발이 맛있는 우동집입니다. 붓카케우동부터 카레우동까지",
    cheerCount: 128,
    tags: ["칼국수", "한식", "맛집"],
  });

  return (
    <div className="flex w-full h-screen relative">
      <div className='w-[498px] flex-shrink-0'>
        <div className='flex justify-center w-full h-[136px] pt-[48px] bg-white'>
          <SearchHome />
        </div>

        <div className='flex flex-col items-center mt-[8px] overflow-y-auto h-[calc(100vh-144px)]'>
          {/* 실제 stores 데이터가 있으면 사용, 없으면 더미 데이터 사용 */}
          {stores.length > 0 ? (
            stores.map((store, index) => (
              <CardHome
                key={index}
                image={store.image || dummy.image}
                storeName={store.name || store.storeName}
                description={store.description}
                cheerCount={store.cheerCount || 0}
                tags={store.tags || []}
                onClick={() => handleCardClick({
                  image: store.image || dummy.image,
                  storeName: store.name || store.storeName,
                  description: store.description,
                  cheerCount: store.cheerCount || 0,
                  tags: store.tags || []
                })}
              />
            ))
          ) : (
            Array.from({ length: 5 }).map((_, index) => (
              <CardHome
                key={index}
                image={dummy.image}
                storeName={dummy.storeName}
                description={dummy.description}
                cheerCount={dummy.cheerCount}
                tags={dummy.tags}
                onClick={() => handleCardClick({
                  image: dummy.image,
                  storeName: dummy.storeName,
                  description: dummy.description,
                  cheerCount: dummy.cheerCount,
                  tags: dummy.tags
                })}
              />
            ))
          )}
        </div>
      </div>

      <div className='flex-1 bg-blue-100'>
        <KakaoMap />
      </div>

      {/* 상세 정보 오버레이 */}
      {showDetail && selectedCard && (
        <div className="absolute pb-[48px] top-[52px] left-[522px] w-[450px] h-[calc(100vh-104px)] bg-white rounded-[16px] shadow-lg z-10 overflow-y-auto">
          <div className="">
            <img
              src={close}
              alt="close"
              onClick={handleCloseDetail}
              className={`absolute top-[8px] right-[12px] text-white text-[24px] cursor-pointer`} />

            <img
              className="w-full h-[220px] object-cover rounded-t-[16px]"
              src={selectedCard.image}
              alt={selectedCard.storeName}
            />

            <div className="mt-[24px]">
              <div className="font-bold ml-[24px] text-[32px] text-[#121212]">{selectedCard.storeName}</div>

              <p className="mt-[12px] mx-[24px] text-[20px] font-medium">
                {selectedCard.description}
              </p>

              {/* 태그 */}
              <div className="flex flex-wrap gap-[8px] ml-[24px] mt-[16px]">
                {selectedCard.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="h-[44px] px-[16px] inline-flex items-center justify-center bg-[#FEECE1] rounded-[8px] border border-[#FC650D] text-[#FC650D] text-[18px] font-medium"
                  >
                    # {tag}
                  </span>
                ))}
              </div>

              <div className="mt-[24px] border-t-[8px] border-[#F1F1F1]">
                <h3 className="mt-[24px] mb-[12px] ml-[24px] text-[24px] text-[#121212] font-semibold">응원 메시지 <span className='text-[#999999]'>{selectedCard.cheerCount}개</span></h3>
                <div className='mt-[12px] mx-[24px] pl-[24px] bg-[#F1F1F1] border border-[#C9C9C9] rounded-[16px]'>
                  <p className='mt-[19.15px] text-[#6B6B6B] text-[16px] font-bold'>모꼬지 21</p>
                  <p className='mt-[8px] mb-[16px] text-[16px] font-medium text-[#121212]'>dsadsadsadsa dsadsadsadsadsadsadsadsa dsadsadsadsadsadsadsadsadsadsadsadsa</p>
                </div>
                <div className='mt-[12px] mx-[24px] pl-[24px] bg-[#F1F1F1] border border-[#C9C9C9] rounded-[16px]'>
                  <p className='mt-[19.15px] text-[#6B6B6B] text-[16px] font-bold'>모꼬지 21</p>
                  <p className='mt-[8px] mb-[16px] text-[16px] font-medium text-[#121212]'>dsadsadsadsa dsadsadsadsadsadsadsadsa dsadsadsadsadsadsadsadsadsadsadsadsa</p>
                </div>

                <div className='flex justify-center items-center w-[151px] h-[44px] mt-[24px] mx-auto bg-white border border-[#C9C9C9] rounded-[8px] shadow-[0px_0px_9.5px_1px_rgba(0,0,0,0.2)]'>
                  <p className='text-[#6B6B6B] text-[20px] font-medium'>응원 더보기</p>
                </div>
              </div>

              <div className="mt-[24px] border-t-[8px] border-[#F1F1F1]">
                <h3 className="mt-[24px] ml-[24px] text-[24px] text-[#121212] font-semibold">가게 정보</h3>
                <p className="mt-[24px] ml-[24px] text-gray-700">
                  영업시간: 10:00 - 22:00<br />
                  주소: 서울특별시 강남구 테헤란로 123<br />
                  전화번호: 02-123-4567
                </p>
              </div>

              <div className="mt-[24px] border-t-[8px] border-[#F1F1F1]">
                <h3 className="mt-[24px] mb-[24px] ml-[24px] text-[24px] text-[#121212] font-semibold">메뉴 <span className='text-[#999999]'>6개</span></h3>

                <div className='grid grid-cols-2 gap-[12px] mx-[24px]'>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index}>
                      <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                      </div>
                      <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>붓가케우동</p>
                      <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>7,500원</p>
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center w-[151px] h-[44px] mt-[24px] mx-auto bg-white border border-[#C9C9C9] rounded-[8px] shadow-[0px_0px_9.5px_1px_rgba(0,0,0,0.2)]'>
                  <p className='text-[#6B6B6B] text-[20px] font-medium'>메뉴 더보기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
