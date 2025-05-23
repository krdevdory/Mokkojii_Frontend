import React, { useEffect, useRef, useState } from 'react';

const KakaoMap = ({ searchLocation }) => {
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    // 마커 위치 데이터 (위도, 경도만)
    const markerPositions = [
        { lat: 37.55257446, lng: 126.9232714 },
        { lat: 37.55610649, lng: 126.9234489 },
        { lat: 37.55543777, lng: 126.9204618 },
        { lat: 37.55047827, lng: 126.9147069 },
        { lat: 37.55770065, lng: 126.9225305 },
        { lat: 37.55372853, lng: 126.9245038 },
        { lat: 37.55047827, lng: 126.9147069 },
        { lat: 37.55603609, lng: 126.9260859 },
        { lat: 37.55580985, lng: 126.9245243 },
        { lat: 37.55465776, lng: 126.9131517 },
        { lat: 37.55149585, lng: 126.9139588 },
        { lat: 37.55327356, lng: 126.9178046 },
        { lat: 37.55534341, lng: 126.9278521 },
        { lat: 37.55487796, lng: 126.9187082 },
        { lat: 37.55528024, lng: 126.9142261 },
        { lat: 37.55605429, lng: 126.9263801 },
        { lat: 37.55465776, lng: 126.9131517 },
        { lat: 37.55721707, lng: 126.9271712 },
        { lat: 37.55350049, lng: 126.9202601 },
        { lat: 37.552096, lng: 126.921846 },
        { lat: 37.55426994, lng: 126.9126089 },
        { lat: 37.55435648, lng: 126.9350281 },
        { lat: 37.55441912, lng: 126.9342585 },
        { lat: 37.55485963, lng: 126.9325153 },
        { lat: 37.55383011, lng: 126.9148842 },
        { lat: 37.5560583, lng: 126.933114 },
        { lat: 37.55626143, lng: 126.9262441 },
        { lat: 37.55630762, lng: 126.9280888 },
        { lat: 37.55150867, lng: 126.9193456 },
        { lat: 37.5498607, lng: 126.9206148 },
        { lat: 37.55237007, lng: 126.9142973 },
        { lat: 37.55018455, lng: 126.9198676 },
        { lat: 37.55584828, lng: 126.9147913 },
        { lat: 37.55762802, lng: 126.9216931 },
        { lat: 37.55590197, lng: 126.9277497 },
        { lat: 37.55462859, lng: 126.923043 },
        { lat: 37.55748742, lng: 126.9272615 },
        { lat: 37.5588814, lng: 126.9232084 },
        { lat: 37.55516921, lng: 126.9230877 },
        { lat: 37.55422312, lng: 126.9230094 },
        { lat: 37.55625529, lng: 126.9309861 },
        { lat: 37.55477676, lng: 126.929471 },
        { lat: 37.55816281, lng: 126.913374 },
        { lat: 37.55039156, lng: 126.9195392 },
        { lat: 37.54953256, lng: 126.9151833 },
        { lat: 37.54927128, lng: 126.9151949 },
        { lat: 37.55018455, lng: 126.9198676 },
        { lat: 37.55721092, lng: 126.9178116 },
        { lat: 37.55485963, lng: 126.9325153 },
        { lat: 37.55423374, lng: 126.9123939 },
        { lat: 37.55269311, lng: 126.9124976 },
        { lat: 37.55483643, lng: 126.9239934 },
        { lat: 37.54875226, lng: 126.9202991 },
        { lat: 37.55617741, lng: 126.9216833 },
        { lat: 37.55609802, lng: 126.9242864 },
        { lat: 37.55074957, lng: 126.9160985 },
        { lat: 37.55656748, lng: 126.9257798 },
        { lat: 37.54946169, lng: 126.9168808 },
        { lat: 37.55290033, lng: 126.912486 },
        { lat: 37.55585165, lng: 126.9341441 },
        { lat: 37.55472891, lng: 126.9118841 },
        { lat: 37.55457585, lng: 126.9120314 },
        { lat: 37.55485775, lng: 126.9293012 },
        { lat: 37.55728521, lng: 126.9210483 },
        { lat: 37.55357568, lng: 126.9250019 },
        { lat: 37.55027666, lng: 126.9228777 },
        { lat: 37.55595533, lng: 126.9266179 },
        { lat: 37.55468824, lng: 126.9321646 },
        { lat: 37.55491533, lng: 126.9354464 },
        { lat: 37.54931626, lng: 126.915093 },
        { lat: 37.55470296, lng: 126.9133553 },
        { lat: 37.55610649, lng: 126.9234489 },
        { lat: 37.55255332, lng: 126.9186089 },
        { lat: 37.55312054, lng: 126.9180198 },
        { lat: 37.55563487, lng: 126.9188092 },
        { lat: 37.555255, lng: 126.9306702 },
        { lat: 37.55720475, lng: 126.9219878 },
        { lat: 37.55485101, lng: 126.9331943 },
        { lat: 37.55836908, lng: 126.9251555 },
        { lat: 37.55608143, lng: 126.9265612 },
        { lat: 37.55439663, lng: 126.913367 },
        { lat: 37.55574629, lng: 126.9237661 },
        { lat: 37.55305889, lng: 126.9200908 },
        { lat: 37.55344427, lng: 126.9171141 },
        { lat: 37.55245698, lng: 126.9227396 },
        { lat: 37.55502295, lng: 126.919919 },
        { lat: 37.5575632, lng: 126.9191014 },
        { lat: 37.56054097, lng: 126.925923 },
        { lat: 37.55382484, lng: 126.9202372 },
        { lat: 37.55748986, lng: 126.9172793 },
        { lat: 37.55772702, lng: 126.9215232 },
        { lat: 37.55884707, lng: 126.9258794 },
        { lat: 37.55236475, lng: 126.9195484 },
        { lat: 37.55078815, lng: 126.9197651 },
        { lat: 37.54997801, lng: 126.9208863 },
        { lat: 37.55468189, lng: 126.9218886 },
        { lat: 37.55614428, lng: 126.9262103 },
        { lat: 37.55435535, lng: 126.9330137 },
        { lat: 37.55878166, lng: 126.9222464 },
        { lat: 37.55665774, lng: 126.9260287 },
        { lat: 37.53032651, lng: 126.8468713 },
        { lat: 37.59348222, lng: 127.0860329 },
        { lat: 37.57947556, lng: 126.9887243 },
        { lat: 37.65256313, lng: 127.0489658 },
        { lat: 37.57931259, lng: 126.9822714 },
        { lat: 37.58528434, lng: 127.0536203 },
        { lat: 37.53219057, lng: 126.8768151 },
        { lat: 37.56774977, lng: 127.0562451 },
        { lat: 37.52471136, lng: 126.8848481 },
        { lat: 37.58471986, lng: 126.997396 },
        { lat: 37.58297195, lng: 126.9990377 },
        { lat: 37.58611642, lng: 126.9992188 },
        { lat: 37.58548568, lng: 126.9967053 },
        { lat: 37.58697237, lng: 127.0002038 },
        { lat: 37.58744989, lng: 126.9990603 },
        { lat: 37.59004475, lng: 126.9995245 },
        { lat: 37.58426035, lng: 126.9972601 },
        { lat: 37.58263858, lng: 126.9988339 },
        { lat: 37.5863777, lng: 127.0013473 },
        { lat: 37.56228932, lng: 126.9265891 },
        { lat: 37.56168563, lng: 126.9265557 },
        { lat: 37.56152227, lng: 126.9246883 },
        { lat: 37.56630138, lng: 126.916964 },
        { lat: 37.56597972, lng: 126.920892 },
        { lat: 37.56155925, lng: 126.926171 },
        { lat: 37.5655849, lng: 126.9233373 },
        { lat: 37.56158648, lng: 126.9264879 },
        { lat: 37.56261424, lng: 126.9275055 },
        { lat: 37.56267612, lng: 126.9255813 },
        { lat: 37.52334979, lng: 127.0271952 },
        { lat: 37.52360289, lng: 127.0233717 },
        { lat: 37.52236793, lng: 127.0261541 },
        { lat: 37.51937687, lng: 127.0249201 },
        { lat: 37.52351285, lng: 127.0230436 },
        { lat: 37.51823339, lng: 127.0208249 },
        { lat: 37.51924159, lng: 127.0254969 },
        { lat: 37.52474784, lng: 127.0196502 },
        { lat: 37.5195127, lng: 127.0214248 },
        { lat: 37.48740026, lng: 126.9163956 },
        { lat: 37.56535722, lng: 126.9918052 },
        { lat: 37.56678103, lng: 127.0033957 },
        { lat: 37.56553739, lng: 126.9912618 },
        { lat: 37.56859208, lng: 126.9988794 },
        { lat: 37.56586195, lng: 126.9948046 },
        { lat: 37.56503275, lng: 126.9902772 },
        { lat: 37.56614127, lng: 126.9949744 },
        { lat: 37.56644757, lng: 126.9940688 },
        { lat: 37.56568177, lng: 126.9952461 },
        { lat: 37.56595185, lng: 126.9913976 },
        { lat: 37.53703011, lng: 127.0019461 },
        { lat: 37.53313774, lng: 127.0038015 },
        { lat: 37.53568763, lng: 127.000973 },
        { lat: 37.5323537, lng: 127.0074219 },
        { lat: 37.53230874, lng: 127.0056456 },
        { lat: 37.53082207, lng: 127.0059962 },
        { lat: 37.53458805, lng: 127.0092437 },
        { lat: 37.53787691, lng: 127.0059515 },
        { lat: 37.53449831, lng: 126.9993325 },
        { lat: 37.53507439, lng: 127.0114953 },
        { lat: 37.54948042, lng: 127.0498602 },
        { lat: 37.54698724, lng: 127.0432952 },
        { lat: 37.54604105, lng: 127.0436794 },
        { lat: 37.54609285, lng: 127.0494053 },
        { lat: 37.54670623, lng: 127.0477196 },
        { lat: 37.54662626, lng: 127.0448679 },
        { lat: 37.54630125, lng: 127.0465312 },
        { lat: 37.54605773, lng: 127.0471647 },
        { lat: 37.55045275, lng: 127.0515923 },
        { lat: 37.54682447, lng: 127.0448907 }
    ];
    // 검색 위치가 변경되었을 때 지도 중심 이동
    useEffect(() => {
        if (mapInstanceRef.current && searchLocation) {
            if (searchLocation === "을지로") {
                const newCenter = new window.kakao.maps.LatLng(37.566518, 126.991083);
                mapInstanceRef.current.setCenter(newCenter);

                // 새로운 위치에 마커 추가 (선택사항)
                const marker = new window.kakao.maps.Marker({
                    position: newCenter
                });
                marker.setMap(mapInstanceRef.current);
            } else if (searchLocation === "혜화동") {
                const newCenter = new window.kakao.maps.LatLng(37.586374, 126.998655);
                mapInstanceRef.current.setCenter(newCenter);

                // 새로운 위치에 마커 추가 (선택사항)
                const marker = new window.kakao.maps.Marker({
                    position: newCenter
                });
                marker.setMap(mapInstanceRef.current);
            }
            else if (searchLocation === "한남동") {
                const newCenter = new window.kakao.maps.LatLng(37.534114, 127.004312);
                mapInstanceRef.current.setCenter(newCenter);

                // 새로운 위치에 마커 추가 (선택사항)
                const marker = new window.kakao.maps.Marker({
                    position: newCenter
                });
                marker.setMap(mapInstanceRef.current);
            }
            else if (searchLocation === "신사동") {
                const newCenter = new window.kakao.maps.LatLng(37.521221, 127.022870);
                mapInstanceRef.current.setCenter(newCenter);

                // 새로운 위치에 마커 추가 (선택사항)
                const marker = new window.kakao.maps.Marker({
                    position: newCenter
                });
                marker.setMap(mapInstanceRef.current);
            }
        }
    }, [searchLocation]);

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

                    mapInstanceRef.current.setCenter(currentPosition);

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
            if (mapInstanceRef.current) {
                // 필요한 정리 작업
            }
        };
    }, []);

    const initializeMap = () => {
        if (!mapContainerRef.current) return;

        if (!mapInstanceRef.current) {
            const options = {
                center: new window.kakao.maps.LatLng(37.547536, 127.047503),
                level: 3
            };

            mapInstanceRef.current = new window.kakao.maps.Map(mapContainerRef.current, options);

            // 여러개 마커 추가
            markerPositions.forEach((position) => {
                const marker = new window.kakao.maps.Marker({
                    position: new window.kakao.maps.LatLng(position.lat, position.lng),
                });
                marker.setMap(mapInstanceRef.current);
            });

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
