import React, {useState,useEffect,useRef} from "react";

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
    const [currentLoc, setCurrentLoc] = useState(null);

    const [loaded, setLoaded] = useState(false);

    const buttonRef = React.createRef();
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        antialias: true,
        style: 'mapbox://styles/walidthekraken/cl3opdnmp003m14qakdzlzwwm',
        center: [lng, lat],
        zoom: zoom
        });
        // setCurrentLoc( new mapboxgl.Marker({color:"#555555"}).
        //     setLngLat([lat,lng])
        //     .addTo(map.current));
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

    const onClickHandlerDelete = (id) => {
        console.log('clicked')
        if (newName!="" & newType!="" & newPerim!=0){
            fetch(`http://walidthekraken.pythonanywhere.com/cartes/del?id=${id}`,{
          'methods':'POST',
          headers : {
             'content-type':'application/json'
          }
        })
        .then(response => {console.log(response);})
        .catch(error => console.log(error))
        }
    }

    useEffect(()=>{
        if (loaded) return;
        //setLoaded(true);
        cartes.map((carte, index) =>{
            console.log(carte)
            const popup = new mapboxgl.Popup({className: 'my-class'})
                .setHTML(`<h1>Id:${carte.CarteId} Nom:${carte.CarteNom}</h1><button ref=${buttonRef} class="btn">Supprimer</button>`)
                .setMaxWidth("300px");

            
            const circle = new MapboxCircle({lat: carte.CarteLat, lng: carte.CarteLong}, carte.CartePerim, {
                editable: false,
                minRadius: 1500,
                fillColor: '#B2A995'
            }).addTo(map.current);
            const marker = new mapboxgl.Marker({color:"#59554B"}).
            setLngLat([carte.CarteLong,carte.CarteLat])
            .setPopup(popup)
            .addTo(map.current);

            // const btn = document.getElementsByClassName("btn")[0];
            // btn.addEventListener("click", ()=> onClickHandlerDelete(carte.CarteId));
            
            const markerHeight = 50;
            const markerRadius = 10;
            const linearOffset = 25;
            const popupOffsets = {
                'top': [0, 0],
                'top-left': [0, 0],
                'top-right': [0, 0],
                'bottom': [0, -markerHeight],
                'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                'left': [markerRadius, (markerHeight - markerRadius) * -1],
                'right': [-markerRadius, (markerHeight - markerRadius) * -1]
            };

        
            
        
        
        })
    },[cartes])
    
    useEffect(()=>{
        if(currentLoc!=null){
            currentLoc.setLngLat([lat,lng])
        }
        
    },[lat,lng,currentLoc])
    

    const [newName, setNewName] = useState("")
    const [newType, setNewType] = useState("")
    const [newPerim, setNewPerim] = useState(0)

    const onClickHandler = () => {
        if (newName!=="" & newType!=="" & newPerim!==0){
            fetch(`http://walidthekraken.pythonanywhere.com/cartes/add?nom=${newName}&lat=${lat}&long=${lng}&desc=hi&perim=${newPerim}`,{
          'methods':'POST',
          headers : {
             'content-type':'application/json'
          }
        })
        .then(response => {
            console.log(response);
            const popup = new mapboxgl.Popup({className: 'my-class'})
                .setHTML(`<h1>Id:${newPerim} Nom:${newName}</h1><button ref=${buttonRef} class="btn">Supprimer</button>`)
                .setMaxWidth("300px");
            console.log(lat)
            console.log(lng)
            const circle = new MapboxCircle({lat: Number(lat), lng: Number(lng)}, newPerim, {
                editable: false,
                minRadius: 1500,
                fillColor: '#B2A995'
            }).addTo(map.current);
            
            const marker = new mapboxgl.Marker({color:"#555555"})
            .setLngLat([lng,lat])
            .setPopup(popup)
            .addTo(map.current);
        })
        .catch(error => console.log(error))
        }
    }

    return (
        <div>
            
            <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container2" />
        </div>
      );
}

export default Carte;