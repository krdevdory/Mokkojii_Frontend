import { useEffect, useState } from "react";
import KakaoLoginButton from "../../components/KakaoLoginButton";
import InputField from "./SignComponents/InputField";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    // 로그인 정보 선언
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 로그인 성공 시 홈으로 보낼 거임
    // 에러 선언
    const [errorMsg, setErrorMsg] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    //로그인 복구
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
    }, []);
    // 카카오 로그인 세션 유지
    const handleSuccess = async (kakaoUser) => {
        try {
            const profile = kakaoUser.kakao_account?.profile || {};

            const res = await fetch('http://localhost:8080/oauth2/authorization/kakao', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    KakaoID: kakaoUser.id,
                    nickname: profile.nickname,
                    profileimg: profile.profile_image_url,
                }),
            });
            const data = await res.json();
            //로그인 성공처리
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('token', (data.token))
            navigate("/home"); // 홈으로 이동

        } catch (error) {
            console.error('로그인 오류 : ', error);
            alert('로그인에 실패하셨습니다.');
        }
    }
    // 로그아웃
    const handleLogout = () => {
        if (window.Kakao) {
            window.Kakao.Auth.logout();
        }
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
    }
    //로그인 사용하기(카카오x) -> API 명세서 확인 해보니까 아직 없어서 수정필요 합니다
    const handleLogin = async () => {
        try {
            // 실제 로그인 API 요청
            const res = await fetch('http://localhost:8080/users/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            // 로그인 실패
            if (!res.ok) {
                if (res.status === 404) {
                    setEmailError(true);
                    setError("존재하지 않는 계정입니다.");
                } else {
                    setPasswordError(true);
                    setError("비밀번호가 일치하지 않습니다.");
                }
                return;
            }
            // 로그인 성공
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            setError("");
            setEmailError(false);
            setPasswordError(false);
            navigate("/home"); // 홈으로 이동
        } catch (error) {
            console.error("로그인 요청 실패:", error);
            setError('로그인에 실패하였습니다.');
        }
    };
    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <img src="/img/logo.svg" alt="모꼬지 로고" className="mb-1" />
            <img src="/img/Frame 48096032 (1).svg" alt="Sign up" className="mb-10" />
            <div className=" space-y-4 w-[450px] ">
                <InputField className={`${emailError ? "border-red-500 border bg-red-50 pr-10" : ""} px-4 h-13 border rounded-[12px] ${emailError ? "focus:ring-red-400" : ""}`}
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false);
                    }}
                    placeholder="e-mail"
                />
                <InputField className={`${passwordError ? "border-red-500 border bg-red-50 pr-10" : ""} px-4 h-13 border rounded-[12px] ${passwordError ? "focus:ring-red-400" : ""}`}
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                    }}
                    placeholder="password"
                />
                <button className="w-full bg-orange-500 rounded-[12px] hover:bg-orange-600 text-white h-13 font-semibold"
                    type="button"
                    // onClick={() => console.log('로그인 시도', email, password)} // 로그인 테스트
                    onClick={handleLogin} 
                >
                    Sign in
                </button>
                <KakaoLoginButton />
            </div>
            {errorMsg && (
                <div className="absolute bottom-25 w-full max-w-xs text-red-600 bg-red-100 border border-red-400 text-sm text-center px-4 py-2 rounded-[12px]">
                    ❗ {errorMsg}
                </div>
            )}
            <div className='flex items-center mt-6 text-sm text-gray-600 absolute bottom-10'>
                <span>계정이 없으신가요?</span>
                <Link to="/signup" className='ml-2 font-semibold text-black hover:underline'>회원가입 하기</Link>
            </div>


        </div>
    )
}