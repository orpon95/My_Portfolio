import React from 'react';
import GoogleMapReact from 'google-map-react';


const Map = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div className='h-[50%]'>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDMDiN08Yh-Em0Uf3JuqiaZkeCZjBb8aGg" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>

        </div>
    );
};

export default Map;