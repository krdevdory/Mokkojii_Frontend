import { useState } from "react";
import SearchCheer from "../../components/search_cheer";
import message from "../../assets/icons/cheer/message.svg";
import thumbs from "../../assets/icons/cheer/thumbs.svg";
import close from "../../assets/icons/cheer/close.svg";
import close2 from "../../assets/icons/cheer/close2.svg";
import image from "../../assets/icons/cheer/image.svg";
import thumbsup1 from "../../assets/icons/cheer/thumbs-up-orange.svg";
import thumbsup2 from "../../assets/icons/cheer/thumbs-up-black.svg";
import CardCheer from "../../components/card_cheer";

// CheerDetail 컴포넌트
const CheerDetail = ({ cheerData, onBack }) => {
    if (!cheerData) return null;

    return (
        <div className="w-full h-full overflow-y-auto">
            {/* 헤더 */}
            <div className="flex items-center mx-[24px] mt-[56px]">
                <button
                    onClick={onBack}
                    className="flex items-center gap-[8px] text-[#121212] text-[24px] font-medium hover:text-[#FC650D] cursor-pointer"
                >
                    ← 응원 메시지
                </button>
            </div>

            {/* 상세 컨텐츠 */}
            <div className="mx-[24px] mb-[24px]">
                <div className="w-full mx-auto p-[48px] bg-white">
                    {/* 사용자 정보 */}
                    <div className="mb-[32px]">
                        <p className="text-[#121212] text-[24px] font-bold mb-[8px]">{cheerData.user}</p>
                        <div className="flex text-[#999999] text-[18px] gap-[8px]">
                            <p className="font-medium">{cheerData.date}</p>
                            <p className="font-bold">{cheerData.time}</p>
                        </div>
                    </div>

                    {/* 가게 이름 */}
                    <p className="text-[24px] text-[#121212] font-semibold mb-[12px]">{cheerData.name}</p>

                    {/* 응원 메시지 */}
                    <div className="mb-[32px]">
                        <p
                            className="text-[20px] text-[#121212] font-medium leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: cheerData.comment.replace(/\n/g, '<br />')
                            }}
                        />                    </div>

                    {/* 태그들 */}
                    <div className="flex flex-wrap gap-[12px] mb-[32px]">
                        {cheerData.tags && cheerData.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="flex justify-center items-center h-[44px] w-[118px] bg-[#FEECE1] border border-[#FC650D] rounded-[8px] text-[#FC650D] text-[20px] font-medium"
                            >
                                # {tag}
                            </span>
                        ))}
                    </div>

                    {/* 이미지들 */}
                    {cheerData.images && cheerData.images.length > 0 && (
                        <div className="mb-[32px]">
                            <div className="flex gap-[12px]">
                                {cheerData.images.map((img, index) => (
                                    <div key={index} className="w-[225px] h-[225px] aspect-square rounded-[8px] overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`이미지 ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <p className="text-center mt-[48px] text-[#6B6B6B] text-[16px]">이 응원의 글을 어떻게 생각하시나요?</p>
                    <div className="flex justify-center mt-[12px]">
                        <button className="flex justify-center gap-[4px] w-[147px] h-[44px] bg-[#F1F1F1] rounded-[8px] items-center text-[#121212] text-[20px]">
                            <img src={thumbs} /> 공감해요 <b>{cheerData.likeCount}</b></button>
                    </div>
                    {/* 좋아요/댓글 정보 */}
                    <div className="flex gap-[16px] mt-[24px] pt-[24px] border-t border-[#E5E5E5]">
                        <div className="flex items-center gap-[8px]">
                            <span className="text-[18px] font-bold text-[#FC650D]">👍</span>
                            <span className="text-[18px] font-medium">{cheerData.likeCount}개의 좋아요</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <span className="text-[18px] font-bold text-[#6B6B6B]">💬</span>
                            <span className="text-[18px] font-medium">{cheerData.cheerCount || 0}개의 댓글</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function CheerScreen() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [cheerQuery, setCheerQuery] = useState('');
    const [selectedCheer, setSelectedCheer] = useState(null);
    const [currentView, setCurrentView] = useState('list');

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    // 카드 클릭 핸들러
    const handleCardClick = (cheerData) => {
        setSelectedCheer(cheerData);
        setCurrentView('detail');
    };

    // 뒤로가기 핸들러
    const handleBackToList = () => {
        setCurrentView('list');
        setSelectedCheer(null);
    };

    // 카드 데이터 배열
    const cheerData = [
        {
            id: 1,
            user: "모꼬지 21",
            date: "2025.05.23",
            time: "5분 전",
            name: "드뷔시 산장",
            comment: "왕십리에 갔다가 우연히 발견하게 된 특별한 카페!!\n이런 분위기인지 전혀 모르고 갔던 곳이라서 더욱 좋았어요.\n오랜 세월이 묻어나있어서 좋았고, 사람들의 방명록을 읽어보는 재미도 있어서 시간 가는 줄도 모르고 재미있게 놀았어요.\n조용한 분위기라서 작업하러 오는 사람들부터 조용하게 얘기하러 오는 사람들까지 모두 편하게 오기 좋고,\n특히나 스콘도 맛있고 음료도 맛있어요!!\n 산장지기님도 정말 친절하셔서 분위기, 맛, 뭐 하나 빠질 것 없이 정말 좋았던 카페에요!",
            images: ["https://picsum.photos/100", "https://picsum.photos/id/5/400/600", "https://picsum.photos/id/19/400"],
            likeCount: 10,
            commentCount: 0,
            tags: ["맛있어요", "가성비짱", "품질인증"],
            like: true
        },
        {
            id: 2,
            user: "모꼬지 13",
            date: "2025.05.20",
            time: "17:26",
            name: "우동가조쿠",
            comment: "요약: '오태식이 돌아왔구나'\n시원한 쯔유 국물을 자작하게 부어 먹는 붓가케우동(7500)에 면추가(2500). 요즘 물가에 이 정도면 가성비 최고일 듯.\n개인적으로 쯔유 국물이 조금 짠 편이었다고 생각하지만, 토핑으로 올라간 텐카스(튀김 부스러기)를 곁들이면 지나친 정도는 아님.\n<튀김류와 같이 먹으면 더 맛있다>는 안내문이 붙어있는데 역시 맛있게 먹으려면 주인장 말을 잘 들어야 하는 듯. \n면이 너무 탱탱+쫄깃쫄깃해서 젤리 씹는 느낌.",
            likeCount: 17,
            commentCount: 0,
            tags: ["친절해요", "분위기굿", "맛있어요"],
            like: false
        },
        {
            id: 3,
            user: "모꼬지 6",
            date: "2025.05.19",
            time: "19:12",
            name: "르규옹",
            comment: "저는 라자냐가 젤 맛있었어요 ! 정통 라구 소스에 고소한 치즈의 맛 🍅\n뽈뽀는 일단 문어가 굉장히 부드러워서 좋았구, 당근 퓨레 맛이 신기했어요 🥕\n트레는 성게알 특유의 내장 맛을 제가 그렇게 좋아하지 않아서 쪼오금 거부감이 들었지만 ?\n그래도 파스타 자체가 크림 베이스라 되게 부드럽고 알의 고소함과도 잘 어울렸습니다.\n식전빵과 트러플 머쉬룸 버터를 함께 주시는데 요게 진짜 맛도리예요 🍄‍🟫\n바게트도 쫀득한데 버터 풍미가 걍 미쳤어요. 더 리필하고 싶었습니다 흑흑\n마지막으로 아마 아시겠지만 방문 전 전화 예약은 필수입니당 📞",
            images: ["https://picsum.photos/500", "https://picsum.photos/id/50/400/600", "https://picsum.photos/id/59/400"],
            likeCount: 8,
            commentCount: 0,
            tags: ["맛있어요", "가성비짱", "품질인증"],
            like: true
        },
        {
            id: 4,
            user: "모꼬지 9",
            date: "2025.05.18",
            time: "12:38",
            name: "쉐시몽",
            comment: "프렌치 레스토랑가면 아뮤즈부쉬는 대부분 맛있어도 의외로 메인메뉴에서 실망한적이 많았는데요,\n쉐시몽은 정말 모든 메뉴가 다 맛있었고 메인으로 갈수록 맛있어져서 너무 만족했어요♥️",
            likeCount: 19,
            commentCount: 0,
            tags: ["친절해요", "분위기굿", "맛있어요"],
            like: false
        }
    ];

    return (
        <div className="flex w-full h-screen relative">
            <div className='w-[498px] flex-shrink-0'>
                <div className='flex justify-center w-full h-[136px] pt-[48px] bg-white'>
                    <SearchCheer />
                </div>

                <p className="mx-[24px] mt-[8px] text-[24px] text-[#121212] font-semibold">내가 한 응원의 말</p>
                <div className="overflow-y-auto h-[calc(100vh-200px)]">

                    <div className="mx-[24px] mt-[24px] px-[24px] py-[30px] w-[450px] border border-[#C9C9C9] rounded-[16px]">
                        <div className="flex gap-[8px]">
                            <img
                                src="https://picsum.photos/id/1/100/100"
                                className={`w-[100px] h-[100px]`} />

                            <img
                                src="https://picsum.photos/id/2/100/100"
                                className={`w-[100px] h-[100px]`} />

                            <img
                                src="https://picsum.photos/id/3/100/100"
                                className={`w-[100px] h-[100px]`} />
                        </div>

                        <p className="mt-[16px] text-[24px] text-[#121212] font-semibold">우동가조쿠</p>

                        <p className="mt-[16px] text-[20px] text-[#121212] font-medium">사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.</p>

                        <div className="grid grid-cols-4 gap-[8px]">
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 가성비짱</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 분위기굿</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 친절해요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 신상맛집</p>
                            </div>
                        </div>

                        <div className="flex gap-[8px] mt-[16px]">
                            <p className="text-[#999999] text-[16px] font-medium">2025.05.23</p>
                            <p className="text-[#999999] text-[16px] font-bold">8분 전</p>
                        </div>

                        <div className="flex justify-between mt-[16px]">
                            <div className="flex gap-[8px]">
                                <button className="flex h-[36px] px-[8px] my-[4px] items-center border border-[#C9C9C9] rounded-[8px] text-[#121212] text-[16px] font-bold gap-[2px]">
                                    <img
                                        src={message}
                                        alt="message"
                                        className={`w-[24px] h-[24px]`} />
                                    0개
                                </button>

                                <button className="flex h-[36px] px-[8px] my-[4px] items-center border border-[#C9C9C9] rounded-[8px] text-[#121212] text-[16px] font-bold gap-[2px]">
                                    <img
                                        src={thumbs}
                                        alt="thumbs"
                                        className={`w-[24px] h-[24px]`} />
                                    8개
                                </button>
                            </div>
                            <button className="w-[101px] h-[44px] bg-[#F1F1F1] rounded-[8px] text-[#121212] text-[20px] font-medium">수정하기</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="right" className="w-full">
                {currentView === 'list' ? (
                    // 리스트 뷰
                    <>
                        <div className="flex justify-between mx-[24px] mt-[56px]">
                            <p className="text-[32px] text-[#121212] font-bold">사장님을 응원하는 글을 작성해 주세요!</p>
                            <button
                                className="bg-[#FC650D] rounded-[8px] px-[16px] py-[8px] text-[white] text-[20px] font-bold"
                                onClick={togglePopup}
                            >
                                응원 작성하기
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-[16px] mt-[44px] mx-[24px] items-start">
                            {cheerData.map((cheer) => (
                                <CardCheer
                                    key={cheer.id}
                                    user={cheer.user}
                                    date={cheer.date}
                                    time={cheer.time}
                                    name={cheer.name}
                                    comment={cheer.comment}
                                    images={cheer.images}
                                    likeCount={cheer.likeCount}
                                    cheerCount={cheer.cheerCount}
                                    tags={cheer.tags}
                                    like={cheer.like}
                                    onClick={() => handleCardClick(cheer)}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    // 상세 뷰
                    <CheerDetail
                        cheerData={selectedCheer}
                        onBack={handleBackToList}
                    />
                )}
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="fixed inset-0"
                        style={{ background: "#00000066" }}
                        onClick={togglePopup}
                    ></div>
                    <div className="w-[956px] h-[862px] relative bg-white rounded-[16px] p-[48px] z-10" >
                        <div className="flex justify-between w-full h-[64px]">
                            <SearchCheer placeholderText="응원하고 싶은 가게 이름을 입력해 주세요." />
                            <img
                                src={close}
                                alt="close"
                                onClick={togglePopup}
                                className={`w-[44px] h-[44px] cursor-pointer`} />
                        </div>

                        <div className="flex-col justify-between w-full h-[80px] mt-[24px]">
                            <p className="text-[#6B6B6B] h-[24px] text-[20px] font-medium">가게를 대표하는 태그를 선택해 주세요.</p>
                            <div className="flex h-[44px] gap-[8px] mt-[12px]">
                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 맛있어요</p>
                                </div>

                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 친절해요</p>
                                </div>

                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 분위기굿</p>
                                </div>

                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 가성비짱</p>
                                </div>

                                <div className="flex w-[118px] h-full justify-center items-center border border-[#C9C9C9] text-[#121212] text-[20px] font-medium rounded-[8px]">
                                    <p># 품질인증</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-col justify-between h-[506px] bg-[#F1F1F1] rounded-[16px] mt-[24px] p-[24px]">
                            <textarea
                                type="text"
                                value={cheerQuery}
                                onChange={(e) => setCheerQuery(e.target.value)}
                                placeholder={"응원하고 싶은 가게에 대한 내용을 입력해 주세요."}
                                className="w-full h-[266px] outline-none text-[#121212] placeholder-[#999999] text-[18px] text-[#121212] text-[20px] font-medium bg-transparent resize-none"
                            />

                            <div className="flex gap-[8px]">
                                <div className="flex justify-center items-center text-center w-[180px] h-[180px] bg-white rounded-[8px] text-[#999999] text-[20px] font-medium">
                                    <p>사진 업로드는<br /><b className="text-[#6B6B6B] font-bold">최대 3장</b>까지<br />가능합니다</p>
                                </div>


                            </div>
                        </div>

                        <div className="flex justify-between mt-[24px]">
                            <button className="flex justify-center items-center w-[140px] h-[44px] bg-[#F1F1F1] text-[#121212] text-[20px] font-bold rounded-[8px] gap-[4px]">
                                <img
                                    src={image}
                                    alt="image"
                                    className={`w-[24px] h-[24px]`} />
                                사진 업로드
                            </button>

                            <button className="w-[140px] h-[44px] bg-[#FC650D] text-white text-[20px] font-bold rounded-[8px]">응원 등록하기</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
