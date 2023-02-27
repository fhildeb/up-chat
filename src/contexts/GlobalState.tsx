import { createContext, useContext, useState } from 'react';

/**
 * Specifying the shape of the global state object and
 * defining the types of the state update functions.
 */
type GlobalState = {
  // Boolean for Darkmode
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;

  // Boolean for Network check
  isL16Network: boolean;
  setIsL16Network: React.Dispatch<React.SetStateAction<boolean>>;

  // Boolean for LSP0 check
  isLSP0Standard: boolean;
  setIsLSP0Standard: React.Dispatch<React.SetStateAction<boolean>>;

  // String for storing the Universal Profile Address
  universalProfileAddress: string;
  setUniversalProfileAddress: React.Dispatch<React.SetStateAction<string>>;

  // JSON Object for storing the Metadata Object
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
 * Provider component that provides a way for child components
 * to access and update global state variables and functions.
 *
 * @returns {JSX.Element} The Provider component
 */
const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  // Darkmode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Network check
  const [isL16Network, setIsL16Network] = useState(false);

  // LSP0 check
  const [isLSP0Standard, setIsLSP0Standard] = useState(false);

  // Universal Profile Address
  const [universalProfileAddress, setUniversalProfileAddress] = useState('');

  // Metadata Object
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
 * The hook function retrieves the GlobalState object from the
 * context to get its objects. It allows child components to access
 * and update global state variables and functions without having
 * to pass them down as props.
 *
 * @returns {GlobalState} State object as variable and function
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
