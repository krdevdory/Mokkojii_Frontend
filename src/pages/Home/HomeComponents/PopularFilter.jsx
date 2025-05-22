import { useState } from "react";
import PopularFilterOption from "./PopularFilterOption";

export default function PopularFilter( selectedTags ) {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <p className="text-gray-600">선택된 필터: {selectedTags.join(', ')}</p>
        </div>
        // <div className="flex items-center border px-3 py-2 rounded-md w-full max-w-md bg-white">
        //     <input
        //         type="text"
        //         placeholder="핫플레이스"
        //         className="flex-grow outline-none"
        //         value={searchQuery}
        //         onChange={(e) => setSearchQuery(e.target.value)}
        //     />
        //     {searchQuery && (
        //         <button onClick={() => setSearchQuery("")} className="text-gray-400 text-sm">
        //             ✕
        //         </button>
        //     )}
        // </div>

    );
}