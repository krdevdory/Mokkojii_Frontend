import React, { useState } from 'react';
import store from "../../assets/icons/manage/store.svg";
import hat from "../../assets/icons/manage/hat.svg";
import map from "../../assets/icons/manage/map-pin.svg";
import calendar from "../../assets/icons/manage/calendar-1.svg";
import phone from "../../assets/icons/manage/phone.svg";
import text from "../../assets/icons/manage/scroll-text.svg";
import folder from "../../assets/icons/manage/folder-closed.svg";
import save from "../../assets/icons/manage/save.svg";
import image from "../../assets/icons/manage/image.svg";
import clipboard from "../../assets/icons/manage/clipboard-list.svg";

// 성공 팝업 컴포넌트
const SuccessPopup = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* 배경 오버레이 */}
            <div className="fixed inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>

            {/* 팝업 컨텐츠 */}
            <div className="relative bg-white rounded-[16px] shadow-2xl p-[48px] mx-[24px] max-w-[400px] w-full animate-fade-in">
                <div className="flex flex-col items-center text-center">
                    {/* 체크 아이콘 */}
                    <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#FC650D] to-[#FF8A3D] rounded-full flex items-center justify-center mb-[24px] shadow-lg">
                        <svg
                            className="w-[40px] h-[40px] text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    {/* 메시지 */}
                    <h2 className="text-[28px] font-bold text-[#121212] mb-[12px]">
                        저장되었습니다
                    </h2>
                    <p className="text-[18px] text-[#6B6B6B] font-medium">
                        정보가 성공적으로 저장되었습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function ManageScreen() {
    const [activeTab, setActiveTab] = useState('register');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // 저장하기 버튼 클릭 핸들러
    const handleSaveClick = () => {
        // 여기에 실제 저장 로직을 추가할 수 있습니다
        console.log('저장 중...');

        // 성공 팝업 표시
        setShowSuccessPopup(true);

        // 2초 후 팝업 숨기기
        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 2000);
    };

    return (
        <div className="">
            <div>
                <p className="ml-[24px] mt-[56px] mb-[38px] text-[32px] font-bold">사장님 어서오세요 :)</p>
            </div>

            <div className="flex gap-[10px] ml-[24px] mt-[8px]">
                <button
                    className={`w-[105px] h-[44px] rounded-[8px] text-[20px] font-bold ${activeTab === 'register' ? 'bg-[#FC650D] text-white' : 'bg-white text-[#6B6B6B] border border-[#C9C9C9]'}`}
                    onClick={() => handleTabClick('register')}
                >
                    가게 등록
                </button>
                <button
                    className={`w-[105px] h-[44px] rounded-[8px] text-[20px] font-bold ${activeTab === 'manage' ? 'bg-[#FC650D] text-white' : 'bg-white text-[#6B6B6B] border border-[#C9C9C9]'}`}
                    onClick={() => handleTabClick('manage')}
                >
                    가게 관리
                </button>
            </div>

            {activeTab === 'register' && (
                <>
                    <div className="grid grid-flow-col grid-rows-5 justify-between gap-[24px] px-[48px] pt-[24px] pb-[66px]">

                        <div className="w-[768px] h-[120px]">
                            <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={store}
                                    alt="store"
                                    className={`w-[26px] h-[26px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">가게명</p>
                            </div>
                            <input
                                type="text"
                                placeholder="가게명을 입력해 주세요."
                                className="flex-1 w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                            />
                        </div>

                        <div className="w-[768px]">
                            <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={hat}
                                    alt="hat"
                                    className={`w-[24px] h-[24px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">업종</p>
                            </div>
                            <input
                                type="text"
                                placeholder="업종을 입력해 주세요."
                                className="flex-1 w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                            />
                        </div>

                        <div className="w-[768px]">
                            <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={map}
                                    alt="map"
                                    className={`w-[24px] h-[24px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">주소</p>
                            </div>
                            <input
                                type="text"
                                placeholder="가게의 주소를 입력해 주세요. ex)서울 성동구 왕십리로 215-1"
                                className="flex-1 w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                            />
                        </div>

                        <div className="w-[768px]">
                            <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={calendar}
                                    alt="calendar"
                                    className={`w-[24px] h-[24px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">개업 일자</p>
                            </div>
                            <input
                                type="text"
                                placeholder="개업 일자를 띄어쓰기 없이 . 로 입력해주세요. ex)2025.02.10"
                                className="flex-1 w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                            />
                        </div>

                        <div className="w-[768px]">
                            <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={phone}
                                    alt="phone"
                                    className={`w-[24px] h-[24px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">가게 전화번호</p>
                            </div>
                            <input
                                type="text"
                                placeholder="가게 전화번호를 띄어쓰기 없이 - 로 입력해주세요. ex)02-123-1234"
                                className="flex-1 w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                            />
                        </div>

                        <div className="w-[768px]">
                            <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={text}
                                    alt="text"
                                    className={`w-[24px] h-[24px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">사업자 등록번호</p>
                            </div>
                            <div className="flex gap-[24px]">
                                <input
                                    type="text"
                                    placeholder="사업자 등록번호를 입력해 주세요."
                                    className="flex-1 w-[614px] px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                                />
                                <button className="w-[130px] h-[44px] my-[10px] border border-[#C9C9C9] rounded-[8px] text-[20px] text-[#121212] font-bold">업체 조회</button>
                            </div>
                        </div>

                        <div className="w-[768px]">
                            <div className="flex h-[64px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={folder}
                                    alt="folder"
                                    className={`w-[24px] h-[24px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">소상공인 확인서 파일 첨부</p>
                            </div>
                            <label className="flex items-center justify-center w-[130px] h-[44px] gap-[4px] rounded-[8px] border border-[#C9C9C9] pt-[10px] pr-[16px] pb-[10px] pl-[16px] cursor-pointer">
                                <span className="text-[20px] text-[#121212] font-bold">파일 업로드</span>
                                <input type="file" className="hidden" />
                            </label>
                        </div>

                    </div>

                    <div className="flex justify-end items-center mb-[54px] pr-[48px] gap-[20px]">
                        <p className="text-[#6B6B6B] text-[20px] font-medium">등록 승인까지 최대 3일이 소요될 수 있어요.</p>

                        <button
                            onClick={handleSaveClick}
                            className="flex justify-center items-center w-[129px] h-[44px] text-white bg-[#FC650D] rounded-[8px] text-[20px] font-bold gap-[4px] hover:bg-[#E55A0C] transition-colors duration-200"
                        >
                            <img
                                src={save}
                                alt="save"
                                className={`w-[24px] h-[24px]`} />
                            저장하기
                        </button>
                    </div>
                </>
            )}

            {activeTab === 'manage' && (
                <>
                    <div className="flex justify-between gap-[48px] px-[48px] pt-[24px] pb-[66px]">
                        {/* 왼쪽 컬럼 */}
                        <div className="flex flex-col gap-[24px] w-[768px]">
                            <div className="h-[120px]">
                                <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                    <img
                                        src={store}
                                        alt="store"
                                        className={`w-[26px] h-[26px]`} />
                                    <p className="font-semibold text-[24px] text-[#121212]">가게명</p>
                                </div>
                                <input
                                    type="text"
                                    value="모꼬지 스토어"
                                    placeholder="가게명을 입력해 주세요."
                                    className="flex-1 font-bold w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                                />
                            </div>

                            <div>
                                <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                    <img
                                        src={hat}
                                        alt="hat"
                                        className={`w-[24px] h-[24px]`} />
                                    <p className="font-semibold text-[24px] text-[#121212]">업종</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="업종을 입력해 주세요."
                                    value="팝업스토어"
                                    className="font-bold flex-1 w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                                />
                            </div>

                            <div>
                                <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                    <img
                                        src={map}
                                        alt="map"
                                        className={`w-[24px] h-[24px]`} />
                                    <p className="font-semibold text-[24px] text-[#121212]">주소</p>
                                </div>
                                <input
                                    type="text"
                                    value="서울 강남구 역삼로 180"
                                    placeholder="가게의 주소를 입력해 주세요. ex)서울 성동구 왕십리로 215-1"
                                    className="flex-1 font-bold w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                                />
                            </div>

                            <div>
                                <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                    <img
                                        src={calendar}
                                        alt="calendar"
                                        className={`w-[24px] h-[24px]`} />
                                    <p className="font-semibold text-[24px] text-[#121212]">개업 일자</p>
                                </div>
                                <input
                                    type="text"
                                    placeholder="개업 일자를 띄어쓰기 없이 . 로 입력해주세요. ex)2025.02.10"
                                    value="2025.05.24"
                                    className="flex-1 font-bold w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                                />
                            </div>

                            <div>
                                <div className="flex h-[56px] py-[15px] gap-x-[6px] items-center">
                                    <img
                                        src={phone}
                                        alt="phone"
                                        className={`w-[24px] h-[24px]`} />
                                    <p className="font-semibold text-[24px] text-[#121212]">가게 전화번호</p>
                                </div>
                                <input
                                    type="text"
                                    value="02-1111-2222"
                                    placeholder="가게 전화번호를 띄어쓰기 없이 - 로 입력해주세요. ex)02-123-1234"
                                    className="flex-1 font-bold w-full px-[24px] py-[18px] rounded-[16px] outline-none text-[#121212] bg-[#F1F1F1] placeholder-[#999999] text-[20px]"
                                />
                            </div>
                        </div>

                        {/* 오른쪽 컬럼 */}
                        <div className="flex flex-col gap-[24px] w-[768px]">
                            <div>
                                <div className="flex h-[64px] py-[15px] gap-x-[6px] items-center">
                                    <img
                                        src={image}
                                        alt="image"
                                        className={`w-[24px] h-[24px]`} />
                                    <p className="font-semibold text-[24px] text-[#121212]">대표 사진</p>
                                </div>
                                <img src="/img/image.svg" className='w-[660px] h-[320px] object-cover rounded-[16px] mb-[16px]' />
                                <label className="flex items-center justify-center w-[130px] h-[44px] gap-[4px] rounded-[8px] border border-[#C9C9C9] pt-[10px] pr-[16px] pb-[10px] pl-[16px] cursor-pointer">
                                    <span className="text-[20px] text-[#121212] font-bold">사진 업로드</span>
                                    <input type="file" className="hidden" accept="image/*" />
                                </label>
                            </div>

                            <div>
                                <div className="flex h-[64px] py-[15px] gap-x-[6px] items-center">
                                    <img
                                        src={clipboard}
                                        alt="clipboard"
                                        className={`w-[24px] h-[24px]`} />
                                    <p className="font-semibold text-[24px] text-[#121212]">메뉴</p>
                                </div>
                                <label className="flex items-center justify-center w-[130px] h-[44px] gap-[4px] rounded-[8px] border border-[#C9C9C9] pt-[10px] pr-[16px] pb-[10px] pl-[16px] cursor-pointer">
                                    <span className="text-[20px] text-[#121212] font-bold">메뉴 업로드</span>
                                    <input type="file" className="hidden" accept="image/*" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end items-center mb-[54px] pr-[48px] gap-[20px]">
                        <p className="text-[#6B6B6B] text-[20px] font-medium">등록 승인까지 최대 3일이 소요될 수 있어요.</p>

                        <button
                            onClick={handleSaveClick}
                            className="flex justify-center items-center w-[129px] h-[44px] text-white bg-[#FC650D] rounded-[8px] text-[20px] font-bold gap-[4px] hover:bg-[#E55A0C] transition-colors duration-200"
                        >
                            <img
                                src={save}
                                alt="save"
                                className={`w-[24px] h-[24px]`} />
                            저장하기
                        </button>
                    </div>
                </>
            )}

            {/* 성공 팝업 */}
            <SuccessPopup isVisible={showSuccessPopup} />

            {/* 애니메이션을 위한 CSS (전역 CSS 파일에 추가) */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </div>
    )
}
