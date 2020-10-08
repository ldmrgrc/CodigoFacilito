import styles from "./maps/styles";

function iniMap() {
  const coords = {
    lat: 4.6359163,
    lng: -74.0785597,
  };

  let map = new google.maps.Map(document.getElementById("idMapa"), {
    center: coords,
    zoom: 16,
    styles: styles,
  });

  let marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: "Home Store",
  });
}

iniMap();
