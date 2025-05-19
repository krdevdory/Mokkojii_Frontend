import InputField from "./SignComponents/InputField";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    //회원가입 정보 선언
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 회원가입 성공 시 로그인 화면으로 감
    // 에러 선언
    const [errorMsg, setErrorMsg] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    //회원가입 
    const handleSignUp = async () => {
        if (!email || !password) {
            setErrorMsg("이메일과 비밀번호를 모두 입력해주세요.");
            if (!email) setEmailError(true);
            if (!password) setPasswordError(true);
            return;
        }

        try {
            const res = await fetch('http://localhost:8080/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            // 입력 폼 검사
            if (!res.ok) {
                if (res.status === 409) { //메시지 아직 정의 안되어 있음
                    setEmailError(true);
                    setErrorMsg("이미 가입된 이메일입니다.");
                } else {
                    setErrorMsg("이메일 형식이 올바르지 않습니다.");
                }
                return;
            }

            // 성공 시 로그인 페이지로 이동
            navigate("/SignIn");

        } catch (error) {
            console.error("회원가입 오류:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            <img src="/img/logo.svg" alt="모꼬지 로고" className="mb-1" />
            <img src="/img/Frame 48096032.svg" alt="Sign up" className="mb-10" />

            <div className=" space-y-4 w-[450px] ">
                <InputField
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(false);
                    }}
                    placeholder="e-mail"
                    className={`${emailError ? "border-red-500 border bg-red-50 pr-10" : ""} px-4 h-13 border rounded-[12px] ${emailError ? "focus:ring-red-400" : ""}`}
                />

                <InputField
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                    }}
                    placeholder="password"
                    className={`${passwordError ? "border-red-500 border bg-red-50 pr-10" : ""} px-4 h-13 border rounded-[12px] ${passwordError ? "focus:ring-red-400" : ""}`}
                />
                <button
                    onClick={handleSignUp}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white h-13 rounded-[12px] font-semibold"
                >
                    Sign up
                </button>
            </div>
            {errorMsg && (
                <div className="absolute bottom-25 w-full max-w-xs text-red-600 bg-red-100 border border-red-400 text-sm text-center px-4 py-2 rounded-[12px]">
                    ❗ {errorMsg}
                </div>
            )}
            <div className='flex items-center mt-6 text-sm text-gray-600 absolute bottom-10'>
                <span>이미 계정이 있으신가요?</span>
                <Link to="/signin" className='ml-2 font-bold text-black hover:underline'>로그인 하기</Link>
            </div>
        </div>
    );
}
