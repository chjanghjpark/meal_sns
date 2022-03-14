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
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
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
