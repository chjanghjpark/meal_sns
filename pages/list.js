import ListMainContainer from '../src/list/ListMainContainer'
import { SSRProvider } from '@react-aria/ssr'

const Index = () => {
  return (
    <SSRProvider>
      <ListMainContainer />
    </SSRProvider>
  );
}

export default Index;
