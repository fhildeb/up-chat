/**
 * WIP
 *
 * - add EOA checks
 * - add network check
 */

import { useGlobalState } from '../../contexts/GlobalState';
import { useEffect } from 'react';

/**
 * Retrieves the user's Ethereum address and sets
 * it as the address in the global state.
 */
const useGetUserAddress = (): void => {
  const { setUniversalProfileAddress } = useGlobalState();

  // useEffect as external data coming from window request after load.
  useEffect(() => {
    const getUserAddress = async (): Promise<void> => {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setUniversalProfileAddress(accounts[0]);
    };

    // Call function when the component mounts or address changes.
    getUserAddress();
  }, [setUniversalProfileAddress]);
};

export default useGetUserAddress;
