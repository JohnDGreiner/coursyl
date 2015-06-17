// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function hideLastRow() {
  var associations = document.getElementsByClassName("association container");
  var lastAssociation = associations[associations.length-1];
  lastAssociation.style.display = "none";
}

window.onload = hideLastRow

function disableUpdateButton() {
  var elements = document.getElementsByClassName("btn");
  var last = elements[elements.length-1];
  last.disabled=true;
}

function showLastRow() {
  var associations = document.getElementsByClassName("association container");
  var lastAssociation = associations[associations.length-1];
  lastAssociation.style.display = "block";
}

function hideDeleteRow(position) {
  var associations = document.getElementsByClassName("association container");
  var associationRow = associations[position];
  associationRow.style.display = "none";
  markDelete(position);

}

function markDelete(position) {
  var associations = document.getElementsByClassName("destroy");
  var associationRow = associations[position];
  associationRow.checked = true;
}
