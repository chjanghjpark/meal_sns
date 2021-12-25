import MapMainContainer from '../src/map/MapMainContainer'
import { SSRProvider } from '@react-aria/ssr'

const Index = () => {
  return (
    <SSRProvider>
      <MapMainContainer />
    </SSRProvider>
  );
}

export default Index;