import React, { useEffect } from 'react'
import * as Maps from 'expo-location'
import * as TaskManager  from 'expo-task-manager'

type Location = {
  latitude: number;
  longitude: number;
}

export type AppContextProps = {
  currentLocation?: Location;
  destination?: Location;
  updateCurrentLocation: () => Promise<Location | undefined>;
  setDestination: (destination: Location) => void;
  permissionsGranted: boolean;
  gpsOn: boolean;
  distanceToAlarmInMeters: number;
  setDistanceToAlarmInMeters: (distance: number) => void;
  start: () => void;
  isAlarmRinging: boolean;
  stopAlarm: () => void;
}

export const AppContext = React.createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider: React.FC = ({ children }) => {
  const [currentLocation, setCurrentLocation] = React.useState<Location>();
  const [destination, setDestination] = React.useState<Location>();
  const [permissionsGranted, setPermissionsGranted] = React.useState(false);
  const [gpsOn, setGpsOn] = React.useState(false);
  const [distanceToAlarmInMeters, setDistanceToAlarmInMeters] = React.useState(100);
  const [isAlarmRinging, setIsAlarmRinging] = React.useState(false);

  const [isUpdatingLocation, setIsUpdatingLocation] = React.useState(false);

  const updateCurrentLocation = async () => {
    if (isUpdatingLocation) {
      return currentLocation;
    }
    setIsUpdatingLocation(true);
    const { status } = await Maps.requestBackgroundPermissionsAsync();
    if (status !== 'granted') {
      setPermissionsGranted(false);
      return;
    }
    setPermissionsGranted(true);
    try {
      const location = await Maps.getCurrentPositionAsync({
        accuracy: Maps.Accuracy.High,
      });
      setGpsOn(true);
      setCurrentLocation(location.coords);
      setIsUpdatingLocation(false);
      return location.coords;
    } catch (error) {
      setGpsOn(false);
      setCurrentLocation(undefined);
      setIsUpdatingLocation(false);
      return undefined;
    }
  }

  const stopAlarm = () => {
  }

  const start = async () => {
    const coords = await updateCurrentLocation();
    try {
      const location = await Maps.getCurrentPositionAsync({
        accuracy: Maps.Accuracy.High,
      });
      setGpsOn(true);
      setCurrentLocation(location.coords);
      
      const taskName = 'location-update';
      TaskManager.unregisterTaskAsync(taskName);
      TaskManager.defineTask(taskName, () => ({
        accuracy: Maps.Accuracy.High,
        timeout: 1000,
      }));
    } catch (error) {
      setGpsOn(false);
      setCurrentLocation(undefined);
    }
  }

  useEffect(() => {
    updateCurrentLocation();
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentLocation,
        destination,
        updateCurrentLocation,
        setDestination,
        permissionsGranted,
        gpsOn,
        distanceToAlarmInMeters,
        setDistanceToAlarmInMeters,
        start,
        isAlarmRinging,
        stopAlarm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => React.useContext(AppContext);