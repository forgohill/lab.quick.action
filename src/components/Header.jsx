import React from 'react';

import CaptionSmall from './generic/CaptionSmall'
import CaptionLarge from './generic/CaptionLarge'

function Header() {
  return (
    <header className="header">
      <CaptionSmall value='lab.quick.action' />
      <CaptionLarge value='Александр Белов / @forgohill / @marlo' />
    </header>
  );
}

export default Header;
