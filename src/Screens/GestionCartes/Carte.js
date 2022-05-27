
import React, {useState,useEffect,useRef} from "react";
import './Carte.css';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import mapboxgl from 'mapbox-gl';
import MapboxCircle from 'mapbox-gl-circle';

mapboxgl.accessToken = "pk.eyJ1Ijoid2FsaWR0aGVrcmFrZW4iLCJhIjoiY2wzb2tubGpxMG0yYjNtczZweTE3b215ZyJ9.nJQFsmtavurwgs46nz-urw";

const Carte = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(3.5);
    const [lat, setLat] = useState(35);
    const [zoom, setZoom] = useState(3.7);
    const [cartes, setCartes] = useState([]);

    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        antialias: true,
        style: 'mapbox://styles/walidthekraken/cl3opdnmp003m14qakdzlzwwm',
        center: [lng, lat],
        zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        });
   
    useEffect(()=>{
        if (!map.current) return
        fetch('http://walidthekraken.pythonanywhere.com/cartes/print',{
          'methods':'GET',
          headers : {
             'content-type':'application/json'
          }
        })
        .then(response => response.json())
        .then((data) => {setCartes(data)})
        .catch(error => console.log(error))
        
        
    },[])

    useEffect(()=>{
        cartes.map((carte, index) =>{
            console.log(carte)
            new MapboxCircle({lat: carte.CarteLat, lng: carte.CarteLong}, carte.CartePerim, {
                editable: false,
                minRadius: 1500,
                fillColor: '#29AB87'
            }).addTo(map.current);
            new mapboxgl.Marker({color:"#555555"}).setLngLat([carte.CarteLong,carte.CarteLat]).addTo(map.current)
        })
    },[cartes])
        
    return (
        <div>
            <div className="header">
                Ajouter une carte numérique

                <div className="InputList">
                    
                        <div className="InputBar">
                            <input type="text" placeholder="Nom de la carte">
                            </input>
                        </div>
                        <div className="InputBar">
                            <input type="text" placeholder="Type de la carte">
                            </input>
                        </div>
                        <div className="InputBar">
                            <input type="number" placeholder="Périmètre de la carte">
                            </input>
                
                    </div>
                    
                        <button className="InputButton">
                            Ajouter la carte
                        </button>
                   
                </div>

            </div>
            <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
      );
}

export default Carte;