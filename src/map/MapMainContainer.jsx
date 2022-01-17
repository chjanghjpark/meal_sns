import { useEffect, useState, useCallback } from "react";
import MapMainView from "./MapMainView";
import NavbarContainer from "../navbar/NavbarContainer";
import MapInputContainer from "./MapInputContainer";

let map = null;
let markers = [];

const MapMainContainer = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const container = document.getElementById('map');
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  useEffect(() => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }   
    markers = [];

    let bounds = new kakao.maps.LatLngBounds();

    for (let i = 0; i < places.length; i++) {
      const position = new kakao.maps.LatLng(places[i].y, places[i].x);

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(position);

      const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
          spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin : new kakao.maps.Point(0, (i*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
          clickable: true
        });

      kakao.maps.event.addListener(marker, 'click', function() {
        alert('!!');
      });

      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker);  // 배열에 생성된 마커를 추가합니다
    }

    if (places.length != 0)
      map.setBounds(bounds);

  }, [places]);

  const placesUpdater = useCallback((data) => {
    setPlaces(data);
  }, []);

  return <MapMainView
    navbarContainer={<NavbarContainer/>}
    mapInputContainer={<MapInputContainer placesUpdater={placesUpdater}/>}
  />;
}

export default MapMainContainer;