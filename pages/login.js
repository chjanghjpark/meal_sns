import LoginMainContainer from '../src/login/LoginMainContainer'
import { SSRProvider } from '@react-aria/ssr'

const Index = () => {
  return (
    <SSRProvider>
      <LoginMainContainer />
    </SSRProvider>
  );
}

export default Index;