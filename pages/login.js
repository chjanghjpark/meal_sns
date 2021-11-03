import LoginMain from '../src/login/LoginMain'
import { SSRProvider } from '@react-aria/ssr'

const Index = () => {
  return (
    <SSRProvider>
      <LoginMain />
    </SSRProvider>
  );
}

export default Index;