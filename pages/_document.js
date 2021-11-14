import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bdecedb6168050306415a2fe6b8be7c0"></script>
          <script type="text/javascript" src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          <script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charset="utf-8"></script>
          <script type="text/javascript" src="https://apis.google.com/js/platform.js" async defer></script>
          <meta name="google-signin-client_id" content="506826022275-kaqkf69c5ud0kt3g98s50d8sbi7stg2f.apps.googleusercontent.com.apps.googleusercontent.com" />
          <meta name="description" content="Web site created using create-react-app" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}