/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' }
	];

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';

	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';
	config.skin="minimalist";
	config.width = '75%';
	config.allowedContent = true;
	config.env = window.location.hostname
	config.urlMap = {
		'localhost': 'https://devapi.upgrad.com/apis/v3/file/upload/image',
		'devapp.upgrad.com' : 'https://devapi.upgrad.com/apis/v3/file/upload/image',
		'stagingapp.upgrad.com': 'https://stagingapi.upgrad.com/apis/v3/file/upload/image',
		'stagingindia.upgrad.com': 'https://stagingapi.upgrad.com/apis/v3/file/upload/image',
		'learn.upgrad.com': 'https://prodapi.upgrad.com/apis/v3/file/upload/image',
		'startupindia.upgrad.com': 'https://prodapi.upgrad.com/apis/v3/file/upload/image'
	}
	config.extraAllowedContent ='img[src,width,height,alt,title,data-width,data-height]';
	config.extraPlugins = 'simage';
	// config.enterMode = CKEDITOR.ENTER_BR // pressing the ENTER Key puts the <br/> tag
	config.shiftEnterMode = CKEDITOR.ENTER_P; //pressing the SHIFT + ENTER Keys puts the <p> tag
};
