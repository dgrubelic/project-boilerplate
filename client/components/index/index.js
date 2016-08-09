'use strict';
const config = require('./config.json');

// Listen to document.ready event
$(document).ready(onDocumentReady);

function onDocumentReady() {
  console.log('Index component loaded');
}