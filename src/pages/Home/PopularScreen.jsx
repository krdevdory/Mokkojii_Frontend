import { useState } from "react"

import PopularList from "./HomeComponents/PopularList"
import PopularFilterOption from './HomeComponents/PopularFilterOption';
import KakaoMap from "../../components/map_home";
import PopularFilter from "./HomeComponents/PopularFilter";
import close from "../../assets/icons/chevron-left.svg";

export default function PopularScreen() {
    const FILTER_TAGS = ["핫플레이스", "신상맛집", "맛있어요", "친절해요", "분위기굿", "가성비짱", "품질인증"];
    const [selectedTags, setSelectedTags] = useState([]); // 선택 태그
    const [selectedCard, setSelectedCard] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

    const handleRemoveTag = (tagToRemove) => {
        setSelectedTags((prev) => prev.filter((tag) => tag !== tagToRemove));
    }
    // 카드 클릭 핸들러
    const handleCardClick = (selectedCard) => {
        setSelectedCard(selectedCard);
        setShowDetail(true);
    };
    // 상세 닫기
    const handleCloseDetail = () => {
        setShowDetail(false);
    };

    return (
        <div className="flex w-full h-screen">
            <PopularList onClick={handleCardClick} className=" flex-shrink-0 w-[498px]">
                <PopularFilter selectedTags={selectedTags} onRemoveTag={(tag) => setSelectedTags((prev) => prev.filter((t) => t !== tag))} ></PopularFilter>
            </PopularList>
            <div className=" relative w-full h-full">
                <div className='w-full h-full bg-blue-100'>
                    <KakaoMap />
                </div>
                <div className=" absolute pb-[48px] top-[30px] z-10">
                    <PopularFilterOption filterTags={FILTER_TAGS} selectedTags={selectedTags} onChange={(tags) => setSelectedTags(tags)} setSelectedTags={setSelectedTags}></PopularFilterOption>
                </div>
                {/* 상세 정보 오버레이 */}
                {showDetail && selectedCard && (
                    <div className="absolute  max-h-[780px] pb-[48px] top-[100px] left-[20px] w-[450px] h-[calc(100vh-104px)] bg-white rounded-[16px] shadow-lg z-10 overflow-y-auto">
                        <div className="">
                            <img
                                src={close}
                                alt="close"
                                onClick={handleCloseDetail}
                                className={`absolute top-[8px] right-[12px] text-white text-[24px]`} />

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
                                        <div>
                                            <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                                            </div>
                                            <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>붓가케우동</p>
                                            <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>7,500원</p>
                                        </div>

                                        <div>
                                            <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                                            </div>
                                            <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>붓가케우동</p>
                                            <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>7,500원</p>
                                        </div>

                                        <div>
                                            <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                                            </div>
                                            <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>붓가케우동</p>
                                            <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>7,500원</p>
                                        </div>

                                        <div>
                                            <div className='w-[195px] h-[195px] bg-[#F1F1F1] rounded-[16px]'>
                                            </div>
                                            <p className='mt-[12px] text-[20px] text-[#121212] font-medium'>붓가케우동</p>
                                            <p className='mt-[4px] text-[20px] text-[#121212] font-bold'>7,500원</p>
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
        </div>
    )
}