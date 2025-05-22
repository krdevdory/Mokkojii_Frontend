import SearchCheer from "../../components/search_cheer";
import message from "../../assets/icons/cheer/message.svg";
import thumbs from "../../assets/icons/cheer/thumbs.svg";

export default function CheerScreen() {

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
                                alt="close"
                                className={`w-[100px] h-[100px]`} />

                            <img
                                src="https://picsum.photos/id/2/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />


                            <img
                                src="https://picsum.photos/id/3/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />
                        </div>

                        <p className="mt-[16px] text-[24px] text-[#121212] font-semibold">우동가조쿠</p>

                        <p className="mt-[16px] text-[20px] text-[#121212] font-medium">사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.</p>

                        <div className="grid grid-cols-4 gap-[8px]">
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                        </div>

                        <div className="flex gap-[8px] mt-[16px]">
                            <p className="text-[#999999] text-[16px] font-medium">2025.05.16</p>
                            <p className="text-[#999999] text-[16px] font-bold">5분 전</p>
                        </div>

                        <div className="flex justify-between mt-[16px]">
                            <div className="flex gap-[8px]">
                                <button className="flex h-[36px] px-[8px] my-[4px] items-center border border-[#C9C9C9] rounded-[8px] text-[#121212] text-[16px] font-bold gap-[2px]">
                                    <img
                                        src={message}
                                        alt="message"
                                        className={`w-[24px] h-[24px]`} />
                                    3개
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


                    <div className="mx-[24px] mt-[24px] px-[24px] py-[30px] w-[450px] border border-[#C9C9C9] rounded-[16px]">
                        <div className="flex gap-[8px]">
                            <img
                                src="https://picsum.photos/id/1/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />

                            <img
                                src="https://picsum.photos/id/2/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />


                            <img
                                src="https://picsum.photos/id/3/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />
                        </div>

                        <p className="mt-[16px] text-[24px] text-[#121212] font-semibold">우동가조쿠</p>

                        <p className="mt-[16px] text-[20px] text-[#121212] font-medium">사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.</p>

                        <div className="grid grid-cols-4 gap-[8px]">
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                        </div>

                        <div className="flex gap-[8px] mt-[16px]">
                            <p className="text-[#999999] text-[16px] font-medium">2025.05.16</p>
                            <p className="text-[#999999] text-[16px] font-bold">5분 전</p>
                        </div>

                        <div className="flex justify-between mt-[16px]">
                            <div className="flex gap-[8px]">
                                <button className="flex h-[36px] px-[8px] my-[4px] items-center border border-[#C9C9C9] rounded-[8px] text-[#121212] text-[16px] font-bold gap-[2px]">
                                    <img
                                        src={message}
                                        alt="message"
                                        className={`w-[24px] h-[24px]`} />
                                    3개
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


                    <div className="mx-[24px] mt-[24px] px-[24px] py-[30px] w-[450px] border border-[#C9C9C9] rounded-[16px]">
                        <div className="flex gap-[8px]">
                            <img
                                src="https://picsum.photos/id/1/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />

                            <img
                                src="https://picsum.photos/id/2/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />


                            <img
                                src="https://picsum.photos/id/3/100/100"
                                alt="close"
                                className={`w-[100px] h-[100px]`} />
                        </div>

                        <p className="mt-[16px] text-[24px] text-[#121212] font-semibold">우동가조쿠</p>

                        <p className="mt-[16px] text-[20px] text-[#121212] font-medium">사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.사장님 항상 맛있게 만들어 주셔서 항상 감사합니다.</p>

                        <div className="grid grid-cols-4 gap-[8px]">
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                            <div className="flex h-[36px] px-[8px] items-center">
                                <p className="text-[#121212] text-[16px] font-medium"># 맛있어요</p>
                            </div>
                        </div>

                        <div className="flex gap-[8px] mt-[16px]">
                            <p className="text-[#999999] text-[16px] font-medium">2025.05.16</p>
                            <p className="text-[#999999] text-[16px] font-bold">5분 전</p>
                        </div>

                        <div className="flex justify-between mt-[16px]">
                            <div className="flex gap-[8px]">
                                <button className="flex h-[36px] px-[8px] my-[4px] items-center border border-[#C9C9C9] rounded-[8px] text-[#121212] text-[16px] font-bold gap-[2px]">
                                    <img
                                        src={message}
                                        alt="message"
                                        className={`w-[24px] h-[24px]`} />
                                    3개
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



            <div className="w-full">
                <div className="flex justify-between mx-[24px] mt-[56px]">
                    <p className="text-[32px] text-[#121212] font-bold">사장님을 응원하는 글을 작성해 주세요!</p>
                    <button className="bg-[#FC650D] rounded-[8px] px-[16px] py-[8px] text-[white] text-[20px] font-bold">응원 작성하기</button>
                </div>

                <div className="w-[386px] mt-[44px] mx-[24px] rounded-[16px] border border-[#C9C9C9] overflow-hidden">
                    <div className="w-[386px] px-[24px] py-[30px] bg-white">
                        <p className="text-[#121212] text-[16px] font-bold">모꼬지 21</p>
                        <div className="flex text-[#999999] text-[16px] gap-[8px]">
                            <p className="font-medium">2025.05.16</p>
                            <p className="font-bold">5분 전</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
