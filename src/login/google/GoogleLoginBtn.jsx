import { GoogleLogin } from 'react-google-login';
import { LoginAndReturnMain } from '../../utils/LoginUtils';

const GoogleLoginBtn = () => {
  const onSuccess = async (response) => {
    LoginAndReturnMain(response.tokenId, 'google');
  }

  const onFailure = (error) => {
    alert(JSON.stringify(error))
  }

  return (
    <GoogleLogin
      clientId="506826022275-kaqkf69c5ud0kt3g98s50d8sbi7stg2f.apps.googleusercontent.com"
      render={renderProps => (
        <a
          style={{
            cursor: "pointer"
          }}
          onClick={renderProps.onClick}>
          <img
            src='/images/btn_google_signin_light_normal_web.png'
            width="228" height="50"
          />
        </a>
      )}
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}
      uxMode="popup"
    />
  )
}

export default GoogleLoginBtn;
