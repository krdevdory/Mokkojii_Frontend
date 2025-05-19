import { useEffect,useState } from "react";
import KakaoLoginButton from "../../components/KakaoLoginButton";
import InputField from "./SignComponents/InputField";
import { Link } from "react-router-dom";

export default function SignIn(){
    const[user, setUser] = useState(null);
    const[token, setToken] = useState(null);
    const[error, setError] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    useEffect(()=>{
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        if(storedUser && storedToken){
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
    },[]);
    // Login session stored
    const handleSuccess = async(kakaoUser) =>{
        try{
            const profile = kakaoUser.kakao_account?.profile || {};
            const res = await fetch('http://localhost:8080/oauth2/authorization/kakao',{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    KakaoID: kakaoUser.id,
                    nickname: profile.nickname,
                    profileimg: profile.profile_image_url,
                }),
            });
            const data = await res.json();

            setUser(data.user);
            setToken(data.token);

            localStorage.setItem('user',JSON.stringify(data.user))
            localStorage.setItem('token',(data.token))
        }catch(error){
            console.error('로그인 오류 : ', error);
            alert('로그인에 실패하셨습니다.'); //이거 와이어 프레임 보고 만들어야함 힝
            setError("로그인에 실패하셨습니다. 다시 시도해주세요.");
        }
    }
        const handleLogout =() =>{
        if (window.Kakao) {
            window.Kakao.Auth.logout();
        }
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
    }

    return(
        <div className="flex flex-col justify-center">
            <img src="/img/ms-icon-310x310.png" alt="모꼬지 로고" className="w-24 h-24 mx-auto mb-4" />
            <h3>Welcome</h3>
            <p>환영합니다. 로그인을 해주세요.</p>
            <InputField
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e-mail"
            />
            <InputField
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button
                type="button"
                onClick={() => console.log('로그인 시도', email, password)}
                className="..."
            >
                Sign in
            </button>

            <KakaoLoginButton className='bg-black' />
            <div className='flex '>
                <p>계정이 없으신가요?</p>
                <Link to="/signup" className='!text-black no-underline'>회원가입 하기</Link>
            </div>
            
            
        </div>
    )
}
