/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global document, console */

( function() {
	let lastDomElementsCount;

	beforeEach( () => {
		lastDomElementsCount = document.body.childElementCount;
	} );

	afterEach( () => {
		if ( document.body.childElementCount !== lastDomElementsCount ) {
			console.warn( `
@@@@ We're having some DOM elements change after previous test case here! Not good, not good.
DOM elements count change ${ document.body.childElementCount - lastDomElementsCount }.
` );
			lastDomElementsCount = document.body.childElementCount;
		}
	} );
}() );
