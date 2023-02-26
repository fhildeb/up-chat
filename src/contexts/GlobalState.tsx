import { createContext, useContext, useState } from 'react';

/**
 * Specifying the shape of the global state object
 * and defining the types of the state update functions
 */
type GlobalState = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isL16Network: boolean;
  setIsL16Network: React.Dispatch<React.SetStateAction<boolean>>;
  isLSP0Standard: boolean;
  setIsLSP0Standard: React.Dispatch<React.SetStateAction<boolean>>;
  universalProfileAddress: string;
  setUniversalProfileAddress: React.Dispatch<React.SetStateAction<string>>;
  universalProfileMetaData: { [key: string]: any };
  setUniversalProfileMetaData: React.Dispatch<
    React.SetStateAction<{ [key: string]: any }>
  >;
};

type GlobalStateProviderProps = {
  children: React.ReactNode;
};

// Create a context object with a initial values
const GlobalStateContext = createContext<GlobalState>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  isL16Network: false,
  setIsL16Network: () => {},
  isLSP0Standard: false,
  setIsLSP0Standard: () => {},
  universalProfileAddress: '',
  setUniversalProfileAddress: () => {},
  universalProfileMetaData: {},
  setUniversalProfileMetaData: () => {},
});

/**
 * Provider component that wraps the app and therefore
 * makes the context available to all child components
 */
const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  // Boolean for Darkmode and Lightmode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Boolean for Network check
  const [isL16Network, setIsL16Network] = useState(false);

  // Boolean for LSP0 check
  const [isLSP0Standard, setIsLSP0Standard] = useState(false);

  // String for storing the Universal Profile Address
  const [universalProfileAddress, setUniversalProfileAddress] = useState('');

  // Object for storing the Metadata Object
  const [universalProfileMetaData, setUniversalProfileMetaData] = useState({});

  const state: GlobalState = {
    isDarkMode,
    setIsDarkMode,
    isL16Network,
    setIsL16Network,
    isLSP0Standard,
    setIsLSP0Standard,
    universalProfileAddress,
    setUniversalProfileAddress,
    universalProfileMetaData,
    setUniversalProfileMetaData,
  };

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};

/**
 * Custom hook to use the context in child components.
 * The function retrieves the GlobalState object from the
 * context and returns its objects with the specified state
 * variables and functions.
 */
const useGlobalState = () => {
  const {
    isDarkMode,
    setIsDarkMode,
    isL16Network,
    setIsL16Network,
    isLSP0Standard,
    setIsLSP0Standard,
    universalProfileAddress,
    setUniversalProfileAddress,
    universalProfileMetaData,
    setUniversalProfileMetaData,
  } = useContext(GlobalStateContext);

  return {
    isDarkMode,
    setIsDarkMode,
    isL16Network,
    setIsL16Network,
    isLSP0Standard,
    setIsLSP0Standard,
    universalProfileAddress,
    setUniversalProfileAddress,
    universalProfileMetaData,
    setUniversalProfileMetaData,
  };
};

export { GlobalStateProvider, useGlobalState };
