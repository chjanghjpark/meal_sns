import LoginCallbackMain from '../src/login/LoginCallbackMain'
import { SSRProvider } from '@react-aria/ssr'

const Index = () => {
  return (
    <SSRProvider>
      <LoginCallbackMain />
    </SSRProvider>
  );
}

export default Index;