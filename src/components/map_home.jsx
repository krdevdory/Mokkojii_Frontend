import React, { useEffect, useRef, useState } from 'react';

const KakaoMap = () => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    // 지도 확대 함수
    const handleZoomIn = () => {
        if (mapInstanceRef.current) {
            const level = mapInstanceRef.current.getLevel();
            mapInstanceRef.current.setLevel(level - 1);
        }
    };

    // 지도 축소 함수
    const handleZoomOut = () => {
        if (mapInstanceRef.current) {
            const level = mapInstanceRef.current.getLevel();
            mapInstanceRef.current.setLevel(level + 1);
        }
    };

    // 현재 위치로 이동 함수
    const handleCurrentLocation = () => {
        if (!mapInstanceRef.current) return;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const currentPosition = new window.kakao.maps.LatLng(lat, lng);

                    // 지도 중심 이동
                    mapInstanceRef.current.setCenter(currentPosition);

                    // 현재 위치에 마커 생성
                    const marker = new window.kakao.maps.Marker({
                        position: currentPosition
                    });
                    marker.setMap(mapInstanceRef.current);
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    alert('현재 위치를 가져올 수 없습니다.');
                }
            );
        } else {
            alert('이 브라우저에서는 위치 기능을 지원하지 않습니다.');
        }
    };

    useEffect(() => {
        const mapScript = document.querySelector('script[src*="dapi.kakao.com"]');

        if (mapScript && window.kakao && window.kakao.maps) {
            initializeMap();
        } else {
            const script = document.createElement('script');
            script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API}&autoload=false`;
            script.async = true;

            script.onload = () => {
                window.kakao.maps.load(() => {
                    initializeMap();
                });
            };

            document.head.appendChild(script);
        }

        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 정리
            if (mapInstanceRef.current) {
                // 필요한 정리 작업
            }
        };
    }, []);

    const initializeMap = () => {
        if (!mapContainerRef.current) return;

        // 지도 생성 - 중복 생성 방지
        if (!mapInstanceRef.current) {
            const options = {
                center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                level: 3
            };

            // 지도 인스턴스 생성 및 참조 저장
            mapInstanceRef.current = new window.kakao.maps.Map(mapContainerRef.current, options);

            // 마커 추가
            const marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(37.5665, 126.9780)
            });
            marker.setMap(mapInstanceRef.current);

            // 지도 로드 완료 표시
            setMapLoaded(true);
        }
    };

    return (
        <div className="relative w-full h-full">
            <div
                ref={mapContainerRef}
                className="w-full h-full rounded-lg"
                style={{
                    minHeight: '400px',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                }}
            />

            {/* 컨트롤 버튼 그룹 - 지도가 로드된 경우에만 표시 */}
            {mapLoaded && (
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {/* 현위치 버튼 */}
                    <button
                        onClick={handleCurrentLocation}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
                        title="현재 위치로 이동"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>

                    {/* 확대 버튼 */}
                    <button
                        onClick={handleZoomIn}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
                        title="지도 확대"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>

                    {/* 축소 버튼 */}
                    <button
                        onClick={handleZoomOut}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none"
                        title="지도 축소"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default KakaoMap;
