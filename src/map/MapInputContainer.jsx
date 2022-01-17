import { useCallback } from 'react';
import { SearchLocation } from '../utils/api/KakaoMapAPI';
import MapInputView from './MapInputView';

const MapInputContainer = ({placesUpdater}) => {
    const onSearchLocation = useCallback(async () => {
        const input = document.getElementsByClassName('input_location')[0];
        const value = input.value;
        const searchResult = await SearchLocation(value);
        placesUpdater(searchResult.documents);
    }, []);
    return <MapInputView onSearchLocation={onSearchLocation}/>;
}

export default MapInputContainer;