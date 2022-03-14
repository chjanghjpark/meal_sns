export const displayInfowindow = (map, marker, infowindow, title) => {
    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
}

export const closeInfowindow = (infowindow) => {
    infowindow.close();
}