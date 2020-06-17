import * as React from 'react';
import styles from './index.less';
import { Link, history, NavLink } from 'umi';
import * as Cesium from 'cesium';

//https://cesium.com/downloads/cesiumjs/releases/1.70/Build/Cesium/Source

// Cesium.buildModuleUrl();
Cesium.buildModuleUrl.setBaseUrl('https://cesium.com/downloads/cesiumjs/releases/1.70/Build/Cesium/Source');
// Cesium.buildModuleUrl('https://cesium.com/downloads/cesiumjs/releases/1.70/Build/Cesium/Source');

// window.CESIUM_BASE_URL = "../../../Source/";
// window.CESIUM_BASE_URL = "http://192.168.1.133:85/map/cesium/1.70/";
// window.CESIUM_BASE_URL = "../../../Source/";
// import * as Cesium from 'cesium';
// import * as Cesium from "https://cesium.com/downloads/cesiumjs/releases/1.70.1/Build/Cesium/Source/Cesium.js";
// window.Cesium = Cesium;

// Since ES6 modules have no guaranteed load order,
// only call startup if it's already defined but hasn't been called yet
// if (!window.startupCalled && typeof window.startup === "function") {
//   window.startup(Cesium);
// }


console.log(Cesium);

export default () => {

  const his = function () {
    history.push('/first');
  };

  React.useEffect(() => {
    var viewer = new Cesium.Viewer("cesiumContainer", {
      // imageryProvider: undefined,
      imageryProvider: new Cesium.TileMapServiceImageryProvider({
        url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
      }),
      // baseLayerPicker: false,
      // geocoder: false,
      selectionIndicator: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      infoBox: false,
      homeButton: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      geocoder: false,
      sceneModePicker: false,
      scene3DOnly: true,
      requestRenderMode: true,
      maximumRenderTimeChange: Infinity,
    });

    (viewer.cesiumWidget.creditContainer as HTMLElement).style.display = "none";
  }, []);

  // const style: React.CSSProperties = { position: 'relative', width: '100%', height: '100%' };
  const style: React.CSSProperties = { position: 'relative', width: '500px', height: '500px' };

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/first">Page first</Link>
      <Link to="/second">Page second</Link>
      <Link to="/third">Page third</Link>
      <Link to="/forth">Page forth</Link>
      <Link to="/fifth">Page fifth</Link>
      {/* <NavLink to="/first">About</NavLink> */}
      <button onClick={his} >button</button>
      <div id='cesiumContainer' style={style} ></div>
    </div>
  );
}
