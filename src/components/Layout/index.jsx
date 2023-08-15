import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Classes, Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

export default function Layout() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <div style={{width: '239px'}}>
        <Menu className={Classes.ELEVATION_0}>
          <MenuItem text='Custom SVG icon' />
          <MenuDivider />
          <MenuItem
            icon='new-text-box'
            text='New text box'
          />
          <MenuItem
            icon='new-object'
            text='New object'
          />
          <MenuItem
            icon='new-link'
            text='New link'
          />
          {/* <MenuDivider /> */}
          <MenuItem
            icon='cog'
            text='Settings...'
            active={true}
          />
           <MenuItem text="Submenu">
        <MenuItem text="Child one"/>
        <MenuItem text="Child two" />
        <MenuItem text="Child three" />
    </MenuItem>
        </Menu>
        </div>
        <div style={{width:'calc(100% - 239px)'}}>右侧元素</div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}
