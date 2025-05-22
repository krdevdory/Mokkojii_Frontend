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


export default function ManageScreen() {
    const [activeTab, setActiveTab] = useState('register');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
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

                        <button className="flex justify-center items-center w-[129px] h-[44px] text-white bg-[#FC650D] rounded-[8px] text-[20px] font-bold gap-[4px]">
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
                            <div className="flex h-[64px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={image}
                                    alt="image"
                                    className={`w-[24px] h-[24px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">대표 사진</p>
                            </div>
                            <label className="flex items-center justify-center w-[130px] h-[44px] gap-[4px] rounded-[8px] border border-[#C9C9C9] pt-[10px] pr-[16px] pb-[10px] pl-[16px] cursor-pointer">
                                <span className="text-[20px] text-[#121212] font-bold">사진 업로드</span>
                                <input type="file" className="hidden" accept="image/*" />
                            </label>

                        </div>


                        <div className="w-[768px]">
                            <div className="flex h-[64px] py-[15px] gap-x-[6px] items-center">
                                <img
                                    src={clipboard}
                                    alt="clipboard"
                                    className={`w-[24px] h-[24px]`} />
                                <p className="font-semibold text-[24px] text-[#121212]">메뉴</p>
                            </div>
                            <label className="flex items-center justify-center w-[130px] h-[44px] gap-[4px] rounded-[8px] border border-[#C9C9C9] pt-[10px] pr-[16px] pb-[10px] pl-[16px] cursor-pointer">
                                <span className="text-[20px] text-[#121212] font-bold">사진 업로드</span>
                                <input type="file" className="hidden" accept="image/*" />
                            </label>
                        </div>

                    </div>

                    <div className="flex justify-end items-center mb-[54px] pr-[48px] gap-[20px]">
                        <p className="text-[#6B6B6B] text-[20px] font-medium">등록 승인까지 최대 3일이 소요될 수 있어요.</p>

                        <button className="flex justify-center items-center w-[129px] h-[44px] text-white bg-[#FC650D] rounded-[8px] text-[20px] font-bold gap-[4px]">
                            <img
                                src={save}
                                alt="save"
                                className={`w-[24px] h-[24px]`} />
                            저장하기
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
