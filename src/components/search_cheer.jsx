import React, { useState } from 'react';

// 검색 아이콘 컴포넌트 (검은색으로 설정)
const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
    </svg>
);

const SearchCheer = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 검색 로직 구현
        console.log('검색어:', searchQuery);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[450px] h-[64px] flex items-center gap-[10px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[16px] bg-[#F1F1F1]"
        >
            <SearchIcon />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="찾고싶은 가게를 검색하세요."
                className="flex-1 outline-none text-[#121212] placeholder-[#999999] text-[18px]"
            />
        </form>
    );
};

export default SearchCheer;
