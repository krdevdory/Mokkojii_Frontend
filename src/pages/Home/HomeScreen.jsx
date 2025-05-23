import React, { useState, useEffect } from 'react';
// import '../../App.css'
import NavBar from "../../components/side_nav";
import SearchHome from '../../components/search_home';
import CardHome from '../../components/card_home';
import KakaoMap from "../../components/map_home";
import close from "../../assets/icons/chevron-left.svg";
import loading from "../../assets/loading.svg";
import PopularScreen from './PopularScreen';
import CheerScreen from './CheerScreen';
import ManageScreen from './ManageScreen';

const HomeScreen = () => {
  // 상세 정보 표시 상태 관리
  const [showDetail, setShowDetail] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [stores, setStores] = useState([]);
  const [searchLocation, setSearchLocation] = useState(''); // 새로 추가

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


  const handleSearch = (searchQuery) => {
    console.log('검색된 지역:', searchQuery);
    setSearchLocation(searchQuery);
  };

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
    storeName: "모꼬지",
    description: "데이터 로딩중",
    cheerCount: 0,
    tags: [],
  });

  return (
    <div className="flex w-full h-screen relative">
      <div className='w-[498px] flex-shrink-0'>
        <div className='flex justify-center w-full h-[136px] pt-[48px] bg-white'>
          <SearchHome onSearch={handleSearch} />
        </div>

        <div className='flex flex-col items-center mt-[8px] overflow-y-auto h-[calc(100vh-144px)]'>
          {/* 실제 stores 데이터가 있으면 사용, 없으면 더미 데이터 사용 */}
          {stores.length > 0 ? (
            stores.map((store, index) => (
              store.name.length > 0 &&
              <CardHome
                key={index}
                image={`http://picsum.photos/id/${store.id}/450/220` || loading}
                storeName={store.name || store.storeName}
                description={store.description}
                cheerCount={store.cheerCount || 0}
                tags={store.tags || []}
                onClick={() => handleCardClick({
                  image: `http://picsum.photos/id/${store.id}/450/220` || loading,
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
        <KakaoMap searchLocation={searchLocation} />
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
                  <p className='mt-[8px] mb-[16px] text-[16px] font-medium text-[#121212]'>사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.<br />번창하세요~</p>
                </div>
                <div className='mt-[12px] mx-[24px] pl-[24px] bg-[#F1F1F1] border border-[#C9C9C9] rounded-[16px]'>
                  <p className='mt-[19.15px] text-[#6B6B6B] text-[16px] font-bold'>모꼬지 12</p>
                  <p className='mt-[8px] mb-[16px] text-[16px] font-medium text-[#121212]'>여기가 근방에 있는 맛집 중 제일 맛있음. 강추!!!</p>
                </div>

                <div className='flex justify-center items-center w-[151px] h-[44px] mt-[24px] mx-auto bg-white border border-[#C9C9C9] rounded-[8px] shadow-[0px_0px_9.5px_1px_rgba(0,0,0,0.2)]'>
                  <p className='text-[#6B6B6B] text-[20px] font-medium'>응원 더보기</p>
                </div>
              </div>

              <div className="mt-[24px] border-t-[8px] border-[#F1F1F1]">
                <h3 className="mt-[24px] ml-[24px] text-[24px] text-[#121212] font-semibold">가게 정보</h3>
                <p className="mt-[24px] ml-[24px] text-gray-700 font-bold">
                  <div className='flex gap-[10px] mt-[12px]'>
                    <p>📍</p> 서울 성동구 왕십리로 215-1<br />
                  </div>
                  <div className='flex gap-[10px] mt-[12px]'>
                    <p>⏰</p> 10:00 - 23:00<br />
                  </div>
                  <div className='flex gap-[10px] mt-[12px]'>
                    <p>☎️</p> 0507-1406-2177
                  </div>
                </p>
              </div>

              <div className="mt-[24px] border-t-[8px] border-[#F1F1F1]">
                <h3 className="mt-[24px] mb-[24px] ml-[24px] text-[24px] text-[#121212] font-semibold">메뉴 <span className='text-[#999999]'>6개</span></h3>

                <div className='grid grid-cols-2 gap-[12px] mx-[24px]'>
                  <div>
                    <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                      <img src='https://static.wtable.co.kr/image/production/service/recipe/1675/0c6d386e-2ff4-4c23-8327-b2608d7cd418.jpg?size=800x800' className='w-full h-full rounded-[16px]' />
                    </div>
                    <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>붓가케우동</p>
                    <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>7,500원</p>
                  </div>
                  <div>
                    <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                      <img src='http://t1.daumcdn.net/brunch/service/user/flI9/image/2gxGErqMx9pSfTx4QLSm7RNZP-c.JPG' className='w-full h-full rounded-[16px]' />
                    </div>
                    <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>가조쿠우동</p>
                    <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>8,000원</p>
                  </div>
                  <div>
                    <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                      <img src='https://i.namu.wiki/i/EeYt3jpq0itfG4E8czWRvbnifkljIjorHctUnVNTPkM5urNRnpx77uyicgk0JKZBZb-aBJ-REnAM_J5D5xFSQrxyYUY41U2p_NfDvTJzIPcP_-WHPB3eBT3T_dccIADn39qlEA2gtTHDRtGd8lGjeQ.webp' className='w-full h-full rounded-[16px]' />
                    </div>
                    <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>육육라면</p>
                    <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>9,000원</p>
                  </div>
                  <div>
                    <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                      <img src='https://i.namu.wiki/i/zkK247vxy4MeKAcGB37o0T9BRgk9gOcIlFlt8CrXr8YFVxFovoZe_FasTKzvo99cbnhFRbazrK0JRm9M_hs6ROTUWDYN2YNOavQAi1npprHfnOGIKCI3I5v8RJBSgW-sTcUcJByZtfyylptid0MfcA.webp' className='w-full h-full rounded-[16px]' />
                    </div>
                    <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>치즈육육라면</p>
                    <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>11,000원</p>
                  </div>
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
