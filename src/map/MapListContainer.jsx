import { useCallback } from 'react';
import MapListView from './MapListView';

const MapListContainer = ({placesUpdater, searchKeywords, places, pageableCount, curPage, map, infowindow}) => {
    const onClickPage = useCallback(async (page) => {
        await placesUpdater(searchKeywords, page);
    }, [searchKeywords]);

    return <MapListView
        onClickPage={onClickPage}
        places={places}
        pageableCount={pageableCount}
        curPage={curPage}
        map={map}
        infowindow={infowindow}
    />;
}

export default MapListContainer;