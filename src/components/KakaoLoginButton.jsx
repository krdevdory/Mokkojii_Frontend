import { useEffect, useState } from "react";

export default function KakaoLoginButton({onSuccess, onFailure}) {
    const [ready, setReady] = useState(false); // 
    const kakaoKey = import.meta.env.VITE_KAKAO_KEY;

    useEffect(() => {
    if (!kakaoKey) return;
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    script.onload = () => {
      window.Kakao.init(kakaoKey);
      setReady(true);
    };
    document.body.appendChild(script);
  }, [kakaoKey]);
  // throw UserData to back-end 
  const handleLogin = () => {
    if(!ready)return;
    window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image', // 프로필 이름, 이미지 가져옴
        throughTalk: false, //카카오로 우선적으로 로그인되어있는지 확인
        success: () =>
            window.Kakao.API.request({
                url: '/v2/user/me',
                success : async (user) => {
                    console.log('카카오 고유 ID:', user.id); // 오류 확인
                    const profile = user.kakao_account?.profile || {};
                    
                    const res = await fetch('http://localhost:8080/oauth2/authorization/kakao',{
                      method : 'Post',
                      headers : {'Content-Type' : 'application/json'},
                      body: JSON.stringify({
                        KakaoID : user.id,
                        nickname: profile.nickname,
                        profileimg: profile.profile_image_url,
                      }),
                    });
                    const data = await res.json();
                    onSuccess(data);
                },
                fail: onFailure,
            }),
        fail: onFailure,
    })
  }
  return(
    <button className='bg-#FFEB3B text-center ' onClick={handleLogin}>
      <img src="/img/kakao-talk.png" alt="카카오톡 로고" />카카오로 시작하기
    </button>
  );
}
