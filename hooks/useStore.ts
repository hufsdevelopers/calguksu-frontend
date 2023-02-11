import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

export default function useStores() {
  return useContext(MobXProviderContext);
}