import ListMain from '../src/list/ListMain'
import { SSRProvider } from '@react-aria/ssr'

const Index = () => {
  return (
    <SSRProvider>
      <ListMain />
    </SSRProvider>
  );
}

export default Index;
