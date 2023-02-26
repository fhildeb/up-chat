import { useState } from 'react';

const useGlobalState = () => {
  // Boolean for Darkmode and Lightmode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Boolean for Network check
  const [isL16Network, setIsL16Network] = useState(false);

  // Boolean for LSP0 check
  const [isLSP0Standard, setIsLSP0Standard] = useState(false);

  // String for storing the Universal Profile Address
  const [universalProfileAddress, setUniversalProfileAddress] = useState('');

  // Object for storing the Metadata Object
  const [universalProfileMetaData, setUniversalProfileMetaData] = useState([]);

  return [
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
  ];
};

export default useGlobalState;

/**
 * USAGE
 *
 * import useGlobalState from 'GlobalState.ts';
 *
 * const
 *      [  isDarkMode, setIsDarkMode,
 *          isL16Network, setIsL16Network,
 *          isLSP0Standard, setIsLSP0Standard,
 *          ...
 *      ] = useGlobalState();
 *
 * setIsDarkMode(!isDarkMode);
 */
