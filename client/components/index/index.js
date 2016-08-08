'use strict';
const CSS_CLASSES = require('./selectors');

// Listen to document.ready event
$(document).ready(onDocumentReady);

function onDocumentReady() {
  console.log('Index component loaded');
}