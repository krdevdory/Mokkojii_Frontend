import { useState } from "react"

import PopularList from "./HomeComponents/PopularList"
import PopularFilter from './HomeComponents/PopularFilter';
import PopularFilterOption from './HomeComponents/PopularFilterOption';
import KakaoMap from "../../components/map_home";



export default function PopularScreen() {
    const [selectedTags, setSelectedTags] = useState([]);

    return (
        <div className="flex  w-full h-screen">
            {/* <PopularList></PopularList> */}
            <div className=" relative w-full h-full">
                <div className='w-full h-full bg-blue-100'>
                    <KakaoMap />
                </div>
                <div className=" absolute pb-[48px] top-[52px] left-[522px] z-10">
                    <PopularFilterOption selectedTags={selectedTags} setSelectedTags={setSelectedTags}></PopularFilterOption>
                </div>
            </div>


            {/* <div className="flex w-full h-screen">
            <div className='w-[498px] flex-shrink-0'>
                <div className='flex justify-center w-full h-[136px] pt-[48px] bg-white'>
                    <PopularFilter />
                </div>
                <div className='flex flex-col items-center mt-[8px] overflow-y-auto h-[calc(100vh-144px)]'>
                    <PopularList /> */}
            {/* {Array.from({ length: 5 }).map((_, index) => (
          <CardHome
            key={index}
            image="https://upload.wikimedia.org/wikipedia/commons/9/9c/Garak-guksu.jpg"
            storeName="우동가조쿠"
            description="쫄깃한 면발이 맛있는 우동집입니다. 붓카케우동부터 카레우동까지쫄깃한 면발이 맛있는 우동집입니다. 붓카케우동부터 카레우동까지"
            cheerCount={128}
            tags={["칼국수", "한식", "맛집"]}
          />
        ))} */}
            {/* </div>
            </div>
            <div className='flex-1 bg-blue-100'>
                <PopularFilterOption></PopularFilterOption>
                <KakaoMap />
            </div>
        </div> */}
        </div>
    )
}