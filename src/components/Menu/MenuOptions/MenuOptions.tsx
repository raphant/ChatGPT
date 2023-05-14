import React from 'react';
import useStore from '@store/store';
import useGStore from '@store/cloud-auth-store';


import Api from './Api';
import Me from './Me';
import AboutMenu from '@components/AboutMenu';
import ImportExportChat from '@components/ImportExportChat';
import SettingsMenu from '@components/SettingsMenu';
import CollapseOptions from './CollapseOptions';
import GoogleSync from '@components/GoogleSync';
import { TotalTokenCostDisplay } from '@components/SettingsMenu/TotalTokenCost';


const MenuOptions = () => {
  const hideMenuOptions = useStore((state) => state.hideMenuOptions);
  const countTotalTokens = useStore((state) => state.countTotalTokens);
  const _googleClientId = useGStore((state) => state.googleClientId);

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || _googleClientId;
  return (
    <>
      <CollapseOptions />
      <div
        className={`${
          hideMenuOptions ? 'max-h-0' : 'max-h-full'
        } overflow-hidden transition-all`}
      >
        {countTotalTokens && <TotalTokenCostDisplay />}
        {googleClientId && <GoogleSync clientId={googleClientId} />}
        <AboutMenu />
        <ImportExportChat />
        <Api />
        <SettingsMenu />
        <Me />
      </div>
    </>
  );
};

export default MenuOptions;
