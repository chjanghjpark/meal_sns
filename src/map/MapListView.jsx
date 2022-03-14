import { displayInfowindow, closeInfowindow } from '../utils/InfoWindowUtils';

const MapListView = ({onClickPage, places, pageableCount, curPage, map, infowindow}) => {
    if (places == null || places.length == 0)
        return<></>;

    const placesList = places.map((place, index) => {;
        const styleOBj = {
            position: "absolute",
            width: "36px",
            height: "45px",
            transform: "translate(0px, 0px)",
            backgroundPositionX: "0",
            backgroundImage: 'url(./images/marker_number_blue.png)',
            margin: "10px 0 0 10px"
        };
        styleOBj.backgroundPositionY = `${-10 - 46 * index}px`;
        return (
            <li key={index}
                style={{borderBottom: "1px solid #888",}}
                onMouseOver={() => { displayInfowindow(map, place.marker, infowindow, place.place_name); }}
                onMouseOut={() => { closeInfowindow(infowindow);}}
            >
                <span style={styleOBj}></span>
                <div style={{padding: "10px 0 10px 55px"}}>
                    <h5 style={{
                        fontSize: "20px",
                        marginBottom: "0",
                    }}>{place.place_name}</h5>
                    <span style={{
                        fontSize: "11px",
                    }}>{place.road_address_name}</span>
                    <span style={{
                        display: "block",
                        backgroundImage: 'url(./images/places_jibun.png)',
                        backgroundRepeat: 'no-repeat',
                        paddingLeft: "26px",
                        color: "#8a8a8a",
                        fontSize: "11px",
                        marginTop: "4px",
                    }}>{place.address_name}</span>
                    <span style={{
                        color: "#009900",
                        fontSize: "11px",
                        marginTop: "4px",
                    }}>{place.phone}</span>
                </div>
            </li>
        );
    });

    const pagnation = () => {
        let pageCount = Math.ceil(pageableCount / 15);
        if (pageCount > 10) pageCount = 10;

        const result = [];
        for (let i = 1; i <= pageCount; i++) {
            if (i == curPage)
                result.push(<a key={i} style={{margin: "0 5px"}}>{i}</a>);
            else
                result.push(<a key={i} style={{margin: "0 5px"}} href="#" onClick={(e) => { onClickPage(i) }}>{i}</a>);
        }
        return result;
    };

    return (
    <div style={{
        // 데스크탑 및 모바일 레이아웃의 동적인 배치 필요
        width: "400px",
        display: "block",
        padding: "10px",
    }}>
        <div style={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.7)",
            height: "400px", // mobild 200px,
            overflowY: "auto",
            borderRadius: "10px",
        }}>
            <ul style={{paddingLeft: "0"}}>
                {placesList}
            </ul>
            <div style={{margin: "10px auto", textAlign: "center"}}>
                {pagnation()}
            </div>
        </div>
    </div>
    );
}

export default MapListView;