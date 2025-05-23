export default function PopularFilter({ selectedTags = [], onRemoveTag }) {

    return (
        <div className=" flex w-[450px] h-[64px] items-center mx-auto border-orange-400 border-[2px] mt-[48px] rounded-[14px] bg-orange-100">
            <div>
                <img src="/img/settings-2.svg" alt="필터" className="ml-[5px]" />
            </div>
            <ul className="flex rounded-[5px] ">
                {selectedTags.map((tag) => (
                    <li key={tag} className="bg-white flex items-center border-gray-400 border rounded-[8px] p-[8px] h-[36px] ml-[10px]">
                        <button onClick={() => onRemoveTag(tag)} className="w-[24px] h-[24px] font-semibold" > <img src="/img/vector.svg" alt="x" /></button>
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
}