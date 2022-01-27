'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">covid-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-e8b2f0ab8e12f42aa7f64ed215215c26cde53d1a98ecc0ef6d8f6492480d2ae417142653a06966925128d4a8bf215e4706ff437358710bb3914138bd3be0d628"' : 'data-target="#xs-controllers-links-module-AppModule-e8b2f0ab8e12f42aa7f64ed215215c26cde53d1a98ecc0ef6d8f6492480d2ae417142653a06966925128d4a8bf215e4706ff437358710bb3914138bd3be0d628"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e8b2f0ab8e12f42aa7f64ed215215c26cde53d1a98ecc0ef6d8f6492480d2ae417142653a06966925128d4a8bf215e4706ff437358710bb3914138bd3be0d628"' :
                                            'id="xs-controllers-links-module-AppModule-e8b2f0ab8e12f42aa7f64ed215215c26cde53d1a98ecc0ef6d8f6492480d2ae417142653a06966925128d4a8bf215e4706ff437358710bb3914138bd3be0d628"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-e8b2f0ab8e12f42aa7f64ed215215c26cde53d1a98ecc0ef6d8f6492480d2ae417142653a06966925128d4a8bf215e4706ff437358710bb3914138bd3be0d628"' : 'data-target="#xs-injectables-links-module-AppModule-e8b2f0ab8e12f42aa7f64ed215215c26cde53d1a98ecc0ef6d8f6492480d2ae417142653a06966925128d4a8bf215e4706ff437358710bb3914138bd3be0d628"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e8b2f0ab8e12f42aa7f64ed215215c26cde53d1a98ecc0ef6d8f6492480d2ae417142653a06966925128d4a8bf215e4706ff437358710bb3914138bd3be0d628"' :
                                        'id="xs-injectables-links-module-AppModule-e8b2f0ab8e12f42aa7f64ed215215c26cde53d1a98ecc0ef6d8f6492480d2ae417142653a06966925128d4a8bf215e4706ff437358710bb3914138bd3be0d628"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LoginModule-6164577a1fd0f141e179b8e12347dbfc08d4591ec71e48b056d850e302ef836e88476a6ac8752d0202a3afc2294e48ed726524bf07535a14780fa8bb2ade72ab"' : 'data-target="#xs-controllers-links-module-LoginModule-6164577a1fd0f141e179b8e12347dbfc08d4591ec71e48b056d850e302ef836e88476a6ac8752d0202a3afc2294e48ed726524bf07535a14780fa8bb2ade72ab"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LoginModule-6164577a1fd0f141e179b8e12347dbfc08d4591ec71e48b056d850e302ef836e88476a6ac8752d0202a3afc2294e48ed726524bf07535a14780fa8bb2ade72ab"' :
                                            'id="xs-controllers-links-module-LoginModule-6164577a1fd0f141e179b8e12347dbfc08d4591ec71e48b056d850e302ef836e88476a6ac8752d0202a3afc2294e48ed726524bf07535a14780fa8bb2ade72ab"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-6164577a1fd0f141e179b8e12347dbfc08d4591ec71e48b056d850e302ef836e88476a6ac8752d0202a3afc2294e48ed726524bf07535a14780fa8bb2ade72ab"' : 'data-target="#xs-injectables-links-module-LoginModule-6164577a1fd0f141e179b8e12347dbfc08d4591ec71e48b056d850e302ef836e88476a6ac8752d0202a3afc2294e48ed726524bf07535a14780fa8bb2ade72ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-6164577a1fd0f141e179b8e12347dbfc08d4591ec71e48b056d850e302ef836e88476a6ac8752d0202a3afc2294e48ed726524bf07535a14780fa8bb2ade72ab"' :
                                        'id="xs-injectables-links-module-LoginModule-6164577a1fd0f141e179b8e12347dbfc08d4591ec71e48b056d850e302ef836e88476a6ac8752d0202a3afc2294e48ed726524bf07535a14780fa8bb2ade72ab"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-38d3bbf08cbcc05dbbbf9c39482e124ca61eaef104fd95c59ee7ff56e420e13968295bb01893e33d87ab35f90e09f9b1f7adc1b2028c60841419790a23dcf48b"' : 'data-target="#xs-controllers-links-module-UserModule-38d3bbf08cbcc05dbbbf9c39482e124ca61eaef104fd95c59ee7ff56e420e13968295bb01893e33d87ab35f90e09f9b1f7adc1b2028c60841419790a23dcf48b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-38d3bbf08cbcc05dbbbf9c39482e124ca61eaef104fd95c59ee7ff56e420e13968295bb01893e33d87ab35f90e09f9b1f7adc1b2028c60841419790a23dcf48b"' :
                                            'id="xs-controllers-links-module-UserModule-38d3bbf08cbcc05dbbbf9c39482e124ca61eaef104fd95c59ee7ff56e420e13968295bb01893e33d87ab35f90e09f9b1f7adc1b2028c60841419790a23dcf48b"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-38d3bbf08cbcc05dbbbf9c39482e124ca61eaef104fd95c59ee7ff56e420e13968295bb01893e33d87ab35f90e09f9b1f7adc1b2028c60841419790a23dcf48b"' : 'data-target="#xs-injectables-links-module-UserModule-38d3bbf08cbcc05dbbbf9c39482e124ca61eaef104fd95c59ee7ff56e420e13968295bb01893e33d87ab35f90e09f9b1f7adc1b2028c60841419790a23dcf48b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-38d3bbf08cbcc05dbbbf9c39482e124ca61eaef104fd95c59ee7ff56e420e13968295bb01893e33d87ab35f90e09f9b1f7adc1b2028c60841419790a23dcf48b"' :
                                        'id="xs-injectables-links-module-UserModule-38d3bbf08cbcc05dbbbf9c39482e124ca61eaef104fd95c59ee7ff56e420e13968295bb01893e33d87ab35f90e09f9b1f7adc1b2028c60841419790a23dcf48b"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VaccineDetailsModule.html" data-type="entity-link" >VaccineDetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VaccineDetailsModule-6b06f09a9ac5a0ecaf3d6871580ae0de194ec91fc7cae58539c18e522b11bd15162f30d6f50fd83fc332d86fb449516f7fd664dd355aa5251c04075954e9f03d"' : 'data-target="#xs-controllers-links-module-VaccineDetailsModule-6b06f09a9ac5a0ecaf3d6871580ae0de194ec91fc7cae58539c18e522b11bd15162f30d6f50fd83fc332d86fb449516f7fd664dd355aa5251c04075954e9f03d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VaccineDetailsModule-6b06f09a9ac5a0ecaf3d6871580ae0de194ec91fc7cae58539c18e522b11bd15162f30d6f50fd83fc332d86fb449516f7fd664dd355aa5251c04075954e9f03d"' :
                                            'id="xs-controllers-links-module-VaccineDetailsModule-6b06f09a9ac5a0ecaf3d6871580ae0de194ec91fc7cae58539c18e522b11bd15162f30d6f50fd83fc332d86fb449516f7fd664dd355aa5251c04075954e9f03d"' }>
                                            <li class="link">
                                                <a href="controllers/VaccineDetailsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineDetailsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VaccineDetailsModule-6b06f09a9ac5a0ecaf3d6871580ae0de194ec91fc7cae58539c18e522b11bd15162f30d6f50fd83fc332d86fb449516f7fd664dd355aa5251c04075954e9f03d"' : 'data-target="#xs-injectables-links-module-VaccineDetailsModule-6b06f09a9ac5a0ecaf3d6871580ae0de194ec91fc7cae58539c18e522b11bd15162f30d6f50fd83fc332d86fb449516f7fd664dd355aa5251c04075954e9f03d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VaccineDetailsModule-6b06f09a9ac5a0ecaf3d6871580ae0de194ec91fc7cae58539c18e522b11bd15162f30d6f50fd83fc332d86fb449516f7fd664dd355aa5251c04075954e9f03d"' :
                                        'id="xs-injectables-links-module-VaccineDetailsModule-6b06f09a9ac5a0ecaf3d6871580ae0de194ec91fc7cae58539c18e522b11bd15162f30d6f50fd83fc332d86fb449516f7fd664dd355aa5251c04075954e9f03d"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VaccineDetailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineDetailsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VaccineTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VaccineTypeModule.html" data-type="entity-link" >VaccineTypeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VaccineTypeModule-1d3a458de359b7f8fa21a7d4d93e3cde15d500ab171ab5706a66527a21051e3ffb7af0a4273af73871815c6c9e1146d2391d72fdfc20a2d6a4bccf804d7324ac"' : 'data-target="#xs-controllers-links-module-VaccineTypeModule-1d3a458de359b7f8fa21a7d4d93e3cde15d500ab171ab5706a66527a21051e3ffb7af0a4273af73871815c6c9e1146d2391d72fdfc20a2d6a4bccf804d7324ac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VaccineTypeModule-1d3a458de359b7f8fa21a7d4d93e3cde15d500ab171ab5706a66527a21051e3ffb7af0a4273af73871815c6c9e1146d2391d72fdfc20a2d6a4bccf804d7324ac"' :
                                            'id="xs-controllers-links-module-VaccineTypeModule-1d3a458de359b7f8fa21a7d4d93e3cde15d500ab171ab5706a66527a21051e3ffb7af0a4273af73871815c6c9e1146d2391d72fdfc20a2d6a4bccf804d7324ac"' }>
                                            <li class="link">
                                                <a href="controllers/VaccineTypeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VaccineTypeModule-1d3a458de359b7f8fa21a7d4d93e3cde15d500ab171ab5706a66527a21051e3ffb7af0a4273af73871815c6c9e1146d2391d72fdfc20a2d6a4bccf804d7324ac"' : 'data-target="#xs-injectables-links-module-VaccineTypeModule-1d3a458de359b7f8fa21a7d4d93e3cde15d500ab171ab5706a66527a21051e3ffb7af0a4273af73871815c6c9e1146d2391d72fdfc20a2d6a4bccf804d7324ac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VaccineTypeModule-1d3a458de359b7f8fa21a7d4d93e3cde15d500ab171ab5706a66527a21051e3ffb7af0a4273af73871815c6c9e1146d2391d72fdfc20a2d6a4bccf804d7324ac"' :
                                        'id="xs-injectables-links-module-VaccineTypeModule-1d3a458de359b7f8fa21a7d4d93e3cde15d500ab171ab5706a66527a21051e3ffb7af0a4273af73871815c6c9e1146d2391d72fdfc20a2d6a4bccf804d7324ac"' }>
                                        <li class="link">
                                            <a href="injectables/VaccineTypeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineTypeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoginController.html" data-type="entity-link" >LoginController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VaccineDetailsController.html" data-type="entity-link" >VaccineDetailsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VaccineTypeController.html" data-type="entity-link" >VaccineTypeController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Login.html" data-type="entity-link" >Login</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                                <li class="link">
                                    <a href="entities/VaccineDetails.html" data-type="entity-link" >VaccineDetails</a>
                                </li>
                                <li class="link">
                                    <a href="entities/VaccineType.html" data-type="entity-link" >VaccineType</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddUserDto.html" data-type="entity-link" >AddUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddVaccineDetailsDto.html" data-type="entity-link" >AddVaccineDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnauthorizedException.html" data-type="entity-link" >UnauthorizedException</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtTokenService.html" data-type="entity-link" >JwtTokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaccineDetailsService.html" data-type="entity-link" >VaccineDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaccineTypeService.html" data-type="entity-link" >VaccineTypeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SwaggerConfig.html" data-type="entity-link" >SwaggerConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});