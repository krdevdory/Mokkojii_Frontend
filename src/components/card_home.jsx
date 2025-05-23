import React, { useState, useEffect } from 'react';
import loading from "../assets/loading.svg";

const CardHome = ({
    image = loading,
    storeName = "우동가조쿠",
    description = "쫄깃한 면발이 맛있는 우동집입니다. 붓카케우동부터 카레우동까지쫄깃한 면발이 맛있는 우동집입니다. 붓카케우동부터 카레우동까지",
    cheerCount = 128,
    tags2 = ["맛있어요", "핫플레이스", "신상맛집", "친절해요", "분위기굿", "가성비짱", "품질인증"],
    onClick
}) => {
    const [randomTags, setRandomTags] = useState([]);

    useEffect(() => {
        // 이미 randomTags가 설정되어 있으면 다시 설정하지 않음
        if (randomTags.length === 0) {
            const getRandomTags = () => {
                // 배열을 복사하고 섞기
                const shuffled = [...tags2].sort(() => 0.5 - Math.random());
                // 최대 3개까지 선택
                return shuffled.slice(0, Math.min(3, tags2.length));
            };

            setRandomTags(getRandomTags());
        }
    }, []); // 의존성 배열을 비워서 컴포넌트 마운트 시에만 실행

    return (
        <div
            className="w-[450px] mb-[48px] bg-white cursor-pointer hover:shadow-md transition-shadow"
            onClick={onClick}
        >
            <img
                className="w-[450px] h-[220px] object-cover rounded-[16px]"
                src={image}
                alt={storeName}
            />

            <div className="mt-[12px]">
                <div className="font-semibold text-[24px] text-[#121212]">{storeName}</div>

                <p className="mt-[12px] text-[18px] font-medium line-clamp-2 overflow-hidden">
                    {description}
                </p>

                <div className='flex mt-[12px] text-[18px] items-center'>
                    <span className='font-medium text-[#6B6B6B]'>응원</span>
                    <p className="ml-[4px] font-bold text-[#6B6B6B]">{cheerCount}개</p>
                </div>

                <div className="flex flex-wrap gap-[8px] mt-[12px]">
                    {randomTags.map((tag, index) => (
                        <span
                            key={index}
                            className="h-[44px] px-[16px] inline-flex items-center justify-center bg-[#FEECE1] rounded-[8px] border border-[#FC650D] text-[#FC650D] text-[18px] font-medium"
                        >
                            # {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardHome;
