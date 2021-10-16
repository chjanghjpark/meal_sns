import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';

const LoginMain = () => {
  const responseKaKao = (res) => {
    // setData(res);
    // alert(JSON.stringify(this.state.data))
  };

  const responseFail = (err) => {
    alert(err);
  };

  return (
    <header className="App-header">
      <p>
        로그인
      </p>
      <KaKaoBtn
        //styled component 통해 style을 입혀 줄 예정 
        jsKey={'bdecedb6168050306415a2fe6b8be7c0'}
        //카카오에서 할당받은 jsKey를 입력
        buttonText='카카오 계정으로 로그인'
        //로그인 버튼의 text를 입력
        onSuccess={responseKaKao}
        onFailure={responseFail}
        getProfile={true}
      />
      <p>
        돌아가기
      </p>
    </header>
  );
}

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default LoginMain;