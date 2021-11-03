import '../src/index.css'; // 이거 없으면 알수 없는 margin이 생김.. 왜지?
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Share Meal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;