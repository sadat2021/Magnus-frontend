import { LatLng } from "leaflet";
import { Dispatch, SetStateAction } from "react";
import { useMapEvents } from "react-leaflet";

interface LocationMarkerProps {
  setBounds: Dispatch<SetStateAction<LatLng[]>>;
}

function LocationMarker({ setBounds }: LocationMarkerProps) {
  const map = useMapEvents({
    click(e) {
      setBounds((old => [...old, e.latlng]))
    },
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return null
}
export default LocationMarker;
