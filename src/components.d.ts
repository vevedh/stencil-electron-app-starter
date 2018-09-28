/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppHeader {}
  interface AppHeaderAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'name': string;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface HeaderPopover {}
  interface HeaderPopoverAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHeader': Components.AppHeader;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'HeaderPopover': Components.HeaderPopover;
  }

  interface StencilIntrinsicElements {
    'app-header': Components.AppHeaderAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'header-popover': Components.HeaderPopoverAttributes;
  }


  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLHeaderPopoverElement extends Components.HeaderPopover, HTMLStencilElement {}
  var HTMLHeaderPopoverElement: {
    prototype: HTMLHeaderPopoverElement;
    new (): HTMLHeaderPopoverElement;
  };

  interface HTMLElementTagNameMap {
    'app-header': HTMLAppHeaderElement
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'header-popover': HTMLHeaderPopoverElement
  }

  interface ElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'header-popover': HTMLHeaderPopoverElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
