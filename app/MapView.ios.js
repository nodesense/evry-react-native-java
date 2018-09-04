
import {   NativeModules } from 'react-native'; 

import { requireNativeComponent } from 'react-native';

// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'
const MapView= requireNativeComponent('RNTMap', null);
export default MapView;
