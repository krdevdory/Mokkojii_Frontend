// KakaoMap.jsx 수정 버전
import React, { useEffect, useRef } from 'react';

const KakaoMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        // autoload=false 추가 및 https:// 명시적 사용
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API}&autoload=false`;
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                // 지도 생성
                const map = new window.kakao.maps.Map(mapRef.current, {
                    center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                    level: 3
                });

                // 지도에 마커 추가
                const marker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(37.5665, 126.9780)
                });
                marker.setMap(map);
            });
        };

        document.head.appendChild(script);

        return () => {
            const mapScript = document.querySelector('script[src*="dapi.kakao.com"]');
            if (mapScript && mapScript.parentNode) {
                mapScript.parentNode.removeChild(mapScript);
            }
        };
    }, []);

    return (
        <div
            ref={mapRef}
            className="w-full h-full rounded-lg"
            style={{ minHeight: '400px' }}
        />
    );
};

export default KakaoMap;
