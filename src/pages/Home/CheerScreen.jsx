import { useState } from "react";
import SearchCheer from "../../components/search_cheer";
import message from "../../assets/icons/cheer/message.svg";
import thumbs from "../../assets/icons/cheer/thumbs.svg";
import close from "../../assets/icons/cheer/close.svg";
import close2 from "../../assets/icons/cheer/close2.svg";
import image from "../../assets/icons/cheer/image.svg";
import thumbsup1 from "../../assets/icons/cheer/thumbs-up-orange.svg";
import thumbsup2 from "../../assets/icons/cheer/thumbs-up-black.svg";

export default function CheerScreen() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [cheerQuery, setCheerQuery] = useState('');


    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="flex w-full h-screen relative">
            <div className='w-[498px] flex-shrink-0'>
                <div className='flex justify-center w-full h-[136px] pt-[48px] bg-white'>
                    <SearchCheer />
                </div>

                <p className="mx-[24px] mt-[8px] text-[24px] text-[#121212] font-semibold">내가 한 응원의 말</p>
                <div className="overflow-y-auto h-[calc(100vh-200px)]">

                    <div className="mx-[24px] mt-[24px] px-[24px] py-[30px] w-[450px] border border-[#C9C9C9] rounded-[16px]">
                        <div className="flex gap-[8px]">
                            <img
                                src="https://picsum.photos/id/1/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />

                            <img
                                src="https://picsum.photos/id/2/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />


                            <img
                                src="https://picsum.photos/id/3/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />
                        </div>

                        <p className="mt-[16px] text-[24px] text-[#121212] font-semibold">우동가조쿠</p>

                        <p className="mt-[16px] text-[20px] text-[#121212] font-medium">사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.</p>

                        <div className="grid grid-cols-4 gap-[8px]">
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                        </div>

                        <div className="flex gap-[8px] mt-[16px]">
                            <p className="text-[#999999] text-[16px] font-medium">2025.05.16</p>
                            <p className="text-[#999999] text-[16px] font-bold">5분 전</p>
                        </div>

                        <div className="flex justify-between mt-[16px]">
                            <div className="flex gap-[8px]">
                                <button className="flex h-[36px] px-[8px] my-[4px] items-center border border-[#C9C9C9] rounded-[8px] text-[#121212] text-[16px] font-bold gap-[2px]">
                                    <img
                                        src={message}
                                        alt="message"
                                        className={`w-[24px] h-[24px]`} />
                                    3개
                                </button>

                                <button className="flex h-[36px] px-[8px] my-[4px] items-center border border-[#C9C9C9] rounded-[8px] text-[#121212] text-[16px] font-bold gap-[2px]">
                                    <img
                                        src={thumbs}
                                        alt="thumbs"
                                        className={`w-[24px] h-[24px]`} />
                                    8개
                                </button>
                            </div>
                            <button className="w-[101px] h-[44px] bg-[#F1F1F1] rounded-[8px] text-[#121212] text-[20px] font-medium">수정하기</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="flex justify-between mx-[24px] mt-[56px]">
                    <p className="text-[32px] text-[#121212] font-bold">사장님을 응원하는 글을 작성해 주세요!</p>
                    <button
                        className="bg-[#FC650D] rounded-[8px] px-[16px] py-[8px] text-[white] text-[20px] font-bold"
                        onClick={togglePopup}
                    >
                        응원 작성하기
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-[16px] mt-[44px] mx-[24px]">

                    <div className="w-[386px] rounded-[16px] border border-[#C9C9C9] overflow-hidden">
                        <div className="w-[386px] px-[24px] py-[30px] bg-white">
                            <p className="text-[#121212] text-[16px] font-bold">모꼬지 21</p>
                            <div className="flex text-[#999999] text-[16px] gap-[8px]">
                                <p className="font-medium">2025.05.16</p>
                                <p className="font-bold">5분 전</p>
                            </div>

                            <div className="w-full mt-[16px] p-[24px] bg-[#F1F1F1] rounded-[16px]">

                                <div className="flex w-[290px] gap-[8px]">
                                    <div className="w-[92px] h-[84px] bg-white"></div>
                                    <div className="w-[92px] h-[84px] bg-white"></div>
                                    <div className="w-[92px] h-[84px] bg-white"></div>
                                </div>

                                <p className="text-[24px] text-[#121212] font-semibold mt-[12px]">드뷔시 산장</p>

                                <p className="w-[290px] text-[20px] text-[#121212] font-medium line-clamp-3 overflow-hidden">여기 카페인데 진짜 분위기가 조용하고 무드있어요. 조용한 카페에서 잔잔한 음악들으며 힐링하고싶으신분 강추드려요</p>

                                <div className="flex items-center h-[36px] mt-[12px] gap-[8px]">
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                </div>

                                <div className="flex h-[36px] gap-[8px]">
                                    <button className="flex justify-center items-center gap-[2px] bg-[#FEECE1] border border-[#FC650D] text-[#FC650D] text-[16px] font-bold rounded-[8px] px-[8px]">
                                        <img
                                            src={thumbsup1}
                                            alt="thumbsup1"
                                            className={`w-[24px] h-[24px]`} />
                                        <p>12개</p>
                                    </button>

                                    <button className="flex justify-center items-center gap-[2px] bg-white border border-[#C9C9C9] text-[#121212] text-[16px] font-bold rounded-[8px] px-[8px]">
                                        <img
                                            src={message}
                                            alt="message"
                                            className={`w-[24px] h-[24px]`} />
                                        <p>8개</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-[386px] rounded-[16px] border border-[#C9C9C9] overflow-hidden">
                        <div className="w-[386px] px-[24px] py-[30px] bg-white">
                            <p className="text-[#121212] text-[16px] font-bold">모꼬지 21</p>
                            <div className="flex text-[#999999] text-[16px] gap-[8px]">
                                <p className="font-medium">2025.05.16</p>
                                <p className="font-bold">5분 전</p>
                            </div>

                            <div className="w-full mt-[16px] p-[24px] bg-[#F1F1F1] rounded-[16px]">

                                <div className="flex w-[290px] gap-[8px]">
                                    <div className="w-[92px] h-[84px] bg-white"></div>
                                    <div className="w-[92px] h-[84px] bg-white"></div>
                                </div>

                                <p className="text-[24px] text-[#121212] font-semibold mt-[12px]">드뷔시 산장</p>

                                <p className="w-[290px] text-[20px] text-[#121212] font-medium line-clamp-3 overflow-hidden">여기 카페인데 진짜 분위기가 조용하고 무드있어요. 조용한 카페에서 잔잔한 음악들으며 힐링하고싶으신분 강추드려요</p>

                                <div className="flex items-center h-[36px] mt-[12px] gap-[8px]">
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                </div>

                                <div className="flex h-[36px] gap-[8px]">
                                    <button className="flex justify-center items-center gap-[2px] bg-white border border-[#C9C9C9] text-[#121212] text-[16px] font-bold rounded-[8px] px-[8px]">
                                        <img
                                            src={thumbsup2}
                                            alt="thumbsup2"
                                            className={`w-[24px] h-[24px]`} />
                                        <p>12개</p>
                                    </button>

                                    <button className="flex justify-center items-center gap-[2px] bg-white border border-[#C9C9C9] text-[#121212] text-[16px] font-bold rounded-[8px] px-[8px]">
                                        <img
                                            src={message}
                                            alt="message"
                                            className={`w-[24px] h-[24px]`} />
                                        <p>8개</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[386px] rounded-[16px] border border-[#C9C9C9] overflow-hidden">
                        <div className="w-[386px] px-[24px] py-[30px] bg-white">
                            <p className="text-[#121212] text-[16px] font-bold">모꼬지 21</p>
                            <div className="flex text-[#999999] text-[16px] gap-[8px]">
                                <p className="font-medium">2025.05.16</p>
                                <p className="font-bold">5분 전</p>
                            </div>

                            <div className="w-full mt-[16px] p-[24px] bg-[#F1F1F1] rounded-[16px]">

                                <div className="flex w-[290px] gap-[8px]">
                                    <div className="w-[92px] h-[84px] bg-white"></div>
                                    <div className="w-[92px] h-[84px] bg-white"></div>
                                </div>

                                <p className="text-[24px] text-[#121212] font-semibold mt-[12px]">드뷔시 산장</p>

                                <p className="w-[290px] text-[20px] text-[#121212] font-medium line-clamp-3 overflow-hidden">여기 카페인데 진짜 분위기가 조용하고 무드있어요. 조용한 카페에서 잔잔한 음악들으며 힐링하고싶으신분 강추드려요</p>

                                <div className="flex items-center h-[36px] mt-[12px] gap-[8px]">
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                    <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># 태그</p>
                                </div>

                                <div className="flex h-[36px] gap-[8px]">
                                    <button className="flex justify-center items-center gap-[2px] bg-white border border-[#C9C9C9] text-[#121212] text-[16px] font-bold rounded-[8px] px-[8px]">
                                        <img
                                            src={thumbsup2}
                                            alt="thumbsup2"
                                            className={`w-[24px] h-[24px]`} />
                                        <p>12개</p>
                                    </button>

                                    <button className="flex justify-center items-center gap-[2px] bg-white border border-[#C9C9C9] text-[#121212] text-[16px] font-bold rounded-[8px] px-[8px]">
                                        <img
                                            src={message}
                                            alt="message"
                                            className={`w-[24px] h-[24px]`} />
                                        <p>8개</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>


            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="fixed inset-0"
                        style={{ background: "#00000066" }}
                        onClick={togglePopup}
                    ></div>


                    <div className="w-[956px] h-[862px] relative bg-white rounded-[16px] p-[48px] z-10" >
                        <div className="flex justify-between w-full h-[64px]">
                            <SearchCheer placeholderText="응원 메시지를 검색하세요." />
                            <img
                                src={close}
                                alt="close"
                                onClick={togglePopup}
                                className={`w-[44px] h-[44px]`} />
                        </div>

                        <div className="flex-col justify-between w-full h-[80px] mt-[24px]">
                            <p className="text-[#6B6B6B] h-[24px] text-[20px] font-medium">가게를 대표하는 태그를 선택해 주세요.</p>
                            <div className="flex h-[44px] gap-[8px] mt-[12px]">
                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 맛있어요</p>
                                </div>

                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 친절해요</p>
                                </div>

                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 분위기굿</p>
                                </div>

                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 가성비짱</p>
                                </div>

                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 품질인증</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex-col justify-between h-[506px] bg-[#F1F1F1] rounded-[16px] mt-[24px] p-[24px]">
                            <textarea
                                type="text"
                                value={cheerQuery}
                                onChange={(e) => setCheerQuery(e.target.value)}
                                placeholder={"응원하고싶은 가게 이름을 입력해주세요."}
                                className="w-full h-[266px] outline-none text-[#121212] placeholder-[#999999] text-[18px] text-[#121212] text-[20px] font-medium"
                            />

                            <div className="flex gap-[8px]">
                                <div className="flex justify-center items-center text-center w-[180px] h-[180px] bg-white rounded-[8px] text-[#999999] text-[20px] font-medium">
                                    <p>사진 업로드는<br /><b className="text-[#6B6B6B] font-bold">최대 3장</b>까지<br />가능합니다</p>
                                </div>

                                <div className="flex justify-end w-[180px] h-[180px] bg-[url(https://picsum.photos/200/200)] bg-no-repeat rounded-[8px] text-[#999999] text-[20px] font-medium">
                                    <div className="flex justify-center items-center w-[40px] h-[40px] m-[4px] rounded-[27px] bg-[#0000006B]">
                                        <img
                                            src={close2}
                                            alt="close2"
                                            className={`w-[24px] h-[24px]`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-[24px]">
                            <button className="flex justify-center items-center w-[140px] h-[44px] bg-[#F1F1F1] text-[#121212] text-[20px] font-bold rounded-[8px] gap-[4px]">
                                <img
                                    src={image}
                                    alt="image"
                                    className={`w-[24px] h-[24px]`} />
                                사진 업로드
                            </button>

                            <button className="w-[140px] h-[44px] bg-[#FC650D] text-white text-[20px] font-bold rounded-[8px]">응원 등록하기</button>
                        </div>

                    </div>
                </div>
            )
            }
        </div >
    );
}
