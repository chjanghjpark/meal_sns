import { useCallback } from 'react';
import MapInputView from './MapInputView';

const MapInputContainer = ({placesUpdater}) => {
    const onSearchLocation = useCallback(async () => {
        const input = document.getElementsByClassName('input_location')[0];
        const value = input.value;
        await placesUpdater(value, 1);
    }, []);
    return <MapInputView onSearchLocation={onSearchLocation}/>;
}

export default MapInputContainer;