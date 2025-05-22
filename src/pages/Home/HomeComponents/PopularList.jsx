
export default function PopularList({ children }) {
    const cardList = [
        {
            image: "/img/image.svg",
            storeName: "우동가조쿠",
            description: "쫄깃한 면발이 너무 맛있어요 다른 메뉴도 추천! ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ",
            cheerCount: 128,
            tags: ["맛있어요", "가성비짱", "품질인증"],
        },
        {
            image: "/img/image.svg",
            storeName: "드뷔시산장",
            description: "진한 국물의 라멘",
            cheerCount: 78,
            tags: ["친절해요", "분위기굿", "맛있어요"],
        },
        {
            image: "/img/image.svg",
            storeName: "드뷔시산장",
            description: "진한 국물의 라멘",
            cheerCount: 56,
            tags: ["친절해요", "분위기굿", "맛있어요"],
        },
        {
            image: "/img/image.svg",
            storeName: "드뷔시산장",
            description: "진한 국물의 라멘",
            cheerCount: 32,
            tags: ["친절해요", "분위기굿", "맛있어요"],
        },
        {
            image: "/img/image.svg",
            storeName: "드뷔시산장",
            description: "진한 국물의 라멘",
            cheerCount: 11,
            tags: ["친절해요", "분위기굿", "맛있어요"],
        },
    ];
    return (
        <div className="w-[498px] flex-shrink-0 bg-white flex flex-col h-[100vh]">
            {children}
            <div className="flex-1 overflow-y-auto ">
                {cardList.map((card, idx) => (
                    <div key={idx} className="w-[450px] mb-[48px] bg-white mx-auto mt-[15px]">
                        <div className="mt-[12px] ">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[24px] font-semibold text-[#FC650D]">{idx + 1}</p>
                                    <div className="font-semibold text-[24px] text-[#FC650D]">{card.storeName}</div>                                   
                                    <div className='flex mt-[12px] text-[18px] items-center'>
                                        <span className='font-medium'>응원</span>
                                        <p className="ml-[4px] font-bold ">{card.cheerCount}개</p>
                                    </div>
                                    <p className="mt-[12px] text-[18px] font-medium line-clamp-2 break-words">
                                        {card.description}
                                    </p>
                                </div>
                                <img
                                    className="w-[170px] h-[170px] object-cover rounded-[16px] ml-[10px]"
                                    src={card.image}
                                    alt={card.storeName}
                                />
                            </div>
                            <div className="flex flex-wrap gap-[8px] mt-[12px]">
                                {card.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="h-[44px] px-[16px] inline-flex items-center justify-center rounded-[8px] border border-gray-300 text-[18px] font-medium"
                                    >
                                        # {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}