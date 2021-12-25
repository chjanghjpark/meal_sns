import { useEffect } from "react";
import NavbarCommon from "../navbar/NavbarCommon";

const MapMain = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <>
      <div style={{
        width: "100%",
        minHeight: "100%",
        top: "56px",
        position: "fixed"
      }} id='map' />
      <NavbarCommon />
      <style type="text/css">
        {`
        .login-btn {
          background-color: purple;
          color: white;
          height: 40px;
          width: 40px;
        }
        `}
      </style>
    </>
  );
}

export default MapMain;