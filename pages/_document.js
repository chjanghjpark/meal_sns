import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bdecedb6168050306415a2fe6b8be7c0"></script>
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
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