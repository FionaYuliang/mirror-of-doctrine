@charset "UTF-8";
/* Counter Widget CSS */
.hfe-counter-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

/* Default alignments that will be overridden by controls */
.hfe-counter-wrapper[style*="flex-direction: column"] {
    align-items: center; /* horizontal alignment for column layouts */
    justify-content: center; /* vertical alignment for column layouts */
}

.hfe-counter-wrapper[style*="flex-direction: row"] {
    justify-content: center; /* horizontal alignment for row layouts */
    align-items: center; /* vertical alignment for row layouts */
}

.hfe-counter-content {
    display: flex;
    align-items: center;
    justify-content: center;
}


.hfe-counter-number {
    font-weight: bold;
    font-size: 48px;
    line-height: 1;
}

.hfe-counter-title {
    font-size: 18px;
    line-height: 1.2;
    margin: 0;
}

.hfe-counter-prefix,
.hfe-counter-suffix {
    font-size: inherit;
    line-height: inherit;
}



/* Title styling - flex enabled for alignment controls */
.hfe-counter-title {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

/* Ensure counter content doesn't shrink */
.hfe-counter-content {
    flex-shrink: 0;
}

/* Equal width distribution for horizontal layouts */
.hfe-counter-wrapper[style*="flex-direction: row"] .hfe-counter-title,
.hfe-counter-wrapper[style*="flex-direction: row"] .hfe-counter-content {
    flex: 1;
    min-width: 0;
}

.hfe-counter-wrapper[style*="flex-direction: row-reverse"] .hfe-counter-title,
.hfe-counter-wrapper[style*="flex-direction: row-reverse"] .hfe-counter-content {
    flex: 1;
    min-width: 0;
}

/* Alternative approach - apply to all potential horizontal layouts */
.hfe-counter-wrapper:not([style*="column"]) .hfe-counter-title,
.hfe-counter-wrapper:not([style*="column"]) .hfe-counter-content {
    flex: 1;
    min-width: 0;
}

/* Ensure counter content maintains flex display in all layouts */
.hfe-counter-content {
    display: flex !important;
    align-items: center;
    justify-content: center;
}


/* Responsive equal width distribution */
@media (max-width: 1024px) {
    .elementor-widget-hfe-counter .hfe-counter-wrapper[style*="row"] .hfe-counter-title,
    .elementor-widget-hfe-counter .hfe-counter-wrapper[style*="row"] .hfe-counter-content {
        flex: 1;
        min-width: 0;
    }
}

@media (max-width: 767px) {
    .elementor-widget-hfe-counter .hfe-counter-wrapper[style*="row"] .hfe-counter-title,
    .elementor-widget-hfe-counter .hfe-counter-wrapper[style*="row"] .hfe-counter-content {
        flex: 1;
        min-width: 0;
    }
}

/* Responsive adjustments */
@media (max-width: 767px) {
    .hfe-counter-number {
        font-size: 36px;
    }
    
    .hfe-counter-title {
        font-size: 16px;
    }
}

/* Navigation Menu CSS */

ul.hfe-nav-menu,
.hfe-nav-menu li,
.hfe-nav-menu ul {
    list-style: none !important;
    margin: 0;
    padding: 0;
}

.hfe-nav-menu li.menu-item {
    position: relative;
}

.hfe-flyout-container .hfe-nav-menu li.menu-item {
    position: relative;
    background: unset;
}

.hfe-nav-menu .sub-menu li.menu-item {
    position: relative;
    background: inherit;
}
.hfe-nav-menu__theme-icon-yes button.sub-menu-toggle {
    display: none;
}

div.hfe-nav-menu,
.elementor-widget-hfe-nav-menu .elementor-widget-container{
    -js-display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

.hfe-nav-menu__layout-horizontal,
.hfe-nav-menu__layout-horizontal .hfe-nav-menu {
    -js-display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
}

.hfe-nav-menu__layout-horizontal .hfe-nav-menu {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.hfe-nav-menu .parent-has-no-child .hfe-menu-toggle {
    display: none;
}

.hfe-nav-menu__layout-horizontal .hfe-nav-menu .sub-menu,
.hfe-submenu-action-hover .hfe-layout-vertical .hfe-nav-menu .sub-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 16;
    visibility: hidden;
    opacity: 0;
    text-align: left;
    -webkit-transition: all 300ms ease-in;
    transition: all 300ms ease-in;
}

.hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children:hover > .sub-menu,
.hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children:focus > .sub-menu {
    visibility: visible;
    opacity: 1;
}

.hfe-submenu-action-click .hfe-nav-menu .menu-item-has-children:hover > .sub-menu,
.hfe-submenu-action-click .hfe-nav-menu .menu-item-has-children:focus > .sub-menu {
    visibility: hidden;
    opacity: 0;
}

.hfe-nav-menu .menu-item-has-children .sub-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
}

.hfe-flyout-container .hfe-nav-menu .menu-item-has-children .menu-item-has-children .sub-menu {
    top: 0;
    left: 0;
}

.hfe-nav-menu .menu-item-has-children .menu-item-has-children .sub-menu {
    top: 0;
    left: 100%;
}

.hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children:hover > .sub-menu,
.hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children.focus > .sub-menu {
    visibility: visible;
    opacity: 1;
    -webkit-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
}

.hfe-nav-menu:before,
.hfe-nav-menu:after {
    content: '';
    display: table;
    clear: both;
}

/* Alignemnt CSS */
.hfe-nav-menu__align-right .hfe-nav-menu {
  margin-left: auto;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          -webkit-justify-content: flex-end;
          -moz-box-pack: end;
          justify-content: flex-end; }

.hfe-nav-menu__align-right .hfe-nav-menu__layout-vertical li a.hfe-menu-item,
.hfe-nav-menu__align-right .hfe-nav-menu__layout-vertical li a.hfe-sub-menu-item {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          -webkit-justify-content: flex-end;
          -moz-box-pack: end;
          justify-content: flex-end; }

.hfe-nav-menu__align-right .hfe-nav-menu__layout-vertical li.hfe-has-submenu .hfe-button-wrapper,
.rtl .hfe-nav-menu__align-left .hfe-nav-menu__layout-vertical li.hfe-has-submenu .hfe-button-wrapper,
.hfe-nav-menu__align-right .hfe-nav-menu__layout-vertical li.hfe-button-wrapper,
.rtl .hfe-nav-menu__align-left .hfe-nav-menu__layout-vertical li.hfe-button-wrapper{
    text-align: right;
}
.hfe-nav-menu__align-left .hfe-nav-menu__layout-vertical li.hfe-has-submenu .hfe-button-wrapper,
.rtl .hfe-nav-menu__align-right .hfe-nav-menu__layout-vertical li.hfe-has-submenu .hfe-button-wrapper,
.hfe-nav-menu__align-left .hfe-nav-menu__layout-vertical li.hfe-button-wrapper,
.rtl .hfe-nav-menu__align-right .hfe-nav-menu__layout-vertical li.hfe-button-wrapper{
    text-align: left;
}
.hfe-nav-menu__align-center .hfe-nav-menu__layout-vertical li.hfe-has-submenu .hfe-button-wrapper,
.hfe-nav-menu__align-center .hfe-nav-menu__layout-vertical li.hfe-button-wrapper{
    text-align: center;
}
.hfe-nav-menu__align-left .hfe-nav-menu {
  margin-right: auto;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          -webkit-justify-content: flex-start;
          -moz-box-pack: start;
          justify-content: flex-start; }

.hfe-nav-menu__align-left .hfe-nav-menu__layout-vertical li a.hfe-menu-item,
.hfe-nav-menu__align-left .hfe-nav-menu__layout-vertical li a.hfe-sub-menu-item {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          -webkit-justify-content: flex-start;
          -moz-box-pack: start;
          justify-content: flex-start; }

.hfe-nav-menu__align-center .hfe-nav-menu {
  margin-left: auto;
  margin-right: auto;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          -webkit-justify-content: center;
          -moz-box-pack: center;
          justify-content: center; }

.hfe-nav-menu__align-center .hfe-nav-menu__layout-vertical li a.hfe-menu-item,
.hfe-nav-menu__align-center .hfe-nav-menu__layout-vertical li a.hfe-sub-menu-item {
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          -webkit-justify-content: center;
          -moz-box-pack: center;
          justify-content: center; }

.hfe-nav-menu__layout-horizontal .hfe-nav-menu {
    -js-display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; 
}
.hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
    width: 100%; 
}
  .hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu li.menu-item {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            -webkit-flex-grow: 1;
            -moz-box-flex: 1;
            flex-grow: 1; }
    .hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu li a.hfe-menu-item {
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              -webkit-justify-content: center;
              -moz-box-pack: center;
              justify-content: center; }

/* Alignment CSS ends */

.hfe-active-menu + nav li:not(:last-child) a.hfe-menu-item,
.hfe-active-menu + nav li:not(:last-child) a.hfe-sub-menu-item {
    border-bottom-width: 0;
}

/*  Horizontal Menu */

.hfe-nav-menu a.hfe-menu-item,
.hfe-nav-menu a.hfe-sub-menu-item {
    line-height: 1;
    text-decoration: none;
    -js-display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}

.hfe-nav-menu a.hfe-menu-item:hover,
.hfe-nav-menu a.hfe-sub-menu-item:hover {
    text-decoration: none;
}

.hfe-nav-menu .sub-menu {
    min-width: 220px;
    margin: 0;
    z-index: 9999;
}

.hfe-nav-menu__layout-horizontal {
    font-size: 0;
}

.hfe-nav-menu__layout-horizontal li.menu-item,
.hfe-nav-menu__layout-horizontal > li.menu-item {
    font-size: medium;
}

.hfe-nav-menu__layout-horizontal .hfe-nav-menu .sub-menu{
    -webkit-box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.1);
}

/* Icons CSS */
.hfe-submenu-icon-arrow .hfe-nav-menu .parent-has-child .sub-arrow i:before {
    content: ''; 
}
.hfe-submenu-icon-classic .hfe-nav-menu .parent-has-child .sub-arrow i:before {
    content: ''; 
}
.hfe-submenu-icon-plus .hfe-nav-menu .parent-has-child .sub-arrow i:before {
    content: '+'; 
}
.hfe-submenu-icon-none .hfe-nav-menu .parent-has-child .sub-arrow {
    display: none; 
}

.hfe-submenu-icon-arrow .hfe-nav-menu .parent-has-child .sub-menu-active .sub-arrow i:before,.hfe-link-redirect-self_link.hfe-submenu-icon-arrow .hfe-nav-menu .parent-has-child .menu-active .sub-arrow i:before {
    content: ''; 
}
.hfe-submenu-icon-plus .hfe-nav-menu .parent-has-child .sub-menu-active .sub-arrow i:before, .hfe-link-redirect-self_link.hfe-submenu-icon-plus .hfe-nav-menu .parent-has-child .menu-active .sub-arrow i:before {
    content: '-'; 
}
.hfe-submenu-icon-classic .hfe-nav-menu .parent-has-child .sub-menu-active .sub-arrow i:before, .hfe-link-redirect-self_link.hfe-submenu-icon-classic .hfe-nav-menu .parent-has-child .menu-active .sub-arrow i:before {
    content: ''; 
}

.rtl .hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children ul a .sub-arrow i:before {
    content: ''; 
}

.rtl .hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children ul a .sub-arrow i:before {
    content: ''; 
}

.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children ul a .sub-arrow i:before {
    content: ''; 
}

.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children ul a .sub-arrow i:before {
    content: ''; 
}
/* Icon CSS ends */

.hfe-nav-menu-icon {
    padding: 0.35em;
    border: 0 solid;
}

.hfe-nav-menu-icon svg {
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: 25px;
}

.hfe-nav-menu-icon i:focus {
    outline: 0;
}

.hfe-has-submenu-container a.hfe-menu-item:focus,
.hfe-has-submenu-container a.hfe-sub-menu-item:focus {
    outline: 0;
}
/* Submenus */

.hfe-nav-menu .menu-item-has-children:focus,
.hfe-nav-menu .menu-item-has-children .sub-menu:focus,
.hfe-nav-menu .menu-item-has-children-container:focus {
    outline: 0;
}
.hfe-nav-menu .menu-item-has-children-container {
    position: relative;
}

.hfe-nav-menu__layout-expandible .sub-menu,
.hfe-nav-menu__layout-vertical .sub-menu,
.hfe-flyout-wrapper .sub-menu {
    position: relative;
    height: 0;
}

.hfe-nav-menu__submenu-arrow .hfe-menu-toggle:before,
.hfe-nav-menu__submenu-plus .hfe-menu-toggle:before,
.hfe-nav-menu__submenu-classic .hfe-menu-toggle:before {
    font-family: 'Font Awesome 5 Free';
    z-index: 1;
    font-size: inherit;
    font-weight: inherit;
    line-height: 0;
}

.hfe-menu-item-center .hfe-nav-menu li a.hfe-menu-item,
.hfe-menu-item-center .hfe-nav-menu li a.hfe-sub-menu-item {
    margin-right: 0px;
}

.hfe-nav-menu__submenu-none .hfe-nav-menu li a.hfe-menu-item,
.hfe-nav-menu__submenu-none .hfe-nav-menu li a.hfe-sub-menu-item {
    margin-right: 0px;
}

.hfe-nav-menu__toggle-icon:before {
    content: '\f0c9';
    font-family: 'fontAwesome';
    z-index: 1;
    font-size: 24px;
    font-weight: inherit;
    font-style: normal;
    line-height: 0;
}

.hfe-active-menu .hfe-nav-menu__toggle-icon:before {
    content: '\f00d';
}

.hfe-nav-menu__layout-expandible {
    -webkit-transition-property: display;
    transition-property: display;
    -webkit-transition-duration: .5s;
    transition-duration: .5s;
    -webkit-transition-timing-function: cubic-bezier( 0, 1, 0.5, 1 );
    transition-timing-function: cubic-bezier( 0, 1, 0.5, 1 );
}

.hfe-nav-menu__layout-expandible {
    visibility: hidden;
    opacity: 0; 
}

.hfe-nav-menu__layout-expandible .sub-menu {
    visibility: hidden;
    opacity: 0; 
}

.hfe-active-menu + .hfe-nav-menu__layout-expandible {
    visibility: visible;
    opacity: 1; 
    height: auto;
}

.hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-expandible,
.hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-horizontal,
.hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-vertical {
    position: absolute;
    top: 100%;
}

.hfe-nav-menu__layout-expandible .menu-item-has-children .menu-item-has-children .sub-menu,
.hfe-nav-menu__layout-vertical .menu-item-has-children .menu-item-has-children .sub-menu {
    top: 0;
    left: 0;
}

.hfe-layout-expandible nav {
    height: 0;
}

.hfe-nav-sub-menu-icon, .hfe-nav-menu__icon {
    display: inline-block;
    line-height: 1;
}

.hfe-nav-menu__toggle {
    -js-display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 22px;
    cursor: pointer;
    border: 0 solid;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color: #494c4f;
    position: relative;
    line-height: 1;
}

.hfe-nav-menu__toggle-icon {
    display: inline-block;
    font-size: inherit;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.hfe-nav-menu .sub-arrow {
    font-size: 14px;
    line-height: 1;
    -js-display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    margin-top: -10px;
    margin-bottom: -10px;
}

.hfe-nav-menu__layout-horizontal .hfe-nav-menu .sub-arrow {
    margin-left: 10px;
}

.hfe-nav-menu__layout-vertical .hfe-nav-menu .sub-arrow,
.hfe-layout-expandible .sub-arrow,
.hfe-flyout-wrapper .sub-arrow
{
    padding: 10px;
}

.hfe-nav-menu .child-item,
.hfe-nav-menu__layout-vertical .hfe-nav-menu .child-item {
    font-size: 14px;
    line-height: 1;
    padding: 10px 0 10px 10px;
    margin-top: -10px;
    margin-bottom: -10px;
    position: absolute;
    right: 0;
    margin-right: 20px;
}

.hfe-layout-horizontal .hfe-nav-menu__toggle,
.hfe-layout-vertical .hfe-nav-menu__toggle {
    visibility: hidden;
    opacity: 0;
    display: none;
}

.hfe-nav-menu-icon {
    display: inline-block;
    line-height: 1;
    text-align: center;
}

.hfe-nav-menu__layout-expandible .saved-content,
.hfe-nav-menu__layout-expandible .sub-menu,
.hfe-nav-menu__layout-expandible .child,
.hfe-nav-menu__layout-vertical .saved-content,
.hfe-nav-menu__layout-vertical .sub-menu,
.hfe-nav-menu__layout-vertical .child,
.hfe-flyout-container .saved-content,
.hfe-flyout-container .sub-menu,
.hfe-flyout-container .child {
    left: 0 !important;
    width: 100% !important; 
}

.hfe-flyout-container .hfe-nav-menu .sub-menu {
    background: unset;
}

.hfe-nav-menu__layout-vertical .hfe-menu-toggle:hover,
.hfe-nav-menu__layout-expandible .hfe-menu-toggle:hover,
.hfe-flyout-wrapper .hfe-menu-toggle:hover {
    border:1px dotted;
}

.hfe-nav-menu__layout-vertical .hfe-menu-toggle,
.hfe-nav-menu__layout-expandible .hfe-menu-toggle,
.hfe-flyout-wrapper .hfe-menu-toggle {
    border:1px dotted transparent;
}

/* Common Animation CSS */

.hfe-nav-menu .menu-item a:before,
.hfe-nav-menu .menu-item a:after {
  display: block;
  position: absolute;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-transition-timing-function: cubic-bezier(0.58, 0.3, 0.005, 1);
          transition-timing-function: cubic-bezier(0.58, 0.3, 0.005, 1); }

.hfe-nav-menu .menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-nav-menu .menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
  opacity: 0; }

.hfe-nav-menu .menu-item a.hfe-menu-item:hover:before,
.hfe-nav-menu .menu-item a.hfe-menu-item:hover:after,
.hfe-nav-menu .menu-item a.hfe-menu-item:focus:before,
.hfe-nav-menu .menu-item a.hfe-menu-item:focus:after,
.hfe-nav-menu .menu-item a.hfe-menu-item.highlighted:before,
.hfe-nav-menu .menu-item a.hfe-menu-item.highlighted:after,
.hfe-nav-menu .current-menu-item:before,
.hfe-nav-menu .current-menu-item:after {
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
}

/* Double Line / Underline / Overline Style */

.hfe-pointer__double-line .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__double-line .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__underline .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__underline .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__overline .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__overline .menu-item.parent a.hfe-menu-item:after {
    height: 3px;
    width: 100%;
    left: 0;
    background-color: #55595c;
    z-index: 2;
}

.hfe-pointer__double-line.hfe-animation__grow .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__double-line.hfe-animation__grow .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__underline.hfe-animation__grow .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__underline.hfe-animation__grow .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__overline.hfe-animation__grow .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__overline.hfe-animation__grow .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
    height: 0;
    width: 0;
    left: 50%;
}

.hfe-pointer__double-line.hfe-animation__drop-out .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__underline.hfe-animation__drop-out .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__overline.hfe-animation__drop-out .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    top: 10px;
}

.hfe-pointer__double-line.hfe-animation__drop-out .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__underline.hfe-animation__drop-out .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__overline.hfe-animation__drop-out .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
    bottom: 10px;
}

.hfe-pointer__double-line.hfe-animation__drop-in .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__underline.hfe-animation__drop-in .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__overline.hfe-animation__drop-in .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    top: -10px;
}

.hfe-pointer__double-line.hfe-animation__drop-in .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__underline.hfe-animation__drop-in .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__overline.hfe-animation__drop-in .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
    bottom: -10px;
}

.hfe-pointer__double-line.hfe-animation__none, .hfe-pointer__double-line.hfe-animation__none .menu-item.parent a.hfe-menu-item, .hfe-pointer__underline.hfe-animation__none, .hfe-pointer__underline.hfe-animation__none .menu-item.parent a.hfe-menu-item, .hfe-pointer__overline.hfe-animation__none, .hfe-pointer__overline.hfe-animation__none .menu-item.parent a.hfe-menu-item {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

.hfe-pointer__double-line.hfe-animation__none:before, .hfe-pointer__double-line.hfe-animation__none:after, .hfe-pointer__double-line.hfe-animation__none:hover, .hfe-pointer__double-line.hfe-animation__none:focus, .hfe-pointer__double-line.hfe-animation__none .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__double-line.hfe-animation__none .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__double-line.hfe-animation__none .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__double-line.hfe-animation__none .menu-item.parent a.hfe-menu-item:focus, .hfe-pointer__underline.hfe-animation__none:before, .hfe-pointer__underline.hfe-animation__none:after, .hfe-pointer__underline.hfe-animation__none:hover, .hfe-pointer__underline.hfe-animation__none:focus, .hfe-pointer__underline.hfe-animation__none .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__underline.hfe-animation__none .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__underline.hfe-animation__none .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__underline.hfe-animation__none .menu-item.parent a.hfe-menu-item:focus, .hfe-pointer__overline.hfe-animation__none:before, .hfe-pointer__overline.hfe-animation__none:after, .hfe-pointer__overline.hfe-animation__none:hover, .hfe-pointer__overline.hfe-animation__none:focus, .hfe-pointer__overline.hfe-animation__none .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__overline.hfe-animation__none .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__overline.hfe-animation__none .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__overline.hfe-animation__none .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

.hfe-pointer__double-line .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__overline .menu-item.parent a.hfe-menu-item:before {
    content: '';
    top: 0;
}

.hfe-pointer__double-line.hfe-animation__slide .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__overline.hfe-animation__slide .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    width: 10px;
    left: -20px;
}

.hfe-pointer__double-line .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__underline .menu-item.parent a.hfe-menu-item:after {
    content: '';
    bottom: 0;
}

.hfe-pointer__double-line.hfe-animation__slide .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__underline.hfe-animation__slide .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
    width: 10px;
    left: -webkit-calc( 100% + 20px);
    left: calc( 100% + 20px);
}


/* Framed Style */

.hfe-pointer__framed .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__framed .menu-item.parent a.hfe-menu-item:after {
    background: transparent;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border: 3px solid #55595c;
}

.hfe-pointer__framed .menu-item.parent a.hfe-menu-item:before {
    content: '';
}

.hfe-pointer__framed.hfe-animation__grow .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    -webkit-transform: scale(0.75);
    -ms-transform: scale(0.75);
    transform: scale(0.75);
}

.hfe-pointer__framed.hfe-animation__shrink .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    -webkit-transform: scale(1.25);
    -ms-transform: scale(1.25);
    transform: scale(1.25);
}

.hfe-pointer__framed.hfe-animation__grow .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__framed.hfe-animation__shrink .menu-item.parent a.hfe-menu-item:before {
    -webkit-transition: opacity 0.2s, -webkit-transform 0.4s;
    transition: opacity 0.2s, -webkit-transform 0.4s;
    transition: opacity 0.2s, transform 0.4s;
    transition: opacity 0.2s, transform 0.4s, -webkit-transform 0.4s;
}

.hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:after {
    width: 3px;
    height: 3px;
}

.hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:before {
    border-width: 0 0 3px 3px;
    -webkit-transition: width 0.1s 0.2s, height 0.1s 0.3s, opacity 0.12s 0.22s;
    transition: width 0.1s 0.2s, height 0.1s 0.3s, opacity 0.12s 0.22s;
}

.hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:after {
    content: '';
    top: initial;
    bottom: 0;
    left: initial;
    right: 0;
    border-width: 3px 3px 0 0;
    -webkit-transition: width 0.1s, height 0.1s 0.1s, opacity 0.02s 0.18s;
    transition: width 0.1s, height 0.1s 0.1s, opacity 0.02s 0.18s;
}

.hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:hover:before, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:hover:after, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:focus:before, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:focus:after, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item.highlighted:before, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item.highlighted:after, .hfe-pointer__framed.hfe-animation__draw .current-menu-item:before, .hfe-pointer__framed.hfe-animation__draw .current-menu-item:after {
    width: 100%;
    height: 100%;
}

.hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:hover:before, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:focus:before, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item.highlighted:before, .hfe-pointer__framed.hfe-animation__draw .current-menu-item:before {
    -webkit-transition: opacity 0.02s, height 0.1s, width 0.1s 0.1s;
    transition: opacity 0.02s, height 0.1s, width 0.1s 0.1s;
}

.hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:hover:after, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item:focus:after, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent a.hfe-menu-item.highlighted:after, .hfe-pointer__framed.hfe-animation__draw .current-menu-item:after {
    -webkit-transition: opacity 0.02s 0.2s, height 0.1s 0.2s, width 0.1s 0.3s;
    transition: opacity 0.02s 0.2s, height 0.1s 0.2s, width 0.1s 0.3s;
}

.hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item:after {
    width: 3px;
    height: 3px;
}

.hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item:before {
    border-width: 3px 0 0 3px;
}

.hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item:after {
    content: '';
    top: initial;
    bottom: 0;
    left: initial;
    right: 0;
    border-width: 0 3px 3px 0;
}

.hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item:hover:before, .hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item:hover:after, .hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item:focus:before, .hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item:focus:after, .hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item.highlighted:before, .hfe-pointer__framed.hfe-animation__corners .menu-item.parent a.hfe-menu-item.highlighted:after, .hfe-pointer__framed.hfe-animation__corners .current-menu-item:before, .hfe-pointer__framed.hfe-animation__corners .current-menu-item:after {
    width: 100%;
    height: 100%;
    -webkit-transition: opacity 0.002s, width 0.4s, height 0.4s;
    transition: opacity 0.002s, width 0.4s, height 0.4s;
}

.hfe-pointer__framed.hfe-animation__none, .hfe-pointer__framed.hfe-animation__none .menu-item.parent a.hfe-menu-item {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

.hfe-pointer__framed.hfe-animation__none:before, .hfe-pointer__framed.hfe-animation__none:after, .hfe-pointer__framed.hfe-animation__none:hover, .hfe-pointer__framed.hfe-animation__none:focus, .hfe-pointer__framed.hfe-animation__none .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__framed.hfe-animation__none .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__framed.hfe-animation__none .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__framed.hfe-animation__none .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

/* Background Style */

.hfe-pointer__background .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__background .menu-item.parent a.hfe-menu-item:after {
    content: '';
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.hfe-pointer__background .menu-item.parent a.hfe-menu-item:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #55595c;
    z-index: -1;
}

.hfe-pointer__background .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__background .menu-item.parent a.hfe-menu-item:focus, .hfe-pointer__background .menu-item.parent a.hfe-menu-item.highlighted, .hfe-pointer__background .current-menu-item {
    color: #fff;
}

.hfe-pointer__background.hfe-animation__grow .menu-item.parent a.hfe-menu-item:before {
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
}

.hfe-pointer__background.hfe-animation__grow .menu-item.parent a.hfe-menu-item:hover:before, .hfe-pointer__background.hfe-animation__grow .menu-item.parent a.hfe-menu-item:focus:before, .hfe-pointer__background.hfe-animation__grow .menu-item.parent a.hfe-menu-item.highlighted:before, .hfe-pointer__background.hfe-animation__grow .current-menu-item:before {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
}

.hfe-pointer__background.hfe-animation__shrink .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.hfe-pointer__background.hfe-animation__shrink .menu-item.parent a.hfe-menu-item:hover:before, .hfe-pointer__background.hfe-animation__shrink .menu-item.parent a.hfe-menu-item:focus:before, .hfe-pointer__background.hfe-animation__shrink .menu-item.parent a.hfe-menu-item.highlighted:before, .hfe-pointer__background.hfe-animation__shrink .current-menu-item:before {
    -webkit-transition: opacity 0.15s, -webkit-transform 0.4s;
    transition: opacity 0.15s, -webkit-transform 0.4s;
    transition: opacity 0.15s, transform 0.4s;
    transition: opacity 0.15s, transform 0.4s, -webkit-transform 0.4s;
}

.hfe-pointer__background.hfe-animation__sweep-left .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    left: 100%;
}

.hfe-pointer__background.hfe-animation__sweep-right .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    right: 100%;
}

.hfe-pointer__background.hfe-animation__sweep-up .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    top: 100%;
}

.hfe-pointer__background.hfe-animation__sweep-down .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    bottom: 100%;
}

.hfe-pointer__background.hfe-animation__shutter-out-vertical .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    bottom: 50%;
    top: 50%;
}

.hfe-pointer__background.hfe-animation__shutter-out-horizontal .menu-item.parent a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    right: 50%;
    left: 50%;
}

.hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #55595c;
    z-index: -1;
}

.hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item:before {
    top: 0;
    bottom: 100%;
}

.hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item:after {
    top: 100%;
    bottom: 0;
}

.hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item:hover:before, .hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item:focus:before, .hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item.highlighted:before, .hfe-pointer__background.hfe-animation__shutter-in-vertical .current-menu-item:before {
    bottom: 50%;
}

.hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item:hover:after, .hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item:focus:after, .hfe-pointer__background.hfe-animation__shutter-in-vertical .menu-item.parent a.hfe-menu-item.highlighted:after, .hfe-pointer__background.hfe-animation__shutter-in-vertical .current-menu-item:after {
    top: 50%;
}

.hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item:before {
    right: 0;
    left: 100%;
}

.hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item:after {
    right: 100%;
    left: 0;
}

.hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item:hover:before, .hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item:focus:before, .hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item.highlighted:before, .hfe-pointer__background.hfe-animation__shutter-in-horizontal .current-menu-item:before {
    left: 50%;
}

.hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item:hover:after, .hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item:focus:after, .hfe-pointer__background.hfe-animation__shutter-in-horizontal .menu-item.parent a.hfe-menu-item.highlighted:after, .hfe-pointer__background.hfe-animation__shutter-in-horizontal .current-menu-item:after {
    right: 50%;
}

.hfe-pointer__background.hfe-animation__none, .hfe-pointer__background.hfe-animation__none .menu-item.parent a.hfe-menu-item {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

.hfe-pointer__background.hfe-animation__none:before, .hfe-pointer__background.hfe-animation__none:after, .hfe-pointer__background.hfe-animation__none:hover, .hfe-pointer__background.hfe-animation__none:focus, .hfe-pointer__background.hfe-animation__none .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__background.hfe-animation__none .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__background.hfe-animation__none .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__background.hfe-animation__none .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

/* Text Style */

.hfe-pointer__text.hfe-animation__skew .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text.hfe-animation__skew .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transform: skew(-8deg);
    -ms-transform: skew(-8deg);
    transform: skew(-8deg);
}

.hfe-pointer__text.hfe-animation__grow .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text.hfe-animation__grow .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
}

.hfe-pointer__text.hfe-animation__shrink .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text.hfe-animation__shrink .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
}

.hfe-pointer__text.hfe-animation__float .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text.hfe-animation__float .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    transform: translateY(-8px);
}

.hfe-pointer__text.hfe-animation__sink .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text.hfe-animation__sink .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transform: translateY(8px);
    -ms-transform: translateY(8px);
    transform: translateY(8px);
}

.hfe-pointer__text.hfe-animation__rotate .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text.hfe-animation__rotate .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transform: rotate(6deg);
    -ms-transform: rotate(6deg);
    transform: rotate(6deg);
}

.hfe-pointer__text.hfe-animation__none, .hfe-pointer__text.hfe-animation__none .menu-item.parent a.hfe-menu-item {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

.hfe-pointer__text.hfe-animation__none:before, .hfe-pointer__text.hfe-animation__none:after, .hfe-pointer__text.hfe-animation__none:hover, .hfe-pointer__text.hfe-animation__none:focus, .hfe-pointer__text.hfe-animation__none .menu-item.parent a.hfe-menu-item:before, .hfe-pointer__text.hfe-animation__none .menu-item.parent a.hfe-menu-item:after, .hfe-pointer__text.hfe-animation__none .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text.hfe-animation__none .menu-item.parent a.hfe-menu-item:focus {
    -webkit-transition-duration: 0s;
    transition-duration: 0s;
}

.hfe-flyout-overlay {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999998;
    background: rgba(0,0,0,.6);
    cursor: pointer;
    -webkit-backface-visibility: hidden;
}

/* No link hover effect to last menu item */

.hfe-pointer__underline .menu-item.parent a.hfe-menu-item.elementor-button:after,
.hfe-pointer__overline .menu-item.parent a.hfe-menu-item.elementor-button:before,
.hfe-pointer__double-line .menu-item.parent a.hfe-menu-item.elementor-button:after,
.hfe-pointer__double-line .menu-item.parent a.hfe-menu-item.elementor-button:before {
    height: 0px;
}

.hfe-pointer__framed .menu-item.parent a.hfe-menu-item.elementor-button:before,
.hfe-pointer__framed .menu-item.parent a.hfe-menu-item.elementor-button:after{
    border-width: 0px;
}

.hfe-pointer__text.hfe-animation__grow .menu-item.parent a.hfe-menu-item.elementor-button:hover,
.hfe-pointer__text.hfe-animation__grow .menu-item.parent a.hfe-menu-item.elementor-button:focus
{
    -webkit-transform: none;
    transform: none;
}

.hfe-flyout-close,
.hfe-flyout-close svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    width: 23px;
    height: 23px;
    line-height: 23px;
    font-size: 23px;
    display: block;
    cursor: pointer;
}

.hfe-flyout-wrapper .hfe-side.hfe-flyout-left {
    top: 0;
    bottom: 0;
    left: -100%;
    right: auto;
    height: 100%;
    /*height: 100vh;*/
    width: 300px;
    max-width: 100%;
    max-width: 100vw;
}

.hfe-flyout-wrapper .hfe-side {
    display: none;
    position: fixed;
    z-index: 999999;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch;
    -webkit-backface-visibility: hidden;
}

.hfe-flyout-wrapper .hfe-side.hfe-flyout-show {
    display: block;
}

.hfe-flyout-content.push {
    color: #ffffff;
}

.hfe-flyout-content ul li {
    color: #ffffff;
}

/* ===========================================================
 *  Flyout Location
 * ======================================================== */

.hfe-flyout-wrapper .hfe-side.hfe-flyout-right {
    top: 0;
    bottom: 0;
    left: auto;
    right: -100%; /* default */
    height: 100%;
    /*height: 100vh;*/
    width: 300px; /* default */
    max-width: 100%;
}

.hfe-flyout-wrapper .hfe-side.hfe-flyout-left {
    top: 0;
    bottom: 0;
    left: -100%; /* default */
    right: auto;
    height: 100%;
    /*height: 100vh;*/
    width: 300px; /* default */
    max-width: 100%;
    max-width: 100vw;
}

.hfe-flyout-wrapper .hfe-side.top {
    top: -100%; /* default */
    bottom: auto;
    left: 0;
    right: 0;
    width: 100%;
    width: 100vw;
    height: 300px; /* default */
    max-height: 100%;
}

.hfe-flyout-wrapper .hfe-side.bottom {
    top: auto;
    bottom: -100%; /* default */
    left: 0;
    right: 0;
    width: 100%;
    width: 100vw;
    height: 300px; /* default */
    max-height: 100%;
}

/* ===========================================================
 *  Flyout Container
 * ======================================================== */

.hfe-flyout-content {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 1.4em;
    color: #fff;
}
/* iOS fix */
@media (max-width:1024px) {
    .hfe-flyout-content {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
}

.hfe-flyout-content::-webkit-scrollbar {
    display: none;
}

.admin-bar .hfe-side {
    margin-top: 32px;
}

/* Dropdown animation CSS */

.hfe-submenu-animation-slide_up .hfe-layout-horizontal .menu-item-has-children > ul.sub-menu {
    -webkit-transform: translateY(20%);
    -ms-transform: translateY(20%);
    transform: translateY(20%);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
}

.hfe-submenu-animation-slide_up .hfe-layout-horizontal .menu-item-has-children:hover > ul.sub-menu {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.hfe-submenu-animation-slide_down .hfe-layout-horizontal .menu-item-has-children > ul.sub-menu {  
    -webkit-transform: translateY(-20%);
    -ms-transform: translateY(-20%);
    transform: translateY(-20%);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
}

.hfe-submenu-animation-slide_down .hfe-layout-horizontal .menu-item-has-children:hover > ul.sub-menu {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
}

.hfe-nav-menu .hfe-has-submenu .sub-menu li.menu-item:first-child,
.hfe-nav-menu .hfe-has-submenu .sub-menu li.menu-item:last-child {
    overflow: visible !important;
}

.elementor-widget-navigation-menu:not(.hfe-nav-menu__align-justify):not(.hfe-menu-item-space-between) a.hfe-menu-item.elementor-button {
    display: inline-flex;
} 

.hfe-nav-menu li.hfe-button-wrapper {
    align-self: center;
}

/* Tablet */
@media only screen and ( max-width: 1024px ) {

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal li,
    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu{
        width: 100%;
        margin-right:0px;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-layout-horizontal .hfe-nav-menu__toggle,
    .hfe-nav-menu__breakpoint-tablet .hfe-layout-vertical .hfe-nav-menu__toggle {
        display: block;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
        visibility: hidden;
        opacity: 0;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-active-menu + .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
        visibility: visible;
        opacity: 1;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal,
    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-vertical {
        visibility: hidden;
        opacity: 0;
        height: 0;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-active-menu + .hfe-nav-menu__layout-horizontal,
    .hfe-nav-menu__breakpoint-tablet .hfe-active-menu + .hfe-nav-menu__layout-vertical {
        visibility: visible;
        opacity: 1;
        height: auto;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
        position: relative;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-horizontal,
    .hfe-nav-menu__breakpoint-tablet .hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-vertical {
        position: absolute;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal .sub-menu {
        visibility: hidden;
        opacity: 0;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal .menu-item-has-children .menu-item-has-children .sub-menu {
        top: 0;
        left: 0;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-layout-horizontal .hfe-nav-menu__toggle,
    .hfe-nav-menu__breakpoint-tablet .hfe-layout-vertical .hfe-nav-menu__toggle
    {
        visibility: visible;
        opacity: 1;
        display: block;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-vertical {
        float: none;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children:hover > .sub-menu,
    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children:hover > .sub-menu,
    .hfe-nav-menu__breakpoint-none .hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children:hover > .sub-menu {
        visibility: hidden;
        opacity: 0;
        -webkit-transition: none;
        transition: none;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-menu-toggle:hover {
        border:1px dotted;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-menu-toggle {
        border:1px dotted transparent;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal .sub-menu {
        position: relative;
        height: 0;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal .sub-menu {
        position: relative;
        height: 0;
        top: 0;
    }

    .hfe-nav-menu__breakpoint-tablet .saved-content,
    .hfe-nav-menu__breakpoint-tablet .sub-menu,
    .hfe-nav-menu__breakpoint-tablet .child {
        left: 0 !important;
        width:auto !important;  
    }

    .hfe-nav-menu .sub-menu {
        min-width: auto;
        margin: 0;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal .hfe-nav-menu .sub-arrow {
        padding: 10px;
    }

    .hfe-nav-menu__breakpoint-tablet.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children ul a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-tablet.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children ul a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-tablet.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-tablet.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-tablet.hfe-submenu-icon-plus .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: '-'; 
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu .sub-menu{
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before,
    .hfe-nav-menu__breakpoint-none.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before,
    .hfe-nav-menu__breakpoint-none.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: ''
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a.hfe-menu-item .sub-arrow i:before,
    .hfe-nav-menu__breakpoint-none.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a.hfe-menu-item .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a.hfe-menu-item .sub-arrow i:before,
    .hfe-nav-menu__breakpoint-none.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a.hfe-menu-item .sub-arrow i:before{
        content: ''
    }

    /* Effect 1: Fade in and scale up */
    .hfe-submenu-animation-slide_up .hfe-layout-horizontal .menu-item-has-children ul.sub-menu,
    .hfe-submenu-animation-slide_up .hfe-layout-horizontal .menu-item-has-children:hover ul.sub-menu,
    .hfe-submenu-animation-slide_down .hfe-layout-horizontal .menu-item-has-children ul.sub-menu,
    .hfe-submenu-animation-slide_down .hfe-layout-horizontal .menu-item-has-children:hover ul.sub-menu {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
    }
    
    /*.hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-horizontal .hfe-nav-menu ul.sub-menu ul.sub-menu li a{
        border-left: 16px solid transparent;
    }*/

    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-tablet .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent a.hfe-menu-item:after,
    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-tablet .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent a.hfe-menu-item:before {
         background-color: unset!important; 
    }

    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-tablet .hfe-pointer__framed .menu-item.parent a.hfe-menu-item:before{
        border: 0px!important;
    }

    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-tablet .hfe-pointer__text .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text  .menu-item.parent a.hfe-menu-item:focus{
        -webkit-transform: none!important;
        -ms-transform: none!important;
        transform: none!important;
    }

    .hfe-nav-menu__breakpoint-tablet.hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu li a.hfe-menu-item,
    .hfe-nav-menu__breakpoint-tablet.hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu li a.hfe-sub-menu-item,
    .hfe-nav-menu__breakpoint-tablet.hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu li.hfe-button-wrapper {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between; 
    }
}

/* Mobile */
@media only screen and ( max-width: 767px ) {

    .hfe-nav-menu__breakpoint-mobile.hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu li a.hfe-menu-item,
    .hfe-nav-menu__breakpoint-mobile.hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu li a.hfe-sub-menu-item 
    .hfe-nav-menu__breakpoint-tablet.hfe-nav-menu__align-justify .hfe-nav-menu__layout-horizontal .hfe-nav-menu li.hfe-button-wrapper { 
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between; 
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-layout-horizontal .hfe-nav-menu__toggle,
    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
        visibility: visible;
        opacity: 1;
        display: block;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal li.menu-item,
    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu {
        width: 100%
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-layout-vertical .hfe-nav-menu__toggle {
        display: inline-block;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal .sub-menu {
        position: relative;
        height: 0;
        top: 0;
    }

    .hfe-nav-menu .sub-menu {
        min-width: auto;
        margin: 0;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children:hover > .sub-menu,
    .hfe-nav-menu__breakpoint-none .hfe-nav-menu__layout-horizontal .hfe-nav-menu .menu-item-has-children:hover > .sub-menu {
        visibility: hidden;
        opacity: 0;
        -webkit-transition: none;
        transition: none;
    }

    .hfe-nav-menu__breakpoint-tablet .hfe-nav-menu__layout-vertical {
        float: none;
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-layout-vertical .hfe-nav-menu__toggle.hfe-active-menu {
        display: block;
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-nav-menu__layout-horizontal,
    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-nav-menu__layout-vertical {
        visibility: hidden;
        opacity: 0;
        height: 0;  
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-layout-horizontal .hfe-nav-menu__toggle,
    .hfe-nav-menu__breakpoint-mobile .hfe-layout-vertical .hfe-nav-menu__toggle
    {
        visibility: visible;
        opacity: 1;
        display: block;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal {
        visibility: hidden;
        opacity: 0;
        height: 0;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-vertical {
        float: none;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal .sub-menu {
        visibility: hidden;
        opacity: 0;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
        visibility: hidden;
        opacity: 0;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-active-menu + .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
        visibility: visible;
        opacity: 1;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal,
    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-vertical {
        visibility: hidden;
        opacity: 0;
        height: 0;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-active-menu + .hfe-nav-menu__layout-horizontal,
    .hfe-nav-menu__breakpoint-mobile .hfe-active-menu + .hfe-nav-menu__layout-vertical {
        visibility: visible;
        opacity: 1;
        height: auto;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
        position: relative;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-horizontal,
    .hfe-nav-menu__breakpoint-mobile .hfe-active-menu.hfe-active-menu-full-width + .hfe-nav-menu__layout-vertical {
        position: absolute;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal .menu-item-has-children .menu-item-has-children .sub-menu {
        top: 0;
        left: 0;
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children ul a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children ul a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-mobile.hfe-submenu-icon-plus .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: '-'; 
    }

    .hfe-nav-menu__breakpoint-none.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-none.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a .sub-arrow i:before{
        content: ''
    }

    .hfe-nav-menu__breakpoint-none.hfe-submenu-icon-arrow .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a.hfe-menu-item .sub-arrow i:before{
        content: ''; 
    }

    .hfe-nav-menu__breakpoint-none.hfe-submenu-icon-classic .hfe-nav-menu__layout-horizontal .menu-item-has-children .sub-menu-active a.hfe-menu-item .sub-arrow i:before{
        content: ''
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-menu-toggle:hover{
        border:1px dotted;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-menu-toggle{
        border:1px dotted transparent;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu .sub-menu{
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    /* Effect 1: Fade in and scale up */
    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-effect-1 .hfe-nav-menu {
        -webkit-transform: scale(0.7);
        -ms-transform: scale(0.7);
        transform: scale(0.7);
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    .hfe-nav-menu__breakpoint-mobile .hfe-nav-menu__layout-horizontal .hfe-nav-menu .sub-arrow {
        padding: 10px;
    }

    .hfe-nav-menu__breakpoint-mobile .menu-is-active.hfe-effect-1 .hfe-nav-menu {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    }

    /* Effect 2: Slide from the right */
    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-effect-2 .hfe-nav-menu {
        -webkit-transform: translateX(20%);
        -ms-transform: translateX(20%);
        transform: translateX(20%);
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
        transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    }

    .hfe-nav-menu__breakpoint-mobile .menu-is-active.hfe-effect-2 .hfe-nav-menu {
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    }

    /* Effect 3: Slide from the bottom */
    .hfe-nav-menu__breakpoint-mobile.hfe-nav-toggle-yes .hfe-effect-3 .hfe-nav-menu {
        -webkit-transform: translateY(20%);
        -ms-transform: translateY(20%);
        transform: translateY(20%);
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    .hfe-nav-menu__breakpoint-mobile .menu-is-active.hfe-effect-3 .hfe-nav-menu {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    }

    .hfe-nav-menu__breakpoint-mobile .saved-content,
    .hfe-nav-menu__breakpoint-mobile .sub-menu,
    .hfe-nav-menu__breakpoint-mobile .child,
    .hfe-nav-menu__breakpoint-tablet .saved-content,
    .hfe-nav-menu__breakpoint-tablet .sub-menu,
    .hfe-nav-menu__breakpoint-tablet .child{
        left: 0 !important;
        width: auto !important; 
    }

    .hfe-submenu-animation-slide_up .hfe-layout-horizontal .menu-item-has-children ul.sub-menu,
    .hfe-submenu-animation-slide_up .hfe-layout-horizontal .menu-item-has-children:hover ul.sub-menu,
    .hfe-submenu-animation-slide_down .hfe-layout-horizontal .menu-item-has-children ul.sub-menu,
    .hfe-submenu-animation-slide_down .hfe-layout-horizontal .menu-item-has-children:hover ul.sub-menu {
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
    }   

    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-tablet .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent a.hfe-menu-item:after,
    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-mobile .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent a.hfe-menu-item:after,
    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-tablet .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent a.hfe-menu-item:before,
    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-mobile .hfe-nav-menu-layout:not(.hfe-pointer__framed) .menu-item.parent a.hfe-menu-item:before {
        background-color: unset!important; 
    }

    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-tablet .hfe-pointer__framed .menu-item.parent a.hfe-menu-item:before,
    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-mobile .hfe-pointer__framed .menu-item.parent a.hfe-menu-item:before{
        border: 0px!important;
    }

    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-tablet .hfe-pointer__text .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text  .menu-item.parent a.hfe-menu-item:focus,
    .elementor-widget-hfe-nav-menu.hfe-nav-menu__breakpoint-mobile .hfe-pointer__text  .menu-item.parent a.hfe-menu-item:hover, .hfe-pointer__text .menu-item.parent a.hfe-menu-item:focus {
        -webkit-transform: none!important;
        -ms-transform: none!important;
        transform: none!important;
    }
}

.hfe-toggle-no .hfe-layout-expandible .hfe-nav-menu__toggle {
    display: none;
}

/* Icon common CSS */

.hfe-icon {
    display: inline-block;
    vertical-align: middle; /* Alignment of icon */
}

/* Icon Svg */
.hfe-icon svg {
    width: 1em;
    height: 1em;
}

/* Menu Cart CSS */

.hfe-cart-menu-wrap-custom {
    display: inline-block;
    line-height: 1;
}

.hfe-cart-menu-wrap-custom .hfe-cart-count, 
.hfe-cart-menu-wrap-custom .hfe-cart-count:after {
    border-color: #75c32c;
    color: #75c32c;
}

.hfe-cart-menu-wrap-custom .hfe-cart-count {
    font-weight: bold;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    min-width: 2.1em;
    min-height: 2.1em;
    font-size: 0.860em;
    line-height: 1.8;
    border-radius: 0.3em 0.3em 0.3em 0.3em;
    border-width: 2px;
    border-style: solid;
    padding: 12px 24px;
}

/* Default skin for cart*/
.hfe-cart-menu-wrap-default {
    display: inline-block;
    line-height: 1;
}

.hfe-cart-menu-wrap-default .hfe-cart-count, 
.hfe-cart-menu-wrap-default .hfe-cart-count:after {
    border-color: #75c32c;
    color: #75c32c;
}

.hfe-cart-menu-wrap-default .hfe-cart-count {
    font-weight: bold;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    min-width: 2.1em;
    min-height: 2.1em;
    font-size: 0.860em;
    line-height: 1.8;
    border-radius: 0em 0em 0.3em 0.3em;
    border-width: 2px;
    border-style: solid;
    padding: 0 .4em;
}

.hfe-cart-menu-wrap-default .hfe-cart-count:after {
    bottom: 100%;
    margin-bottom: 0;
    height: .8em;
    width: .8em;
    left: 50%;
    transform: translateX(-50%);
    top: -.6em;
    content: ' ';
    position: absolute;
    pointer-events: none;
    border-width: 2px;
    border-style: solid;
    border-top-left-radius: 10em;
    border-top-right-radius: 10em;
    border-bottom: 0;
}

.elementor-widget-hfe-cart:not(.hfe-menu-cart--show-subtotal-yes) .hfe-menu-cart__toggle .elementor-button-text {
    display: none; 
}

.elementor-widget-hfe-cart.toggle-icon--bag-light .hfe-menu-cart__toggle .elementor-button-icon i:before {
    content: '\e8e3'; 
}

.elementor-widget-hfe-cart.toggle-icon--bag-medium .hfe-menu-cart__toggle .elementor-button-icon i:before {
    content: '\e8e4'; 
}

.elementor-widget-hfe-cart.toggle-icon--bag-solid .hfe-menu-cart__toggle .elementor-button-icon i:before {
    content: '\e8e5'; 
}

.hfe-menu-cart__toggle .elementor-button {
    background: transparent;
    border-radius: 0;
    color: #818a91;
    border: 1px solid;
    border-color: inherit;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; 
}

.hfe-menu-cart__toggle .elementor-button-text {
    margin-right: 0.3em; 
}

.hfe-menu-cart__toggle .elementor-button-icon {
    position: relative;
    -webkit-transition: color 0.1s;
    -o-transition: color 0.1s;
    transition: color 0.1s; 
}

.hfe-menu-cart--items-indicator-bubble .hfe-menu-cart__toggle .elementor-button-icon[data-counter]:before {
    content: attr(data-counter);
    display: block;
    position: absolute;
    min-width: 1.6em;
    height: 1.6em;
    line-height: 1.5em;
    top: -0.7em;
    right: -0.7em;
    border-radius: 100%;
    color: #fff;
    background-color: #d9534f;
    text-align: center;
    font-size: 10px; 
}

.hfe-menu-cart--items-indicator-plain .hfe-menu-cart__toggle .elementor-button-icon[data-counter]:before {
    content: attr(data-counter);
    display: inline-block;
    font-weight: normal; 
}

.hfe-menu-cart--empty-indicator-hide .hfe-menu-cart__toggle .elementor-button .elementor-button-icon[data-counter="0"]:before {
    content: none;
    display: none; 
}

.hfe-menu-cart__toggle .elementor-button-icon {
    -webkit-box-ordinal-group: 16;
    -webkit-order: 15;
    -ms-flex-order: 15;
    order: 15;
}

.hfe-menu-cart__toggle.hfe-button-wrapper .elementor-button {
    color:#4d4848;
}

/*Search Box CSS*/

.hfe-search-button-wrapper {
    display: block;
    cursor: pointer;
    vertical-align: middle;
    text-align: right;
}

.hfe-search-form__container {
    display: flex;
    overflow: hidden;
}

.hfe-search-form__input {
    flex-basis: 100%;
}

.hfe-search-icon-toggle i.fa-search {
    display: inline-block;
    position: absolute;
    width: 20px;
    box-sizing: content-box;
    padding: 10px;
}

.hfe-search-icon-toggle i:before {
    vertical-align: middle;
}
/*search icon toggle css*/

.hfe-search-button-wrapper input[type=search] {
    border: 0;
    padding: 10px;
    cursor: pointer;
    border-radius: 0;
    transition: all .5s;
    box-sizing: border-box;
    outline: none;
}

.hfe-search-button-wrapper button {
    border: none;
    border-radius: 0;
    padding: 0;
}

.hfe-search-button-wrapper input[type=search]:focus {
    cursor: auto;
    border: none;
    box-shadow: none;
}

.hfe-search-icon-toggle input:-moz-placeholder,
.hfe-search-icon-toggle input::-webkit-input-placeholder {
    color: transparent;
}

.hfe-search-layout-icon .hfe-search-icon-toggle .hfe-search-form__input {
    background-color: unset;
    height: 100%;
}

.hfe-search-button-wrapper.hfe-input-focus {
    display: flex;
}

.hfe-search-form__container .hfe-search-submit {
    min-width: 3%;
    position:relative;
}

.hfe-search-form__container button#clear,
.hfe-search-icon-toggle button#clear {
    visibility: hidden;
    position: absolute;
    right:0; 
    top:0;
    padding: 0 8px;
    font-style: normal;
    user-select: none;
    cursor: pointer;
    bottom:0;
    margin-right:10px;
    background-color: transparent;
}

.hfe-search-button-wrapper input[type="search"]::-webkit-search-decoration,
.hfe-search-button-wrapper input[type="search"]::-webkit-search-cancel-button,
.hfe-search-button-wrapper input[type="search"]::-webkit-search-results-button,
.hfe-search-button-wrapper input[type="search"]::-webkit-search-results-decoration { 
    display: none; 
}

.hfe-search-form__container button#clear-with-button{
    visibility: hidden;
    position: absolute;
    top: 0;
    padding: 0 8px;
    font-style: normal;
    font-size: 1.2em;
    user-select: none;
    cursor: pointer;
    bottom:0;
    background-color: transparent;
}

.hfe-search-button-wrapper, 
.hfe-search-form__container,
.hfe-search-icon-toggle,
.hfe-search-button-wrapper .hfe-search-icon-toggle i,
.hfe-search-button-wrapper .hfe-search-icon-toggle i:before {
    position: relative;
}

.hfe-search-button-wrapper .hfe-search-icon-toggle .hfe-search-form__input {
    position: absolute;
    width: 0;
    right: 0;
    background-color: transparent;
}

.hfe-search-icon-toggle {
    width: 100%!important;
}

.hfe-search-button-wrapper.hfe-input-focus .hfe-search-icon-toggle .hfe-search-form__input{
    position: absolute;
    width: 250px;
    right: 0;
}

.hfe-search-layout-text .hfe-search-form__container,
.hfe-search-layout-icon_text .hfe-search-form__container,
.hfe-search-layout-text .hfe-search-form__container .hfe-search-form__input,
.hfe-search-layout-icon_text .hfe-search-form__container .hfe-search-form__input {
    width: 100%;
}

.hfe-search-icon-toggle {
    line-height: 1.5;
}

/*-------Navigation menu active parent---------*/
.hfe-pointer__double-line.hfe-animation__slide .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after,.hfe-pointer__double-line.hfe-animation__slide .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__underline.hfe-animation__slide .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after,
 .hfe-pointer__overline.hfe-animation__slide .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__overline.hfe-animation__fade .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before  {
    width: 100%;
    left: 0;
    opacity:1;
}

.hfe-pointer__double-line.hfe-animation__drop-out .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__underline.hfe-animation__drop-out .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__overline.hfe-animation__drop-out .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after,.hfe-pointer__double-line.hfe-animation__drop-in .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__underline.hfe-animation__drop-in .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__overline.hfe-animation__drop-in .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
    bottom: 0px;
    opacity:1;
}
.hfe-pointer__double-line.hfe-animation__drop-out .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__underline.hfe-animation__drop-out .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__overline.hfe-animation__drop-out .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__double-line.hfe-animation__drop-in .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__underline.hfe-animation__drop-in .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__overline.hfe-animation__drop-in .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    top: 0px;
    opacity: 1;
}

.hfe-pointer__double-line.hfe-animation__grow .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__double-line.hfe-animation__grow .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__underline.hfe-animation__grow .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__underline.hfe-animation__grow .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__overline.hfe-animation__grow .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__overline.hfe-animation__grow .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
    height: 3px;
    width: 100%;
    left: 0;
    opacity: 1;
}

.hfe-pointer__framed.hfe-animation__grow .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__framed.hfe-animation__shrink .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.hfe-pointer__framed.hfe-animation__fade .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__framed.hfe-animation__draw .menu-item.parent.current-menu-item a.hfe-menu-item:before, .hfe-pointer__underline.hfe-animation__fade .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after, .hfe-pointer__double-line.hfe-animation__fade .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, .hfe-pointer__double-line.hfe-animation__fade .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
    opacity:1;
}

.hfe-pointer__framed.hfe-animation__corners .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, 
.hfe-pointer__framed.hfe-animation__corners .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after,
.hfe-pointer__framed.hfe-animation__draw .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):before, 
.hfe-pointer__framed.hfe-animation__draw .menu-item.parent.current-menu-item a.hfe-menu-item:not(:hover):not(:focus):not(.current-menu-item):not(.highlighted):after {
    border-width:3px;
    width:100%;
    opacity:1;
    height:100%;
}

/* Scroll to top CSS */
.hfe-scroll-to-top-wrap.hfe-scroll-to-top-hide {
    display: none;
}

.hfe-scroll-to-top-wrap.edit-mode,
.hfe-scroll-to-top-wrap.single-page-off {
    display: none !important;
}

.hfe-scroll-to-top-button {
    position:fixed;
    right:15px;
    bottom:15px;
    z-index:9999;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -webkit-align-items:center;
    align-items:center;
    -ms-flex-align:center;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    -webkit-justify-content:center;
    justify-content:center;
    width:50px;
    height:50px;
    border-radius:50px;
    background-color:#000000;
    color:#fff;
    text-align:center;
    opacity:1;
    cursor:pointer;
    -webkit-transition:all .3s;
    transition:all .3s;
}

.hfe-scroll-to-top-button i {
    color:#fff;
    font-size:16px;
}
/* Breadcrumbs CSS */

ul.hfe-breadcrumbs {
    display:block;
    margin:0;
    padding:0;
    list-style:none
}

ul.hfe-breadcrumbs li {
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
}

ul.hfe-breadcrumbs li:last-child {
    margin:0;
}

ul.hfe-breadcrumbs li a,
ul.hfe-breadcrumbs li span.hfe-breadcrumbs-separator-icon,
ul.hfe-breadcrumbs li span.hfe-breadcrumbs-text{
    display:block;
}

ul.hfe-breadcrumbs li span.hfe-breadcrumbs-text{
    -webkit-transition:all .4s;
    transition:all .4s;
}

span.hfe-breadcrumbs-home-icon{
    margin-right:10px;
    align-content: center;
}

.hfe-breadcrumbs-first a {
    align-content: center;
}

.hfe-breadcrumbs-separator-icon i, 
.hfe-breadcrumbs-separator-icon svg,
.hfe-breadcrumbs-home-icon i,
.hfe-breadcrumbs-home-icon svg {
    width: 1em;
    height: 1em;
    position: relative;
    display: block;
}

ul.hfe-breadcrumbs-show-home li.hfe-breadcrumbs-first {
    display: inline-flex;
}

/* Post Info CSS */

ul.hfe-post-info-items {
    list-style: none;
    margin: 0;
    padding: 0;
}

ul.hfe-post-info-inline.hfe-post-info-items {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

li.hfe-post-info-item {
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

li.hfe-post-info-item,
li.hfe-post-info-item > a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -ms-flex-align: center;
}

.hfe-post-info-inline.hfe-post-info-items .hfe-post-info-item {
    margin-right: 8px;
    margin-left: 8px;
}

.hfe-post-info-inline .hfe-post-info-item:not(:last-child):after {
    position: relative;
    right: -8px;
}

.hfe-post-info-inline.hfe-post-info-items {
    margin-right: -8px;
    margin-left: -8px;
}

.hfe-post-info-icon svg {
    display: block;
}

.hfe-post-info-layout-traditional .hfe-post-info-item:not(:last-child):after {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
}

.hfe-post-info-layout-traditional .hfe-post-info-item:not(:last-child) {
    position: relative;
}


/* Info Card CSS */
.hfe-icon-wrap .hfe-icon svg {
    height: 100%;
    width: 100%;
}
body .elementor .hfe-button-wrapper a {
    text-decoration: none;
}
.hfe-button-wrapper {
    border-radius: 3px;
}


.hfe-reading-progress-bar{
    height: 4px;
}

/* Basic Posts Widget CSS - Only essential structure, no styling */
.hfe-posts-grid {
    display: grid;
}

.hfe-post-image img {
    width: 100%;
    height: auto;
    display: block;
}

.hfe-post-title a {
    text-decoration: none;
}
.hfe-post-title {
    margin-top: 0px;
}
.hfe-read-more {
    text-decoration: none;
}
.hfe-post-meta {
    font-size: 12px;
    line-height: 1.3em;
}
.hfe-post-title {
    font-size: 20px;
}
.jeg-elementor-kit.jkit-accordion{counter-reset:jkitNumber}.jeg-elementor-kit.jkit-accordion .card-wrapper{background-color:transparent;border:0;border-radius:0}.jeg-elementor-kit.jkit-accordion .card-wrapper:not(:last-child){margin-bottom:10px}.jeg-elementor-kit.jkit-accordion .card-wrapper.expand .card-header .card-header-button .left-icon-group .normal-icon,.jeg-elementor-kit.jkit-accordion .card-wrapper.expand .card-header .card-header-button .right-icon-group .normal-icon{display:none}.jeg-elementor-kit.jkit-accordion .card-wrapper.expand .card-header .card-header-button .left-icon-group .active-icon,.jeg-elementor-kit.jkit-accordion .card-wrapper.expand .card-header .card-header-button .right-icon-group .active-icon{display:block}.jeg-elementor-kit.jkit-accordion .card-wrapper.expand .card-header.background-gradient::after{opacity:1}.jeg-elementor-kit.jkit-accordion .card-wrapper.background-gradient{overflow:hidden;position:relative}.jeg-elementor-kit.jkit-accordion .card-wrapper.background-gradient>*{position:relative;background-color:transparent;z-index:1}.jeg-elementor-kit.jkit-accordion .card-wrapper.background-gradient:after,.jeg-elementor-kit.jkit-accordion .card-wrapper.background-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-accordion .card-wrapper.background-gradient::after{opacity:0}.jeg-elementor-kit.jkit-accordion .card-wrapper.background-gradient.expand::after{opacity:1}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header{cursor:pointer}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button{display:-webkit-box;display:-ms-flexbox;display:flex;color:var(--jkit-txt-color);background-color:var(--jkit-element-lighten-bg-color);font-weight:700;padding:14px 30px;border:1px solid transparent;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button .number:before{counter-increment:jkitNumber;content:counter(jkitNumber) ". "}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button .title{padding-right:10px;display:inline-block}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button .left-icon-group{padding-right:26px;float:left}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button .right-icon-group{position:absolute;right:0;margin-right:30px}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button .left-icon-group .normal-icon,.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button .right-icon-group .normal-icon{display:block}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button .left-icon-group .active-icon,.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header .card-header-button .right-icon-group .active-icon{display:none}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header.background-gradient{overflow:hidden;position:relative}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header.background-gradient a.card-header-button{position:relative;background-color:transparent;z-index:1}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header.background-gradient:after,.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header.background-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-accordion .card-wrapper .card-header.background-gradient:after{opacity:0}.jeg-elementor-kit.jkit-accordion .card-expand .card-body{padding:30px 85px 30px 65px}.jeg-elementor-kit.jkit-accordion.style-curve .card-wrapper .card-header .card-header-button{position:relative;border:0;padding-left:70px;background-color:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-accordion.style-curve .card-wrapper .card-header .card-header-button:before{position:absolute;content:"";top:0;left:0;height:100%;width:35px;background-color:rgba(255,255,255,.2);text-align:right;line-height:55px}.jeg-elementor-kit.jkit-accordion.style-curve .card-wrapper .card-header .card-header-button:after{position:absolute;content:"";left:35px;top:0;border-top:26.5px solid transparent;border-right:26.5px solid transparent;border-left:26.5px solid rgba(255,255,255,.2);border-bottom:26.5px solid transparent}.jeg-elementor-kit.jkit-accordion.style-curve .card-wrapper .card-header .card-header-button .left-icon-group{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:2}.jeg-elementor-kit.jkit-accordion.style-box .card-wrapper .card-header .card-header-button{border:1px solid var(--jkit-border-color);border-bottom:1px solid var(--jkit-element-bg-color);background-color:var(--jkit-bg-color);position:relative;padding-left:85px}.jeg-elementor-kit.jkit-accordion.style-box .card-wrapper .card-header .card-header-button:before{position:absolute;top:-1px;left:-1px;content:"";height:calc(100% + 2px);width:55px;text-align:center;line-height:55px;color:var(--jkit-bg-color);background-color:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-accordion.style-box .card-wrapper .card-header .card-header-button .left-icon-group{position:absolute;left:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.jeg-elementor-kit.jkit-accordion.style-shadow .card-wrapper .card-header .card-header-button{-webkit-box-shadow:-1.216px 6.894px 15px 0 rgba(37,117,252,.2);-o-box-shadow:-1.216px 6.894px 15px 0 rgba(37,117,252,.2);box-shadow:-1.216px 6.894px 15px 0 rgba(37,117,252,.2);border-radius:0 0 5px 5px;background-color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-animated-text{-webkit-transition:all .3s ease;transition:all .3s ease}.jeg-elementor-kit.jkit-animated-text a{text-decoration:none;color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-animated-text .animated-text{all:unset;padding:0;margin:0;display:inline-block}.jeg-elementor-kit.jkit-animated-text .animated-text .normal-text{z-index:1;position:relative;vertical-align:bottom;font-size:43px;font-weight:500;line-height:1.2}.jeg-elementor-kit.jkit-animated-text .animated-text .normal-text.style-gradient{background:var(--jkit-element-darken-bg-color);background:-webkit-gradient(linear,left top,left bottom,from(var(--jkit-element-lighten-bg-color)),to(var(--jkit-element-darken-bg-color)));background:linear-gradient(180deg,var(--jkit-element-lighten-bg-color) 0,var(--jkit-element-darken-bg-color) 100%);-moz-text-fill-color:transparent;-o-text-fill-color:transparent;-webkit-text-fill-color:transparent;background-clip:text;-webkit-background-clip:text}.jeg-elementor-kit.jkit-animated-text .animated-text .dynamic-wrapper{overflow:visible;text-align:inherit;display:inline-block;position:relative;vertical-align:bottom}.jeg-elementor-kit.jkit-animated-text .animated-text .dynamic-wrapper.style-gradient .dynamic-text{background:var(--jkit-element-darken-bg-color);background:-webkit-gradient(linear,left top,left bottom,from(var(--jkit-element-lighten-bg-color)),to(var(--jkit-element-darken-bg-color)));background:linear-gradient(180deg,var(--jkit-element-lighten-bg-color) 0,var(--jkit-element-darken-bg-color) 100%);-moz-text-fill-color:transparent;-o-text-fill-color:transparent;-webkit-text-fill-color:transparent;background-clip:text;-webkit-background-clip:text}.jeg-elementor-kit.jkit-animated-text .animated-text .dynamic-wrapper.style-gradient .dynamic-text .dynamic-text-letter{background:var(--jkit-element-darken-bg-color);background:-webkit-gradient(linear,left top,left bottom,from(var(--jkit-element-lighten-bg-color)),to(var(--jkit-element-darken-bg-color)));background:linear-gradient(180deg,var(--jkit-element-lighten-bg-color) 0,var(--jkit-element-darken-bg-color) 100%);-moz-text-fill-color:transparent;-o-text-fill-color:transparent;-webkit-text-fill-color:transparent;background-clip:text;-webkit-background-clip:text}.jeg-elementor-kit.jkit-animated-text .animated-text .dynamic-text{display:inline-block;position:relative;top:0;left:0;z-index:1;font-size:43px;font-weight:500;line-height:1.2}.jeg-elementor-kit.jkit-animated-text .animated-text svg{position:absolute;left:0;overflow:visible}.jeg-elementor-kit.jkit-animated-text .animated-text svg path{fill:none;stroke-dasharray:1500;-webkit-animation:jkit-animated-dash 10s infinite;animation:jkit-animated-dash 10s infinite}.jeg-elementor-kit.jkit-animated-text .animated-text svg path.style-color{stroke:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-animated-text .animated-text svg path:nth-of-type(2){-webkit-animation-delay:.3s;animation-delay:.3s}.jeg-elementor-kit.jkit-animated-text .animated-text svg linearGradient stop:nth-of-type(1){stop-color:var(--jkit-element-lighten-bg-color)}.jeg-elementor-kit.jkit-animated-text .animated-text svg linearGradient stop:nth-of-type(2){stop-color:var(--jkit-element-darken-bg-color)}.jeg-elementor-kit.jkit-animated-text[data-shape=strikethrough] .animated-text svg{top:50%;width:100%;height:100%}.jeg-elementor-kit.jkit-animated-text[data-shape=diagonal] .animated-text svg,.jeg-elementor-kit.jkit-animated-text[data-shape=double] .animated-text svg,.jeg-elementor-kit.jkit-animated-text[data-shape=x] .animated-text svg{top:0;width:100%;height:100%}.jeg-elementor-kit.jkit-animated-text[data-shape=curly] .animated-text svg,.jeg-elementor-kit.jkit-animated-text[data-shape=double-underline] .animated-text svg,.jeg-elementor-kit.jkit-animated-text[data-shape=underline-zigzag] .animated-text svg,.jeg-elementor-kit.jkit-animated-text[data-shape=underline] .animated-text svg{top:90%;width:100%;height:100%}.jeg-elementor-kit.jkit-animated-text[data-shape=circle] .animated-text svg{top:0;width:calc(100% + 20px);height:calc(100% + 20px);-webkit-transform:translate(-10px,-10px);transform:translate(-10px,-10px)}.jeg-elementor-kit.jkit-animated-text[data-style=rotating] .animated-text .dynamic-text:not(.show-text){visibility:hidden;opacity:0;display:none}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=typing] .animated-text .dynamic-wrapper:after{content:"";position:absolute;left:auto;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:90%;width:1px;background-color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=typing] .animated-text .dynamic-wrapper.cursor-blink:after{-webkit-animation:jkit-animated-pulse 1s infinite;animation:jkit-animated-pulse 1s infinite}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=typing] .animated-text .dynamic-wrapper.typing-delete{background:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=typing] .animated-text .dynamic-wrapper.typing-delete.style-gradient .dynamic-text{color:var(--jkit-txt-m-color);background:0 0;background-clip:border-box;-webkit-background-clip:border-box;-moz-text-fill-color:unset;-o-text-fill-color:unset;-webkit-text-fill-color:unset}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=typing] .animated-text .dynamic-wrapper.typing-delete.style-gradient .dynamic-text .dynamic-text-letter{background:0 0;background-clip:border-box;-webkit-background-clip:border-box;-webkit-background-clip:border-box;-moz-text-fill-color:unset;-o-text-fill-color:unset;-webkit-text-fill-color:unset}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=typing] .animated-text .dynamic-wrapper.typing-delete .dynamic-text .dynamic-text-letter{color:var(--jkit-txt-m-color)}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=typing] .animated-text .dynamic-text-letter:not(.show-letter){display:none}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=swirl] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=swirl] .animated-text .dynamic-text-letter{display:inline-block;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(-20px) rotateX(90deg);transform:translateZ(-20px) rotateX(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=swirl] .animated-text .dynamic-text-letter.show-letter{-webkit-animation:jkit-animated-swirl-in .4s forwards;animation:jkit-animated-swirl-in .4s forwards}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=blinds]{-webkit-transition:width .3s ease;transition:width .3s ease}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=blinds] .animated-text .dynamic-text-letter{-webkit-transform:rotateY(180deg);transform:rotateY(180deg);display:inline-block;-webkit-backface-visibility:hidden;backface-visibility:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=blinds] .animated-text .dynamic-text-letter.show-letter{-webkit-animation:jkit-animated-blinds-in .6s forwards;animation:jkit-animated-blinds-in .6s forwards}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=wave]{-webkit-transition:width .3s ease;transition:width .3s ease}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=wave] .animated-text .dynamic-text-letter{-webkit-transform:scale(0);transform:scale(0);display:inline-block;-webkit-backface-visibility:hidden;backface-visibility:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=wave] .animated-text .dynamic-text-letter.show-letter{-webkit-animation:jkit-animated-wave-up .3s forwards;animation:jkit-animated-wave-up .3s forwards}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=flip] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=flip] .animated-text .dynamic-text{-webkit-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=flip] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-animation:jkit-animated-flip-in 1.2s;animation:jkit-animated-flip-in 1.2s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=flip] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);-webkit-animation:jkit-animated-flip-out 1.2s;animation:jkit-animated-flip-out 1.2s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=drop-in] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;-webkit-perspective:300px;perspective:300px;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=drop-in] .animated-text .dynamic-text{position:relative}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=drop-in] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-animation:jkit-animated-drop-in-in .6s;animation:jkit-animated-drop-in-in .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=drop-in] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-animation:jkit-animated-drop-in-out .6s;animation:jkit-animated-drop-in-out .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-left] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-left] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-animation:jkit-animated-slide-left-in .6s;animation:jkit-animated-slide-left-in .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-left] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-animation:jkit-animated-slide-left-out .6s;animation:jkit-animated-slide-left-out .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-right] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-right] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-animation:jkit-animated-slide-right-in .6s;animation:jkit-animated-slide-right-in .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-right] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-animation:jkit-animated-slide-right-out .6s;animation:jkit-animated-slide-right-out .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-up] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-up] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-animation:jkit-animated-slide-up-in .6s;animation:jkit-animated-slide-up-in .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-up] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-animation:jkit-animated-slide-up-out .6s;animation:jkit-animated-slide-up-out .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-down] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-down] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-animation:jkit-animated-slide-down-in .6s;animation:jkit-animated-slide-down-in .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=slide-down] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-animation:jkit-animated-slide-down-out .6s;animation:jkit-animated-slide-down-out .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=bounce] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=bounce] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-animation:jkit-animated-bounce-in .6s;animation:jkit-animated-bounce-in .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=bounce] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-animation:jkit-animated-bounce-out .6s;animation:jkit-animated-bounce-out .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=swing] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=swing] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-animation:jkit-animated-swing-in .6s;animation:jkit-animated-swing-in .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=swing] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-animation:jkit-animated-swing-out .6s;animation:jkit-animated-swing-out .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=rubber-band] .animated-text .dynamic-wrapper{-webkit-transition:width .3s ease;transition:width .3s ease;overflow:hidden}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=rubber-band] .animated-text .dynamic-text.show-text{position:relative;white-space:nowrap;-webkit-animation:jkit-animated-rubber-band-in .6s;animation:jkit-animated-rubber-band-in .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=rubber-band] .animated-text .dynamic-text:not(.show-text){display:inline-block;position:absolute;visibility:visible;-webkit-animation:jkit-animated-rubber-band-out .6s;animation:jkit-animated-rubber-band-out .6s}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=clip] .animated-text .dynamic-wrapper{overflow:hidden;text-align:left}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=clip] .animated-text .dynamic-wrapper:after{content:"";position:absolute;left:auto;right:0;top:0;height:100%;width:2px;background-color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-animated-text[data-style=rotating][data-rotate=clip] .animated-text .dynamic-text.show-text{white-space:nowrap}.jeg-elementor-kit.jkit-banner .jkit-banner-wrapper .jkit-banner-image{position:absolute;top:0;bottom:0;left:0;right:0}.jeg-elementor-kit.jkit-banner .jkit-banner-wrapper .jkit-banner-image::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0}.jeg-elementor-kit.jkit-banner .jkit-banner-wrapper .jkit-banner-content{position:relative;height:400px;max-width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;margin:auto;padding:30px 70px}.jeg-elementor-kit.jkit-banner .jkit-banner-wrapper .jkit-banner-box-sale{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jeg-elementor-kit.jkit-banner .jkit-banner-wrapper .jkit-banner-all-link{position:absolute;top:0;right:0;bottom:0;left:0}.jeg-elementor-kit.jkit-button .jkit-button-wrapper{border-radius:5px;font-size:15px;padding:15px 30px;display:inline-block;color:var(--jkit-txt-alt-color);position:relative;display:inline-block;line-height:1;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;vertical-align:middle;text-align:center;background-color:var(--jkit-btn-bg-color);-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-button .jkit-button-wrapper:hover{background-color:var(--jkit-btn-bg-hover-color)}.jeg-elementor-kit.jkit-button .jkit-button-wrapper i,.jeg-elementor-kit.jkit-button .jkit-button-wrapper svg{display:inline-block;vertical-align:middle}.jeg-elementor-kit.jkit-button .jkit-button-wrapper i.icon-colored,.jeg-elementor-kit.jkit-button .jkit-button-wrapper svg.icon-colored{-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-button .jkit-button-wrapper svg{fill:var(--jkit-txt-alt-color);-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-button .jkit-button-wrapper.hover-gradient{overflow:hidden}.jeg-elementor-kit.jkit-button .jkit-button-wrapper.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-button .jkit-button-wrapper.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-button .jkit-button-wrapper.hover-gradient:hover:before{opacity:1}.jeg-elementor-kit.jkit-categorylist .category-list-item a{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all .4s ease;transition:all .4s ease;position:relative;color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-categorylist .category-list-item a:hover{color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-categorylist .category-list-item a:hover svg{fill:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-categorylist .category-list-item a .jkit-categorylist-content{z-index:2;display:block;margin-bottom:0}.jeg-elementor-kit.jkit-categorylist .category-list-item a .icon-list{text-align:center}.jeg-elementor-kit.jkit-categorylist .category-list-item a svg{fill:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-categorylist.layout-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.jeg-elementor-kit.jkit-client-logo{position:relative;display:inline-block;overflow:hidden;width:100%}.jeg-elementor-kit.jkit-client-logo .client-list{position:relative;z-index:1}.jeg-elementor-kit.jkit-client-logo .client-track .image-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:center;overflow:hidden}.jeg-elementor-kit.jkit-client-logo .client-track .image-list:hover .content-image .hover-image{opacity:1;-webkit-transition:opacity .25s ease-in-out 0s;transition:opacity .25s ease-in-out 0s}.jeg-elementor-kit.jkit-client-logo .client-track .content-image{position:relative;line-height:0;width:100%}.jeg-elementor-kit.jkit-client-logo .client-track .content-image .main-image{height:auto;width:100%}.jeg-elementor-kit.jkit-client-logo .client-track .content-image .hover-image{position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);opacity:0;height:auto;width:100%}.jeg-elementor-kit.jkit-client-logo .client-track .client-slider.hover-enable:hover .content-image .main-image{opacity:0;visibility:hidden;-webkit-transition:all .25s ease;transition:all .25s ease}.jeg-elementor-kit.jkit-client-logo .client-track:not(.tns-slider) .client-slider{margin-right:10px}.jeg-elementor-kit.jkit-client-logo .tns-nav{text-align:center}.jeg-elementor-kit.jkit-client-logo .tns-nav button{width:9px;height:9px;padding:0;margin:0 5px;border-radius:50%;background:var(--jkit-txt-m-color);border:0}.jeg-elementor-kit.jkit-client-logo .tns-nav button.tns-nav-active{background:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-client-logo .tns-horizontal.tns-subpixel>.tns-item{vertical-align:middle}.jeg-elementor-kit.jkit-client-logo .tns-controls button{color:var(--jkit-txt-color);border:0;background:0 0}.jeg-elementor-kit.jkit-client-logo .tns-controls button span{display:inline-block;position:relative}.jeg-elementor-kit.jkit-client-logo .tns-controls button span.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-client-logo .tns-controls button:hover span.hover-gradient:before{opacity:1}.jeg-elementor-kit.jkit-client-logo .tns-controls button i,.jeg-elementor-kit.jkit-client-logo .tns-controls button svg{position:relative;-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-client-logo.arrow-bottom-middle .tns-controls{text-align:center}.jeg-elementor-kit.jkit-client-logo.arrow-bottom-middle .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-client-logo.arrow-bottom-middle .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-client-logo.arrow-bottom-edge .tns-controls button[data-controls=next]{display:inline-block;position:absolute;right:0}.jeg-elementor-kit.jkit-client-logo.arrow-middle-edge .tns-controls button{display:inline-block;position:absolute;top:50%;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);z-index:2}.jeg-elementor-kit.jkit-client-logo.arrow-middle-edge .tns-controls button[data-controls=prev]{left:0}.jeg-elementor-kit.jkit-client-logo.arrow-middle-edge .tns-controls button[data-controls=next]{right:0}.jeg-elementor-kit.jkit-client-logo.arrow-top-right .tns-controls{text-align:right}.jeg-elementor-kit.jkit-client-logo.arrow-top-right .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-client-logo.arrow-top-right .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-client-logo.arrow-top-left .tns-controls{text-align:left}.jeg-elementor-kit.jkit-client-logo.arrow-top-left .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-client-logo.arrow-top-left .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-contact-form-7:before{content:unset}.jeg-elementor-kit.jkit-contact-form-7 form label{color:var(--jkit-form-txt-color);width:100%;max-width:380px}.jeg-elementor-kit.jkit-contact-form-7 form label span{pointer-events:none;color:var(--jkit-txt-m-color);font-size:.8125rem;display:block}.jeg-elementor-kit.jkit-contact-form-7 form input:not([type=submit]):not([type=checkbox]):not([type=radio]),.jeg-elementor-kit.jkit-contact-form-7 form select,.jeg-elementor-kit.jkit-contact-form-7 form textarea{border:1px solid var(--jkit-form-border-color);margin-bottom:20px}.jeg-elementor-kit.jkit-contact-form-7 form input[type=submit]{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:0;padding:12px 72px;font-size:.9375rem;background-color:var(--jkit-btn-bg-color);border:0;color:#fff;cursor:pointer;margin-bottom:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all .5s ease;transition:all .5s ease}.jeg-elementor-kit.jkit-contact-form-7 form input[type=submit]:hover{background-color:var(--jkit-btn-bg-hover-color)}.jeg-elementor-kit.jkit-countdown{position:relative;z-index:10;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.jeg-elementor-kit.jkit-countdown.separator-enable .timer-container:not(:last-child) .timer-inner-container::after{position:absolute;left:100%;z-index:1;color:var(--jkit-form-txt-color);font-size:45px}.jeg-elementor-kit.jkit-countdown .timer-container{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.jeg-elementor-kit.jkit-countdown .timer-inner-container{position:relative;margin:auto;margin-bottom:0;width:150px;height:150px;background:var(--jkit-element-bg-color);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jeg-elementor-kit.jkit-countdown .timer-content{width:100%}.jeg-elementor-kit.jkit-countdown .timer-content>span{display:block;color:#fff;line-height:1}.jeg-elementor-kit.jkit-countdown .timer-content.label-inline>span{display:inline-block}.jeg-elementor-kit.jkit-countdown .timer-content .timer-count{font-size:36px;font-weight:700;margin-top:14px;margin-bottom:14px}.jeg-elementor-kit.jkit-countdown .timer-content .timer-count.timer-loading{opacity:0;visibility:hidden}.jeg-elementor-kit.jkit-countdown .timer-content .timer-title{font-size:14px;letter-spacing:2.5px}.jeg-elementor-kit.jkit-countdown .expire-message .expire-title{font-size:24px;font-weight:600;margin-bottom:12px;display:block}.jeg-elementor-kit.jkit-countdown .expire-message .expire-content{display:block}.jeg-elementor-kit.jkit-dual-button{-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:480px){.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper{display:block}}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-btn{cursor:pointer;display:inline-block;font-size:14px;font-weight:700;outline:0;position:relative;-webkit-transition:all .4s ease;transition:all .4s ease;text-align:center;overflow:hidden;color:var(--jkit-txt-alt-color);width:100%;padding:20px;z-index:1}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-btn svg{fill:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-btn.hover-gradient{overflow:hidden}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-btn.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-btn.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-btn.hover-gradient:hover:before{opacity:1}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-button-one{background:var(--jkit-btn-bg-color)}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-button-two{background:var(--jkit-form-txt-color)}.jeg-elementor-kit.jkit-dual-button .jkit-dual-button-wrapper .jkit-dual-button-middle-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:100%;position:relative;background:#fafaf8;color:#444;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:14px;z-index:5}.jeg-elementor-kit.jkit-feature-list .feature-list-items{list-style-type:none;margin:0;padding:0}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item{position:relative}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .feature-list-icon-box{z-index:2;-webkit-transition:all .5s ease;transition:all .5s ease}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .feature-list-icon-inner{background-color:var(--jkit-element-bg-color);-webkit-transition:all .5s ease;transition:all .5s ease;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .feature-list-icon{color:var(--jkit-txt-alt-color);-webkit-transition:all .5s ease;transition:all .5s ease;line-height:1;text-align:center;height:70px;width:70px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .feature-list-icon i{color:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .feature-list-icon svg{fill:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .feature-list-content-box .feature-list-title{color:var(--jkit-txt-h-color);line-height:1.5em;margin-top:-2px;margin-bottom:10px;font-weight:600}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .feature-list-content-box .feature-list-title>a{color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .feature-list-content-box .feature-list-content{padding:0;margin:0;color:var(--jkit-txt-color);font-size:14px;font-weight:400;line-height:1.5em}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item .connector{display:block;position:absolute;width:0;margin:0 auto;z-index:1;height:100%;top:calc(var(--icon-size,70px)/ 2 + var(--space-between,7.5px));font-size:60px;left:0;right:calc(100% - 60px);border-right:0!important;border-style:solid;border-color:var(--jkit-element-bg-color);border-width:1px;-webkit-transition:all .5s ease;transition:all .5s ease}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item:first-child .connector{top:calc(var(--icon-size,70px)/ 2);height:calc(100% + var(--space-between,7.5px))}.jeg-elementor-kit.jkit-feature-list .feature-list-items .feature-list-item:last-child .connector{display:none}.jeg-elementor-kit.jkit-feature-list .feature-list-items.connector-type-modern .feature-list-item .connector{display:none}.jeg-elementor-kit.jkit-feature-list .feature-list-items.connector-type-modern .feature-list-item:after,.jeg-elementor-kit.jkit-feature-list .feature-list-items.connector-type-modern .feature-list-item:before{content:"";position:absolute;display:block;border-style:solid;border-color:var(--jkit-element-bg-color);border-width:1px}.jeg-elementor-kit.jkit-feature-list .feature-list-items.connector-type-modern .feature-list-item:before{top:0;z-index:1;border-right:none!important;height:100%}.jeg-elementor-kit.jkit-feature-list .feature-list-items.connector-type-modern .feature-list-item:after{top:50%;width:23px;z-index:2;border-top:none!important}.jeg-elementor-kit.jkit-feature-list .feature-list-items.connector-type-modern .feature-list-item :not(:last-child):before{height:calc(100% + 8px)}.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-circle .feature-list-item .feature-list-icon,.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-circle .feature-list-item .feature-list-icon-inner{border-radius:50%}.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-rhombus .feature-list-item .feature-list-icon-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin:15px}.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-rhombus .feature-list-item .feature-list-icon i,.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-rhombus .feature-list-item .feature-list-icon img,.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-rhombus .feature-list-item .feature-list-icon svg{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-view-framed .feature-list-item .feature-list-icon{color:var(--jkit-element-bg-color);background-color:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-view-framed .feature-list-item .feature-list-icon i{color:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-feature-list .feature-list-items.shape-view-framed .feature-list-item .feature-list-icon svg{fill:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-fun-fact{-webkit-transition:all .4s ease;transition:all .4s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:relative;z-index:2;background-repeat:no-repeat;background-size:cover;background-position:center center;text-align:center;overflow:hidden}.jeg-elementor-kit.jkit-fun-fact:before{position:absolute;content:"";height:100%;width:100%;-webkit-transition:all .6s ease;transition:all .6s ease;background-size:101% 101%;z-index:1}.jeg-elementor-kit.jkit-fun-fact .fun-fact-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;z-index:2}.jeg-elementor-kit.jkit-fun-fact .fun-fact-inner>.icon{margin-bottom:15px;padding:15px;font-size:40px;color:var(--jkit-txt-color);display:inline-block}.jeg-elementor-kit.jkit-fun-fact .fun-fact-inner>.icon svg{width:40px;fill:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-fun-fact .fun-fact-inner .content .number-wrapper{font-size:28px;font-weight:700;color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-fun-fact .fun-fact-inner .content .number-wrapper .super{top:-5px;left:0;vertical-align:super;font-size:22px;color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-fun-fact .fun-fact-inner .content .title{font-size:15px;margin:0;font-weight:400;color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-gallery:before{content:none}.jeg-elementor-kit.jkit-gallery[data-grid=masonry] .gallery-items .gallery-item-wrap .grid-item .thumbnail-wrap{height:auto;position:relative}.jeg-elementor-kit.jkit-gallery.layout-card .gallery-items .gallery-item-wrap:hover .grid-item .thumbnail-wrap .style-overlay{visibility:visible;opacity:.7}.jeg-elementor-kit.jkit-gallery.layout-card .gallery-items .gallery-item-wrap .grid-item{-webkit-box-shadow:0 0 30px 0 rgba(3,29,60,.05);box-shadow:0 0 30px 0 rgba(3,29,60,.05)}.jeg-elementor-kit.jkit-gallery.layout-card .gallery-items .gallery-item-wrap .grid-item .thumbnail-wrap{position:relative;line-height:0}.jeg-elementor-kit.jkit-gallery.layout-card .gallery-items .gallery-item-wrap .grid-item .thumbnail-wrap .style-overlay{visibility:hidden;opacity:0;-webkit-transition:.5s all ease;transition:.5s all ease;display:-webkit-box;display:-ms-flexbox;display:flex;background:var(--jkit-element-darken-bg-color);-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:0;top:0;height:100%;width:100%;padding:15px;z-index:10}.jeg-elementor-kit.jkit-gallery .search-filters-wrap{height:55px;border-radius:5px;max-width:600px;margin:15px auto 50px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .filter-wrap{position:relative;-ms-flex-preferred-size:30%;flex-basis:30%}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .filter-wrap button.search-filter-trigger{color:#7f8995;border:0 solid;border-right:1px solid var(--jkit-element-bg-color);width:100%;border-radius:0;padding:17px 13px;font-size:14px;background:var(--jkit-element-lighten-bg-color);height:55px;border-radius:10px 0 0 10px;outline:0;text-align:center;position:relative}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .filter-wrap button.search-filter-trigger svg{fill:#7f8995;width:14px}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .filter-wrap ul.search-filter-controls{position:absolute;left:0;background:#fff;z-index:999;width:150px;visibility:hidden;opacity:0;-webkit-transition:.3s;transition:.3s;width:100%;border-radius:5px;padding-top:7px;margin:0;padding:0;list-style:none}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .filter-wrap ul.search-filter-controls li:first-child{border-top:0 solid}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .filter-wrap ul.search-filter-controls li{padding:5px 5px 5px 10px;cursor:pointer;-webkit-transition:.3s;transition:.3s;font-size:14px;color:#7f8995;font-weight:400}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .filter-wrap ul.search-filter-controls li:hover{color:#000}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .filter-wrap ul.search-filter-controls.open-controls{visibility:visible;opacity:1}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .jkit-gallery-search-box{background:var(--jkit-element-lighten-bg-color);border-radius:0 10px 10px 0;-ms-flex-preferred-size:70%;flex-basis:70%;height:100%}.jeg-elementor-kit.jkit-gallery .search-filters-wrap .jkit-gallery-search-box input[type=text]{width:100%;height:100%;margin:0;padding:15px;font-size:14px;border:0 solid;outline:0;background:0 0}.jeg-elementor-kit.jkit-gallery .filter-controls{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:1 1 auto;flex-flow:1 1 auto;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-flow:row wrap;flex-flow:row wrap;padding:0;margin:0}.jeg-elementor-kit.jkit-gallery .filter-controls ul{margin:0 0 20px 0;padding:0;text-align:center}.jeg-elementor-kit.jkit-gallery .filter-controls ul li{font-size:13px;line-height:1.8;text-transform:uppercase;letter-spacing:1px;padding:6px 15px;cursor:pointer;margin:0 5px;font-weight:400;list-style:none;display:inline-block;text-align:center}.jeg-elementor-kit.jkit-gallery .filter-controls ul li.active{background:var(--jkit-element-bg-color);border-radius:0;color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap{width:100%;float:left}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap:hover .grid-item .caption-wrap.style-overlay{visibility:visible;opacity:.7}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap:hover .grid-item .caption-wrap.style-overlay.overlay-slide .item-caption-over .item-buttons,.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap:hover .grid-item .caption-wrap.style-overlay.overlay-slide .item-caption-over .item-content,.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap:hover .grid-item .caption-wrap.style-overlay.overlay-slide .item-caption-over .item-title{-webkit-transform:translate(0);transform:translate(0)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap:hover .grid-item .caption-wrap.style-overlay.overlay-zoom .item-caption-over,.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap:hover .grid-item .caption-wrap.style-overlay.overlay-zoom .item-hover-bg{-webkit-transform:scale(1);transform:scale(1)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap:hover .grid-item .video-wrap a{font-size:65px;-webkit-transition:.5s all ease;transition:.5s all ease}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap:hover .grid-item .video-wrap a svg{width:65px}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item{margin:5px;position:relative;overflow:hidden}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .thumbnail-wrap{height:300px;overflow:hidden;line-height:0}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .thumbnail-wrap img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .video-wrap{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:15}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .video-wrap a{font-size:60px;color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .video-wrap a svg{width:60px;fill:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-category{line-height:normal}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-category span{position:absolute;left:50%;bottom:0;font-size:12px;font-weight:500;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-bottom:15px;border-radius:5px;padding:5px 10px 5px 10px;background:var(--jkit-selection-bg-color)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-button{position:absolute;left:50%;top:50%;width:100%;height:auto;text-align:center;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-button .item-buttons a{display:inline-block;font-size:16px;margin:0 7px}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-button .item-buttons a span{background:var(--jkit-bg-color);color:var(--jkit-element-bg-color);height:50px;line-height:50px;width:50px;border-radius:50%;padding:15px}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-button .item-buttons a span svg{fill:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap .item-caption-over .item-buttons a{display:inline-block;font-size:16px;margin-right:15px}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap .item-caption-over .item-buttons a span{background:var(--jkit-bg-color);color:var(--jkit-element-bg-color);height:50px;line-height:50px;width:50px;border-radius:50%;padding:15px}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap .item-caption-over .item-buttons a span svg{fill:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap .item-hover-bg{position:absolute;left:0;top:0;height:100%;width:100%;content:"";background:var(--jkit-element-darken-bg-color);z-index:-1;opacity:.7}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap .caption-head{position:absolute;top:0;left:0;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:15px;z-index:3;color:var(--jkit-bg-color);font-size:18px;font-weight:700;line-height:normal}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap .caption-head .item-rating li{display:inline-block;list-style:none;margin-right:2px}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap .caption-head .item-rating li svg{fill:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay{visibility:hidden;opacity:0;-webkit-transition:.6s all ease;transition:.6s all ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:0;top:0;height:100%;width:100%;padding:15px;z-index:10}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay.overlay-slide .item-caption-over .item-title{-webkit-transform:translateY(20px);transform:translateY(20px);-webkit-transition:.5s all ease;transition:.5s all ease}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay.overlay-slide .item-caption-over .item-buttons,.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay.overlay-slide .item-caption-over .item-content{-webkit-transform:translateY(40px);transform:translateY(40px);-webkit-transition:.5s all ease;transition:.5s all ease}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay.overlay-zoom .item-caption-over,.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay.overlay-zoom .item-hover-bg{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transition:.5s all ease;transition:.5s all ease}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay.overlay-none .item-caption-over,.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay.overlay-none .item-hover-bg{display:none}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay .item-caption-over{width:100%;height:auto}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay .item-caption-over .item-title{color:var(--jkit-txt-alt-color);font-size:20px;margin-bottom:5px;line-height:1}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay .item-caption-over .item-content{color:var(--jkit-txt-alt-color);font-size:12px;font-family:inherit}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-overlay .item-caption-over .item-buttons{color:var(--jkit-txt-alt-color);font-size:12px;font-family:inherit}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-card{background:var(--jkit-element-lighten-bg-color);padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:inherit}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-card .item-caption-over .item-title{color:var(--jkit-txt-color);font-size:20px;margin:10px 0 10px;line-height:1}.jeg-elementor-kit.jkit-gallery .gallery-items .gallery-item-wrap .grid-item .caption-wrap.style-card .item-caption-over .item-content{color:var(--jkit-txt-color);font-size:12px;font-family:inherit}.jeg-elementor-kit.jkit-gallery .load-more-items{text-align:center;margin-top:15px}.jeg-elementor-kit.jkit-gallery .load-more-items .jkit-gallery-load-more{background:var(--jkit-btn-bg-color);color:var(--jkit-bg-color);padding:10px}.jeg-elementor-kit.jkit-gallery .load-more-items .jkit-gallery-load-more svg{fill:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-heading{position:relative}.jeg-elementor-kit.jkit-heading.title-float-left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jeg-elementor-kit.jkit-heading .heading-title{font-size:28px;font-weight:500}.jeg-elementor-kit.jkit-heading .heading-title>span{display:inline-block;font-weight:700}.jeg-elementor-kit.jkit-heading .heading-section-title{position:relative;margin:0;margin-bottom:20px}.jeg-elementor-kit.jkit-heading .heading-section-title.border-enable{position:relative}.jeg-elementor-kit.jkit-heading .heading-section-title.border-enable.start:before,.jeg-elementor-kit.jkit-heading .heading-section-title.border-enable.start~:before{left:0}.jeg-elementor-kit.jkit-heading .heading-section-title.border-enable.end:before,.jeg-elementor-kit.jkit-heading .heading-section-title.border-enable.end~:before{right:0}.jeg-elementor-kit.jkit-heading .heading-section-title.border-enable:before{content:"";display:block;position:absolute;background:var(--jkit-element-darken-bg-color);background:-webkit-gradient(linear,left top,left bottom,from(var(--jkit-element-lighten-bg-color)),to(var(--jkit-element-darken-bg-color)));background:linear-gradient(180deg,var(--jkit-element-lighten-bg-color) 0,var(--jkit-element-darken-bg-color) 100%)}.jeg-elementor-kit.jkit-heading .heading-section-title.display-inline .heading-title>span{display:inline}.jeg-elementor-kit.jkit-heading .heading-section-subtitle{font-size:18px;font-weight:700;color:var(--jkit-txt-m-color)}.jeg-elementor-kit.jkit-heading .heading-section-subtitle.border-enable{display:inline-block;position:relative;vertical-align:middle}.jeg-elementor-kit.jkit-heading .heading-section-subtitle.border-enable:after,.jeg-elementor-kit.jkit-heading .heading-section-subtitle.border-enable:before{content:"";background-color:var(--jkit-txt-m-color);display:inline-block;vertical-align:middle}.jeg-elementor-kit.jkit-heading .heading-section-subtitle.border-enable:before{margin-right:15px}.jeg-elementor-kit.jkit-heading .heading-section-subtitle.border-enable:after{margin-left:15px}.jeg-elementor-kit.jkit-heading .heading-section-subtitle.outline-enable{display:inline-block;position:relative;vertical-align:middle;margin-left:30px;padding:8px 32px 8px 32px;border-radius:2em 2em 2em 2em}.jeg-elementor-kit.jkit-heading .heading-section-description{display:inline-block;width:100%}.jeg-elementor-kit.jkit-heading .shadow-text{z-index:0;font-size:90px;position:absolute;font-weight:700;line-height:120px;white-space:nowrap;letter-spacing:-6px;font-family:Archivo,sans-serif;color:transparent;-webkit-text-fill-color:#fff;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:rgba(16,16,16,.1)}.jeg-elementor-kit.jkit-heading .shadow-text~*{z-index:1;position:relative}.jeg-elementor-kit.jkit-heading .separator-wrapper{display:inline-block}.jeg-elementor-kit.jkit-heading .separator-wrapper:not(.style-custom){height:4px;position:relative}.jeg-elementor-kit.jkit-heading .separator-wrapper.style-dotted{width:30px;background:var(--jkit-element-darken-bg-color);border-radius:2px;margin-left:27px}.jeg-elementor-kit.jkit-heading .separator-wrapper.style-dotted:after{content:"";position:absolute;left:-27px;top:0;display:inline-block;height:4px;width:4px;border-radius:50%;background-color:var(--jkit-element-darken-bg-color);-webkit-box-shadow:9px 0 0 0 var(--jkit-element-darken-bg-color),18px 0 0 0 var(--jkit-element-darken-bg-color);box-shadow:9px 0 0 0 var(--jkit-element-darken-bg-color),18px 0 0 0 var(--jkit-element-darken-bg-color)}.jeg-elementor-kit.jkit-heading .separator-wrapper.style-solid{width:150px;border-radius:0;background:var(--jkit-element-darken-bg-color);margin-left:0}.jeg-elementor-kit.jkit-heading .separator-wrapper.style-solid-bullet,.jeg-elementor-kit.jkit-heading .separator-wrapper.style-solid-star{width:135px;background:var(--jkit-element-darken-bg-color);background:-webkit-gradient(linear,left top,right top,color-stop(0,var(--jkit-element-darken-bg-color)),color-stop(38%,var(--jkit-element-darken-bg-color)),color-stop(38%,rgba(255,255,255,0)),color-stop(62%,rgba(255,255,255,0)),color-stop(62%,var(--jkit-element-darken-bg-color)),to(var(--jkit-element-darken-bg-color)));background:linear-gradient(90deg,var(--jkit-element-darken-bg-color) 0,var(--jkit-element-darken-bg-color) 38%,rgba(255,255,255,0) 38%,rgba(255,255,255,0) 62%,var(--jkit-element-darken-bg-color) 62%,var(--jkit-element-darken-bg-color) 100%)}.jeg-elementor-kit.jkit-heading .separator-wrapper.style-solid-bullet:after,.jeg-elementor-kit.jkit-heading .separator-wrapper.style-solid-star:after{position:absolute;content:"";top:0;left:50%;width:14.3px;height:14.3px;-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);background-color:var(--jkit-element-darken-bg-color);top:-7.15px}.jeg-elementor-kit.jkit-heading .separator-wrapper.style-solid-bullet:after{border-radius:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.jeg-elementor-kit.jkit-heading .separator-wrapper.style-custom img{display:inline-block}.jeg-elementor-kit.jkit-icon-box .jkit-icon-box-wrapper{position:relative;padding:50px 40px 50px 40px;text-align:center;border:1px solid var(--jkit-border-color);border-radius:5px;-webkit-transition:all .4s ease;transition:all .4s ease;overflow:hidden;background-repeat:no-repeat;background-size:cover;background-position:center center}.jeg-elementor-kit.jkit-icon-box .jkit-icon-box-wrapper.hover-gradient::before{z-index:1}.jeg-elementor-kit.jkit-icon-box .jkit-icon-box-wrapper.hover-gradient::after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-icon-box .jkit-icon-box-wrapper.hover-gradient:hover:after{opacity:1}.jeg-elementor-kit.jkit-icon-box>a{text-decoration:none}.jeg-elementor-kit.jkit-icon-box .icon-box-link{color:unset}.jeg-elementor-kit.jkit-icon-box .icon-box-link.hover-gradient{overflow:hidden}.jeg-elementor-kit.jkit-icon-box .icon-box-link.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-icon-box .icon-box-link.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-icon-box .icon-box-link.hover-gradient:hover:before{opacity:1}.jeg-elementor-kit.jkit-icon-box .jkit-background-filter{background-color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-icon-box.icon-position-left .jkit-icon-box-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.jeg-elementor-kit.jkit-icon-box.icon-position-left .jkit-icon-box-wrapper .icon-box.icon-box-header{margin-right:15px}.jeg-elementor-kit.jkit-icon-box.icon-position-right .jkit-icon-box-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.jeg-elementor-kit.jkit-icon-box.icon-position-right .jkit-icon-box-wrapper .icon-box.icon-box-header{margin-left:15px}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-header{position:relative;z-index:2;line-height:0}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-header>.icon{display:inline-block;margin-bottom:13px;color:var(--jkit-txt-color);-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-header>.icon i{font-size:40px}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-header>.icon svg{-webkit-transition:all .4s ease;transition:all .4s ease;fill:var(--jkit-txt-color);width:40px}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body{position:relative;z-index:2;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body .title{padding:0;color:var(--jkit-txt-color);font-size:23px;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body .icon-box-button{position:relative;z-index:2}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body .icon-box-button .btn-wrapper{position:relative;z-index:2}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body .icon-box-button .btn-wrapper .icon-box-link{border-radius:5px;font-size:15px;padding:15px 30px;display:inline-block;color:var(--jkit-bg-color);position:relative;display:inline-block;line-height:1;white-space:nowrap;vertical-align:middle;text-align:center;background-color:var(--jkit-btn-bg-color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body .icon-box-button .btn-wrapper .icon-box-link:hover{background-color:var(--jkit-btn-bg-hover-color)}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body .icon-box-button .btn-wrapper .icon-box-link svg{-webkit-transition:all .4s ease;transition:all .4s ease;width:15px;fill:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body .icon-box-button.hover .btn-wrapper .icon-box-link{opacity:0}.jeg-elementor-kit.jkit-icon-box .icon-box.icon-box-body .icon-box-description{color:var(--jkit-txt-color);-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-icon-box:hover .icon-box.icon-box-body .icon-box-button.hover .btn-wrapper .icon-box-link{opacity:100}.jeg-elementor-kit.jkit-icon-box:hover .hover-watermark{bottom:0;opacity:100}.jeg-elementor-kit.jkit-icon-box .hover-watermark{position:absolute;bottom:-50px;right:0;opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:1}.jeg-elementor-kit.jkit-icon-box .hover-watermark i{font-size:100px}.jeg-elementor-kit.jkit-icon-box .hover-watermark svg{-webkit-transition:all .4s ease;transition:all .4s ease;width:100px}.jeg-elementor-kit.jkit-icon-box .icon-box-badge{position:absolute;line-height:1;z-index:2}.jeg-elementor-kit.jkit-icon-box .icon-box-badge.topleft{top:0;left:0}.jeg-elementor-kit.jkit-icon-box .icon-box-badge.topcenter{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.jeg-elementor-kit.jkit-icon-box .icon-box-badge.topright{top:0;right:0}.jeg-elementor-kit.jkit-icon-box .icon-box-badge.bottomleft{left:0;bottom:0}.jeg-elementor-kit.jkit-icon-box .icon-box-badge.bottomcenter{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.jeg-elementor-kit.jkit-icon-box .icon-box-badge.bottomright{bottom:0;right:0}.jeg-elementor-kit.jkit-icon-box .icon-box-badge .badge-text{padding:10px 10px 10px 10px;border-radius:0;background-color:var(--jkit-selection-bg-color);font-size:.70588rem;color:var(--jkit-bg-color);font-weight:500;display:inline-block}.jeg-elementor-kit.jkit-image-box{-webkit-transition:all .4s ease;transition:all .4s ease;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.jeg-elementor-kit.jkit-image-box .image-box-header{-webkit-transition:all .4s ease;transition:all .4s ease;position:relative;overflow:hidden;line-height:0}.jeg-elementor-kit.jkit-image-box .image-box-header img{-webkit-transition:all .4s ease;transition:all .4s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;width:100%;height:auto;margin:0;-o-object-fit:cover;object-fit:cover}.jeg-elementor-kit.jkit-image-box .image-box-body .body-inner{padding:30px 35px;position:relative;overflow:hidden;background:var(--jkit-bg-color);-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.25);-o-box-shadow:0 0 20px 0 rgba(0,0,0,.25);box-shadow:0 0 20px 0 rgba(0,0,0,.25)}.jeg-elementor-kit.jkit-image-box .image-box-body .body-inner .body-description{margin-top:0;margin-bottom:.9rem}.jeg-elementor-kit.jkit-image-box .image-box-body .body-title{font-size:18px;margin-bottom:20px;color:var(--jkit-txt-h-color);font-weight:700}.jeg-elementor-kit.jkit-image-box .image-box-body .body-title svg{fill:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-image-box .button-box .button-wrapper{display:inline-block}.jeg-elementor-kit.jkit-image-box .button-box .button-wrapper a{border-radius:5px;font-size:15px;padding:15px 30px;color:#fff;position:relative;line-height:1;white-space:nowrap;vertical-align:middle;text-align:center;background-color:var(--jkit-btn-bg-color);-webkit-transition:all .4s ease;transition:all .4s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jeg-elementor-kit.jkit-image-box .button-box .button-wrapper a:hover{background-color:var(--jkit-btn-bg-hover-color)}.jeg-elementor-kit.jkit-image-box .button-box .button-wrapper a svg{-webkit-transition:all .4s ease;transition:all .4s ease;fill:#fff}.jeg-elementor-kit.jkit-image-box .button-box .button-wrapper a.hover-gradient{overflow:hidden}.jeg-elementor-kit.jkit-image-box .button-box .button-wrapper a.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-image-box .button-box .button-wrapper a.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-image-box .button-box .button-wrapper a.hover-gradient:hover:before{opacity:1}.jeg-elementor-kit.jkit-image-box .button-box.icon-position-before i,.jeg-elementor-kit.jkit-image-box .button-box.icon-position-before svg{margin-right:5px}.jeg-elementor-kit.jkit-image-box .button-box.icon-position-after i,.jeg-elementor-kit.jkit-image-box .button-box.icon-position-after svg{margin-left:5px}.jeg-elementor-kit.jkit-image-box.style-floating .image-box-body .body-inner{background-color:#fff;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.08);-o-box-shadow:0 2px 4px rgba(0,0,0,.08);box-shadow:0 2px 4px rgba(0,0,0,.08);-webkit-transition:all .4s ease;transition:all .4s ease;width:90%;height:90px;position:relative;margin-left:auto;margin-right:auto;margin-top:-50px}.jeg-elementor-kit.jkit-image-box.style-floating .image-box-body .body-inner .body-button,.jeg-elementor-kit.jkit-image-box.style-floating .image-box-body .body-inner .body-description{-webkit-transition:all .4s ease;transition:all .4s ease;opacity:0;visibility:hidden}.jeg-elementor-kit.jkit-image-box.style-floating:hover .image-box-body .body-inner{height:220px}.jeg-elementor-kit.jkit-image-box.style-floating:hover .image-box-body .body-inner .body-button,.jeg-elementor-kit.jkit-image-box.style-floating:hover .image-box-body .body-inner .body-description{opacity:1;visibility:visible}.jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-form-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-input-wrapper:not(.jkit-submit-input-holder){-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:30px}.jeg-elementor-kit.jkit-mailchimp.style-inline .jkit-submit-input-holder{-ms-flex-item-align:end;align-self:flex-end}.jeg-elementor-kit.jkit-mailchimp.style-full .jkit-input-wrapper:not(:last-child){margin-bottom:20px}.jeg-elementor-kit.jkit-mailchimp .jkit-form-group{margin:0}.jeg-elementor-kit.jkit-mailchimp .jkit-input-group{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%}.jeg-elementor-kit.jkit-mailchimp .jkit-input-group-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--jkit-txt-color);text-align:center;white-space:nowrap;background-color:var(--jkit-border-color);height:100%;padding:15px;font-size:10px;border:1px solid var(--jkit-form-border-color);border-radius:5px 0 0 5px}.jeg-elementor-kit.jkit-mailchimp .jkit-input-group-text svg{fill:var(--jkit-txt-color);width:10px}.jeg-elementor-kit.jkit-mailchimp .jkit-input-group-icon.position-before{margin-right:-1px}.jeg-elementor-kit.jkit-mailchimp .jkit-input-group-icon.position-after{margin-left:-1px}.jeg-elementor-kit.jkit-mailchimp .jkit-form-control{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;display:block;height:auto;min-height:42px;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid var(--jkit-form-border-color);border-radius:0 5px 5px 0;-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}.jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit{padding:8px 20px 8px 20px;color:var(--jkit-txt-alt-color);width:100%;position:relative;z-index:1;font-size:16px;border-style:solid;border-width:0;background-color:var(--jkit-btn-bg-color);-webkit-box-shadow:none;box-shadow:none;border-radius:5px;margin-top:0;margin-bottom:0;line-height:26px}.jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit>i,.jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit>svg{margin-right:10px}.jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit svg{fill:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-submit:hover{background-color:var(--jkit-btn-bg-hover-color)}.jeg-elementor-kit.jkit-mailchimp .jkit-input-label{font-weight:600}.jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-message{display:none;padding:10px 15px;margin-bottom:10px;border-radius:5px}.jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-message.error{display:block;color:var(--jkit-error-border-color);background-color:var(--jkit-error-bg-color);border:1px solid var(--jkit-error-border-color)}.jeg-elementor-kit.jkit-mailchimp .jkit-mailchimp-message.success{display:block;color:var(--jkit-success-border-color);background-color:var(--jkit-success-bg-color);border:var(--jkit-success-border-color)}@-webkit-keyframes slide-from-left{0%{left:0}100%{left:101%}}@keyframes slide-from-left{0%{left:0}100%{left:101%}}@-webkit-keyframes slide-from-right{0%{left:0}100%{left:-101%}}@keyframes slide-from-right{0%{left:0}100%{left:-101%}}@-webkit-keyframes slide-from-left-reverse{0%{left:-101%}100%{left:0}}@keyframes slide-from-left-reverse{0%{left:-101%}100%{left:0}}@-webkit-keyframes slide-from-right-reverse{0%{left:101%}100%{left:0}}@keyframes slide-from-right-reverse{0%{left:101%}100%{left:0}}@-webkit-keyframes jkit-fadeinup{from{opacity:0;-webkit-transform:translate3d(0,30px,0);transform:translate3d(0,30px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes jkit-fadeinup{from{opacity:0;-webkit-transform:translate3d(0,30px,0);transform:translate3d(0,30px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes jkit-scrolling-vertical{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}49%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}50%{-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes jkit-scrolling-vertical{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}49%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}50%{-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes jkit-animated-dash{0%{stroke-dasharray:0 1500}15%{stroke-dasharray:1500 1500}85%{opacity:1}90%{stroke-dasharray:1500 1500;opacity:0}100%{stroke-dasharray:0 1500;opacity:0}}@keyframes jkit-animated-dash{0%{stroke-dasharray:0 1500}15%{stroke-dasharray:1500 1500}85%{opacity:1}90%{stroke-dasharray:1500 1500;opacity:0}100%{stroke-dasharray:0 1500;opacity:0}}@-webkit-keyframes jkit-animated-pulse{0%{-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1);opacity:1}40%{-webkit-transform:translateY(-50%) scale(.9);transform:translateY(-50%) scale(.9);opacity:0}100%{-webkit-transform:translateY(-50%) scale(0);transform:translateY(-50%) scale(0);opacity:0}}@keyframes jkit-animated-pulse{0%{-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1);opacity:1}40%{-webkit-transform:translateY(-50%) scale(.9);transform:translateY(-50%) scale(.9);opacity:0}100%{-webkit-transform:translateY(-50%) scale(0);transform:translateY(-50%) scale(0);opacity:0}}@-webkit-keyframes jkit-animated-swirl-in{0%{opacity:0;-webkit-transform:translateZ(-20px) rotateX(90deg);transform:translateZ(-20px) rotateX(90deg)}60%{opacity:1;-webkit-transform:translateZ(-20px) rotateX(-10deg);transform:translateZ(-20px) rotateX(-10deg)}100%{opacity:1;-webkit-transform:translateZ(-20px) rotateX(0);transform:translateZ(-20px) rotateX(0)}}@keyframes jkit-animated-swirl-in{0%{opacity:0;-webkit-transform:translateZ(-20px) rotateX(90deg);transform:translateZ(-20px) rotateX(90deg)}60%{opacity:1;-webkit-transform:translateZ(-20px) rotateX(-10deg);transform:translateZ(-20px) rotateX(-10deg)}100%{opacity:1;-webkit-transform:translateZ(-20px) rotateX(0);transform:translateZ(-20px) rotateX(0)}}@-webkit-keyframes jkit-animated-blinds-in{0%{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes jkit-animated-blinds-in{0%{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes jkit-animated-wave-up{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}60%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes jkit-animated-wave-up{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}60%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes jkit-animated-flip-in{0%{-webkit-transform:rotateX(180deg);transform:rotateX(180deg);opacity:0}35%{-webkit-transform:rotateX(120deg);transform:rotateX(120deg);opacity:0}65%{opacity:0}100%{-webkit-transform:rotateX(360deg);transform:rotateX(360deg);opacity:1}}@keyframes jkit-animated-flip-in{0%{-webkit-transform:rotateX(180deg);transform:rotateX(180deg);opacity:0}35%{-webkit-transform:rotateX(120deg);transform:rotateX(120deg);opacity:0}65%{opacity:0}100%{-webkit-transform:rotateX(360deg);transform:rotateX(360deg);opacity:1}}@-webkit-keyframes jkit-animated-flip-out{0%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}35%{-webkit-transform:rotateX(-40deg);transform:rotateX(-40deg);opacity:0}65%{opacity:0}100%{-webkit-transform:rotateX(180deg);transform:rotateX(180deg);opacity:0}}@keyframes jkit-animated-flip-out{0%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}35%{-webkit-transform:rotateX(-40deg);transform:rotateX(-40deg);opacity:0}65%{opacity:0}100%{-webkit-transform:rotateX(180deg);transform:rotateX(180deg);opacity:0}}@-webkit-keyframes jkit-animated-drop-in-in{0%{opacity:0;-webkit-transform:translateZ(100px);transform:translateZ(100px)}100%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes jkit-animated-drop-in-in{0%{opacity:0;-webkit-transform:translateZ(100px);transform:translateZ(100px)}100%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes jkit-animated-drop-in-out{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}100%{opacity:0;-webkit-transform:translateZ(-100px);transform:translateZ(-100px)}}@keyframes jkit-animated-drop-in-out{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}100%{opacity:0;-webkit-transform:translateZ(-100px);transform:translateZ(-100px)}}@-webkit-keyframes jkit-animated-slide-right-in{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}60%{opacity:1;-webkit-transform:translateX(10%);transform:translateX(10%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes jkit-animated-slide-right-in{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}60%{opacity:1;-webkit-transform:translateX(10%);transform:translateX(10%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes jkit-animated-slide-right-out{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}60%{opacity:0;-webkit-transform:translateX(110%);transform:translateX(110%)}100%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes jkit-animated-slide-right-out{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}60%{opacity:0;-webkit-transform:translateX(110%);transform:translateX(110%)}100%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}}@-webkit-keyframes jkit-animated-slide-left-in{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}60%{opacity:1;-webkit-transform:translateX(-10%);transform:translateX(-10%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes jkit-animated-slide-left-in{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}60%{opacity:1;-webkit-transform:translateX(-10%);transform:translateX(-10%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes jkit-animated-slide-left-out{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}60%{opacity:0;-webkit-transform:translateX(-110%);transform:translateX(-110%)}100%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes jkit-animated-slide-left-out{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}60%{opacity:0;-webkit-transform:translateX(-110%);transform:translateX(-110%)}100%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@-webkit-keyframes jkit-animated-slide-up-in{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}60%{opacity:1;-webkit-transform:translateY(-20%);transform:translateY(-20%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes jkit-animated-slide-up-in{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}60%{opacity:1;-webkit-transform:translateY(-20%);transform:translateY(-20%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes jkit-animated-slide-up-out{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}60%{opacity:0;-webkit-transform:translateY(-120%);transform:translateY(-120%)}100%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes jkit-animated-slide-up-out{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}60%{opacity:0;-webkit-transform:translateY(-120%);transform:translateY(-120%)}100%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@-webkit-keyframes jkit-animated-slide-down-in{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}60%{opacity:1;-webkit-transform:translateY(20%);transform:translateY(20%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes jkit-animated-slide-down-in{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}60%{opacity:1;-webkit-transform:translateY(20%);transform:translateY(20%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes jkit-animated-slide-down-out{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}60%{opacity:0;-webkit-transform:translateY(120%);transform:translateY(120%)}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes jkit-animated-slide-down-out{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}60%{opacity:0;-webkit-transform:translateY(120%);transform:translateY(120%)}100%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}@-webkit-keyframes jkit-animated-bounce-in{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes jkit-animated-bounce-in{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes jkit-animated-bounce-out{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:0;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes jkit-animated-bounce-out{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:0;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@-webkit-keyframes jkit-animated-swing-in{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes jkit-animated-swing-in{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes jkit-animated-swing-out{20%{-webkit-transform:rotate(0);transform:rotate(0)}40%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}60%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}80%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}to{-webkit-transform:rotate(15deg);transform:rotate(15deg)}}@keyframes jkit-animated-swing-out{20%{-webkit-transform:rotate(0);transform:rotate(0)}40%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}60%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}80%{-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}to{-webkit-transform:rotate(15deg);transform:rotate(15deg)}}@-webkit-keyframes jkit-animated-rubber-band-in{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes jkit-animated-rubber-band-in{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes jkit-animated-rubber-band-out{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}40%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}75%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes jkit-animated-rubber-band-out{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}40%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}75%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes jkit-ripple{70%{-webkit-box-shadow:0 0 0 15px currentColor;box-shadow:0 0 0 15px currentColor;opacity:0}100%{-webkit-box-shadow:0 0 0 0 currentColor;box-shadow:0 0 0 0 currentColor;opacity:0}}@keyframes jkit-ripple{70%{-webkit-box-shadow:0 0 0 15px currentColor;box-shadow:0 0 0 15px currentColor;opacity:0}100%{-webkit-box-shadow:0 0 0 0 currentColor;box-shadow:0 0 0 0 currentColor;opacity:0}}@-webkit-keyframes jkit-search-background{0%{opacity:0;-webkit-transform:scale(.04) translateY(300%);transform:scale(.04) translateY(300%)}40%{-webkit-transform:scale(.04) translateY(0);transform:scale(.04) translateY(0);-webkit-transition:ease-out;transition:ease-out}40%{-webkit-transform:scale(.04) translateY(0);transform:scale(.04) translateY(0)}60%{opacity:1;-webkit-transform:scale(.02) translateY(0);transform:scale(.02) translateY(0)}61%{opacity:1;-webkit-transform:scale(.04) translateY(0);transform:scale(.04) translateY(0)}99.9%{opacity:1;height:0;padding-bottom:100%;border-radius:100%}100%{opacity:1;-webkit-transform:scale(2) translateY(0);transform:scale(2) translateY(0);height:100%;padding-bottom:0;border-radius:0}}@keyframes jkit-search-background{0%{opacity:0;-webkit-transform:scale(.04) translateY(300%);transform:scale(.04) translateY(300%)}40%{-webkit-transform:scale(.04) translateY(0);transform:scale(.04) translateY(0);-webkit-transition:ease-out;transition:ease-out}40%{-webkit-transform:scale(.04) translateY(0);transform:scale(.04) translateY(0)}60%{opacity:1;-webkit-transform:scale(.02) translateY(0);transform:scale(.02) translateY(0)}61%{opacity:1;-webkit-transform:scale(.04) translateY(0);transform:scale(.04) translateY(0)}99.9%{opacity:1;height:0;padding-bottom:100%;border-radius:100%}100%{opacity:1;-webkit-transform:scale(2) translateY(0);transform:scale(2) translateY(0);height:100%;padding-bottom:0;border-radius:0}}.jkit-color-scheme{--jkit-bg-color:#ffffff;--jkit-border-color:rgb(233.8975609756, 233.8975609756, 234.9024390244);--jkit-txt-color:#575A5F;--jkit-txt-h-color:#181D23;--jkit-txt-a-color:#0058E6;--jkit-txt-m-color:#96989B;--jkit-txt-alt-color:#ffffff;--jkit-form-border-color:#D5D5D7;--jkit-form-bg-color:transparent;--jkit-form-txt-color:#181D23;--jkit-btn-txt-color:#ffffff;--jkit-btn-bg-color:#0058E6;--jkit-btn-bg-hover-color:rgb(0, 72.3895652174, 189.2);--jkit-selection-bg-color:rgb(216.2, 165.7818181818, 0);--jkit-element-bg-color:rgb(128, 176.5913043478, 255);--jkit-element-darken-bg-color:#0058E6;--jkit-element-lighten-bg-color:rgb(230, 239.5652173913, 255);--jkit-success-bg-color:rgb(117, 255, 215.5714285714);--jkit-success-border-color:rgb(0, 127.2, 90.8571428571);--jkit-error-bg-color:#ffcccc;--jkit-error-border-color:rgb(214.2, 0, 0)}.jkit-nav-menu-loaded{overflow-x:hidden;overflow-y:visible}.jkit-magnific-popup .mfp-iframe-holder .mfp-close{background:0 0}.jkit-magnific-popup button:focus{outline:0}.jkit-equal-height-enable .jeg-elementor-kit.jkit-image-box{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.jkit-equal-height-enable .jeg-elementor-kit.jkit-image-box .image-box-body{-webkit-box-flex:1;-ms-flex:1;flex:1}.jeg-elementor-kit .hover-from-arise:before,.jeg-elementor-kit .hover-from-bottom:before,.jeg-elementor-kit .hover-from-left:before,.jeg-elementor-kit .hover-from-right:before,.jeg-elementor-kit .hover-from-top:before{position:absolute;content:"";height:100%;width:100%;background-size:101% 101%;-webkit-transition:all .6s ease;transition:all .6s ease}.jeg-elementor-kit .hover-from-left:before,.jeg-elementor-kit.hover-from-left:before{top:0;left:-101%}.jeg-elementor-kit .hover-from-left:hover:before,.jeg-elementor-kit.hover-from-left:hover:before{left:0}.jeg-elementor-kit .hover-from-right:before,.jeg-elementor-kit.hover-from-right:before{top:0;right:-101%}.jeg-elementor-kit .hover-from-right:hover:before,.jeg-elementor-kit.hover-from-right:hover:before{right:0}.jeg-elementor-kit .hover-from-top:before,.jeg-elementor-kit.hover-from-top:before{top:-101%;left:0}.jeg-elementor-kit .hover-from-top:hover:before,.jeg-elementor-kit.hover-from-top:hover:before{top:0}.jeg-elementor-kit .hover-from-bottom:before,.jeg-elementor-kit.hover-from-bottom:before{bottom:-101%;left:0}.jeg-elementor-kit .hover-from-bottom:hover:before,.jeg-elementor-kit.hover-from-bottom:hover:before{bottom:0}.jeg-elementor-kit .hover-from-arise:before,.jeg-elementor-kit.hover-from-arise:before{top:0;left:0;opacity:0}.jeg-elementor-kit .hover-from-arise:hover:before,.jeg-elementor-kit.hover-from-arise:hover:before{opacity:100%}.jeg-elementor-kit.jkit-pagination-disable.loaded .jkit-ajax-loaded,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .jkit-ajax-loaded,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .jkit-ajax-loaded,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .jkit-ajax-loaded{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:jkit-fadeinup;animation-name:jkit-fadeinup}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-1,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-1,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-1,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-1{-webkit-animation-delay:50ms;animation-delay:50ms}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-2,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-2,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-2,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-2{-webkit-animation-delay:.15s;animation-delay:.15s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-3,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-3,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-3,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-3{-webkit-animation-delay:.25s;animation-delay:.25s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-4,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-4,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-4,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-4{-webkit-animation-delay:.35s;animation-delay:.35s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-5,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-5,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-5,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-5{-webkit-animation-delay:.45s;animation-delay:.45s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-6,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-6,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-6,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-6{-webkit-animation-delay:.55s;animation-delay:.55s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-7,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-7,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-7,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-7{-webkit-animation-delay:.65s;animation-delay:.65s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-8,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-8,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-8,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-8{-webkit-animation-delay:.75s;animation-delay:.75s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-9,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-9,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-9,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-9{-webkit-animation-delay:.85s;animation-delay:.85s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-10,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-10,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-10,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-10{-webkit-animation-delay:.95s;animation-delay:.95s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-11,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-11,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-11,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-11{-webkit-animation-delay:1.05s;animation-delay:1.05s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-12,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-12,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-12,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-12{-webkit-animation-delay:1.15s;animation-delay:1.15s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-13,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-13,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-13,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-13{-webkit-animation-delay:1.25s;animation-delay:1.25s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-14,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-14,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-14,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-14{-webkit-animation-delay:1.35s;animation-delay:1.35s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-15,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-15,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-15,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-15{-webkit-animation-delay:1.45s;animation-delay:1.45s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-16,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-16,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-16,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-16{-webkit-animation-delay:1.55s;animation-delay:1.55s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-17,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-17,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-17,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-17{-webkit-animation-delay:1.65s;animation-delay:1.65s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-18,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-18,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-18,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-18{-webkit-animation-delay:1.75s;animation-delay:1.75s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-19,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-19,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-19,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-19{-webkit-animation-delay:1.85s;animation-delay:1.85s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-20,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-20,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-20,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-20{-webkit-animation-delay:1.95s;animation-delay:1.95s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-21,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-21,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-21,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-21{-webkit-animation-delay:2.05s;animation-delay:2.05s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-22,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-22,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-22,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-22{-webkit-animation-delay:2.15s;animation-delay:2.15s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-23,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-23,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-23,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-23{-webkit-animation-delay:2.25s;animation-delay:2.25s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-24,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-24,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-24,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-24{-webkit-animation-delay:2.35s;animation-delay:2.35s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-25,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-25,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-25,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-25{-webkit-animation-delay:2.45s;animation-delay:2.45s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-26,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-26,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-26,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-26{-webkit-animation-delay:2.55s;animation-delay:2.55s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-27,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-27,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-27,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-27{-webkit-animation-delay:2.65s;animation-delay:2.65s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-28,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-28,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-28,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-28{-webkit-animation-delay:2.75s;animation-delay:2.75s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-29,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-29,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-29,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-29{-webkit-animation-delay:2.85s;animation-delay:2.85s}.jeg-elementor-kit.jkit-pagination-disable.loaded .anim-30,.jeg-elementor-kit.jkit-pagination-loadmore.loaded .anim-30,.jeg-elementor-kit.jkit-pagination-nextprev.loaded .anim-30,.jeg-elementor-kit.jkit-pagination-scrollload.loaded .anim-30{-webkit-animation-delay:2.95s;animation-delay:2.95s}.jeg-elementor-kit .jkit-block-pagination{margin:0 0 30px 0;text-align:center}.jeg-elementor-kit .jkit-block-pagination button{background:0 0;border:0;padding:0;margin:0;color:inherit;cursor:pointer;font:inherit;line-height:1;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.jeg-elementor-kit .jkit-block-pagination .jkit-block-loadmore,.jeg-elementor-kit .jkit-block-pagination .jkit-block-scrollload{display:inline-block;text-align:center;cursor:pointer;border:1px solid var(--jkit-border-color,#eaeaeb);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.08);-o-box-shadow:0 2px 4px rgba(0,0,0,.08);box-shadow:0 2px 4px rgba(0,0,0,.08);padding:.6rem 1.5rem;font-size:.875rem;line-height:1.5;border-radius:3px;-webkit-transition:.25s ease;transition:.25s ease;color:var(--jkit-txt-color)}.jeg-elementor-kit .jkit-block-pagination .jkit-block-loadmore a,.jeg-elementor-kit .jkit-block-pagination .jkit-block-scrollload a{display:inline-block;color:var(--jkit-txt-color)}.jeg-elementor-kit .jkit-block-pagination .jkit-block-loadmore svg,.jeg-elementor-kit .jkit-block-pagination .jkit-block-scrollload svg{fill:var(--jkit-txt-color)}.jeg-elementor-kit .jkit-block-pagination .jkit-block-loadmore.icon-position-after i,.jeg-elementor-kit .jkit-block-pagination .jkit-block-scrollload.icon-position-after i{margin-left:6px}.jeg-elementor-kit .jkit-block-pagination .jkit-block-loadmore.icon-position-before i,.jeg-elementor-kit .jkit-block-pagination .jkit-block-scrollload.icon-position-before i{margin-right:6px}.jeg-elementor-kit .jkit-block-pagination .jkit-block-loadmore i,.jeg-elementor-kit .jkit-block-pagination .jkit-block-scrollload i{position:relative;top:1px}.jeg-elementor-kit .jkit-block-pagination .jkit-block-nextprev button.disabled{color:#a0a0a0;border-color:#eee;opacity:50%;cursor:unset}.jeg-elementor-kit .jkit-block-pagination .jkit-block-nextprev .next,.jeg-elementor-kit .jkit-block-pagination .jkit-block-nextprev .prev{display:inline-block;text-align:center;cursor:pointer;border:1px solid var(--jkit-border-color,#eaeaeb);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.08);-o-box-shadow:0 2px 4px rgba(0,0,0,.08);box-shadow:0 2px 4px rgba(0,0,0,.08);padding:.6rem 1.5rem;font-size:.875rem;line-height:1.5;border-radius:3px;-webkit-transition:.25s ease;transition:.25s ease;color:var(--jkit-txt-color)}.jeg-elementor-kit .jkit-block-pagination .jkit-block-nextprev i{position:relative;top:1px}.jeg-elementor-kit .border-bottom{position:absolute;z-index:3;left:-101%;bottom:0;height:5px;width:100%;background-color:var(--jkit-selection-bg-color)}.jeg-elementor-kit .border-bottom.left{-webkit-animation:slide-from-left-reverse .5s forwards;animation:slide-from-left-reverse .5s forwards}.jeg-elementor-kit .border-bottom.right{-webkit-animation:slide-from-right-reverse .5s forwards;animation:slide-from-right-reverse .5s forwards}.jeg-elementor-kit:hover .border-bottom.left{-webkit-animation:slide-from-left .5s forwards;animation:slide-from-left .5s forwards}.jeg-elementor-kit:hover .border-bottom.right{-webkit-animation:slide-from-right .5s forwards;animation:slide-from-right .5s forwards}.jeg-elementor-kit button:active,.jeg-elementor-kit button:hover{background:0 0;border:none}.jeg-elementor-kit button:focus{outline:0}.jeg-elementor-kit .thumbnail-container{line-height:0}.jeg-elementor-kit .style-gradient{background:var(--jkit-element-darken-bg-color);background:-webkit-gradient(linear,left top,left bottom,from(var(--jkit-element-lighten-bg-color)),to(var(--jkit-element-darken-bg-color)));background:linear-gradient(180deg,var(--jkit-element-lighten-bg-color) 0,var(--jkit-element-darken-bg-color) 100%);-moz-text-fill-color:transparent;-o-text-fill-color:transparent;-webkit-text-fill-color:transparent;background-clip:text;-webkit-background-clip:text}.jeg-elementor-kit svg{width:16px;height:auto}.jkit-social-shape:not(.shape-none) .social-icon,.jkit-social-shape:not(.shape-none) .social-icon:hover{font-size:var(--icon-size,16px);line-height:calc(.875 * var(--icon-size,16px));width:calc(var(--icon-size,16px) + var(--icon-padding-left,0px) + var(--icon-padding-right,0px));height:calc(var(--icon-size,16px) + var(--icon-padding-top,0px) + var(--icon-padding-bottom,0px));background-color:var(--jkit-element-bg-color)}.jkit-social-shape:not(.shape-none).shape-rounded .social-icon{border-radius:10%}.jkit-social-shape:not(.shape-none).shape-circle .social-icon{border-radius:50%}.jkit-social-shape:not(.shape-none).shape-square .social-icon{border-radius:0}.jkit-preloader-overlay{width:100%;height:100%;position:absolute;top:0;left:0;background:hsla(0,0%,100%,.9);display:none;z-index:99}.jkit-preloader-overlay .jkit-preloader-type{width:100%;height:100%;position:relative;display:block}.jkit-preloader-overlay .jkit-preloader-type .jkit-preloader{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:16px;height:16px;display:block}.jkit-preloader-overlay .jkit-preloader-type .jkit-preloader span{height:16px;width:16px;background-color:#999;-webkit-animation:jkit-animated-blinds-in 1.4s infinite ease-in-out both;animation:jkit-animated-blinds-in 1.4s infinite ease-in-out both;position:absolute;top:0;border-radius:100%}.jkit-preloader-overlay .jkit-preloader-type .jkit-preloader span:first-of-type{left:-22px;-webkit-animation-delay:-.32s;animation-delay:-.32s}.jkit-preloader-overlay .jkit-preloader-type .jkit-preloader span:nth-of-type(2){-webkit-animation-delay:-.16s;animation-delay:-.16s}.jkit-preloader-overlay .jkit-preloader-type .jkit-preloader span:last-of-type{left:22px}.elementor-element svg{width:1em;fill:currentColor}.jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu{position:relative;float:right;display:none;color:var(--jkit-txt-color);border:solid 1px var(--jkit-border-color)}.jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu svg{fill:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu.hover-gradient{overflow:hidden;position:relative}.jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-nav-menu .jkit-hamburger-menu.hover-gradient:hover:before{opacity:1}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper{z-index:1000}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title{display:none}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title .jkit-nav-logo{margin:5px 0 5px 0;padding:5px 5px 5px 5px;display:block}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title .jkit-nav-logo img{max-width:360px;height:auto}@media screen and (max-width:1024px){.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title .jkit-nav-logo img{max-width:260px}}@media screen and (max-width:768px){.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title .jkit-nav-logo img{max-width:240px}}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{float:right;display:none;color:var(--jkit-txt-color);border:solid 1px var(--jkit-border-color);padding:8px 8px 8px 8px;margin:12px 12px 12px 12px;width:45px;border-radius:3px;position:relative;z-index:10}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu svg{fill:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu.hover-gradient{overflow:hidden;position:relative}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu.hover-gradient:hover:before{opacity:1}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper :not(.active) .jkit-menu,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper :not(.active) .jkit-menu>li>a{display:-webkit-box;display:-ms-flexbox;display:flex}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu{height:100%;padding-left:0;margin-bottom:0;list-style:none;margin-left:0}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu>li{margin:0;padding:0;list-style:none}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu>li>a{color:#707070;padding:0 15px 0 15px;font-size:15px;-webkit-transition:all .4s ease;transition:all .4s ease;text-transform:none;font-weight:500;letter-spacing:normal;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-decoration:none}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li>a{padding:15px 15px 15px 15px;color:#000;font-size:14px;font-weight:400;width:100%}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li>a svg{fill:#000;width:14px}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li .sub-menu-toggle{display:none}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.hover-gradient a{overflow:hidden;position:relative}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.hover-gradient a span{position:relative;z-index:1}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.hover-gradient a:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.hover-gradient a:hover:before{opacity:1}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu{-webkit-box-shadow:0 10px 30px 0 rgba(45,45,45,.2);box-shadow:0 10px 30px 0 rgba(45,45,45,.2);background:var(--jkit-bg-color);position:absolute;max-height:none;margin:0}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu:hover,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children:hover{z-index:1001}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu:hover>.sub-menu,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children:hover>.sub-menu{opacity:1;visibility:visible}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg{margin-left:5px}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .jkit-mega-menu-wrapper,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu{border-radius:0;margin:auto;padding:0;list-style:none;-webkit-transition:all .4s ease;transition:all .4s ease;opacity:0;visibility:hidden;z-index:1000;top:100%}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .jkit-mega-menu-wrapper>li>.jkit-mega-menu-wrapper,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .jkit-mega-menu-wrapper>li>.sub-menu,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu>li>.jkit-mega-menu-wrapper,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu .sub-menu>li>.sub-menu{left:100%;top:0}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu:hover>.jkit-mega-menu-wrapper{opacity:1;visibility:visible}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg{margin-left:5px}.jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper{position:absolute;opacity:0;visibility:hidden;top:100%;width:100vw}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-hamburger-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-hamburger-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-hamburger-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-hamburger-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-hamburger-menu{display:block}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper{width:100%;max-width:360px;border-radius:0;background-color:#f7f7f7;width:100%;position:fixed;top:0;left:-110%;height:100%!important;-webkit-box-shadow:0 10px 30px 0 rgba(255,165,0,0);box-shadow:0 10px 30px 0 rgba(255,165,0,0);overflow-y:auto;overflow-x:hidden;padding-top:0;padding-left:0;padding-right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper.active,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper.active,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper.active,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper.active,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper.active{left:0;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu-container{overflow-y:hidden}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel{padding:10px 0 10px 0;display:block;position:relative;z-index:5;width:100%}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title{display:inline-block}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{display:block}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu{display:block!important;height:100%;overflow-y:auto;overflow-x:hidden}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i{padding:4px 15px}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu{position:inherit;-webkit-box-shadow:none;box-shadow:none;background:0 0}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu{position:relative}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i{padding:4px 15px}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper{max-width:100%}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li{display:block;width:100%;position:inherit}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu{display:none;max-height:2500px;opacity:0;visibility:hidden;-webkit-transition:max-height 5s ease-out;transition:max-height 5s ease-out;position:static}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open{display:block;opacity:1;visibility:visible}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a{display:block!important;width:auto}body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=laptop] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-laptop .jkit-menu-wrapper .jkit-menu li>a svg{float:right}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-hamburger-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-hamburger-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-hamburger-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-hamburger-menu{display:block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper{width:100%;max-width:360px;border-radius:0;background-color:#f7f7f7;width:100%;position:fixed;top:0;left:-110%;height:100%!important;-webkit-box-shadow:0 10px 30px 0 rgba(255,165,0,0);box-shadow:0 10px 30px 0 rgba(255,165,0,0);overflow-y:auto;overflow-x:hidden;padding-top:0;padding-left:0;padding-right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper.active,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper.active,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper.active,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper.active{left:0;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu-container{overflow-y:hidden}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel{padding:10px 0 10px 0;display:block;position:relative;z-index:5;width:100%}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title{display:inline-block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{display:block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu{display:block!important;height:100%;overflow-y:auto;overflow-x:hidden}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i{padding:4px 15px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu{position:inherit;-webkit-box-shadow:none;box-shadow:none;background:0 0}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu{position:relative}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i{padding:4px 15px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper{max-width:100%}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li{display:block;width:100%;position:inherit}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .sub-menu{display:none;max-height:2500px;opacity:0;visibility:hidden;-webkit-transition:max-height 5s ease-out;transition:max-height 5s ease-out;position:static}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open{display:block;opacity:1;visibility:visible}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a{display:block!important;width:auto}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=tablet_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet_extra .jkit-menu-wrapper .jkit-menu li>a svg{float:right}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-hamburger-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-hamburger-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-hamburger-menu{display:block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper{width:100%;max-width:360px;border-radius:0;background-color:#f7f7f7;width:100%;position:fixed;top:0;left:-110%;height:100%!important;-webkit-box-shadow:0 10px 30px 0 rgba(255,165,0,0);box-shadow:0 10px 30px 0 rgba(255,165,0,0);overflow-y:auto;overflow-x:hidden;padding-top:0;padding-left:0;padding-right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper.active,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper.active,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper.active{left:0;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu-container{overflow-y:hidden}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel{padding:10px 0 10px 0;display:block;position:relative;z-index:5;width:100%}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title{display:inline-block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{display:block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu{display:block!important;height:100%;overflow-y:auto;overflow-x:hidden}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i{padding:4px 15px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu{position:inherit;-webkit-box-shadow:none;box-shadow:none;background:0 0}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu{position:relative}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i{padding:4px 15px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper{max-width:100%}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li{display:block;width:100%;position:inherit}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .sub-menu{display:none;max-height:2500px;opacity:0;visibility:hidden;-webkit-transition:max-height 5s ease-out;transition:max-height 5s ease-out;position:static}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open{display:block;opacity:1;visibility:visible}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a{display:block!important;width:auto}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=tablet] .jeg-elementor-kit.jkit-nav-menu.break-point-tablet .jkit-menu-wrapper .jkit-menu li>a svg{float:right}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-hamburger-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-hamburger-menu{display:block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper{width:100%;max-width:360px;border-radius:0;background-color:#f7f7f7;width:100%;position:fixed;top:0;left:-110%;height:100%!important;-webkit-box-shadow:0 10px 30px 0 rgba(255,165,0,0);box-shadow:0 10px 30px 0 rgba(255,165,0,0);overflow-y:auto;overflow-x:hidden;padding-top:0;padding-left:0;padding-right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper.active,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper.active{left:0;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu-container,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu-container{overflow-y:hidden}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-nav-identity-panel,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-nav-identity-panel{padding:10px 0 10px 0;display:block;position:relative;z-index:5;width:100%}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title{display:inline-block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{display:block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu{display:block!important;height:100%;overflow-y:auto;overflow-x:hidden}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i{padding:4px 15px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu{position:inherit;-webkit-box-shadow:none;box-shadow:none;background:0 0}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu{position:relative}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i{padding:4px 15px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper{max-width:100%}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li{display:block;width:100%;position:inherit}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li .sub-menu,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li .sub-menu{display:none;max-height:2500px;opacity:0;visibility:hidden;-webkit-transition:max-height 5s ease-out;transition:max-height 5s ease-out;position:static}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open{display:block;opacity:1;visibility:visible}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li>a,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li>a{display:block!important;width:auto}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li>a svg,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile_extra] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile_extra .jkit-menu-wrapper .jkit-menu li>a svg{float:right}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-hamburger-menu{display:block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper{width:100%;max-width:360px;border-radius:0;background-color:#f7f7f7;width:100%;position:fixed;top:0;left:-110%;height:100%!important;-webkit-box-shadow:0 10px 30px 0 rgba(255,165,0,0);box-shadow:0 10px 30px 0 rgba(255,165,0,0);overflow-y:auto;overflow-x:hidden;padding-top:0;padding-left:0;padding-right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .1s .6s}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper.active{left:0;-webkit-transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s;transition:left .6s cubic-bezier(.6,.1,.68,.53),width .6s,background-color .6s}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu-container{overflow-y:hidden}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-nav-identity-panel{padding:10px 0 10px 0;display:block;position:relative;z-index:5;width:100%}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-nav-site-title{display:inline-block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-nav-identity-panel .jkit-close-menu{display:block}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu{display:block!important;height:100%;overflow-y:auto;overflow-x:hidden}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.menu-item-has-children>a i{padding:4px 15px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu .sub-menu,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.menu-item-has-children .sub-menu{position:inherit;-webkit-box-shadow:none;box-shadow:none;background:0 0}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu{position:relative}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a svg{margin-left:auto;border:1px solid var(--jkit-border-color);border-radius:3px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu>a i{padding:4px 15px}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li.has-mega-menu .jkit-mega-menu-wrapper{max-width:100%}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li{display:block;width:100%;position:inherit}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li .sub-menu{display:none;max-height:2500px;opacity:0;visibility:hidden;-webkit-transition:max-height 5s ease-out;transition:max-height 5s ease-out;position:static}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li .jkit-mega-menu-wrapper.dropdown-open,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li .sub-menu.dropdown-open{display:block;opacity:1;visibility:visible}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li>a{display:block!important;width:auto}body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li>a i,body[data-elementor-device-mode=mobile] .jeg-elementor-kit.jkit-nav-menu.break-point-mobile .jkit-menu-wrapper .jkit-menu li>a svg{float:right}.admin-bar .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper{top:32px}@media screen and (max-width:782px){.admin-bar .jeg-elementor-kit.jkit-nav-menu .jkit-menu-wrapper.break-point-mobile{top:46px}}.jeg-elementor-kit.jkit-off-canvas .sidebar-widget{position:fixed;z-index:999999;overflow:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;background-color:var(--jkit-bg-color);-webkit-transition:all .5s cubic-bezier(.9,.03,0,.96) .6s;transition:all .5s cubic-bezier(.9,.03,0,.96) .6s;visibility:hidden;opacity:0}.jeg-elementor-kit.jkit-off-canvas .widget-container{position:relative;top:150px;opacity:0;visibility:hidden;-webkit-transition:all .3s ease-in .3s;transition:all .3s ease-in .3s;-webkit-backface-visibility:hidden;backface-visibility:hidden}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-right .sidebar-widget{right:-100%;top:0;width:300px;min-height:100%}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-right .bg-overlay{left:100%;top:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-left .sidebar-widget{left:-100%;top:0;width:300px;min-height:100%}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-left .bg-overlay{right:100%;top:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-top .sidebar-widget{left:0;top:-100%;width:100%;height:300px}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-top .bg-overlay{bottom:100%;left:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-bottom .sidebar-widget{left:0;bottom:-100%;width:100%;height:300px}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-bottom .bg-overlay{top:100%;left:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-left .widget-content,.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.position-right .widget-content{position:absolute;width:100%}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar .bg-overlay{position:fixed;z-index:1002;height:100%;opacity:0;width:100%;visibility:hidden;-webkit-transition:all .4s ease-in .8s;transition:all .4s ease-in .8s;cursor:url(/wp-content/plugins/jeg-elementor-kit/assets/css/elements/../../img/letter-x.svg),pointer;background-color:rgba(0,0,0,.9)}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active.position-left .bg-overlay{right:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active.position-left .sidebar-widget{left:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active.position-right .bg-overlay{left:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active.position-right .sidebar-widget{right:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active.position-top .bg-overlay{bottom:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active.position-top .sidebar-widget{top:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active.position-bottom .bg-overlay{top:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active.position-bottom .sidebar-widget{bottom:0}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active .sidebar-widget{visibility:visible;opacity:1}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active .widget-container{top:0;opacity:1;visibility:visible}.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active .bg-overlay{visibility:visible;-webkit-transition:all .8s ease-out 0s;transition:all .8s ease-out 0s;left:0;opacity:1}.jeg-elementor-kit.jkit-off-canvas .offcanvas-close-button,.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar-button{display:inline-block;position:relative;color:var(--jkit-txt-color);line-height:1;text-align:center}.jeg-elementor-kit.jkit-off-canvas .offcanvas-close-button svg,.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar-button svg{fill:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-off-canvas .offcanvas-close-button.hover-gradient,.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar-button.hover-gradient{overflow:hidden}.jeg-elementor-kit.jkit-off-canvas .offcanvas-close-button.hover-gradient span,.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar-button.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-off-canvas .offcanvas-close-button.hover-gradient:before,.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar-button.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-off-canvas .offcanvas-close-button.hover-gradient:hover:before,.jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar-button.hover-gradient:hover:before{opacity:1}body[class*=jkit-offcanvas-hide-scroll-]{overflow:hidden}.jkit-close-position-absolute .jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar .widget-container{position:absolute;width:inherit;min-height:inherit}.jkit-close-position-absolute .jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar .widget-container .widget-heading{position:absolute;z-index:20}.admin-bar .jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active:not(.position-bottom) .sidebar-widget{top:32px}@media screen and (max-width:782px){.admin-bar .jeg-elementor-kit.jkit-off-canvas .offcanvas-sidebar.active:not(.position-bottom) .sidebar-widget{top:46px}}.jeg-elementor-kit.jkit-pie-chart{text-align:center;position:relative;overflow:hidden}.jeg-elementor-kit.jkit-pie-chart canvas{display:inline-block;position:relative;z-index:2}.jeg-elementor-kit.jkit-pie-chart canvas.background-canvas{position:absolute;top:0;left:0;z-index:1}.jeg-elementor-kit.jkit-pie-chart .pie-chart-wrapper{position:relative;display:inline-block}.jeg-elementor-kit.jkit-pie-chart .pie-chart-content{display:inline-block;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:100%;text-align:center;font-size:28px;font-weight:700;line-height:1;z-index:3}.jeg-elementor-kit.jkit-pie-chart .pie-chart-content svg{width:28px}.jeg-elementor-kit.jkit-pie-chart .chart-front,.jeg-elementor-kit.jkit-pie-chart .content-back{-webkit-transition:all .4s ease;transition:all .4s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-backface-visibility:hidden;backface-visibility:hidden}.jeg-elementor-kit.jkit-pie-chart .content-back{position:absolute;top:0;left:0;height:100%;width:100%;padding:15px 50px;-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0;visibility:hidden;overflow:hidden;background:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-pie-chart:hover .chart-front{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0;visibility:hidden}.jeg-elementor-kit.jkit-pie-chart:hover .content-back{-webkit-transform:translateY(0);transform:translateY(0);opacity:1;visibility:visible}.jeg-elementor-kit.jkit-pie-chart .chart-float{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jeg-elementor-kit.jkit-portfolio-gallery .portfolio-gallery-container{position:relative;overflow:hidden}.jeg-elementor-kit.jkit-portfolio-gallery .row-items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.jeg-elementor-kit.jkit-portfolio-gallery .gallery-items{display:-webkit-box;display:-ms-flexbox;display:flex}.jeg-elementor-kit.jkit-portfolio-gallery .row-item{height:90vh;padding:0;position:relative;z-index:2;border-right:1px solid rgba(255,255,255,.3);-webkit-transition:all .4s ease;transition:all .4s ease;-ms-flex:0 0 20%;-webkit-box-flex:0;flex:0 0 20%;max-width:20%}.jeg-elementor-kit.jkit-portfolio-gallery .row-item:hover .row-item-info:after{height:100%}.jeg-elementor-kit.jkit-portfolio-gallery .row-item:hover .row-item-more{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}.jeg-elementor-kit.jkit-portfolio-gallery .row-item.current-item:before{position:absolute;content:"";top:0;left:0;height:100%;width:100%;z-index:1;background:rgba(0,0,0,.1)}.jeg-elementor-kit.jkit-portfolio-gallery .row-item-info{padding:40px 10px 40px 20px;position:relative;z-index:2;-webkit-transition:all .4s;transition:all .4s;overflow:hidden}.jeg-elementor-kit.jkit-portfolio-gallery .row-item-info .info-title{font-size:21px}.jeg-elementor-kit.jkit-portfolio-gallery .row-item-info .info-subtitle{font-size:11px;font-weight:400;letter-spacing:4px;text-transform:uppercase;margin-bottom:10px}.jeg-elementor-kit.jkit-portfolio-gallery .row-item-info:after{content:"";position:absolute;top:0;left:0;width:100%;height:0;background:#fff;z-index:-1;-webkit-transition:all .4s;transition:all .4s}.jeg-elementor-kit.jkit-portfolio-gallery .row-item-more{position:absolute;bottom:0;left:0;color:#fff;width:100%;padding:25px;font-size:13px;letter-spacing:1px;text-transform:uppercase;opacity:0;-webkit-transform:translateY(20%);transform:translateY(20%);-webkit-transition:all .4s ease;transition:all .4s ease;z-index:2}.jeg-elementor-kit.jkit-portfolio-gallery .row-item-more a{text-decoration:none}.jeg-elementor-kit.jkit-portfolio-gallery .row-item-more svg{width:13px}.jeg-elementor-kit.jkit-portfolio-gallery .image-item{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-transform:scale(1.1,1.1);transform:scale(1.1,1.1);-webkit-transition:all .7s ease;transition:all .7s ease;background-size:cover;background-position:center center}.jeg-elementor-kit.jkit-portfolio-gallery .image-item.current-item{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:1}.jeg-elementor-kit.jkit-post-author .post-author{display:inline-block}.jeg-elementor-kit.jkit-postblock .jkit-edit-post{position:absolute;top:0;z-index:5;color:var(--jkit-txt-alt-color,#fff);padding:4px 10px;font-size:12px;line-height:1.5em;background-color:rgba(0,0,0,.4);opacity:0;visibility:hidden;-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0);-webkit-transition:.25s ease;transition:.25s ease}.jeg-elementor-kit.jkit-postblock .jkit-edit-post i{margin-right:2px;opacity:.6}.jeg-elementor-kit.jkit-postblock .jkit-post-category{font-size:.75rem;font-weight:700;letter-spacing:.04em;margin-top:.5rem;margin-bottom:.5rem;display:inline-block}.jeg-elementor-kit.jkit-postblock .jkit-post-category a{color:var(--jkit-txt-a-color)}.jeg-elementor-kit.jkit-postblock .jkit-post-title{font-size:1rem;line-height:1.3;margin-top:.5rem;margin-bottom:.5rem}.jeg-elementor-kit.jkit-postblock .jkit-post-title a{color:var(--jkit-txt-h-color,#181d23)}.jeg-elementor-kit.jkit-postblock .jkit-post-excerpt{font-size:.875rem;margin-top:.5rem;margin-bottom:.5rem}.jeg-elementor-kit.jkit-postblock .jkit-post-excerpt p:last-child{margin-bottom:0}.jeg-elementor-kit.jkit-postblock .jkit-post-meta{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:.5rem;margin-bottom:.5rem;color:var(--jkit-txt-m-color,#96989b);font-size:.75rem}.jeg-elementor-kit.jkit-postblock .jkit-post-meta a{color:var(--jkit-txt-h-color,#181d23);text-transform:uppercase}.jeg-elementor-kit.jkit-postblock .jkit-post-meta>div:not(:only-child):not(:last-child):after{content:"•";margin:0 .5rem}.jeg-elementor-kit.jkit-postblock .jkit-post-meta svg{fill:var(--jkit-txt-m-color,#96989b);width:.75rem}.jeg-elementor-kit.jkit-postblock .jkit-post-meta-bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:.75rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:1.5rem}.jeg-elementor-kit.jkit-postblock .jkit-readmore{display:inline-block;color:var(--jkit-btn-txt-color,#fff);text-align:center;vertical-align:middle;background-color:var(--jkit-btn-bg-color,#0058e6);border:1px solid transparent;padding:.5rem .875rem;line-height:1.5;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:.2s ease;transition:.2s ease}.jeg-elementor-kit.jkit-postblock .jkit-readmore svg{fill:var(--jkit-btn-txt-color,#fff)}.jeg-elementor-kit.jkit-postblock .jkit-meta-comment a{color:var(--jkit-txt-h-color,#181d23)}.jeg-elementor-kit.jkit-postblock .jkit-meta-comment a svg{fill:var(--jkit-txt-h-color,#181d23)}.jeg-elementor-kit.jkit-postblock .jkit-posts{display:grid}.jeg-elementor-kit.jkit-postblock .jkit-post{margin-bottom:2rem}.jeg-elementor-kit.jkit-postblock .jkit-post:hover .jkit-edit-post{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1;visibility:visible}.jeg-elementor-kit.jkit-postblock .jkit-thumb{position:relative;overflow:hidden}.jeg-elementor-kit.jkit-postblock .jkit-thumb .thumbnail-container{display:block;position:relative;overflow:hidden;z-index:0;background:var(--jkit-border-color,#eaeaeb);background-position:50%;background-size:cover}.jeg-elementor-kit.jkit-postblock .jkit-thumb .thumbnail-container img{position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-o-object-fit:cover;object-fit:cover;color:var(--jkit-txt-alt-color,#fafcff);z-index:-1}.jeg-elementor-kit.jkit-postblock .jkit-thumb .thumbnail-container:before{content:"";display:block;position:absolute;top:0;left:0;right:0;width:100%;height:100%;z-index:1;background-color:transparent;-webkit-transition:all .2s ease;transition:all .2s ease}.jeg-elementor-kit.jkit-postblock.postblock-type-1 .jkit-post{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jeg-elementor-kit.jkit-postblock.postblock-type-1 .jkit-thumb{-webkit-box-flex:1;-ms-flex:1 0 50%;flex:1 0 50%}.jeg-elementor-kit.jkit-postblock.postblock-type-1 .jkit-postblock-content{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding-left:2rem}.jeg-elementor-kit.jkit-postblock.postblock-type-2 .jkit-post-category a{color:var(--jkit-txt-a-color)}.jeg-elementor-kit.jkit-postblock.postblock-type-2 .jkit-postblock-content{position:relative}.jeg-elementor-kit.jkit-postblock.postblock-type-3 .jkit-thumb{margin-bottom:1.5rem}.jeg-elementor-kit.jkit-postblock.postblock-type-3 .jkit-post-category{position:absolute;bottom:0;line-height:1;background:var(--jkit-bg-color,#fff);padding:1rem 1.5rem 0;margin-bottom:0;max-width:50%}.jeg-elementor-kit.jkit-postblock.postblock-type-3 .jkit-post-category.position-left{left:0;text-align:left}.jeg-elementor-kit.jkit-postblock.postblock-type-3 .jkit-post-category.position-center{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center}.jeg-elementor-kit.jkit-postblock.postblock-type-3 .jkit-post-category.position-right{right:0;text-align:right}.jeg-elementor-kit.jkit-postblock.postblock-type-4 .jkit-post{display:-webkit-box;display:-ms-flexbox;display:flex}.jeg-elementor-kit.jkit-postblock.postblock-type-4 .jkit-thumb{-webkit-box-flex:1;-ms-flex:1 0 64%;flex:1 0 64%;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.jeg-elementor-kit.jkit-postblock.postblock-type-4 .jkit-postblock-content{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.jeg-elementor-kit.jkit-postblock.postblock-type-4 .jkit-post-title{margin-right:-120px;position:relative;z-index:1}.jeg-elementor-kit.jkit-postblock.postblock-type-4 .jkit-post-title a{line-height:inherit;display:inline;padding:2px 2px 2px 0;background:var(--jeg-bg-color,#fff);white-space:pre-wrap;-webkit-box-decoration-break:clone;box-decoration-break:clone}.jeg-elementor-kit.jkit-postblock.postblock-type-5 .jkit-post-category a{color:var(--jkit-txt-a-color)}.jeg-elementor-kit.jkit-postblock.postblock-type-5 .jkit-post{position:relative;overflow:hidden}.jeg-elementor-kit.jkit-postblock.postblock-type-5 .jkit-post-category{margin-top:0;margin-bottom:0}.jeg-elementor-kit.jkit-postblock.postblock-type-5 .jkit-postblock-content{position:absolute;bottom:0;left:0;padding:30px}.jeg-elementor-kit.jkit-postblock .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge{display:inline-block;width:100%}.jeg-elementor-kit.jkit-postblock .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge .prev{float:left}.jeg-elementor-kit.jkit-postblock .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge .next{float:right}.jeg-elementor-kit.jkit-post-comment input[type=checkbox]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.jeg-elementor-kit.jkit-post-comment input[type=checkbox]:checked~label .checkmark{background-color:#0075ff}.jeg-elementor-kit.jkit-post-comment input[type=checkbox]:checked~label .checkmark>*{opacity:1;visibility:visible}.jeg-elementor-kit.jkit-post-comment input[type=checkbox]:checked~label .checkmark>i{color:#fff;font-size:12px}.jeg-elementor-kit.jkit-post-comment input[type=checkbox]:checked~label .checkmark>svg path{fill:#fff;width:12px}.jeg-elementor-kit.jkit-post-comment .checkmark{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:13px;width:13px;background-color:#fafafa;border:solid 1px #504e50}.jeg-elementor-kit.jkit-post-comment .checkmark>*{opacity:0;visibility:hidden}.jeg-elementor-kit.jkit-post-date .post-date{display:inline-block}.jeg-elementor-kit.jkit-post-excerpt .post-excerpt{display:inline-block}.jeg-elementor-kit.jkit-postlist article{overflow:hidden;position:relative}.jeg-elementor-kit.jkit-postlist article a{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all .4s ease;transition:all .4s ease;position:relative;color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-postlist article a:hover{color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-postlist article a img{z-index:2;position:relative;line-height:0}.jeg-elementor-kit.jkit-postlist article a svg{fill:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-postlist article a .jkit-postlist-content{z-index:2;width:100%}.jeg-elementor-kit.jkit-postlist article a .jkit-postlist-title{display:block;margin-bottom:0}.jeg-elementor-kit.jkit-postlist article a .meta-lists span{color:var(--jkit-txt-m-color);font-size:12px;display:inline-block;-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-postlist article a .meta-lists span svg{fill:var(--jkit-txt-m-color);width:12px}.jeg-elementor-kit.jkit-postlist article a .icon-list{text-align:center}.jeg-elementor-kit.jkit-postlist.layout-horizontal article a{display:-webkit-box;display:-ms-flexbox;display:flex}.jeg-elementor-kit.jkit-postlist.layout-horizontal .jkit-posts{display:grid}.jeg-elementor-kit.jkit-postlist.bg-image article a{background-size:cover;background-repeat:no-repeat;position:relative;background-position:center center;overflow:hidden}.jeg-elementor-kit.jkit-postlist.bg-image article a:after{content:"";background-color:rgba(34,34,34,.7);position:absolute;left:0;top:0;width:100%;height:100%;display:block;-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-postlist .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge{display:inline-block;width:100%}.jeg-elementor-kit.jkit-postlist .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge .prev{float:left}.jeg-elementor-kit.jkit-postlist .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge .next{float:right}.jeg-elementor-kit.jkit-post-terms .post-terms,.jeg-elementor-kit.jkit-post-terms .term-list{font-size:16px;font-weight:400}.jeg-elementor-kit.jkit-post-terms .term-list{display:inline-block}.jeg-elementor-kit.jkit-post-title .post-title{display:inline-block}.jeg-elementor-kit.jkit-product-carousel .woocommerce span.onsale{all:unset}.jeg-elementor-kit.jkit-product-carousel .woocommerce .star-rating::before{all:unset}.jeg-elementor-kit.jkit-product-carousel .woocommerce a.add_to_cart_button.ajax_add_to_cart.loading::after{top:unset}.jeg-elementor-kit.jkit-product-carousel .woocommerce .added_to_cart{display:none}.jeg-elementor-kit.jkit-product-carousel .jkit-products{padding:30px 0;text-align:center;font-family:Inter}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block{width:100%}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-image-block{position:relative;margin-bottom:13px}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-image-block .jkit-product-image{width:100%}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-image-block .onsale{z-index:1;font-size:10px;font-weight:500;color:#fff;width:55px;height:22px;position:absolute;line-height:19px;text-transform:uppercase;text-align:center;letter-spacing:.2em;background-color:#c6513c;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:9px;right:8px}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-image-block .onsale.percent{background-color:#2a3a48}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-image-block .onsale.jkit-onsale-position-left{right:auto;left:8px}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-image-block .onsale.jkit-onsale-position-top:nth-child(2){margin-top:calc(var(--jkit-onsale-height,19px) + var(--jkit-onsale-gap,5px))}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-image-block .onsale.jkit-onsale-position-bottom{top:auto;bottom:9px}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-image-block .onsale.jkit-onsale-position-bottom:nth-child(1){margin-bottom:calc(var(--jkit-onsale-height,19px) + var(--jkit-onsale-gap,5px))}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-rating{display:flow-root;margin-bottom:13px}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-rating .star-rating{margin-left:var(--rating-margin-left,auto);margin-right:var(--rating-margin-right,auto);font-size:13px;font-family:star;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;letter-spacing:.3em;color:#d5c644}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-rating .star-rating:before{content:"sssss";float:left;top:0;left:0;color:#d4c644}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-rating .star-rating span{overflow:hidden;position:absolute;padding-top:1.5em;float:left;left:0}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-rating .star-rating span:before{content:"SSSSS";top:0;left:0;position:absolute}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .price{font-size:16px;font-weight:600;line-height:20px;color:#19190e;display:block;margin-bottom:13px;word-spacing:10px}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .price del{font-size:14px;font-weight:400;color:#c6c6c6}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .price ins{text-decoration-line:none}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .product-title{font-family:inherit;font-size:22px;line-height:27px;margin-top:0;margin-bottom:13px}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .product-title a{color:inherit}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-categories{font-size:12px;font-weight:400;line-height:15px;letter-spacing:5px;margin-right:-5px;text-transform:uppercase;color:#1a190e;margin-bottom:13px;display:block}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .jkit-product-categories a{color:inherit}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .button{font-style:normal;font-weight:500;font-size:14px;line-height:17px;text-align:center;text-transform:capitalize;text-decoration:none;margin-top:16px;overflow:visible;padding:15px 27px;border-radius:3px;left:auto;color:#515151;background-color:#ebe9eb;border:0;display:inline-block;background-image:none;-webkit-box-shadow:none;box-shadow:none;text-shadow:none}.jeg-elementor-kit.jkit-product-carousel .jkit-products .jkit-product-block .button i{font-size:12px}.jeg-elementor-kit.jkit-product-carousel .tns-nav{text-align:center}.jeg-elementor-kit.jkit-product-carousel .tns-nav button{width:9px;height:9px;padding:0;margin:0 5px;border-radius:50%;background:var(--jkit-txt-m-color);border:0}.jeg-elementor-kit.jkit-product-carousel .tns-nav button.tns-nav-active{background:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-product-carousel .tns-controls button{color:var(--jkit-txt-color);border:0;background:0 0}.jeg-elementor-kit.jkit-product-carousel .tns-controls button i,.jeg-elementor-kit.jkit-product-carousel .tns-controls button svg{-webkit-transition:all .25s ease;transition:all .25s ease}.jeg-elementor-kit.jkit-product-carousel .tns-controls button svg{fill:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-product-carousel.arrow-bottom-middle .tns-controls{text-align:center}.jeg-elementor-kit.jkit-product-carousel.arrow-bottom-middle .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-product-carousel.arrow-bottom-middle .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-product-carousel.arrow-bottom-edge .tns-controls button[data-controls=next]{display:inline-block;position:absolute;right:0}.jeg-elementor-kit.jkit-product-carousel.arrow-middle-edge .tns-controls button{display:inline-block;position:absolute;top:50%;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);z-index:2}.jeg-elementor-kit.jkit-product-carousel.arrow-middle-edge .tns-controls button[data-controls=prev]{left:-96px}.jeg-elementor-kit.jkit-product-carousel.arrow-middle-edge .tns-controls button[data-controls=next]{right:-96px}@media (max-width:1024px){.jeg-elementor-kit.jkit-product-carousel.arrow-middle-edge .tns-controls button{background:var(--jkit-btn-txt-color,#fff);padding:0;line-height:1.7}.jeg-elementor-kit.jkit-product-carousel.arrow-middle-edge .tns-controls button i{line-height:inherit}.jeg-elementor-kit.jkit-product-carousel.arrow-middle-edge .tns-controls button[data-controls=prev]{left:0}.jeg-elementor-kit.jkit-product-carousel.arrow-middle-edge .tns-controls button[data-controls=next]{right:0}}.jeg-elementor-kit.jkit-product-carousel.arrow-top-right .tns-controls{text-align:right}.jeg-elementor-kit.jkit-product-carousel.arrow-top-right .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-product-carousel.arrow-top-right .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-product-carousel.arrow-top-left .tns-controls{text-align:left}.jeg-elementor-kit.jkit-product-carousel.arrow-top-left .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-product-carousel.arrow-top-left .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-product-categories .jkit-product-category a{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all .4s ease;transition:all .4s ease;position:relative}.jeg-elementor-kit.jkit-product-categories .jkit-product-category a .jkit-product-category-content{color:#969696;font-weight:600}.jeg-elementor-kit.jkit-product-categories .jkit-product-category a .jkit-product-category-content .jkit-product-category-count{color:#000;font-weight:700}.jeg-elementor-kit.jkit-product-categories .jkit-product-category a .jkit-category-thumbnail{overflow:hidden}.jeg-elementor-kit.jkit-product-categories.content-position-before:not(.jeg-elementor-kit.jkit-product-categories.layout-horizontal.text-layout-vertical) .jkit-category-thumbnail{margin-left:20px}.jeg-elementor-kit.jkit-product-categories.content-position-after:not(.jeg-elementor-kit.jkit-product-categories.layout-horizontal.text-layout-vertical) .jkit-category-thumbnail{margin-right:20px}.jeg-elementor-kit.jkit-product-categories.layout-vertical .jkit-product-category{margin-top:45px;margin-bottom:45px}.jeg-elementor-kit.jkit-product-categories.layout-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.jeg-elementor-kit.jkit-product-categories.layout-horizontal.text-layout-vertical .jkit-product-category{margin-right:22.5px;margin-left:22.5px;text-align:center}.jeg-elementor-kit.jkit-product-categories.layout-horizontal.text-layout-vertical .jkit-product-category a{display:block}.jeg-elementor-kit.jkit-product-categories.layout-horizontal.text-layout-horizontal .jkit-product-category{margin-right:7.5px;margin-left:7.5px}.jeg-elementor-kit.jkit-product-categories.display-grid{display:grid;grid-template-columns:repeat(var(--product-grid-column,4),1fr);grid-column-gap:20px;grid-row-gap:40px}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products{display:grid;grid-template-columns:repeat(var(--product-grid-column,4),1fr);grid-column-gap:20px;grid-row-gap:40px;margin:unset}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products::before{content:unset}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block{width:100%;margin:unset}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .product-link{position:relative;display:block}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .product-categories a{font-weight:400;text-transform:uppercase;letter-spacing:.35em;font-size:12px;color:#1a190e}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .product-categories span{margin-right:5px;margin-left:-3px}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .product-title{font-weight:700;font-size:22px;line-height:27px;margin-bottom:10px}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .product-title a{color:#1a190e}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .price{font-size:16px;font-weight:600;line-height:20px;color:#19190e;margin-bottom:12px;word-spacing:10px}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .price del{font-size:14px;color:#c6c6c6}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .price ins{text-decoration:none}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .onsale{width:55px;height:22px;background:#2a3a48;color:#fff;text-transform:uppercase;font-weight:500;font-size:10px;border-radius:0;min-height:unset;min-width:unset;line-height:19px;padding:0;letter-spacing:.2em;margin:0;top:9px;right:8px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .onsale.text{background:#c6513c;color:#fff}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .onsale.jkit-onsale-position-top:nth-child(2){margin-top:calc(var(--jkit-onsale-height,19px) + var(--jkit-onsale-gap,5px))!important}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .onsale.jkit-onsale-position-left{right:auto;left:8px}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .onsale.jkit-onsale-position-bottom{top:auto;bottom:9px}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .onsale.jkit-onsale-position-bottom.percent{margin-bottom:calc(var(--jkit-onsale-height,19px) + var(--jkit-onsale-gap,5px))!important}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .star-rating{margin-left:var(--rating-margin-left,auto);margin-right:var(--rating-margin-right,auto);color:#d4c644;width:6.8em;letter-spacing:.3em}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .star-rating::before{color:#d4c644}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .button{text-transform:capitalize;font-weight:500;font-size:14px;line-height:17px;color:#000;border-radius:0;padding:15px 30px;margin-top:1.5em}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .button i{font-size:12px;margin-right:3px;top:-1px;position:relative}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block a.add_to_cart_button.ajax_add_to_cart.loading::after{top:unset}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-product-block .added_to_cart{display:none}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-align-center{text-align:center}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-align-center .star-rating{margin-left:auto;margin-right:auto}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-align-right{text-align:right}.jeg-elementor-kit.jkit-product-grid .woocommerce .jkit-products .jkit-align-right .star-rating{margin-left:auto;margin-right:0}.jeg-elementor-kit.jkit-product-grid .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge{display:inline-block;width:100%}.jeg-elementor-kit.jkit-product-grid .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge .prev{float:left}.jeg-elementor-kit.jkit-product-grid .jkit-block-pagination .jkit-block-nextprev.jkit-nextprev-edge .next{float:right}.jeg-elementor-kit.jkit-product-grid .product-order{position:relative}.jeg-elementor-kit.jkit-product-grid .product-order .orderby{-webkit-appearance:none;-moz-appearance:none;appearance:none}.jeg-elementor-kit.jkit-product-grid .product-order::before{content:"\f874";font-family:jkiticon;font-size:1rem;position:absolute;top:25%;right:16px}.jeg-elementor-kit.jkit-progress-bar .progress-group .progress-skill-bar .skill-bar-content{margin-bottom:7px}.jeg-elementor-kit.jkit-progress-bar .progress-group .progress-skill-bar .skill-bar-content .skill-title{font-weight:700;color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group .progress-skill-bar .skill-bar{height:3px;background-color:var(--jkit-element-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group .progress-skill-bar .skill-bar .skill-track{width:0;background-color:var(--jkit-element-darken-bg-color);display:block;height:100%;overflow:visible!important;position:relative}.jeg-elementor-kit.jkit-progress-bar .progress-group .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;right:0;top:-33px;z-index:1}.jeg-elementor-kit.jkit-progress-bar .progress-group .progress-skill-bar .number-percentage{color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar{position:relative}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar .skill-bar-content{position:absolute;z-index:1;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-bottom:0;padding-left:30px}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar .skill-bar-content .skill-title{color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar .skill-bar{height:35px}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar .skill-bar .skill-track .skill-track-icon{position:absolute;right:19px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar .skill-bar .skill-track .skill-track-icon+.number-percentage-wrapper{padding-right:57px}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar .skill-bar .skill-track .skill-track-icon svg{fill:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:var(--jkit-bg-color);padding-right:30px}.jeg-elementor-kit.jkit-progress-bar .progress-group.inner-content .progress-skill-bar .number-percentage{color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.bar-shadow .progress-skill-bar .skill-bar{height:30px;background-color:var(--jkit-form-bg-color);padding:10px;-webkit-box-shadow:0 0 20px 0 rgba(0,0,0,.25);-o-box-shadow:0 0 20px 0 rgba(0,0,0,.25);box-shadow:0 0 20px 0 rgba(0,0,0,.25);border-radius:15px}.jeg-elementor-kit.jkit-progress-bar .progress-group.bar-shadow .progress-skill-bar .skill-bar .skill-track{height:100%;border-radius:5px}.jeg-elementor-kit.jkit-progress-bar .progress-group.bar-shadow .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper{top:-39px}.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-style .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper{height:24px;line-height:24px;display:inline-block;color:var(--jkit-bg-color);font-size:13px;background-color:var(--jkit-txt-color);text-align:center;padding:0 11px;border-radius:4.32px;border-bottom-right-radius:0}.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-style .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper:before{position:absolute;content:"";right:0;bottom:-8px;color:var(--jkit-txt-color);border-top:solid currentColor;border-right:solid currentColor;border-left:solid transparent;border-bottom:solid transparent;border-width:4px}.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-style .progress-skill-bar .number-percentage{color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.stripe .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper,.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-box .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper,.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-rounded .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper{height:22px;padding:0 8px;background-color:var(--jkit-txt-color);text-align:center;font-size:13px;color:#fff;z-index:1;right:-20px;top:-31px}.jeg-elementor-kit.jkit-progress-bar .progress-group.stripe .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper:before,.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-box .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper:before,.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-rounded .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper:before{position:absolute;content:"";bottom:-6px;left:50%;-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);width:14px;height:14px;background-color:var(--jkit-txt-color);z-index:-1}.jeg-elementor-kit.jkit-progress-bar .progress-group.stripe .progress-skill-bar .number-percentage,.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-box .progress-skill-bar .number-percentage,.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-rounded .progress-skill-bar .number-percentage{color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.stripe .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper,.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-rounded .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper{border-radius:8px}.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-circle .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper{width:35px;height:35px;line-height:35px;border-radius:50%;background-color:var(--jkit-txt-color);color:#fff;text-align:center;font-size:13px;right:calc(0% - 15.5px);top:-39.9px}.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-circle .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper:before{position:absolute;content:"";bottom:-5px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:3px;height:5px;background-color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.tooltip-circle .progress-skill-bar .number-percentage{color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.switch .progress-skill-bar .skill-bar-content{margin-bottom:18px}.jeg-elementor-kit.jkit-progress-bar .progress-group.switch .progress-skill-bar .content-group{width:calc(100% - 50px);display:inline-block}.jeg-elementor-kit.jkit-progress-bar .progress-group.switch .progress-skill-bar .content-group .skill-bar .skill-track:after{position:absolute;content:"";border-radius:50%;color:var(--jkit-txt-color);width:8px;height:8px;background-color:var(--jkit-txt-color);top:-3px;right:8px}.jeg-elementor-kit.jkit-progress-bar .progress-group.switch .progress-skill-bar .content-group .skill-bar .skill-track:before{position:absolute;content:"";right:0;border-radius:50%;color:var(--jkit-txt-color);top:-12.5px;width:25px;height:25px;-webkit-box-shadow:-1.216px 6.894px 15px 0 rgba(0,0,0,.07),inset 0 2px 3px 0 rgba(0,0,0,.2);-o-box-shadow:-1.216px 6.894px 15px 0 rgba(0,0,0,.07),inset 0 2px 3px 0 rgba(0,0,0,.2);box-shadow:-1.216px 6.894px 15px 0 rgba(0,0,0,.07),inset 0 2px 3px 0 rgba(0,0,0,.2);background-color:#fff;border:1px solid var(--jkit-txt-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.switch .progress-skill-bar .number-percentage-wrapper{float:right;position:relative;top:31px}.jeg-elementor-kit.jkit-progress-bar .progress-group.ribbon .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper{height:35px;line-height:35px;color:#fff;background-color:var(--jkit-txt-color);text-align:center;padding:0 8px;top:-10px;z-index:1}.jeg-elementor-kit.jkit-progress-bar .progress-group.ribbon .progress-skill-bar .skill-bar .skill-track .number-percentage-wrapper:before{position:absolute;content:"";top:0;left:-10px;color:#1a1a1a;border-top:solid rgba(0,0,0,0);border-left:solid rgba(0,0,0,0);border-right:solid currentColor;border-bottom:solid currentColor;border-width:5px}.jeg-elementor-kit.jkit-progress-bar .progress-group.ribbon .progress-skill-bar .number-percentage{color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-progress-bar .progress-group.stripe .progress-skill-bar .skill-bar{height:10px}.jeg-elementor-kit.jkit-progress-bar .progress-group.stripe .progress-skill-bar .skill-bar .skill-track{background:repeating-linear-gradient(to right,var(--jkit-txt-color),var(--jkit-txt-color) 4px,var(--jkit-bg-color) 4px,var(--jkit-bg-color) 8px)}.jeg-elementor-kit.jkit-search .jkit-search-modal{display:inline-block;background:0 0;border:0;padding:0;margin:0;color:inherit;cursor:pointer;font:inherit;line-height:1;text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.jeg-elementor-kit.jkit-search .jkit-search-modal:focus{outline:2px solid currentColor;outline-offset:2px}.jeg-elementor-kit.jkit-search .jkit-modal-search-panel-wrapper{display:none}.jeg-elementor-kit.jkit-search .jkit-modal-search-panel{opacity:0;-webkit-transition:all 1s ease .8s;transition:all 1s ease .8s;-webkit-transform:translateY(-500px);transform:translateY(-500px);position:relative;top:50%}.jeg-elementor-kit.jkit-search .jkit-modal-search-panel .jkit-search-panel{max-width:800px;margin:0 auto}.jeg-elementor-kit.jkit-search .jkit-modal-search-panel .jkit-search-panel input:not([type=submit]){border-radius:50px;color:var(--jkit-border-color)}.jeg-elementor-kit.jkit-search>.jkit-search-panel{display:inline-block;max-width:100%}.jeg-elementor-kit.jkit-search .jkit-search-panel .jkit-search-group{position:relative}.jeg-elementor-kit.jkit-search .jkit-search-panel input:not([type=submit]){height:70px;background-color:transparent;border:2px solid var(--jkit-border-color);padding:0 30px;width:100%;outline:0}.jeg-elementor-kit.jkit-search .jkit-search-panel .jkit-search-button{background:unset;-webkit-box-shadow:unset;box-shadow:unset;border:unset;background-color:transparent;border:0;padding:0;color:var(--jkit-border-color);cursor:pointer;height:100%;width:70px;position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.jeg-elementor-kit.jkit-search .swal2-container{background-color:transparent!important;overflow:hidden!important;padding:0}.jeg-elementor-kit.jkit-search .swal2-container .swal2-close{background-color:transparent;color:var(--jkit-border-color);-webkit-box-shadow:none;box-shadow:none;-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-transition:all .4s ease;transition:all .4s ease;opacity:0;position:absolute;top:65px;height:44px;width:44px;padding:0}.jeg-elementor-kit.jkit-search .swal2-container .swal2-html-container,.jeg-elementor-kit.jkit-search .swal2-container .swal2-popup{background:0 0;width:100vw;height:100vh;margin:0;padding:0}.jeg-elementor-kit.jkit-search .swal2-container:before{content:"";top:0;left:0;width:100%;height:100%;overflow:hidden;position:fixed;opacity:.8;background-color:rgba(0,0,0,.87);padding-bottom:100%;border-radius:100%;-webkit-animation:jkit-search-background .8s ease-out forwards;animation:jkit-search-background .8s ease-out forwards}.jeg-elementor-kit.jkit-search .swal2-container.shown .jkit-modal-search-panel,.jeg-elementor-kit.jkit-search .swal2-container.shown .swal2-close{opacity:1;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.jeg-elementor-kit.jkit-search input[type=search]::-ms-clear{display:none;width:0;height:0}.jeg-elementor-kit.jkit-search input[type=search]::-ms-reveal{display:none;width:0;height:0}.jeg-elementor-kit.jkit-search input[type=search]::-webkit-search-cancel-button,.jeg-elementor-kit.jkit-search input[type=search]::-webkit-search-decoration,.jeg-elementor-kit.jkit-search input[type=search]::-webkit-search-results-button,.jeg-elementor-kit.jkit-search input[type=search]::-webkit-search-results-decoration{display:none}.jeg-elementor-kit.jkit-search svg{-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-search .hover-gradient{overflow:hidden;position:relative}.jeg-elementor-kit.jkit-search .hover-gradient i,.jeg-elementor-kit.jkit-search .hover-gradient svg{position:relative;z-index:1}.jeg-elementor-kit.jkit-search .hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-search .hover-gradient:hover:before{opacity:1}body.admin-bar .jeg-elementor-kit.jkit-search .swal2-close{top:97px}@media screen and (max-width:768px){body.admin-bar .jeg-elementor-kit.jkit-search .swal2-close{top:111px}}.jeg-elementor-kit.jkit-social-share{width:100%;--icon-size:16px}.jeg-elementor-kit.jkit-social-share .social-share-list{margin-left:0;padding-left:0;list-style:none}.jeg-elementor-kit.jkit-social-share .social-share-list>li a{display:block;cursor:pointer;overflow:hidden;position:relative}.jeg-elementor-kit.jkit-social-share .social-share-list>li a i{font-size:var(--icon-size)}.jeg-elementor-kit.jkit-social-share .social-share-list>li a svg{width:var(--icon-size)}.jeg-elementor-kit.jkit-social-share .social-share-list>li a.hover-gradient{overflow:hidden}.jeg-elementor-kit.jkit-social-share .social-share-list>li a.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-social-share .social-share-list>li a.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-social-share .social-share-list>li:hover a.hover-gradient:before{opacity:1}.jeg-elementor-kit.jkit-social-share .social-share-list>li i,.jeg-elementor-kit.jkit-social-share .social-share-list>li svg{vertical-align:middle;display:inline-block}.jeg-elementor-kit.jkit-tabs .tab-nav-list{position:relative;padding:0;margin:0 auto;list-style-type:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;z-index:1}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav{position:relative;padding:1em 1.5em;cursor:pointer;display:grid;justify-items:start;grid-template-areas:"tab-icon tab-title" ". tab-content" ". tab-content";-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;background-color:var(--jkit-border-color)}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav:hover{background-color:var(--jkit-element-bg-color);color:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav:hover>i{color:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav:hover>svg{fill:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav.active{background-color:var(--jkit-element-darken-bg-color);color:var(--jkit-txt-alt-color);cursor:default}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav.active>i{color:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav.active>svg{fill:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav.toggle-tab .tab-content{display:none}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav img,.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav svg{width:16px;height:auto}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav>i,.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav>img,.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav>svg{grid-area:tab-icon;z-index:1}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav .tab-title{grid-area:tab-title;z-index:1}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav .tab-content{grid-area:tab-content;z-index:1}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav .tab-description{grid-area:tab-description}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav .tab-button{grid-area:tab-button;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-column-gap:20px;-moz-column-gap:20px;column-gap:20px}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav.hover-gradient{overflow:hidden}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-tabs .tab-nav-list .tab-nav.hover-gradient:hover:before{opacity:1}.jeg-elementor-kit.jkit-tabs .tab-nav-list.icon-position-after .tab-nav{grid-template-areas:"tab-title tab-icon" "tab-content ." "tab-content ."}.jeg-elementor-kit.jkit-tabs .tab-nav-list.icon-position-top .tab-nav{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.jeg-elementor-kit.jkit-tabs .tab-nav-list.icon-position-top .tab-title{-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;line-height:1}.jeg-elementor-kit.jkit-tabs .tab-nav-list.caret-on .tab-nav.active::after{content:"";position:absolute;bottom:-10px;left:0;right:0;margin:0 auto;z-index:1;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid var(--jkit-element-darken-bg-color);border-bottom:0}.jeg-elementor-kit.jkit-tabs .tab-nav-list.fade .tab-nav,.jeg-elementor-kit.jkit-tabs .tab-nav-list.over .tab-nav,.jeg-elementor-kit.jkit-tabs .tab-nav-list.slide .tab-nav{-webkit-transition:color .3s ease-in-out,background-color .3s ease-in-out;transition:color .3s ease-in-out,background-color .3s ease-in-out}.jeg-elementor-kit.jkit-tabs .tab-nav-list.fade .tab-nav:hover i,.jeg-elementor-kit.jkit-tabs .tab-nav-list.over .tab-nav:hover i,.jeg-elementor-kit.jkit-tabs .tab-nav-list.slide .tab-nav:hover i{-webkit-transition:color .3s ease-in-out,background-color .3s ease-in-out;transition:color .3s ease-in-out,background-color .3s ease-in-out}.jeg-elementor-kit.jkit-tabs .tab-nav-list.slide .tab-nav{overflow:hidden}.jeg-elementor-kit.jkit-tabs .tab-nav-list.slide .tab-nav:before{background-color:var(--jkit-element-darken-bg-color);content:"";height:100%;width:0%;display:block;position:absolute;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;left:0}.jeg-elementor-kit.jkit-tabs .tab-nav-list.slide .tab-nav.active{background-color:unset}.jeg-elementor-kit.jkit-tabs .tab-nav-list.slide .tab-nav.active:before{width:100%}.jeg-elementor-kit.jkit-tabs .tab-nav-list.slide .tab-nav.right:before{left:auto;right:0}.jeg-elementor-kit.jkit-tabs .tab-nav-list.over .tab-nav-cloned{display:block;position:absolute;top:0;left:0;height:100%;background-color:var(--jkit-element-darken-bg-color);opacity:0}@media screen and (max-width:768px){.jeg-elementor-kit.jkit-tabs .tab-nav-list.over .tab-nav-cloned{height:auto}}.jeg-elementor-kit.jkit-tabs .tab-nav-list.over.moving .tab-nav-cloned{-webkit-transition:left .3s,top .3s;transition:left .3s,top .3s}.jeg-elementor-kit.jkit-tabs .tab-content-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.jeg-elementor-kit.jkit-tabs .tab-content-list .tab-content{display:none;opacity:0;width:100%;padding:1em;-webkit-animation:fadeIn linear .3s;animation:fadeIn linear .3s}.jeg-elementor-kit.jkit-tabs .tab-content-list .tab-content.active{display:block;opacity:1}.jeg-elementor-kit.jkit-tabs.layout-vertical{display:-webkit-box;display:-ms-flexbox;display:flex}.jeg-elementor-kit.jkit-tabs.layout-vertical .tab-navigation{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.jeg-elementor-kit.jkit-tabs.layout-vertical .tab-nav-list{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}.jeg-elementor-kit.jkit-tabs.layout-vertical .tab-nav-list .tab-nav{width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.jeg-elementor-kit.jkit-tabs.layout-vertical .tab-nav-list.slide .tab-nav:before{height:0;width:100%;top:0}.jeg-elementor-kit.jkit-tabs.layout-vertical .tab-nav-list.slide .tab-nav.active:before{height:100%}.jeg-elementor-kit.jkit-tabs.layout-vertical .tab-nav-list.slide .tab-nav.right:before{top:auto;bottom:0}.jeg-elementor-kit.jkit-tabs.layout-vertical .tab-nav-list.caret-on .tab-nav.active::after{bottom:auto!important;right:-10px;top:calc(50% - 10px);left:auto!important;border-left:10px solid var(--jkit-element-darken-bg-color);border-right:0;border-top:10px solid transparent;border-bottom:10px solid transparent}.jeg-elementor-kit.jkit-team{text-align:center}.jeg-elementor-kit.jkit-team.style-default .profile-card,.jeg-elementor-kit.jkit-team.style-hover-social .profile-card{background-color:var(--jkit-bg-color);-webkit-box-shadow:0 28px 40px 0 var(--jkit-form-border-color);box-shadow:0 28px 40px 0 var(--jkit-form-border-color);padding:40px 20px;-webkit-transition:all .4s ease;transition:all .4s ease;position:relative;overflow:hidden}.jeg-elementor-kit.jkit-team.style-default .profile-card .profile-header,.jeg-elementor-kit.jkit-team.style-hover-social .profile-card .profile-header{margin-bottom:38px;position:relative;display:inline-block;max-width:100%;line-height:0}.jeg-elementor-kit.jkit-team.style-default .profile-card .profile-header img,.jeg-elementor-kit.jkit-team.style-hover-social .profile-card .profile-header img{-o-object-fit:cover;object-fit:cover;width:160px;height:160px}.jeg-elementor-kit.jkit-team.style-default .profile-card:before,.jeg-elementor-kit.jkit-team.style-hover-social .profile-card:before{position:absolute;content:"";top:0;left:0;height:100%;width:100%;opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;background-size:101% 102%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.jeg-elementor-kit.jkit-team.style-default .profile-body,.jeg-elementor-kit.jkit-team.style-default .profile-footer{position:relative;z-index:2}.jeg-elementor-kit.jkit-team.style-hover-social .profile-body{padding:35px 20px;position:relative;-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-team.style-hover-social .profile-body:before{position:absolute;content:"";top:0;left:0;height:100%;width:100%;background-color:var(--jkit-element-lighten-bg-color);opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;z-index:-1;background-size:101% 102%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.jeg-elementor-kit.jkit-team.style-hover-social .social-list{-webkit-transition:all .4s ease;transition:all .4s ease;visibility:hidden;opacity:0}.jeg-elementor-kit.jkit-team.style-hover-social:hover .profile-body{-webkit-transform:translateY(-50px);transform:translateY(-50px)}.jeg-elementor-kit.jkit-team.style-hover-social:hover .profile-body:before{opacity:1}.jeg-elementor-kit.jkit-team.style-hover-social:hover .social-list{visibility:visible;opacity:1}.jeg-elementor-kit.jkit-team.style-overlay.overlay-scale .profile-card:before{top:0}.jeg-elementor-kit.jkit-team.style-overlay.overlay-scale .profile-card:hover:before{-webkit-transform:scale(.9);transform:scale(.9)}.jeg-elementor-kit.jkit-team.style-overlay .profile-card{position:relative;overflow:hidden;display:inline-block}.jeg-elementor-kit.jkit-team.style-overlay .profile-card>img{width:100%;height:auto;-o-object-fit:cover;object-fit:cover;display:block}.jeg-elementor-kit.jkit-team.style-overlay .profile-card .hover-area{position:absolute;z-index:2;width:100%;opacity:0;visibility:hidden;-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-team.style-overlay .profile-card .hover-area.alignment-center{top:50%;-webkit-transform:translateY(-20%);transform:translateY(-20%)}.jeg-elementor-kit.jkit-team.style-overlay .profile-card .hover-area.alignment-bottom{bottom:0;-webkit-transform:translateY(30%);transform:translateY(30%)}.jeg-elementor-kit.jkit-team.style-overlay .profile-card:before{position:absolute;content:"";top:100%;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.7);-webkit-transition:all .4s ease;transition:all .4s ease;z-index:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:0;visibility:hidden}.jeg-elementor-kit.jkit-team.style-overlay .profile-card:hover:before{top:0;opacity:1;visibility:visible}.jeg-elementor-kit.jkit-team.style-overlay .profile-card:hover .hover-area{opacity:1;visibility:visible}.jeg-elementor-kit.jkit-team.style-overlay .profile-card:hover .hover-area.alignment-center{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.jeg-elementor-kit.jkit-team.style-overlay .profile-card:hover .hover-area.alignment-bottom{-webkit-transform:translateY(0);transform:translateY(0)}.jeg-elementor-kit.jkit-team.style-overlay .profile-card .profile-title{color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-team.style-overlay .profile-card .profile-title a{color:var(--jkit-bg-color)}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-card{line-height:0;position:relative;overflow:hidden;text-align:center;-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-card img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-card .image-hover-bg{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);-webkit-transition:all .4s ease;transition:all .4s ease;opacity:0;visibility:hidden;z-index:0}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-card:hover .image-hover-bg{opacity:1;visibility:visible}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-body{position:absolute;top:0;left:0;width:100%;height:100%;padding:30px 15px;-js-display:flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-body .title-wrapper{position:relative;-js-display:flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-body .profile-designation{-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;font-size:1.5rem;line-height:1;margin:0;opacity:0}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-body .profile-content{line-height:1.5}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-body .profile-title{font-size:2rem;font-weight:700;line-height:1}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-body .name-wrapper{-js-display:flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-body .name-wrapper .social-list{-js-display:flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-transform:translateY(20px);transform:translateY(20px);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0}.jeg-elementor-kit.jkit-team.style-title-horizontal .profile-body .name-wrapper .social-list .social-icon:not(:last-child){margin-right:0;margin-bottom:10px}.jeg-elementor-kit.jkit-team.style-title-horizontal:hover .profile-body .profile-designation{opacity:1}.jeg-elementor-kit.jkit-team.style-title-horizontal:hover .name-wrapper .social-list{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.jeg-elementor-kit.jkit-team .profile-box .profile-card{padding:20px 20px 40px;z-index:1}.jeg-elementor-kit.jkit-team .profile-box .profile-card .profile-header{width:auto;height:100%;border-radius:0;position:relative}.jeg-elementor-kit.jkit-team .profile-box .profile-card .profile-header>a{display:inline-block;position:relative}.jeg-elementor-kit.jkit-team .profile-box .profile-card .profile-header .image-hover-bg{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);-webkit-transition:all .4s ease;transition:all .4s ease;opacity:0;visibility:hidden;z-index:0}.jeg-elementor-kit.jkit-team .profile-box .profile-card .profile-header:hover .image-hover-bg{opacity:1;visibility:visible}.jeg-elementor-kit.jkit-team .profile-box .profile-card.hover-gradient{overflow:hidden}.jeg-elementor-kit.jkit-team .profile-box .profile-card.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-team .profile-box .profile-card.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-team:hover .profile-box .profile-card.hover-gradient:before{opacity:1}.jeg-elementor-kit.jkit-team .profile-body{padding-bottom:20px}.jeg-elementor-kit.jkit-team .profile-body .profile-title{font-size:22px;margin:0;color:var(--jkit-txt-h-color);-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-team .profile-body .profile-title a{color:var(--jkit-txt-h-color);text-decoration:none}.jeg-elementor-kit.jkit-team .profile-body .profile-designation{font-size:13px;-webkit-transition:all .4s ease;transition:all .4s ease;margin-bottom:15px}.jeg-elementor-kit.jkit-team .social-list{list-style:none;padding:0;margin:0}.jeg-elementor-kit.jkit-team .social-list .social-icon{display:inline-block}.jeg-elementor-kit.jkit-team .social-list .social-icon:not(:last-child){margin-right:10px}.jeg-elementor-kit.jkit-team .social-list .social-icon a{display:inline-block;width:30px;height:30px;font-size:12px;line-height:32px;text-align:center;color:var(--jkit-btn-txt-color);background-color:var(--jkit-element-bg-color);border-radius:50%}.jeg-elementor-kit.jkit-team .social-list .social-icon a svg{fill:var(--jkit-btn-txt-color);width:12px}.jeg-elementor-kit.jkit-team .social-list .social-icon i:before{display:inline-block}.jeg-elementor-kit.jkit-team .social-list .social-icon:hover i:before{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-name:jkit-scrolling-vertical;animation-name:jkit-scrolling-vertical}.jeg-elementor-kit.jkit-team .social-list .social-icon:hover.hover-gradient a::before{opacity:1}.jeg-elementor-kit.jkit-team .social-list .social-icon.hover-gradient{line-height:0}.jeg-elementor-kit.jkit-team .social-list .social-icon.hover-gradient a{position:relative;-webkit-transition-duration:.3s;transition-duration:.3s}.jeg-elementor-kit.jkit-team .social-list .social-icon.hover-gradient a i{position:relative;z-index:1}.jeg-elementor-kit.jkit-team .social-list .social-icon.hover-gradient a:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit;border:inherit;border-radius:inherit}.jeg-elementor-kit.jkit-team .swal2-popup{padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-content{position:relative;-webkit-box-shadow:0 28px 40px 0 rgba(0,0,0,.1);box-shadow:0 28px 40px 0 rgba(0,0,0,.1);background-color:var(--jkit-bg-color);border:0;border-radius:0}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-close{position:absolute;top:10px;right:10px;width:40px;height:40px;padding:0;color:var(--jkit-txt-color);background-color:transparent;border-width:0;border-radius:0;font-size:18px;line-height:1;outline:0;z-index:1200}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-close svg{fill:var(--jkit-txt-color);width:18px}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-body{padding:60px 40px;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-img{width:100%;margin-bottom:30px}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-info{width:100%}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-title{margin-top:0;margin-bottom:8px;color:var(--jkit-txt-h-color);font-size:22px}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-position{margin-bottom:35px;color:var(--jkit-txt-color);font-size:13px}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-description{margin-bottom:22px}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-list{margin:0;margin-bottom:25px;padding-left:0;list-style:none;color:var(--jkit-txt-color);font-size:15px}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-list a{text-decoration:none;outline:0;color:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-list li{padding:19px 0;border-top:1px solid var(--jkit-border-color)}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-list strong{font-weight:600;padding-right:18px}.jeg-elementor-kit.jkit-team .jkit-modal-popup.content{display:none}@media (min-width:481px){.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-img{-webkit-box-flex:0;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%;margin-bottom:0}.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-info.has-img{-webkit-box-flex:0;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%;padding-left:30px}}@media (min-width:576px){.jeg-elementor-kit.jkit-team .swal2-popup{max-width:500px}}@media (min-width:992px){.jeg-elementor-kit.jkit-team .swal2-popup .team-modal-info.has-img{padding-left:50px}}.jeg-elementor-kit.jkit-team .swal2-html-container{margin:0}.jeg-elementor-kit.jkit-team .swal2-container{background:rgba(11,11,11,.8)}.jeg-elementor-kit.jkit-testimonials .testimonials-track .testimonial-item .testimonial-box .comment-bio,.jeg-elementor-kit.jkit-testimonials .testimonials-track .testimonial-item .testimonial-box .comment-content,.jeg-elementor-kit.jkit-testimonials .testimonials-track .testimonial-item .testimonial-box .icon-content,.jeg-elementor-kit.jkit-testimonials .testimonials-track .testimonial-item .testimonial-box .profile-info,.jeg-elementor-kit.jkit-testimonials .testimonials-track .testimonial-item .testimonial-box .rating-stars{position:relative;z-index:2}.jeg-elementor-kit.jkit-testimonials .tns-nav{text-align:center}.jeg-elementor-kit.jkit-testimonials .tns-nav button{width:9px;height:9px;padding:0;margin:0 5px;border-radius:50%;background:var(--jkit-txt-m-color);border:0}.jeg-elementor-kit.jkit-testimonials .tns-nav button.tns-nav-active{background:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-testimonials .tns-controls button{color:var(--jkit-txt-color);border:0;background:0 0}.jeg-elementor-kit.jkit-testimonials .tns-controls button i,.jeg-elementor-kit.jkit-testimonials .tns-controls button svg{position:relative;-webkit-transition:all .25s ease;transition:all .25s ease}.jeg-elementor-kit.jkit-testimonials .tns-controls button svg{fill:var(--jkit-txt-color)}.jeg-elementor-kit.jkit-testimonials.arrow-bottom-middle .tns-controls{text-align:center}.jeg-elementor-kit.jkit-testimonials.arrow-bottom-middle .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-testimonials.arrow-bottom-middle .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-testimonials.arrow-bottom-edge .tns-controls button[data-controls=next]{display:inline-block;position:absolute;right:0}.jeg-elementor-kit.jkit-testimonials.arrow-middle-edge .tns-controls button{display:inline-block;position:absolute;top:50%;-webkit-transform:translate(0,-50%);transform:translate(0,-50%);z-index:2}.jeg-elementor-kit.jkit-testimonials.arrow-middle-edge .tns-controls button[data-controls=prev]{left:0}.jeg-elementor-kit.jkit-testimonials.arrow-middle-edge .tns-controls button[data-controls=next]{right:0}.jeg-elementor-kit.jkit-testimonials.arrow-top-right .tns-controls{text-align:right}.jeg-elementor-kit.jkit-testimonials.arrow-top-right .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-testimonials.arrow-top-right .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-testimonials.arrow-top-left .tns-controls{text-align:left}.jeg-elementor-kit.jkit-testimonials.arrow-top-left .tns-controls button[data-controls=next],.jeg-elementor-kit.jkit-testimonials.arrow-top-left .tns-controls button[data-controls=prev]{color:var(--jkit-txt-color);display:inline-block;margin:0;padding:0}.jeg-elementor-kit.jkit-testimonials.arrow-custom .tns-controls{position:absolute}.jeg-elementor-kit.jkit-testimonials.arrow-custom .tns-controls button{padding:0}.jeg-elementor-kit.jkit-testimonials.style-1.quote-override .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .icon-content{position:absolute;left:0;top:0;font-size:40px}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box{padding:40px 40px 20px 40px;-webkit-box-shadow:0 3px 15px 0 rgba(0,0,0,.16);box-shadow:0 3px 15px 0 rgba(0,0,0,.16);border-radius:10px;position:relative;margin-top:25px;margin-bottom:105px}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider{overflow:hidden}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-bottom:before,.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-left:before,.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-right:before,.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-top:before{left:0;bottom:0;right:0;top:0}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-bottom:before,.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-top:before{-webkit-transform:scaleY(0);transform:scaleY(0)}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-left:before,.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-right:before{-webkit-transform:scaleX(0);transform:scaleX(0)}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-top:before{-webkit-transform-origin:top;transform-origin:top}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-bottom:before{-webkit-transform-origin:bottom;transform-origin:bottom}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-left:before{-webkit-transform-origin:left;transform-origin:left}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-right:before{-webkit-transform-origin:right;transform-origin:right}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-bottom:hover:before,.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-top:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1)}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-left:hover:before,.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider.hover-from-right:hover:before{-webkit-transform:scaleX(1);transform:scaleX(1)}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-content .icon-content{position:static;font-size:40px;color:var(--jkit-txt-m-color);display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-content .icon-content svg{fill:var(--jkit-txt-m-color)}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-content p{color:var(--jkit-txt-m-color);font-size:15px;margin-bottom:35px;position:relative;z-index:2}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio{position:absolute;left:0;bottom:-115px;width:100%;text-align:center;z-index:5}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .profile-image{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .profile-image img{border-radius:50%;max-width:100%;width:60px;height:auto;-o-object-fit:cover;object-fit:cover}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .profile-image img.source-url{height:60px}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .profile-info .profile-name{display:block;color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .profile-info .profile-des{color:var(--jkit-txt-m-color);font-size:.75rem}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .rating-stars{margin:0;padding:0}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .rating-stars li{display:inline-block;color:#ffc402}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .rating-stars li svg{fill:#ffc402}.jeg-elementor-kit.jkit-testimonials.style-1 .testimonials-track .testimonial-item .testimonial-box .testimonial-slider .comment-bio .rating-stars li:not(:last-child){margin-right:5px}.jeg-elementor-kit.jkit-testimonials.style-2.quote-override .testimonials-track .testimonial-item .testimonial-box .comment-bio .icon-content,.jeg-elementor-kit.jkit-testimonials.style-2.quote-override .testimonials-track .testimonial-item .testimonial-box .icon-content{position:absolute;left:0;top:0;font-size:40px}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box{padding:40px 40px 20px 40px;-webkit-box-shadow:0 3px 15px 0 rgba(0,0,0,.16);box-shadow:0 3px 15px 0 rgba(0,0,0,.16);border-radius:10px;position:relative}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-header .rating-stars{margin:0;margin-bottom:15px;padding:0}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-header .rating-stars li{display:inline-block;color:#ffc402}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-header .rating-stars li svg{fill:#ffc402}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-header .rating-stars li:not(:last-child){margin-right:5px}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-bio{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-bio .bio-details{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-bio .bio-details .profile-image{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-bio .bio-details .profile-image img{margin-right:20px;margin-bottom:0;border-radius:50%;max-width:100%;width:60px;height:auto;-o-object-fit:cover;object-fit:cover}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-bio .bio-details .profile-image img.source-url{height:60px}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-bio .bio-details .profile-info{text-align:left}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-bio .bio-details .profile-info .profile-name{display:block;font-size:15px;color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-bio .bio-details .profile-info .profile-des{color:var(--jkit-txt-m-color);font-size:.75rem}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-content{position:relative;margin-top:30px;margin-bottom:30px;z-index:2}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .comment-content p{color:var(--jkit-txt-m-color)}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .icon-content{position:static;font-size:40px;color:#d5d5d7;line-height:1;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-testimonials.style-2 .testimonials-track .testimonial-item .testimonial-box .icon-content svg{fill:#d5d5d7}.jeg-elementor-kit.jkit-testimonials.style-3.quote-override .testimonials-track .testimonial-item .testimonial-box .icon-content{right:unset;left:0;top:0}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box{padding:40px 40px 20px 40px;-webkit-box-shadow:0 3px 15px 0 rgba(0,0,0,.16);box-shadow:0 3px 15px 0 rgba(0,0,0,.16);border-radius:10px;position:relative}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .icon-content{margin-bottom:23px;position:absolute;right:20px;top:20px;font-size:40px;color:var(--jkit-txt-m-color);line-height:1;z-index:1;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .icon-content svg{fill:var(--jkit-txt-m-color)}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .comment-bio{text-align:center;margin-bottom:20px}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .comment-bio .profile-image{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .comment-bio .profile-image img{border-radius:50%;max-width:100%;width:60px;height:auto;-o-object-fit:cover;object-fit:cover}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .comment-bio .profile-image img.source-url{height:60px}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .comment-content p{margin-bottom:35px;color:rgba(0,0,0,.5);font-size:15px}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .profile-info .profile-name{display:block;font-size:15px;color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .profile-info .profile-des{color:var(--jkit-txt-m-color);font-size:.75rem}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .rating-stars{margin:0;padding:0;text-align:center;margin-bottom:15px}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .rating-stars li{display:inline-block;color:#ffc402}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .rating-stars li svg{fill:#ffc402}.jeg-elementor-kit.jkit-testimonials.style-3 .testimonials-track .testimonial-item .testimonial-box .rating-stars li:not(:last-child){margin-right:5px}.jeg-elementor-kit.jkit-testimonials.style-4.quote-override .testimonials-track .testimonial-item .testimonial-box .icon-content{right:unset;left:0;top:0}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box{padding:40px 40px 20px 40px;-webkit-box-shadow:0 3px 15px 0 rgba(0,0,0,.16);box-shadow:0 3px 15px 0 rgba(0,0,0,.16);border-radius:10px;position:relative}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .icon-content{margin-bottom:23px;position:absolute;right:20px;top:20px;font-size:40px;color:var(--jkit-txt-m-color);line-height:1;z-index:1;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .icon-content svg{fill:var(--jkit-txt-m-color)}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio{text-align:center;margin-bottom:20px}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .profile-image{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .profile-image img{border-radius:50%;max-width:100%;width:60px;height:auto;-o-object-fit:cover;object-fit:cover}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .profile-image img.source-url{height:60px}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .profile-info .profile-name{display:block;font-size:15px;color:var(--jkit-txt-h-color)}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .profile-info .profile-des{color:var(--jkit-txt-m-color);font-size:.75rem}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .rating-stars{margin:0;padding:0;text-align:center;margin-bottom:15px}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .rating-stars li{display:inline-block;color:#ffc402}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .rating-stars li svg{fill:#ffc402}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-bio .rating-stars li:not(:last-child){margin-right:5px}.jeg-elementor-kit.jkit-testimonials.style-4 .testimonials-track .testimonial-item .testimonial-box .comment-content p{margin-bottom:35px;color:rgba(0,0,0,.5);font-size:15px}.jeg-elementor-kit.jkit-testimonials:not(.style-1) .testimonials-track .testimonial-item .testimonial-box{overflow:hidden}.jeg-elementor-kit.jkit-testimonials .testimonials-track:not(.tns-slider){display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.jeg-elementor-kit.jkit-testimonials .testimonials-track:not(.tns-slider) .testimonial-item{width:100%}.jeg-elementor-kit.jkit-testimonials .testimonial-item .icon-content.hover-gradient{overflow:hidden;position:relative!important}.jeg-elementor-kit.jkit-testimonials .testimonial-item .icon-content.hover-gradient span{position:relative;z-index:1}.jeg-elementor-kit.jkit-testimonials .testimonial-item .icon-content.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-testimonials .testimonial-item:hover .icon-content.hover-gradient:before{opacity:1}.jeg-elementor-kit.jkit-testimonials .tns-controls button span{display:inline-block;position:relative}.jeg-elementor-kit.jkit-testimonials .tns-controls button span.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-testimonials .tns-controls button:hover span.hover-gradient:before{opacity:1}.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn{display:inline-block;text-align:center;font-size:18px;background-color:var(--jkit-btn-bg-color);border-radius:50%;position:relative;z-index:6;-webkit-transition:all .4s ease;transition:all .4s ease}.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.glow-enable.hover-gradient>span:after,.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.glow-enable.hover-gradient>span:before,.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.glow-enable:not(.hover-gradient):after,.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.glow-enable:not(.hover-gradient):before{content:" ";position:absolute;top:0;left:0;width:100%;height:100%;color:var(--jkit-element-bg-color);border-radius:50%;-webkit-box-shadow:0 0 0 0 currentColor;box-shadow:0 0 0 0 currentColor;-webkit-animation:jkit-ripple 3s infinite;animation:jkit-ripple 3s infinite;opacity:.6;z-index:-1}.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.glow-enable:after{-webkit-animation-delay:.3s;animation-delay:.3s}.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn ::after,.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn ::before,.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn i,.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn span,.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn::after,.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn::before{-webkit-transition-duration:inherit;transition-duration:inherit}.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.hover-gradient span>span{position:relative}.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.hover-gradient:before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;opacity:0;-webkit-transition-duration:inherit;transition-duration:inherit;border-radius:inherit}.jeg-elementor-kit.jkit-video-button .jkit-video-popup-btn.hover-gradient:hover:before{opacity:1}.jeg-elementor-kit.jkit-video-button i,.jeg-elementor-kit.jkit-video-button span{color:var(--jkit-txt-alt-color)}.jeg-elementor-kit.jkit-video-button svg{fill:var(--jkit-txt-alt-color)}.jkit-video-self-hosted{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;margin:auto}.jkit-video-self-hosted video{max-width:100%;height:auto}.swal2-container.jkit-swal-container.jkit-video-button-popup-container.swal2-backdrop-show{background:rgba(11,11,11,.8)}.swal2-container.jkit-swal-container.jkit-video-button-popup-container .swal2-popup.jkit-swal-popup{width:100%;max-width:900px;background:unset}.swal2-container.jkit-swal-container.jkit-video-button-popup-container .swal2-popup.jkit-swal-popup:not(.type-self_hosted){height:100%}.swal2-container.jkit-swal-container.jkit-video-button-popup-container .swal2-popup .jkit-swal-closeButton{position:fixed;-webkit-transform:translateY(-100%);transform:translateY(-100%);padding:unset;height:44px;background:unset;border:unset}.swal2-container.jkit-swal-container.jkit-video-button-popup-container .swal2-popup .jkit-swal-closeButton:focus{outline:initial;-webkit-box-shadow:initial;box-shadow:initial}.swal2-container.jkit-swal-container.jkit-video-button-popup-container .swal2-popup .jkit-swal-htmlContainer{margin:unset;padding:unset;overflow:hidden}.swal2-container.jkit-swal-container.jkit-video-button-popup-container .swal2-popup .jkit-swal-htmlContainer iframe{width:100%;height:100%;max-width:900px}.swal2-container.jkit-swal-container.jkit-video-button-popup-container .swal2-popup .jkit-swal-htmlContainer video{max-width:100%;height:auto}/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
.fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:"\f26e"}.fa-accessible-icon:before{content:"\f368"}.fa-accusoft:before{content:"\f369"}.fa-acquisitions-incorporated:before{content:"\f6af"}.fa-ad:before{content:"\f641"}.fa-address-book:before{content:"\f2b9"}.fa-address-card:before{content:"\f2bb"}.fa-adjust:before{content:"\f042"}.fa-adn:before{content:"\f170"}.fa-adversal:before{content:"\f36a"}.fa-affiliatetheme:before{content:"\f36b"}.fa-air-freshener:before{content:"\f5d0"}.fa-airbnb:before{content:"\f834"}.fa-algolia:before{content:"\f36c"}.fa-align-center:before{content:"\f037"}.fa-align-justify:before{content:"\f039"}.fa-align-left:before{content:"\f036"}.fa-align-right:before{content:"\f038"}.fa-alipay:before{content:"\f642"}.fa-allergies:before{content:"\f461"}.fa-amazon:before{content:"\f270"}.fa-amazon-pay:before{content:"\f42c"}.fa-ambulance:before{content:"\f0f9"}.fa-american-sign-language-interpreting:before{content:"\f2a3"}.fa-amilia:before{content:"\f36d"}.fa-anchor:before{content:"\f13d"}.fa-android:before{content:"\f17b"}.fa-angellist:before{content:"\f209"}.fa-angle-double-down:before{content:"\f103"}.fa-angle-double-left:before{content:"\f100"}.fa-angle-double-right:before{content:"\f101"}.fa-angle-double-up:before{content:"\f102"}.fa-angle-down:before{content:"\f107"}.fa-angle-left:before{content:"\f104"}.fa-angle-right:before{content:"\f105"}.fa-angle-up:before{content:"\f106"}.fa-angry:before{content:"\f556"}.fa-angrycreative:before{content:"\f36e"}.fa-angular:before{content:"\f420"}.fa-ankh:before{content:"\f644"}.fa-app-store:before{content:"\f36f"}.fa-app-store-ios:before{content:"\f370"}.fa-apper:before{content:"\f371"}.fa-apple:before{content:"\f179"}.fa-apple-alt:before{content:"\f5d1"}.fa-apple-pay:before{content:"\f415"}.fa-archive:before{content:"\f187"}.fa-archway:before{content:"\f557"}.fa-arrow-alt-circle-down:before{content:"\f358"}.fa-arrow-alt-circle-left:before{content:"\f359"}.fa-arrow-alt-circle-right:before{content:"\f35a"}.fa-arrow-alt-circle-up:before{content:"\f35b"}.fa-arrow-circle-down:before{content:"\f0ab"}.fa-arrow-circle-left:before{content:"\f0a8"}.fa-arrow-circle-right:before{content:"\f0a9"}.fa-arrow-circle-up:before{content:"\f0aa"}.fa-arrow-down:before{content:"\f063"}.fa-arrow-left:before{content:"\f060"}.fa-arrow-right:before{content:"\f061"}.fa-arrow-up:before{content:"\f062"}.fa-arrows-alt:before{content:"\f0b2"}.fa-arrows-alt-h:before{content:"\f337"}.fa-arrows-alt-v:before{content:"\f338"}.fa-artstation:before{content:"\f77a"}.fa-assistive-listening-systems:before{content:"\f2a2"}.fa-asterisk:before{content:"\f069"}.fa-asymmetrik:before{content:"\f372"}.fa-at:before{content:"\f1fa"}.fa-atlas:before{content:"\f558"}.fa-atlassian:before{content:"\f77b"}.fa-atom:before{content:"\f5d2"}.fa-audible:before{content:"\f373"}.fa-audio-description:before{content:"\f29e"}.fa-autoprefixer:before{content:"\f41c"}.fa-avianex:before{content:"\f374"}.fa-aviato:before{content:"\f421"}.fa-award:before{content:"\f559"}.fa-aws:before{content:"\f375"}.fa-baby:before{content:"\f77c"}.fa-baby-carriage:before{content:"\f77d"}.fa-backspace:before{content:"\f55a"}.fa-backward:before{content:"\f04a"}.fa-bacon:before{content:"\f7e5"}.fa-bacteria:before{content:"\e059"}.fa-bacterium:before{content:"\e05a"}.fa-bahai:before{content:"\f666"}.fa-balance-scale:before{content:"\f24e"}.fa-balance-scale-left:before{content:"\f515"}.fa-balance-scale-right:before{content:"\f516"}.fa-ban:before{content:"\f05e"}.fa-band-aid:before{content:"\f462"}.fa-bandcamp:before{content:"\f2d5"}.fa-barcode:before{content:"\f02a"}.fa-bars:before{content:"\f0c9"}.fa-baseball-ball:before{content:"\f433"}.fa-basketball-ball:before{content:"\f434"}.fa-bath:before{content:"\f2cd"}.fa-battery-empty:before{content:"\f244"}.fa-battery-full:before{content:"\f240"}.fa-battery-half:before{content:"\f242"}.fa-battery-quarter:before{content:"\f243"}.fa-battery-three-quarters:before{content:"\f241"}.fa-battle-net:before{content:"\f835"}.fa-bed:before{content:"\f236"}.fa-beer:before{content:"\f0fc"}.fa-behance:before{content:"\f1b4"}.fa-behance-square:before{content:"\f1b5"}.fa-bell:before{content:"\f0f3"}.fa-bell-slash:before{content:"\f1f6"}.fa-bezier-curve:before{content:"\f55b"}.fa-bible:before{content:"\f647"}.fa-bicycle:before{content:"\f206"}.fa-biking:before{content:"\f84a"}.fa-bimobject:before{content:"\f378"}.fa-binoculars:before{content:"\f1e5"}.fa-biohazard:before{content:"\f780"}.fa-birthday-cake:before{content:"\f1fd"}.fa-bitbucket:before{content:"\f171"}.fa-bitcoin:before{content:"\f379"}.fa-bity:before{content:"\f37a"}.fa-black-tie:before{content:"\f27e"}.fa-blackberry:before{content:"\f37b"}.fa-blender:before{content:"\f517"}.fa-blender-phone:before{content:"\f6b6"}.fa-blind:before{content:"\f29d"}.fa-blog:before{content:"\f781"}.fa-blogger:before{content:"\f37c"}.fa-blogger-b:before{content:"\f37d"}.fa-bluetooth:before{content:"\f293"}.fa-bluetooth-b:before{content:"\f294"}.fa-bold:before{content:"\f032"}.fa-bolt:before{content:"\f0e7"}.fa-bomb:before{content:"\f1e2"}.fa-bone:before{content:"\f5d7"}.fa-bong:before{content:"\f55c"}.fa-book:before{content:"\f02d"}.fa-book-dead:before{content:"\f6b7"}.fa-book-medical:before{content:"\f7e6"}.fa-book-open:before{content:"\f518"}.fa-book-reader:before{content:"\f5da"}.fa-bookmark:before{content:"\f02e"}.fa-bootstrap:before{content:"\f836"}.fa-border-all:before{content:"\f84c"}.fa-border-none:before{content:"\f850"}.fa-border-style:before{content:"\f853"}.fa-bowling-ball:before{content:"\f436"}.fa-box:before{content:"\f466"}.fa-box-open:before{content:"\f49e"}.fa-box-tissue:before{content:"\e05b"}.fa-boxes:before{content:"\f468"}.fa-braille:before{content:"\f2a1"}.fa-brain:before{content:"\f5dc"}.fa-bread-slice:before{content:"\f7ec"}.fa-briefcase:before{content:"\f0b1"}.fa-briefcase-medical:before{content:"\f469"}.fa-broadcast-tower:before{content:"\f519"}.fa-broom:before{content:"\f51a"}.fa-brush:before{content:"\f55d"}.fa-btc:before{content:"\f15a"}.fa-buffer:before{content:"\f837"}.fa-bug:before{content:"\f188"}.fa-building:before{content:"\f1ad"}.fa-bullhorn:before{content:"\f0a1"}.fa-bullseye:before{content:"\f140"}.fa-burn:before{content:"\f46a"}.fa-buromobelexperte:before{content:"\f37f"}.fa-bus:before{content:"\f207"}.fa-bus-alt:before{content:"\f55e"}.fa-business-time:before{content:"\f64a"}.fa-buy-n-large:before{content:"\f8a6"}.fa-buysellads:before{content:"\f20d"}.fa-calculator:before{content:"\f1ec"}.fa-calendar:before{content:"\f133"}.fa-calendar-alt:before{content:"\f073"}.fa-calendar-check:before{content:"\f274"}.fa-calendar-day:before{content:"\f783"}.fa-calendar-minus:before{content:"\f272"}.fa-calendar-plus:before{content:"\f271"}.fa-calendar-times:before{content:"\f273"}.fa-calendar-week:before{content:"\f784"}.fa-camera:before{content:"\f030"}.fa-camera-retro:before{content:"\f083"}.fa-campground:before{content:"\f6bb"}.fa-canadian-maple-leaf:before{content:"\f785"}.fa-candy-cane:before{content:"\f786"}.fa-cannabis:before{content:"\f55f"}.fa-capsules:before{content:"\f46b"}.fa-car:before{content:"\f1b9"}.fa-car-alt:before{content:"\f5de"}.fa-car-battery:before{content:"\f5df"}.fa-car-crash:before{content:"\f5e1"}.fa-car-side:before{content:"\f5e4"}.fa-caravan:before{content:"\f8ff"}.fa-caret-down:before{content:"\f0d7"}.fa-caret-left:before{content:"\f0d9"}.fa-caret-right:before{content:"\f0da"}.fa-caret-square-down:before{content:"\f150"}.fa-caret-square-left:before{content:"\f191"}.fa-caret-square-right:before{content:"\f152"}.fa-caret-square-up:before{content:"\f151"}.fa-caret-up:before{content:"\f0d8"}.fa-carrot:before{content:"\f787"}.fa-cart-arrow-down:before{content:"\f218"}.fa-cart-plus:before{content:"\f217"}.fa-cash-register:before{content:"\f788"}.fa-cat:before{content:"\f6be"}.fa-cc-amazon-pay:before{content:"\f42d"}.fa-cc-amex:before{content:"\f1f3"}.fa-cc-apple-pay:before{content:"\f416"}.fa-cc-diners-club:before{content:"\f24c"}.fa-cc-discover:before{content:"\f1f2"}.fa-cc-jcb:before{content:"\f24b"}.fa-cc-mastercard:before{content:"\f1f1"}.fa-cc-paypal:before{content:"\f1f4"}.fa-cc-stripe:before{content:"\f1f5"}.fa-cc-visa:before{content:"\f1f0"}.fa-centercode:before{content:"\f380"}.fa-centos:before{content:"\f789"}.fa-certificate:before{content:"\f0a3"}.fa-chair:before{content:"\f6c0"}.fa-chalkboard:before{content:"\f51b"}.fa-chalkboard-teacher:before{content:"\f51c"}.fa-charging-station:before{content:"\f5e7"}.fa-chart-area:before{content:"\f1fe"}.fa-chart-bar:before{content:"\f080"}.fa-chart-line:before{content:"\f201"}.fa-chart-pie:before{content:"\f200"}.fa-check:before{content:"\f00c"}.fa-check-circle:before{content:"\f058"}.fa-check-double:before{content:"\f560"}.fa-check-square:before{content:"\f14a"}.fa-cheese:before{content:"\f7ef"}.fa-chess:before{content:"\f439"}.fa-chess-bishop:before{content:"\f43a"}.fa-chess-board:before{content:"\f43c"}.fa-chess-king:before{content:"\f43f"}.fa-chess-knight:before{content:"\f441"}.fa-chess-pawn:before{content:"\f443"}.fa-chess-queen:before{content:"\f445"}.fa-chess-rook:before{content:"\f447"}.fa-chevron-circle-down:before{content:"\f13a"}.fa-chevron-circle-left:before{content:"\f137"}.fa-chevron-circle-right:before{content:"\f138"}.fa-chevron-circle-up:before{content:"\f139"}.fa-chevron-down:before{content:"\f078"}.fa-chevron-left:before{content:"\f053"}.fa-chevron-right:before{content:"\f054"}.fa-chevron-up:before{content:"\f077"}.fa-child:before{content:"\f1ae"}.fa-chrome:before{content:"\f268"}.fa-chromecast:before{content:"\f838"}.fa-church:before{content:"\f51d"}.fa-circle:before{content:"\f111"}.fa-circle-notch:before{content:"\f1ce"}.fa-city:before{content:"\f64f"}.fa-clinic-medical:before{content:"\f7f2"}.fa-clipboard:before{content:"\f328"}.fa-clipboard-check:before{content:"\f46c"}.fa-clipboard-list:before{content:"\f46d"}.fa-clock:before{content:"\f017"}.fa-clone:before{content:"\f24d"}.fa-closed-captioning:before{content:"\f20a"}.fa-cloud:before{content:"\f0c2"}.fa-cloud-download-alt:before{content:"\f381"}.fa-cloud-meatball:before{content:"\f73b"}.fa-cloud-moon:before{content:"\f6c3"}.fa-cloud-moon-rain:before{content:"\f73c"}.fa-cloud-rain:before{content:"\f73d"}.fa-cloud-showers-heavy:before{content:"\f740"}.fa-cloud-sun:before{content:"\f6c4"}.fa-cloud-sun-rain:before{content:"\f743"}.fa-cloud-upload-alt:before{content:"\f382"}.fa-cloudflare:before{content:"\e07d"}.fa-cloudscale:before{content:"\f383"}.fa-cloudsmith:before{content:"\f384"}.fa-cloudversify:before{content:"\f385"}.fa-cocktail:before{content:"\f561"}.fa-code:before{content:"\f121"}.fa-code-branch:before{content:"\f126"}.fa-codepen:before{content:"\f1cb"}.fa-codiepie:before{content:"\f284"}.fa-coffee:before{content:"\f0f4"}.fa-cog:before{content:"\f013"}.fa-cogs:before{content:"\f085"}.fa-coins:before{content:"\f51e"}.fa-columns:before{content:"\f0db"}.fa-comment:before{content:"\f075"}.fa-comment-alt:before{content:"\f27a"}.fa-comment-dollar:before{content:"\f651"}.fa-comment-dots:before{content:"\f4ad"}.fa-comment-medical:before{content:"\f7f5"}.fa-comment-slash:before{content:"\f4b3"}.fa-comments:before{content:"\f086"}.fa-comments-dollar:before{content:"\f653"}.fa-compact-disc:before{content:"\f51f"}.fa-compass:before{content:"\f14e"}.fa-compress:before{content:"\f066"}.fa-compress-alt:before{content:"\f422"}.fa-compress-arrows-alt:before{content:"\f78c"}.fa-concierge-bell:before{content:"\f562"}.fa-confluence:before{content:"\f78d"}.fa-connectdevelop:before{content:"\f20e"}.fa-contao:before{content:"\f26d"}.fa-cookie:before{content:"\f563"}.fa-cookie-bite:before{content:"\f564"}.fa-copy:before{content:"\f0c5"}.fa-copyright:before{content:"\f1f9"}.fa-cotton-bureau:before{content:"\f89e"}.fa-couch:before{content:"\f4b8"}.fa-cpanel:before{content:"\f388"}.fa-creative-commons:before{content:"\f25e"}.fa-creative-commons-by:before{content:"\f4e7"}.fa-creative-commons-nc:before{content:"\f4e8"}.fa-creative-commons-nc-eu:before{content:"\f4e9"}.fa-creative-commons-nc-jp:before{content:"\f4ea"}.fa-creative-commons-nd:before{content:"\f4eb"}.fa-creative-commons-pd:before{content:"\f4ec"}.fa-creative-commons-pd-alt:before{content:"\f4ed"}.fa-creative-commons-remix:before{content:"\f4ee"}.fa-creative-commons-sa:before{content:"\f4ef"}.fa-creative-commons-sampling:before{content:"\f4f0"}.fa-creative-commons-sampling-plus:before{content:"\f4f1"}.fa-creative-commons-share:before{content:"\f4f2"}.fa-creative-commons-zero:before{content:"\f4f3"}.fa-credit-card:before{content:"\f09d"}.fa-critical-role:before{content:"\f6c9"}.fa-crop:before{content:"\f125"}.fa-crop-alt:before{content:"\f565"}.fa-cross:before{content:"\f654"}.fa-crosshairs:before{content:"\f05b"}.fa-crow:before{content:"\f520"}.fa-crown:before{content:"\f521"}.fa-crutch:before{content:"\f7f7"}.fa-css3:before{content:"\f13c"}.fa-css3-alt:before{content:"\f38b"}.fa-cube:before{content:"\f1b2"}.fa-cubes:before{content:"\f1b3"}.fa-cut:before{content:"\f0c4"}.fa-cuttlefish:before{content:"\f38c"}.fa-d-and-d:before{content:"\f38d"}.fa-d-and-d-beyond:before{content:"\f6ca"}.fa-dailymotion:before{content:"\e052"}.fa-dashcube:before{content:"\f210"}.fa-database:before{content:"\f1c0"}.fa-deaf:before{content:"\f2a4"}.fa-deezer:before{content:"\e077"}.fa-delicious:before{content:"\f1a5"}.fa-democrat:before{content:"\f747"}.fa-deploydog:before{content:"\f38e"}.fa-deskpro:before{content:"\f38f"}.fa-desktop:before{content:"\f108"}.fa-dev:before{content:"\f6cc"}.fa-deviantart:before{content:"\f1bd"}.fa-dharmachakra:before{content:"\f655"}.fa-dhl:before{content:"\f790"}.fa-diagnoses:before{content:"\f470"}.fa-diaspora:before{content:"\f791"}.fa-dice:before{content:"\f522"}.fa-dice-d20:before{content:"\f6cf"}.fa-dice-d6:before{content:"\f6d1"}.fa-dice-five:before{content:"\f523"}.fa-dice-four:before{content:"\f524"}.fa-dice-one:before{content:"\f525"}.fa-dice-six:before{content:"\f526"}.fa-dice-three:before{content:"\f527"}.fa-dice-two:before{content:"\f528"}.fa-digg:before{content:"\f1a6"}.fa-digital-ocean:before{content:"\f391"}.fa-digital-tachograph:before{content:"\f566"}.fa-directions:before{content:"\f5eb"}.fa-discord:before{content:"\f392"}.fa-discourse:before{content:"\f393"}.fa-disease:before{content:"\f7fa"}.fa-divide:before{content:"\f529"}.fa-dizzy:before{content:"\f567"}.fa-dna:before{content:"\f471"}.fa-dochub:before{content:"\f394"}.fa-docker:before{content:"\f395"}.fa-dog:before{content:"\f6d3"}.fa-dollar-sign:before{content:"\f155"}.fa-dolly:before{content:"\f472"}.fa-dolly-flatbed:before{content:"\f474"}.fa-donate:before{content:"\f4b9"}.fa-door-closed:before{content:"\f52a"}.fa-door-open:before{content:"\f52b"}.fa-dot-circle:before{content:"\f192"}.fa-dove:before{content:"\f4ba"}.fa-download:before{content:"\f019"}.fa-draft2digital:before{content:"\f396"}.fa-drafting-compass:before{content:"\f568"}.fa-dragon:before{content:"\f6d5"}.fa-draw-polygon:before{content:"\f5ee"}.fa-dribbble:before{content:"\f17d"}.fa-dribbble-square:before{content:"\f397"}.fa-dropbox:before{content:"\f16b"}.fa-drum:before{content:"\f569"}.fa-drum-steelpan:before{content:"\f56a"}.fa-drumstick-bite:before{content:"\f6d7"}.fa-drupal:before{content:"\f1a9"}.fa-dumbbell:before{content:"\f44b"}.fa-dumpster:before{content:"\f793"}.fa-dumpster-fire:before{content:"\f794"}.fa-dungeon:before{content:"\f6d9"}.fa-dyalog:before{content:"\f399"}.fa-earlybirds:before{content:"\f39a"}.fa-ebay:before{content:"\f4f4"}.fa-edge:before{content:"\f282"}.fa-edge-legacy:before{content:"\e078"}.fa-edit:before{content:"\f044"}.fa-egg:before{content:"\f7fb"}.fa-eject:before{content:"\f052"}.fa-elementor:before{content:"\f430"}.fa-ellipsis-h:before{content:"\f141"}.fa-ellipsis-v:before{content:"\f142"}.fa-ello:before{content:"\f5f1"}.fa-ember:before{content:"\f423"}.fa-empire:before{content:"\f1d1"}.fa-envelope:before{content:"\f0e0"}.fa-envelope-open:before{content:"\f2b6"}.fa-envelope-open-text:before{content:"\f658"}.fa-envelope-square:before{content:"\f199"}.fa-envira:before{content:"\f299"}.fa-equals:before{content:"\f52c"}.fa-eraser:before{content:"\f12d"}.fa-erlang:before{content:"\f39d"}.fa-ethereum:before{content:"\f42e"}.fa-ethernet:before{content:"\f796"}.fa-etsy:before{content:"\f2d7"}.fa-euro-sign:before{content:"\f153"}.fa-evernote:before{content:"\f839"}.fa-exchange-alt:before{content:"\f362"}.fa-exclamation:before{content:"\f12a"}.fa-exclamation-circle:before{content:"\f06a"}.fa-exclamation-triangle:before{content:"\f071"}.fa-expand:before{content:"\f065"}.fa-expand-alt:before{content:"\f424"}.fa-expand-arrows-alt:before{content:"\f31e"}.fa-expeditedssl:before{content:"\f23e"}.fa-external-link-alt:before{content:"\f35d"}.fa-external-link-square-alt:before{content:"\f360"}.fa-eye:before{content:"\f06e"}.fa-eye-dropper:before{content:"\f1fb"}.fa-eye-slash:before{content:"\f070"}.fa-facebook:before{content:"\f09a"}.fa-facebook-f:before{content:"\f39e"}.fa-facebook-messenger:before{content:"\f39f"}.fa-facebook-square:before{content:"\f082"}.fa-fan:before{content:"\f863"}.fa-fantasy-flight-games:before{content:"\f6dc"}.fa-fast-backward:before{content:"\f049"}.fa-fast-forward:before{content:"\f050"}.fa-faucet:before{content:"\e005"}.fa-fax:before{content:"\f1ac"}.fa-feather:before{content:"\f52d"}.fa-feather-alt:before{content:"\f56b"}.fa-fedex:before{content:"\f797"}.fa-fedora:before{content:"\f798"}.fa-female:before{content:"\f182"}.fa-fighter-jet:before{content:"\f0fb"}.fa-figma:before{content:"\f799"}.fa-file:before{content:"\f15b"}.fa-file-alt:before{content:"\f15c"}.fa-file-archive:before{content:"\f1c6"}.fa-file-audio:before{content:"\f1c7"}.fa-file-code:before{content:"\f1c9"}.fa-file-contract:before{content:"\f56c"}.fa-file-csv:before{content:"\f6dd"}.fa-file-download:before{content:"\f56d"}.fa-file-excel:before{content:"\f1c3"}.fa-file-export:before{content:"\f56e"}.fa-file-image:before{content:"\f1c5"}.fa-file-import:before{content:"\f56f"}.fa-file-invoice:before{content:"\f570"}.fa-file-invoice-dollar:before{content:"\f571"}.fa-file-medical:before{content:"\f477"}.fa-file-medical-alt:before{content:"\f478"}.fa-file-pdf:before{content:"\f1c1"}.fa-file-powerpoint:before{content:"\f1c4"}.fa-file-prescription:before{content:"\f572"}.fa-file-signature:before{content:"\f573"}.fa-file-upload:before{content:"\f574"}.fa-file-video:before{content:"\f1c8"}.fa-file-word:before{content:"\f1c2"}.fa-fill:before{content:"\f575"}.fa-fill-drip:before{content:"\f576"}.fa-film:before{content:"\f008"}.fa-filter:before{content:"\f0b0"}.fa-fingerprint:before{content:"\f577"}.fa-fire:before{content:"\f06d"}.fa-fire-alt:before{content:"\f7e4"}.fa-fire-extinguisher:before{content:"\f134"}.fa-firefox:before{content:"\f269"}.fa-firefox-browser:before{content:"\e007"}.fa-first-aid:before{content:"\f479"}.fa-first-order:before{content:"\f2b0"}.fa-first-order-alt:before{content:"\f50a"}.fa-firstdraft:before{content:"\f3a1"}.fa-fish:before{content:"\f578"}.fa-fist-raised:before{content:"\f6de"}.fa-flag:before{content:"\f024"}.fa-flag-checkered:before{content:"\f11e"}.fa-flag-usa:before{content:"\f74d"}.fa-flask:before{content:"\f0c3"}.fa-flickr:before{content:"\f16e"}.fa-flipboard:before{content:"\f44d"}.fa-flushed:before{content:"\f579"}.fa-fly:before{content:"\f417"}.fa-folder:before{content:"\f07b"}.fa-folder-minus:before{content:"\f65d"}.fa-folder-open:before{content:"\f07c"}.fa-folder-plus:before{content:"\f65e"}.fa-font:before{content:"\f031"}.fa-font-awesome:before{content:"\f2b4"}.fa-font-awesome-alt:before{content:"\f35c"}.fa-font-awesome-flag:before{content:"\f425"}.fa-font-awesome-logo-full:before{content:"\f4e6"}.fa-fonticons:before{content:"\f280"}.fa-fonticons-fi:before{content:"\f3a2"}.fa-football-ball:before{content:"\f44e"}.fa-fort-awesome:before{content:"\f286"}.fa-fort-awesome-alt:before{content:"\f3a3"}.fa-forumbee:before{content:"\f211"}.fa-forward:before{content:"\f04e"}.fa-foursquare:before{content:"\f180"}.fa-free-code-camp:before{content:"\f2c5"}.fa-freebsd:before{content:"\f3a4"}.fa-frog:before{content:"\f52e"}.fa-frown:before{content:"\f119"}.fa-frown-open:before{content:"\f57a"}.fa-fulcrum:before{content:"\f50b"}.fa-funnel-dollar:before{content:"\f662"}.fa-futbol:before{content:"\f1e3"}.fa-galactic-republic:before{content:"\f50c"}.fa-galactic-senate:before{content:"\f50d"}.fa-gamepad:before{content:"\f11b"}.fa-gas-pump:before{content:"\f52f"}.fa-gavel:before{content:"\f0e3"}.fa-gem:before{content:"\f3a5"}.fa-genderless:before{content:"\f22d"}.fa-get-pocket:before{content:"\f265"}.fa-gg:before{content:"\f260"}.fa-gg-circle:before{content:"\f261"}.fa-ghost:before{content:"\f6e2"}.fa-gift:before{content:"\f06b"}.fa-gifts:before{content:"\f79c"}.fa-git:before{content:"\f1d3"}.fa-git-alt:before{content:"\f841"}.fa-git-square:before{content:"\f1d2"}.fa-github:before{content:"\f09b"}.fa-github-alt:before{content:"\f113"}.fa-github-square:before{content:"\f092"}.fa-gitkraken:before{content:"\f3a6"}.fa-gitlab:before{content:"\f296"}.fa-gitter:before{content:"\f426"}.fa-glass-cheers:before{content:"\f79f"}.fa-glass-martini:before{content:"\f000"}.fa-glass-martini-alt:before{content:"\f57b"}.fa-glass-whiskey:before{content:"\f7a0"}.fa-glasses:before{content:"\f530"}.fa-glide:before{content:"\f2a5"}.fa-glide-g:before{content:"\f2a6"}.fa-globe:before{content:"\f0ac"}.fa-globe-africa:before{content:"\f57c"}.fa-globe-americas:before{content:"\f57d"}.fa-globe-asia:before{content:"\f57e"}.fa-globe-europe:before{content:"\f7a2"}.fa-gofore:before{content:"\f3a7"}.fa-golf-ball:before{content:"\f450"}.fa-goodreads:before{content:"\f3a8"}.fa-goodreads-g:before{content:"\f3a9"}.fa-google:before{content:"\f1a0"}.fa-google-drive:before{content:"\f3aa"}.fa-google-pay:before{content:"\e079"}.fa-google-play:before{content:"\f3ab"}.fa-google-plus:before{content:"\f2b3"}.fa-google-plus-g:before{content:"\f0d5"}.fa-google-plus-square:before{content:"\f0d4"}.fa-google-wallet:before{content:"\f1ee"}.fa-gopuram:before{content:"\f664"}.fa-graduation-cap:before{content:"\f19d"}.fa-gratipay:before{content:"\f184"}.fa-grav:before{content:"\f2d6"}.fa-greater-than:before{content:"\f531"}.fa-greater-than-equal:before{content:"\f532"}.fa-grimace:before{content:"\f57f"}.fa-grin:before{content:"\f580"}.fa-grin-alt:before{content:"\f581"}.fa-grin-beam:before{content:"\f582"}.fa-grin-beam-sweat:before{content:"\f583"}.fa-grin-hearts:before{content:"\f584"}.fa-grin-squint:before{content:"\f585"}.fa-grin-squint-tears:before{content:"\f586"}.fa-grin-stars:before{content:"\f587"}.fa-grin-tears:before{content:"\f588"}.fa-grin-tongue:before{content:"\f589"}.fa-grin-tongue-squint:before{content:"\f58a"}.fa-grin-tongue-wink:before{content:"\f58b"}.fa-grin-wink:before{content:"\f58c"}.fa-grip-horizontal:before{content:"\f58d"}.fa-grip-lines:before{content:"\f7a4"}.fa-grip-lines-vertical:before{content:"\f7a5"}.fa-grip-vertical:before{content:"\f58e"}.fa-gripfire:before{content:"\f3ac"}.fa-grunt:before{content:"\f3ad"}.fa-guilded:before{content:"\e07e"}.fa-guitar:before{content:"\f7a6"}.fa-gulp:before{content:"\f3ae"}.fa-h-square:before{content:"\f0fd"}.fa-hacker-news:before{content:"\f1d4"}.fa-hacker-news-square:before{content:"\f3af"}.fa-hackerrank:before{content:"\f5f7"}.fa-hamburger:before{content:"\f805"}.fa-hammer:before{content:"\f6e3"}.fa-hamsa:before{content:"\f665"}.fa-hand-holding:before{content:"\f4bd"}.fa-hand-holding-heart:before{content:"\f4be"}.fa-hand-holding-medical:before{content:"\e05c"}.fa-hand-holding-usd:before{content:"\f4c0"}.fa-hand-holding-water:before{content:"\f4c1"}.fa-hand-lizard:before{content:"\f258"}.fa-hand-middle-finger:before{content:"\f806"}.fa-hand-paper:before{content:"\f256"}.fa-hand-peace:before{content:"\f25b"}.fa-hand-point-down:before{content:"\f0a7"}.fa-hand-point-left:before{content:"\f0a5"}.fa-hand-point-right:before{content:"\f0a4"}.fa-hand-point-up:before{content:"\f0a6"}.fa-hand-pointer:before{content:"\f25a"}.fa-hand-rock:before{content:"\f255"}.fa-hand-scissors:before{content:"\f257"}.fa-hand-sparkles:before{content:"\e05d"}.fa-hand-spock:before{content:"\f259"}.fa-hands:before{content:"\f4c2"}.fa-hands-helping:before{content:"\f4c4"}.fa-hands-wash:before{content:"\e05e"}.fa-handshake:before{content:"\f2b5"}.fa-handshake-alt-slash:before{content:"\e05f"}.fa-handshake-slash:before{content:"\e060"}.fa-hanukiah:before{content:"\f6e6"}.fa-hard-hat:before{content:"\f807"}.fa-hashtag:before{content:"\f292"}.fa-hat-cowboy:before{content:"\f8c0"}.fa-hat-cowboy-side:before{content:"\f8c1"}.fa-hat-wizard:before{content:"\f6e8"}.fa-hdd:before{content:"\f0a0"}.fa-head-side-cough:before{content:"\e061"}.fa-head-side-cough-slash:before{content:"\e062"}.fa-head-side-mask:before{content:"\e063"}.fa-head-side-virus:before{content:"\e064"}.fa-heading:before{content:"\f1dc"}.fa-headphones:before{content:"\f025"}.fa-headphones-alt:before{content:"\f58f"}.fa-headset:before{content:"\f590"}.fa-heart:before{content:"\f004"}.fa-heart-broken:before{content:"\f7a9"}.fa-heartbeat:before{content:"\f21e"}.fa-helicopter:before{content:"\f533"}.fa-highlighter:before{content:"\f591"}.fa-hiking:before{content:"\f6ec"}.fa-hippo:before{content:"\f6ed"}.fa-hips:before{content:"\f452"}.fa-hire-a-helper:before{content:"\f3b0"}.fa-history:before{content:"\f1da"}.fa-hive:before{content:"\e07f"}.fa-hockey-puck:before{content:"\f453"}.fa-holly-berry:before{content:"\f7aa"}.fa-home:before{content:"\f015"}.fa-hooli:before{content:"\f427"}.fa-hornbill:before{content:"\f592"}.fa-horse:before{content:"\f6f0"}.fa-horse-head:before{content:"\f7ab"}.fa-hospital:before{content:"\f0f8"}.fa-hospital-alt:before{content:"\f47d"}.fa-hospital-symbol:before{content:"\f47e"}.fa-hospital-user:before{content:"\f80d"}.fa-hot-tub:before{content:"\f593"}.fa-hotdog:before{content:"\f80f"}.fa-hotel:before{content:"\f594"}.fa-hotjar:before{content:"\f3b1"}.fa-hourglass:before{content:"\f254"}.fa-hourglass-end:before{content:"\f253"}.fa-hourglass-half:before{content:"\f252"}.fa-hourglass-start:before{content:"\f251"}.fa-house-damage:before{content:"\f6f1"}.fa-house-user:before{content:"\e065"}.fa-houzz:before{content:"\f27c"}.fa-hryvnia:before{content:"\f6f2"}.fa-html5:before{content:"\f13b"}.fa-hubspot:before{content:"\f3b2"}.fa-i-cursor:before{content:"\f246"}.fa-ice-cream:before{content:"\f810"}.fa-icicles:before{content:"\f7ad"}.fa-icons:before{content:"\f86d"}.fa-id-badge:before{content:"\f2c1"}.fa-id-card:before{content:"\f2c2"}.fa-id-card-alt:before{content:"\f47f"}.fa-ideal:before{content:"\e013"}.fa-igloo:before{content:"\f7ae"}.fa-image:before{content:"\f03e"}.fa-images:before{content:"\f302"}.fa-imdb:before{content:"\f2d8"}.fa-inbox:before{content:"\f01c"}.fa-indent:before{content:"\f03c"}.fa-industry:before{content:"\f275"}.fa-infinity:before{content:"\f534"}.fa-info:before{content:"\f129"}.fa-info-circle:before{content:"\f05a"}.fa-innosoft:before{content:"\e080"}.fa-instagram:before{content:"\f16d"}.fa-instagram-square:before{content:"\e055"}.fa-instalod:before{content:"\e081"}.fa-intercom:before{content:"\f7af"}.fa-internet-explorer:before{content:"\f26b"}.fa-invision:before{content:"\f7b0"}.fa-ioxhost:before{content:"\f208"}.fa-italic:before{content:"\f033"}.fa-itch-io:before{content:"\f83a"}.fa-itunes:before{content:"\f3b4"}.fa-itunes-note:before{content:"\f3b5"}.fa-java:before{content:"\f4e4"}.fa-jedi:before{content:"\f669"}.fa-jedi-order:before{content:"\f50e"}.fa-jenkins:before{content:"\f3b6"}.fa-jira:before{content:"\f7b1"}.fa-joget:before{content:"\f3b7"}.fa-joint:before{content:"\f595"}.fa-joomla:before{content:"\f1aa"}.fa-journal-whills:before{content:"\f66a"}.fa-js:before{content:"\f3b8"}.fa-js-square:before{content:"\f3b9"}.fa-jsfiddle:before{content:"\f1cc"}.fa-kaaba:before{content:"\f66b"}.fa-kaggle:before{content:"\f5fa"}.fa-key:before{content:"\f084"}.fa-keybase:before{content:"\f4f5"}.fa-keyboard:before{content:"\f11c"}.fa-keycdn:before{content:"\f3ba"}.fa-khanda:before{content:"\f66d"}.fa-kickstarter:before{content:"\f3bb"}.fa-kickstarter-k:before{content:"\f3bc"}.fa-kiss:before{content:"\f596"}.fa-kiss-beam:before{content:"\f597"}.fa-kiss-wink-heart:before{content:"\f598"}.fa-kiwi-bird:before{content:"\f535"}.fa-korvue:before{content:"\f42f"}.fa-landmark:before{content:"\f66f"}.fa-language:before{content:"\f1ab"}.fa-laptop:before{content:"\f109"}.fa-laptop-code:before{content:"\f5fc"}.fa-laptop-house:before{content:"\e066"}.fa-laptop-medical:before{content:"\f812"}.fa-laravel:before{content:"\f3bd"}.fa-lastfm:before{content:"\f202"}.fa-lastfm-square:before{content:"\f203"}.fa-laugh:before{content:"\f599"}.fa-laugh-beam:before{content:"\f59a"}.fa-laugh-squint:before{content:"\f59b"}.fa-laugh-wink:before{content:"\f59c"}.fa-layer-group:before{content:"\f5fd"}.fa-leaf:before{content:"\f06c"}.fa-leanpub:before{content:"\f212"}.fa-lemon:before{content:"\f094"}.fa-less:before{content:"\f41d"}.fa-less-than:before{content:"\f536"}.fa-less-than-equal:before{content:"\f537"}.fa-level-down-alt:before{content:"\f3be"}.fa-level-up-alt:before{content:"\f3bf"}.fa-life-ring:before{content:"\f1cd"}.fa-lightbulb:before{content:"\f0eb"}.fa-line:before{content:"\f3c0"}.fa-link:before{content:"\f0c1"}.fa-linkedin:before{content:"\f08c"}.fa-linkedin-in:before{content:"\f0e1"}.fa-linode:before{content:"\f2b8"}.fa-linux:before{content:"\f17c"}.fa-lira-sign:before{content:"\f195"}.fa-list:before{content:"\f03a"}.fa-list-alt:before{content:"\f022"}.fa-list-ol:before{content:"\f0cb"}.fa-list-ul:before{content:"\f0ca"}.fa-location-arrow:before{content:"\f124"}.fa-lock:before{content:"\f023"}.fa-lock-open:before{content:"\f3c1"}.fa-long-arrow-alt-down:before{content:"\f309"}.fa-long-arrow-alt-left:before{content:"\f30a"}.fa-long-arrow-alt-right:before{content:"\f30b"}.fa-long-arrow-alt-up:before{content:"\f30c"}.fa-low-vision:before{content:"\f2a8"}.fa-luggage-cart:before{content:"\f59d"}.fa-lungs:before{content:"\f604"}.fa-lungs-virus:before{content:"\e067"}.fa-lyft:before{content:"\f3c3"}.fa-magento:before{content:"\f3c4"}.fa-magic:before{content:"\f0d0"}.fa-magnet:before{content:"\f076"}.fa-mail-bulk:before{content:"\f674"}.fa-mailchimp:before{content:"\f59e"}.fa-male:before{content:"\f183"}.fa-mandalorian:before{content:"\f50f"}.fa-map:before{content:"\f279"}.fa-map-marked:before{content:"\f59f"}.fa-map-marked-alt:before{content:"\f5a0"}.fa-map-marker:before{content:"\f041"}.fa-map-marker-alt:before{content:"\f3c5"}.fa-map-pin:before{content:"\f276"}.fa-map-signs:before{content:"\f277"}.fa-markdown:before{content:"\f60f"}.fa-marker:before{content:"\f5a1"}.fa-mars:before{content:"\f222"}.fa-mars-double:before{content:"\f227"}.fa-mars-stroke:before{content:"\f229"}.fa-mars-stroke-h:before{content:"\f22b"}.fa-mars-stroke-v:before{content:"\f22a"}.fa-mask:before{content:"\f6fa"}.fa-mastodon:before{content:"\f4f6"}.fa-maxcdn:before{content:"\f136"}.fa-mdb:before{content:"\f8ca"}.fa-medal:before{content:"\f5a2"}.fa-medapps:before{content:"\f3c6"}.fa-medium:before{content:"\f23a"}.fa-medium-m:before{content:"\f3c7"}.fa-medkit:before{content:"\f0fa"}.fa-medrt:before{content:"\f3c8"}.fa-meetup:before{content:"\f2e0"}.fa-megaport:before{content:"\f5a3"}.fa-meh:before{content:"\f11a"}.fa-meh-blank:before{content:"\f5a4"}.fa-meh-rolling-eyes:before{content:"\f5a5"}.fa-memory:before{content:"\f538"}.fa-mendeley:before{content:"\f7b3"}.fa-menorah:before{content:"\f676"}.fa-mercury:before{content:"\f223"}.fa-meteor:before{content:"\f753"}.fa-microblog:before{content:"\e01a"}.fa-microchip:before{content:"\f2db"}.fa-microphone:before{content:"\f130"}.fa-microphone-alt:before{content:"\f3c9"}.fa-microphone-alt-slash:before{content:"\f539"}.fa-microphone-slash:before{content:"\f131"}.fa-microscope:before{content:"\f610"}.fa-microsoft:before{content:"\f3ca"}.fa-minus:before{content:"\f068"}.fa-minus-circle:before{content:"\f056"}.fa-minus-square:before{content:"\f146"}.fa-mitten:before{content:"\f7b5"}.fa-mix:before{content:"\f3cb"}.fa-mixcloud:before{content:"\f289"}.fa-mixer:before{content:"\e056"}.fa-mizuni:before{content:"\f3cc"}.fa-mobile:before{content:"\f10b"}.fa-mobile-alt:before{content:"\f3cd"}.fa-modx:before{content:"\f285"}.fa-monero:before{content:"\f3d0"}.fa-money-bill:before{content:"\f0d6"}.fa-money-bill-alt:before{content:"\f3d1"}.fa-money-bill-wave:before{content:"\f53a"}.fa-money-bill-wave-alt:before{content:"\f53b"}.fa-money-check:before{content:"\f53c"}.fa-money-check-alt:before{content:"\f53d"}.fa-monument:before{content:"\f5a6"}.fa-moon:before{content:"\f186"}.fa-mortar-pestle:before{content:"\f5a7"}.fa-mosque:before{content:"\f678"}.fa-motorcycle:before{content:"\f21c"}.fa-mountain:before{content:"\f6fc"}.fa-mouse:before{content:"\f8cc"}.fa-mouse-pointer:before{content:"\f245"}.fa-mug-hot:before{content:"\f7b6"}.fa-music:before{content:"\f001"}.fa-napster:before{content:"\f3d2"}.fa-neos:before{content:"\f612"}.fa-network-wired:before{content:"\f6ff"}.fa-neuter:before{content:"\f22c"}.fa-newspaper:before{content:"\f1ea"}.fa-nimblr:before{content:"\f5a8"}.fa-node:before{content:"\f419"}.fa-node-js:before{content:"\f3d3"}.fa-not-equal:before{content:"\f53e"}.fa-notes-medical:before{content:"\f481"}.fa-npm:before{content:"\f3d4"}.fa-ns8:before{content:"\f3d5"}.fa-nutritionix:before{content:"\f3d6"}.fa-object-group:before{content:"\f247"}.fa-object-ungroup:before{content:"\f248"}.fa-octopus-deploy:before{content:"\e082"}.fa-odnoklassniki:before{content:"\f263"}.fa-odnoklassniki-square:before{content:"\f264"}.fa-oil-can:before{content:"\f613"}.fa-old-republic:before{content:"\f510"}.fa-om:before{content:"\f679"}.fa-opencart:before{content:"\f23d"}.fa-openid:before{content:"\f19b"}.fa-opera:before{content:"\f26a"}.fa-optin-monster:before{content:"\f23c"}.fa-orcid:before{content:"\f8d2"}.fa-osi:before{content:"\f41a"}.fa-otter:before{content:"\f700"}.fa-outdent:before{content:"\f03b"}.fa-page4:before{content:"\f3d7"}.fa-pagelines:before{content:"\f18c"}.fa-pager:before{content:"\f815"}.fa-paint-brush:before{content:"\f1fc"}.fa-paint-roller:before{content:"\f5aa"}.fa-palette:before{content:"\f53f"}.fa-palfed:before{content:"\f3d8"}.fa-pallet:before{content:"\f482"}.fa-paper-plane:before{content:"\f1d8"}.fa-paperclip:before{content:"\f0c6"}.fa-parachute-box:before{content:"\f4cd"}.fa-paragraph:before{content:"\f1dd"}.fa-parking:before{content:"\f540"}.fa-passport:before{content:"\f5ab"}.fa-pastafarianism:before{content:"\f67b"}.fa-paste:before{content:"\f0ea"}.fa-patreon:before{content:"\f3d9"}.fa-pause:before{content:"\f04c"}.fa-pause-circle:before{content:"\f28b"}.fa-paw:before{content:"\f1b0"}.fa-paypal:before{content:"\f1ed"}.fa-peace:before{content:"\f67c"}.fa-pen:before{content:"\f304"}.fa-pen-alt:before{content:"\f305"}.fa-pen-fancy:before{content:"\f5ac"}.fa-pen-nib:before{content:"\f5ad"}.fa-pen-square:before{content:"\f14b"}.fa-pencil-alt:before{content:"\f303"}.fa-pencil-ruler:before{content:"\f5ae"}.fa-penny-arcade:before{content:"\f704"}.fa-people-arrows:before{content:"\e068"}.fa-people-carry:before{content:"\f4ce"}.fa-pepper-hot:before{content:"\f816"}.fa-perbyte:before{content:"\e083"}.fa-percent:before{content:"\f295"}.fa-percentage:before{content:"\f541"}.fa-periscope:before{content:"\f3da"}.fa-person-booth:before{content:"\f756"}.fa-phabricator:before{content:"\f3db"}.fa-phoenix-framework:before{content:"\f3dc"}.fa-phoenix-squadron:before{content:"\f511"}.fa-phone:before{content:"\f095"}.fa-phone-alt:before{content:"\f879"}.fa-phone-slash:before{content:"\f3dd"}.fa-phone-square:before{content:"\f098"}.fa-phone-square-alt:before{content:"\f87b"}.fa-phone-volume:before{content:"\f2a0"}.fa-photo-video:before{content:"\f87c"}.fa-php:before{content:"\f457"}.fa-pied-piper:before{content:"\f2ae"}.fa-pied-piper-alt:before{content:"\f1a8"}.fa-pied-piper-hat:before{content:"\f4e5"}.fa-pied-piper-pp:before{content:"\f1a7"}.fa-pied-piper-square:before{content:"\e01e"}.fa-piggy-bank:before{content:"\f4d3"}.fa-pills:before{content:"\f484"}.fa-pinterest:before{content:"\f0d2"}.fa-pinterest-p:before{content:"\f231"}.fa-pinterest-square:before{content:"\f0d3"}.fa-pizza-slice:before{content:"\f818"}.fa-place-of-worship:before{content:"\f67f"}.fa-plane:before{content:"\f072"}.fa-plane-arrival:before{content:"\f5af"}.fa-plane-departure:before{content:"\f5b0"}.fa-plane-slash:before{content:"\e069"}.fa-play:before{content:"\f04b"}.fa-play-circle:before{content:"\f144"}.fa-playstation:before{content:"\f3df"}.fa-plug:before{content:"\f1e6"}.fa-plus:before{content:"\f067"}.fa-plus-circle:before{content:"\f055"}.fa-plus-square:before{content:"\f0fe"}.fa-podcast:before{content:"\f2ce"}.fa-poll:before{content:"\f681"}.fa-poll-h:before{content:"\f682"}.fa-poo:before{content:"\f2fe"}.fa-poo-storm:before{content:"\f75a"}.fa-poop:before{content:"\f619"}.fa-portrait:before{content:"\f3e0"}.fa-pound-sign:before{content:"\f154"}.fa-power-off:before{content:"\f011"}.fa-pray:before{content:"\f683"}.fa-praying-hands:before{content:"\f684"}.fa-prescription:before{content:"\f5b1"}.fa-prescription-bottle:before{content:"\f485"}.fa-prescription-bottle-alt:before{content:"\f486"}.fa-print:before{content:"\f02f"}.fa-procedures:before{content:"\f487"}.fa-product-hunt:before{content:"\f288"}.fa-project-diagram:before{content:"\f542"}.fa-pump-medical:before{content:"\e06a"}.fa-pump-soap:before{content:"\e06b"}.fa-pushed:before{content:"\f3e1"}.fa-puzzle-piece:before{content:"\f12e"}.fa-python:before{content:"\f3e2"}.fa-qq:before{content:"\f1d6"}.fa-qrcode:before{content:"\f029"}.fa-question:before{content:"\f128"}.fa-question-circle:before{content:"\f059"}.fa-quidditch:before{content:"\f458"}.fa-quinscape:before{content:"\f459"}.fa-quora:before{content:"\f2c4"}.fa-quote-left:before{content:"\f10d"}.fa-quote-right:before{content:"\f10e"}.fa-quran:before{content:"\f687"}.fa-r-project:before{content:"\f4f7"}.fa-radiation:before{content:"\f7b9"}.fa-radiation-alt:before{content:"\f7ba"}.fa-rainbow:before{content:"\f75b"}.fa-random:before{content:"\f074"}.fa-raspberry-pi:before{content:"\f7bb"}.fa-ravelry:before{content:"\f2d9"}.fa-react:before{content:"\f41b"}.fa-reacteurope:before{content:"\f75d"}.fa-readme:before{content:"\f4d5"}.fa-rebel:before{content:"\f1d0"}.fa-receipt:before{content:"\f543"}.fa-record-vinyl:before{content:"\f8d9"}.fa-recycle:before{content:"\f1b8"}.fa-red-river:before{content:"\f3e3"}.fa-reddit:before{content:"\f1a1"}.fa-reddit-alien:before{content:"\f281"}.fa-reddit-square:before{content:"\f1a2"}.fa-redhat:before{content:"\f7bc"}.fa-redo:before{content:"\f01e"}.fa-redo-alt:before{content:"\f2f9"}.fa-registered:before{content:"\f25d"}.fa-remove-format:before{content:"\f87d"}.fa-renren:before{content:"\f18b"}.fa-reply:before{content:"\f3e5"}.fa-reply-all:before{content:"\f122"}.fa-replyd:before{content:"\f3e6"}.fa-republican:before{content:"\f75e"}.fa-researchgate:before{content:"\f4f8"}.fa-resolving:before{content:"\f3e7"}.fa-restroom:before{content:"\f7bd"}.fa-retweet:before{content:"\f079"}.fa-rev:before{content:"\f5b2"}.fa-ribbon:before{content:"\f4d6"}.fa-ring:before{content:"\f70b"}.fa-road:before{content:"\f018"}.fa-robot:before{content:"\f544"}.fa-rocket:before{content:"\f135"}.fa-rocketchat:before{content:"\f3e8"}.fa-rockrms:before{content:"\f3e9"}.fa-route:before{content:"\f4d7"}.fa-rss:before{content:"\f09e"}.fa-rss-square:before{content:"\f143"}.fa-ruble-sign:before{content:"\f158"}.fa-ruler:before{content:"\f545"}.fa-ruler-combined:before{content:"\f546"}.fa-ruler-horizontal:before{content:"\f547"}.fa-ruler-vertical:before{content:"\f548"}.fa-running:before{content:"\f70c"}.fa-rupee-sign:before{content:"\f156"}.fa-rust:before{content:"\e07a"}.fa-sad-cry:before{content:"\f5b3"}.fa-sad-tear:before{content:"\f5b4"}.fa-safari:before{content:"\f267"}.fa-salesforce:before{content:"\f83b"}.fa-sass:before{content:"\f41e"}.fa-satellite:before{content:"\f7bf"}.fa-satellite-dish:before{content:"\f7c0"}.fa-save:before{content:"\f0c7"}.fa-schlix:before{content:"\f3ea"}.fa-school:before{content:"\f549"}.fa-screwdriver:before{content:"\f54a"}.fa-scribd:before{content:"\f28a"}.fa-scroll:before{content:"\f70e"}.fa-sd-card:before{content:"\f7c2"}.fa-search:before{content:"\f002"}.fa-search-dollar:before{content:"\f688"}.fa-search-location:before{content:"\f689"}.fa-search-minus:before{content:"\f010"}.fa-search-plus:before{content:"\f00e"}.fa-searchengin:before{content:"\f3eb"}.fa-seedling:before{content:"\f4d8"}.fa-sellcast:before{content:"\f2da"}.fa-sellsy:before{content:"\f213"}.fa-server:before{content:"\f233"}.fa-servicestack:before{content:"\f3ec"}.fa-shapes:before{content:"\f61f"}.fa-share:before{content:"\f064"}.fa-share-alt:before{content:"\f1e0"}.fa-share-alt-square:before{content:"\f1e1"}.fa-share-square:before{content:"\f14d"}.fa-shekel-sign:before{content:"\f20b"}.fa-shield-alt:before{content:"\f3ed"}.fa-shield-virus:before{content:"\e06c"}.fa-ship:before{content:"\f21a"}.fa-shipping-fast:before{content:"\f48b"}.fa-shirtsinbulk:before{content:"\f214"}.fa-shoe-prints:before{content:"\f54b"}.fa-shopify:before{content:"\e057"}.fa-shopping-bag:before{content:"\f290"}.fa-shopping-basket:before{content:"\f291"}.fa-shopping-cart:before{content:"\f07a"}.fa-shopware:before{content:"\f5b5"}.fa-shower:before{content:"\f2cc"}.fa-shuttle-van:before{content:"\f5b6"}.fa-sign:before{content:"\f4d9"}.fa-sign-in-alt:before{content:"\f2f6"}.fa-sign-language:before{content:"\f2a7"}.fa-sign-out-alt:before{content:"\f2f5"}.fa-signal:before{content:"\f012"}.fa-signature:before{content:"\f5b7"}.fa-sim-card:before{content:"\f7c4"}.fa-simplybuilt:before{content:"\f215"}.fa-sink:before{content:"\e06d"}.fa-sistrix:before{content:"\f3ee"}.fa-sitemap:before{content:"\f0e8"}.fa-sith:before{content:"\f512"}.fa-skating:before{content:"\f7c5"}.fa-sketch:before{content:"\f7c6"}.fa-skiing:before{content:"\f7c9"}.fa-skiing-nordic:before{content:"\f7ca"}.fa-skull:before{content:"\f54c"}.fa-skull-crossbones:before{content:"\f714"}.fa-skyatlas:before{content:"\f216"}.fa-skype:before{content:"\f17e"}.fa-slack:before{content:"\f198"}.fa-slack-hash:before{content:"\f3ef"}.fa-slash:before{content:"\f715"}.fa-sleigh:before{content:"\f7cc"}.fa-sliders-h:before{content:"\f1de"}.fa-slideshare:before{content:"\f1e7"}.fa-smile:before{content:"\f118"}.fa-smile-beam:before{content:"\f5b8"}.fa-smile-wink:before{content:"\f4da"}.fa-smog:before{content:"\f75f"}.fa-smoking:before{content:"\f48d"}.fa-smoking-ban:before{content:"\f54d"}.fa-sms:before{content:"\f7cd"}.fa-snapchat:before{content:"\f2ab"}.fa-snapchat-ghost:before{content:"\f2ac"}.fa-snapchat-square:before{content:"\f2ad"}.fa-snowboarding:before{content:"\f7ce"}.fa-snowflake:before{content:"\f2dc"}.fa-snowman:before{content:"\f7d0"}.fa-snowplow:before{content:"\f7d2"}.fa-soap:before{content:"\e06e"}.fa-socks:before{content:"\f696"}.fa-solar-panel:before{content:"\f5ba"}.fa-sort:before{content:"\f0dc"}.fa-sort-alpha-down:before{content:"\f15d"}.fa-sort-alpha-down-alt:before{content:"\f881"}.fa-sort-alpha-up:before{content:"\f15e"}.fa-sort-alpha-up-alt:before{content:"\f882"}.fa-sort-amount-down:before{content:"\f160"}.fa-sort-amount-down-alt:before{content:"\f884"}.fa-sort-amount-up:before{content:"\f161"}.fa-sort-amount-up-alt:before{content:"\f885"}.fa-sort-down:before{content:"\f0dd"}.fa-sort-numeric-down:before{content:"\f162"}.fa-sort-numeric-down-alt:before{content:"\f886"}.fa-sort-numeric-up:before{content:"\f163"}.fa-sort-numeric-up-alt:before{content:"\f887"}.fa-sort-up:before{content:"\f0de"}.fa-soundcloud:before{content:"\f1be"}.fa-sourcetree:before{content:"\f7d3"}.fa-spa:before{content:"\f5bb"}.fa-space-shuttle:before{content:"\f197"}.fa-speakap:before{content:"\f3f3"}.fa-speaker-deck:before{content:"\f83c"}.fa-spell-check:before{content:"\f891"}.fa-spider:before{content:"\f717"}.fa-spinner:before{content:"\f110"}.fa-splotch:before{content:"\f5bc"}.fa-spotify:before{content:"\f1bc"}.fa-spray-can:before{content:"\f5bd"}.fa-square:before{content:"\f0c8"}.fa-square-full:before{content:"\f45c"}.fa-square-root-alt:before{content:"\f698"}.fa-squarespace:before{content:"\f5be"}.fa-stack-exchange:before{content:"\f18d"}.fa-stack-overflow:before{content:"\f16c"}.fa-stackpath:before{content:"\f842"}.fa-stamp:before{content:"\f5bf"}.fa-star:before{content:"\f005"}.fa-star-and-crescent:before{content:"\f699"}.fa-star-half:before{content:"\f089"}.fa-star-half-alt:before{content:"\f5c0"}.fa-star-of-david:before{content:"\f69a"}.fa-star-of-life:before{content:"\f621"}.fa-staylinked:before{content:"\f3f5"}.fa-steam:before{content:"\f1b6"}.fa-steam-square:before{content:"\f1b7"}.fa-steam-symbol:before{content:"\f3f6"}.fa-step-backward:before{content:"\f048"}.fa-step-forward:before{content:"\f051"}.fa-stethoscope:before{content:"\f0f1"}.fa-sticker-mule:before{content:"\f3f7"}.fa-sticky-note:before{content:"\f249"}.fa-stop:before{content:"\f04d"}.fa-stop-circle:before{content:"\f28d"}.fa-stopwatch:before{content:"\f2f2"}.fa-stopwatch-20:before{content:"\e06f"}.fa-store:before{content:"\f54e"}.fa-store-alt:before{content:"\f54f"}.fa-store-alt-slash:before{content:"\e070"}.fa-store-slash:before{content:"\e071"}.fa-strava:before{content:"\f428"}.fa-stream:before{content:"\f550"}.fa-street-view:before{content:"\f21d"}.fa-strikethrough:before{content:"\f0cc"}.fa-stripe:before{content:"\f429"}.fa-stripe-s:before{content:"\f42a"}.fa-stroopwafel:before{content:"\f551"}.fa-studiovinari:before{content:"\f3f8"}.fa-stumbleupon:before{content:"\f1a4"}.fa-stumbleupon-circle:before{content:"\f1a3"}.fa-subscript:before{content:"\f12c"}.fa-subway:before{content:"\f239"}.fa-suitcase:before{content:"\f0f2"}.fa-suitcase-rolling:before{content:"\f5c1"}.fa-sun:before{content:"\f185"}.fa-superpowers:before{content:"\f2dd"}.fa-superscript:before{content:"\f12b"}.fa-supple:before{content:"\f3f9"}.fa-surprise:before{content:"\f5c2"}.fa-suse:before{content:"\f7d6"}.fa-swatchbook:before{content:"\f5c3"}.fa-swift:before{content:"\f8e1"}.fa-swimmer:before{content:"\f5c4"}.fa-swimming-pool:before{content:"\f5c5"}.fa-symfony:before{content:"\f83d"}.fa-synagogue:before{content:"\f69b"}.fa-sync:before{content:"\f021"}.fa-sync-alt:before{content:"\f2f1"}.fa-syringe:before{content:"\f48e"}.fa-table:before{content:"\f0ce"}.fa-table-tennis:before{content:"\f45d"}.fa-tablet:before{content:"\f10a"}.fa-tablet-alt:before{content:"\f3fa"}.fa-tablets:before{content:"\f490"}.fa-tachometer-alt:before{content:"\f3fd"}.fa-tag:before{content:"\f02b"}.fa-tags:before{content:"\f02c"}.fa-tape:before{content:"\f4db"}.fa-tasks:before{content:"\f0ae"}.fa-taxi:before{content:"\f1ba"}.fa-teamspeak:before{content:"\f4f9"}.fa-teeth:before{content:"\f62e"}.fa-teeth-open:before{content:"\f62f"}.fa-telegram:before{content:"\f2c6"}.fa-telegram-plane:before{content:"\f3fe"}.fa-temperature-high:before{content:"\f769"}.fa-temperature-low:before{content:"\f76b"}.fa-tencent-weibo:before{content:"\f1d5"}.fa-tenge:before{content:"\f7d7"}.fa-terminal:before{content:"\f120"}.fa-text-height:before{content:"\f034"}.fa-text-width:before{content:"\f035"}.fa-th:before{content:"\f00a"}.fa-th-large:before{content:"\f009"}.fa-th-list:before{content:"\f00b"}.fa-the-red-yeti:before{content:"\f69d"}.fa-theater-masks:before{content:"\f630"}.fa-themeco:before{content:"\f5c6"}.fa-themeisle:before{content:"\f2b2"}.fa-thermometer:before{content:"\f491"}.fa-thermometer-empty:before{content:"\f2cb"}.fa-thermometer-full:before{content:"\f2c7"}.fa-thermometer-half:before{content:"\f2c9"}.fa-thermometer-quarter:before{content:"\f2ca"}.fa-thermometer-three-quarters:before{content:"\f2c8"}.fa-think-peaks:before{content:"\f731"}.fa-thumbs-down:before{content:"\f165"}.fa-thumbs-up:before{content:"\f164"}.fa-thumbtack:before{content:"\f08d"}.fa-ticket-alt:before{content:"\f3ff"}.fa-tiktok:before{content:"\e07b"}.fa-times:before{content:"\f00d"}.fa-times-circle:before{content:"\f057"}.fa-tint:before{content:"\f043"}.fa-tint-slash:before{content:"\f5c7"}.fa-tired:before{content:"\f5c8"}.fa-toggle-off:before{content:"\f204"}.fa-toggle-on:before{content:"\f205"}.fa-toilet:before{content:"\f7d8"}.fa-toilet-paper:before{content:"\f71e"}.fa-toilet-paper-slash:before{content:"\e072"}.fa-toolbox:before{content:"\f552"}.fa-tools:before{content:"\f7d9"}.fa-tooth:before{content:"\f5c9"}.fa-torah:before{content:"\f6a0"}.fa-torii-gate:before{content:"\f6a1"}.fa-tractor:before{content:"\f722"}.fa-trade-federation:before{content:"\f513"}.fa-trademark:before{content:"\f25c"}.fa-traffic-light:before{content:"\f637"}.fa-trailer:before{content:"\e041"}.fa-train:before{content:"\f238"}.fa-tram:before{content:"\f7da"}.fa-transgender:before{content:"\f224"}.fa-transgender-alt:before{content:"\f225"}.fa-trash:before{content:"\f1f8"}.fa-trash-alt:before{content:"\f2ed"}.fa-trash-restore:before{content:"\f829"}.fa-trash-restore-alt:before{content:"\f82a"}.fa-tree:before{content:"\f1bb"}.fa-trello:before{content:"\f181"}.fa-tripadvisor:before{content:"\f262"}.fa-trophy:before{content:"\f091"}.fa-truck:before{content:"\f0d1"}.fa-truck-loading:before{content:"\f4de"}.fa-truck-monster:before{content:"\f63b"}.fa-truck-moving:before{content:"\f4df"}.fa-truck-pickup:before{content:"\f63c"}.fa-tshirt:before{content:"\f553"}.fa-tty:before{content:"\f1e4"}.fa-tumblr:before{content:"\f173"}.fa-tumblr-square:before{content:"\f174"}.fa-tv:before{content:"\f26c"}.fa-twitch:before{content:"\f1e8"}.fa-twitter:before{content:"\f099"}.fa-twitter-square:before{content:"\f081"}.fa-typo3:before{content:"\f42b"}.fa-uber:before{content:"\f402"}.fa-ubuntu:before{content:"\f7df"}.fa-uikit:before{content:"\f403"}.fa-umbraco:before{content:"\f8e8"}.fa-umbrella:before{content:"\f0e9"}.fa-umbrella-beach:before{content:"\f5ca"}.fa-uncharted:before{content:"\e084"}.fa-underline:before{content:"\f0cd"}.fa-undo:before{content:"\f0e2"}.fa-undo-alt:before{content:"\f2ea"}.fa-uniregistry:before{content:"\f404"}.fa-unity:before{content:"\e049"}.fa-universal-access:before{content:"\f29a"}.fa-university:before{content:"\f19c"}.fa-unlink:before{content:"\f127"}.fa-unlock:before{content:"\f09c"}.fa-unlock-alt:before{content:"\f13e"}.fa-unsplash:before{content:"\e07c"}.fa-untappd:before{content:"\f405"}.fa-upload:before{content:"\f093"}.fa-ups:before{content:"\f7e0"}.fa-usb:before{content:"\f287"}.fa-user:before{content:"\f007"}.fa-user-alt:before{content:"\f406"}.fa-user-alt-slash:before{content:"\f4fa"}.fa-user-astronaut:before{content:"\f4fb"}.fa-user-check:before{content:"\f4fc"}.fa-user-circle:before{content:"\f2bd"}.fa-user-clock:before{content:"\f4fd"}.fa-user-cog:before{content:"\f4fe"}.fa-user-edit:before{content:"\f4ff"}.fa-user-friends:before{content:"\f500"}.fa-user-graduate:before{content:"\f501"}.fa-user-injured:before{content:"\f728"}.fa-user-lock:before{content:"\f502"}.fa-user-md:before{content:"\f0f0"}.fa-user-minus:before{content:"\f503"}.fa-user-ninja:before{content:"\f504"}.fa-user-nurse:before{content:"\f82f"}.fa-user-plus:before{content:"\f234"}.fa-user-secret:before{content:"\f21b"}.fa-user-shield:before{content:"\f505"}.fa-user-slash:before{content:"\f506"}.fa-user-tag:before{content:"\f507"}.fa-user-tie:before{content:"\f508"}.fa-user-times:before{content:"\f235"}.fa-users:before{content:"\f0c0"}.fa-users-cog:before{content:"\f509"}.fa-users-slash:before{content:"\e073"}.fa-usps:before{content:"\f7e1"}.fa-ussunnah:before{content:"\f407"}.fa-utensil-spoon:before{content:"\f2e5"}.fa-utensils:before{content:"\f2e7"}.fa-vaadin:before{content:"\f408"}.fa-vector-square:before{content:"\f5cb"}.fa-venus:before{content:"\f221"}.fa-venus-double:before{content:"\f226"}.fa-venus-mars:before{content:"\f228"}.fa-vest:before{content:"\e085"}.fa-vest-patches:before{content:"\e086"}.fa-viacoin:before{content:"\f237"}.fa-viadeo:before{content:"\f2a9"}.fa-viadeo-square:before{content:"\f2aa"}.fa-vial:before{content:"\f492"}.fa-vials:before{content:"\f493"}.fa-viber:before{content:"\f409"}.fa-video:before{content:"\f03d"}.fa-video-slash:before{content:"\f4e2"}.fa-vihara:before{content:"\f6a7"}.fa-vimeo:before{content:"\f40a"}.fa-vimeo-square:before{content:"\f194"}.fa-vimeo-v:before{content:"\f27d"}.fa-vine:before{content:"\f1ca"}.fa-virus:before{content:"\e074"}.fa-virus-slash:before{content:"\e075"}.fa-viruses:before{content:"\e076"}.fa-vk:before{content:"\f189"}.fa-vnv:before{content:"\f40b"}.fa-voicemail:before{content:"\f897"}.fa-volleyball-ball:before{content:"\f45f"}.fa-volume-down:before{content:"\f027"}.fa-volume-mute:before{content:"\f6a9"}.fa-volume-off:before{content:"\f026"}.fa-volume-up:before{content:"\f028"}.fa-vote-yea:before{content:"\f772"}.fa-vr-cardboard:before{content:"\f729"}.fa-vuejs:before{content:"\f41f"}.fa-walking:before{content:"\f554"}.fa-wallet:before{content:"\f555"}.fa-warehouse:before{content:"\f494"}.fa-watchman-monitoring:before{content:"\e087"}.fa-water:before{content:"\f773"}.fa-wave-square:before{content:"\f83e"}.fa-waze:before{content:"\f83f"}.fa-weebly:before{content:"\f5cc"}.fa-weibo:before{content:"\f18a"}.fa-weight:before{content:"\f496"}.fa-weight-hanging:before{content:"\f5cd"}.fa-weixin:before{content:"\f1d7"}.fa-whatsapp:before{content:"\f232"}.fa-whatsapp-square:before{content:"\f40c"}.fa-wheelchair:before{content:"\f193"}.fa-whmcs:before{content:"\f40d"}.fa-wifi:before{content:"\f1eb"}.fa-wikipedia-w:before{content:"\f266"}.fa-wind:before{content:"\f72e"}.fa-window-close:before{content:"\f410"}.fa-window-maximize:before{content:"\f2d0"}.fa-window-minimize:before{content:"\f2d1"}.fa-window-restore:before{content:"\f2d2"}.fa-windows:before{content:"\f17a"}.fa-wine-bottle:before{content:"\f72f"}.fa-wine-glass:before{content:"\f4e3"}.fa-wine-glass-alt:before{content:"\f5ce"}.fa-wix:before{content:"\f5cf"}.fa-wizards-of-the-coast:before{content:"\f730"}.fa-wodu:before{content:"\e088"}.fa-wolf-pack-battalion:before{content:"\f514"}.fa-won-sign:before{content:"\f159"}.fa-wordpress:before{content:"\f19a"}.fa-wordpress-simple:before{content:"\f411"}.fa-wpbeginner:before{content:"\f297"}.fa-wpexplorer:before{content:"\f2de"}.fa-wpforms:before{content:"\f298"}.fa-wpressr:before{content:"\f3e4"}.fa-wrench:before{content:"\f0ad"}.fa-x-ray:before{content:"\f497"}.fa-xbox:before{content:"\f412"}.fa-xing:before{content:"\f168"}.fa-xing-square:before{content:"\f169"}.fa-y-combinator:before{content:"\f23b"}.fa-yahoo:before{content:"\f19e"}.fa-yammer:before{content:"\f840"}.fa-yandex:before{content:"\f413"}.fa-yandex-international:before{content:"\f414"}.fa-yarn:before{content:"\f7e3"}.fa-yelp:before{content:"\f1e9"}.fa-yen-sign:before{content:"\f157"}.fa-yin-yang:before{content:"\f6ad"}.fa-yoast:before{content:"\f2b1"}.fa-youtube:before{content:"\f167"}.fa-youtube-square:before{content:"\f431"}.fa-zhihu:before{content:"\f63f"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:"Font Awesome 5 Brands";font-style:normal;font-weight:400;font-display:block;src:url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-brands-400.eot);src:url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-brands-400.eot?#iefix) format("embedded-opentype"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-brands-400.woff2) format("woff2"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-brands-400.woff) format("woff"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-brands-400.ttf) format("truetype"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-brands-400.svg#fontawesome) format("svg")}.fab{font-family:"Font Awesome 5 Brands"}@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:400;font-display:block;src:url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.eot);src:url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.eot?#iefix) format("embedded-opentype"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.woff2) format("woff2"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.woff) format("woff"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.ttf) format("truetype"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.svg#fontawesome) format("svg")}.fab,.far{font-weight:400}@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:900;font-display:block;src:url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-solid-900.eot);src:url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-solid-900.eot?#iefix) format("embedded-opentype"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-solid-900.woff2) format("woff2"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-solid-900.woff) format("woff"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-solid-900.ttf) format("truetype"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-solid-900.svg#fontawesome) format("svg")}.fa,.far,.fas{font-family:"Font Awesome 5 Free"}.fa,.fas{font-weight:900}/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:400;font-display:block;src:url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.eot);src:url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.eot?#iefix) format("embedded-opentype"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.woff2) format("woff2"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.woff) format("woff"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.ttf) format("truetype"),url(/wp-content/plugins/elementor/assets/lib/font-awesome/css/../webfonts/fa-regular-400.svg#fontawesome) format("svg")}.far{font-family:"Font Awesome 5 Free";font-weight:400}/* Template Header Footer */
header.tf-custom-header,
footer.tf-custom-footer {
    padding: 0 !important;
    max-width: 100% !important;
}

.tf-container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

.tf-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.tf-col {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;    
}
