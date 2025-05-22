import { useState } from "react"

import PopularList from "./HomeComponents/PopularList"
import PopularFilterOption from './HomeComponents/PopularFilterOption';
import KakaoMap from "../../components/map_home";
import PopularFilter from "./HomeComponents/PopularFilter";

export default function PopularScreen() {
    const FILTER_TAGS = ["핫플레이스", "신상맛집", "맛있어요", "친절해요", "분위기굿", "가성비짱", "품질인증"];
    const [selectedTags, setSelectedTags] = useState([]); // 선택 태그

    const handleRemoveTag = (tagToRemove) => {
        setSelectedTags((prev)=> prev.filter((tag)=> tag !== tagToRemove));
    }

    return (
        <div className="flex w-full h-screen">
            <PopularList className=" flex-shrink-0 w-[498px]">
                <PopularFilter selectedTags={selectedTags} onRemoveTag={(tag) => setSelectedTags((prev) => prev.filter((t) => t !== tag))} ></PopularFilter>
            </PopularList>
            <div className=" relative w-full h-full">
                <div className='w-full h-full bg-blue-100'>
                    <KakaoMap />
                </div>
                <div className=" absolute pb-[48px] top-[52px] z-10">
                    <PopularFilterOption filterTags={FILTER_TAGS} selectedTags={selectedTags} onChange={(tags) => setSelectedTags(tags)} setSelectedTags={setSelectedTags}></PopularFilterOption>
                </div>
            </div>
        </div>
    )
}