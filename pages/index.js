import MapMain from '../src/map/MapMain'
import { SSRProvider } from '@react-aria/ssr'

const Index = () => {
  return (
    <SSRProvider>
      <MapMain />
    </SSRProvider>
  );
}

export default Index;