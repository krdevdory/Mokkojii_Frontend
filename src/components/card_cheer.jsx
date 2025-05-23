import loading from "../assets/loading.svg";
import message from "../assets/icons/cheer/message.svg";
import thumbs from "../assets/icons/cheer/thumbs.svg";
import close from "../assets/icons/cheer/close.svg";
import close2 from "../assets/icons/cheer/close2.svg";
import image from "../assets/icons/cheer/image.svg";
import thumbsup1 from "../assets/icons/cheer/thumbs-up-orange.svg";
import thumbsup2 from "../assets/icons/cheer/thumbs-up-black.svg";

const CardCheer = ({
    user = "",
    date = "",
    time = "",
    name = "",
    comment = "",
    likeCount = 0,
    commentCount = 0,
    tags = [],
    images = [],
    like = false,
    onClick
}) => {
    return (
        <div className="w-[386px] rounded-[16px] border border-[#C9C9C9] overflow-hidden" onClick={onClick}>
            <div className="w-[386px] px-[24px] py-[30px] bg-white">
                <p className="text-[#121212] text-[16px] font-bold">{user}</p>
                <div className="flex text-[#999999] text-[16px] gap-[8px]">
                    <p className="font-medium">{date}</p>
                    <p className="font-bold">{time}</p>
                </div>

                <div className="w-full mt-[16px] p-[24px] bg-[#F1F1F1] rounded-[16px]">

                    {images != [] &&
                        <div className="flex w-[290px] gap-[8px]">
                            {images.map(image => (
                                <div key={image} className={`w-[92px] h-[84px]`}>
                                    <img src={image} className="w-[92px] h-[84px]"></img>
                                </div>
                            ))}
                        </div>
                    }

                    <p className="text-[24px] text-[#121212] font-semibold mt-[12px]">{name}</p>

                    <p className="w-[290px] text-[20px] text-[#121212] font-medium line-clamp-3 overflow-hidden">{comment}</p>

                    <div className="flex items-center h-[36px] mt-[12px] gap-[8px]">
                        {
                            tags.map(tag => (
                                <p className="min-w-[57px] text-[#121212] text-[16px] font-medium"># {tag}</p>
                            ))
                        }
                    </div>

                </div>
                <div className="flex h-[36px] gap-[8px] mt-[16px]">
                    <button className={`flex justify-center items-center gap-[2px] text-[16px] font-bold rounded-[8px] px-[8px] ${like ? "bg-[#FEECE1] border border-[#FC650D] text-[#FC650D]" : "bg-white border border-[#C9C9C9] text-[#121212]"}`}>
                        <img
                            src={like ? thumbsup1 : thumbsup2}
                            alt="thumbsup"
                            className={`w-[24px] h-[24px]`} />
                        <p>{likeCount}개</p>
                    </button>

                    <button className="flex justify-center items-center gap-[2px] bg-white border border-[#C9C9C9] text-[#121212] text-[16px] font-bold rounded-[8px] px-[8px]">
                        <img
                            src={message}
                            alt="message"
                            className={`w-[24px] h-[24px]`} />
                        <p>{commentCount}개</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardCheer;