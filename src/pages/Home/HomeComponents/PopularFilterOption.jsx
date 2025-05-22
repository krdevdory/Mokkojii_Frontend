import { useState } from "react";

export default function PopularFilterOption({ selectedTags, setSelectedTags}) {
    const FILTER_TAGS = ["핫플레이스", "신상맛집", "맛있어요", "친절해요", "분위기굿", "가성비짱", "품질인증"];
    // const [selectedTags, setSelectedTags] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);  // 버튼 상태(초기 닫힘)
    // 버튼 토클
    const toggleTag = (value) => {
        const isSelected = selectedTags.includes(value);
        if (isSelected) {
            setSelectedTags(selectedTags.filter((v) => v !== value));
        } else {
            if (selectedTags.length < 2) {
                setSelectedTags([...selectedTags, value]);
            }
        }
    };

    return (
        <div className="flex items-center h-[64px] bg-white rounded-r-[17px] shadow transition-all duration-300">
            <div className={` flex items-center gap-2 overflow-hidden transition-all duration-300 ${isExpanded ? "mx-2 w-auto" : "w-0"}`}>
                {FILTER_TAGS.map((tag) => (
                    <button 
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`h-[40px] rounded-full px-[13px] font-bold border text-sm 
                            ${selectedTags.includes(tag) ? "bg-orange-500 text-white border-orange-500" : "bg-white border-gray-300 "
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className=" w-[36px] h-[64px] bg-white  border-gray-600 rounded-r-[17px]" 
            >
                <img src="/img/chevron-left.svg" alt="버튼" />
            </button>
        </div>
    );
}
