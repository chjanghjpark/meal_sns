import React, { useEffect, useRef } from "react";
import styled from 'styled-components';

const { kakao } = window;

const MapMain = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <>
      <KakaoMap id='map' />
      <div id="myModal" class="modal hide fade">
        <div class="modal-body">Hello world!</div>
        <div class="modal-footer"><a href="#" class="btn primary">OK</a></div>
      </div>
    </>
  );
}

const KakaoMap = styled.div`
min-height: 100vh;
`;

export default MapMain;