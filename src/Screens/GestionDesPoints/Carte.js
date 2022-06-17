import React, {useState,useEffect,useRef} from "react";
import './Carte.css';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import mapboxgl from 'mapbox-gl';
import MapboxCircle from 'mapbox-gl-circle';
import { Autocomplete, TextField } from "@mui/material";

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
        if (newName!=="" & newType!=="" & newDesc!==""){
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

            const marker = new mapboxgl.Marker({color:"#59554B"}).
            setLngLat([carte.CarteLong,carte.CarteLat])
            .setPopup(popup)
            .addTo(map.current);
            currentMarkers.push(marker)
        })
    },[cartes])
    
    useEffect(()=>{
        if(currentLoc!=null){
            currentLoc.setLngLat([lat,lng])
        }
        
    },[lat,lng,currentLoc])

    const [currentMap, setCurrentMap] = useState(' ')
    const [currentMarkers, setCurrentMarkers] = useState([])
    const [currentPoints, setCurrentPoints] = useState([])

    const [currentCircle, setCurrentCircle] = useState(null)

    useEffect(()=>{
        if (currentMap==' ') return;
        currentMarkers.forEach((marker)=>marker.remove())
        if (currentCircle!== null) currentCircle.remove()
        setCurrentMarkers([])
        console.log(cartes[cartes.findIndex(x => x.CarteId === currentMap)])
        fetch(`http://walidthekraken.pythonanywhere.com/points/print`,{
          'methods':'GET',
          headers : {
             'content-type':'application/json'
          }
        })
        .then(response => response.json())
        .then((data) => {setCurrentPoints(data.filter(obj => obj.CarteId==cartes[cartes.findIndex(x => x.CarteId === currentMap)].CarteId))})
        .catch(error => console.log(error))
        setCurrentCircle( new MapboxCircle({lat: Number(cartes[cartes.findIndex(x => x.CarteId === currentMap)].CarteLat), lng: Number(cartes[cartes.findIndex(x => x.CarteId === currentMap)].CarteLong)}, cartes[cartes.findIndex(x => x.CarteId === currentMap)].CartePerim, {
            editable: false,
            minRadius: 1500,
            fillColor: '#B2A995'
        }).addTo(map.current));
    },[currentMap])

    useEffect(()=>{
        if (currentMap==' ') return;
        map.current.setCenter([cartes[cartes.findIndex(x => x.CarteId === currentMap)].CarteLong , cartes[cartes.findIndex(x => x.CarteId === currentMap)].CarteLat])
        map.current.setZoom(8)
        currentPoints.map((point, index) =>{
            console.log(point)
            const popup = new mapboxgl.Popup({className: 'my-class'})
                .setHTML(`<h1>Id:${point.PointId} Nom:${point.PointNom}</h1><button ref=${buttonRef} class="btn">Supprimer</button>`)
                .setMaxWidth("300px");

            const marker = new mapboxgl.Marker({color:"#59554B"}).
            setLngLat([point.PointLong,point.PointLat])
            .setPopup(popup)
            .addTo(map.current);
            currentMarkers.push(marker)
        })
    },[currentPoints])
    

    const [newName, setNewName] = useState("")
    const [newType, setNewType] = useState("")
    const [newDesc, setNewDesc] = useState(0)



    const onClickHandler = () => {
        if (newName!=="" & newType!=="" & newDesc!==""){
            fetch(`http://walidthekraken.pythonanywhere.com/points/add?nom=${newName}&lat=${lat}&long=${lng}&desc=${newDesc}&carteId=${cartes[cartes.findIndex(x => x.CarteId === currentMap)].CarteId}`,{
          'methods':'POST',
          headers : {
             'content-type':'application/json'
          }
        })
        .then(response => {
            console.log(response);
            const popup = new mapboxgl.Popup({className: 'my-class'})
                .setHTML("<h1>Hello World!</h1>")
                .setMaxWidth("300px");
            console.log(lat)
            console.log(lng)
            
            const marker = new mapboxgl.Marker({color:"#555555"})
            .setLngLat([lng,lat])
            .setPopup(popup)
            .addTo(map.current);
            currentMarkers.push(marker)
        })
        .catch(error => console.log(error))
        }
    }

    return (
        <div>
            <div className="header">
                Ajouter le point d'interet

                <div className="InputList">

                    
                    
                        <Autocomplete
                            
                            id="cardAuto"
                            disableClearable
                            onChange={(event, value)=>{
                                setCurrentMap(value.id)
                            }}
                            options={cartes.map(
                                (carte)=>
                                {return {label: carte.CarteNom, id: carte.CarteId};}
                            )}
                            defaultValue={currentMap}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Nom de la carte"
                                variant="standard"
                                id="cardText"
                                fullWidth
                                InputProps={{
                                
                                ...params.InputProps,
                                disableUnderline : true,
                                shrink : true,
                                
                                }}
                            />
                            )}
                        />
                        <div className="InputBar">
                            <input type="text" onChange={(event)=>{setNewName(event.target.value);}} placeholder="Nom du point">
                            </input>
                        </div>
                        <div className="InputBar">
                            <input type="text" onChange={(event)=>setNewType(event.target.value)} placeholder="Type du point">
                            </input>
                        </div>
                        <div className="InputBar">
                            <input type="text" onChange={(event)=>setNewDesc(event.target.value)} placeholder="Description du point">
                            </input>
                
                    </div>
                    
                        <button className="InputButton" onClick={onClickHandler}>
                            Ajouter le point
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