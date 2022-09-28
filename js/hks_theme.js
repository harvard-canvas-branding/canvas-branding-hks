// window.ENV.COURSE_WIZARD check: cf TLT-2602
if (window.ENV.COURSE_WIZARD) {
    require(['jsx/course_wizard/ListItems'], function(ListItems) {
        var itemsToRemove = ['add_students', 'add_tas'];
        var shouldRemoveItem = function(item) {
            return itemsToRemove.indexOf(item.key) > -1;
        };
        var removeIrrelevantItems = function(item, index, listItems) {
            if (shouldRemoveItem(item)) {
                listItems.splice(index, 1);
            }
        };
        ListItems.forEach(removeIrrelevantItems);
    });
}

////////////////////////////////////////////////////
// DESIGN TOOLS CONFIG                            //
////////////////////////////////////////////////////
// Copyright (C) 2017  Utah State University
var DT_variables = {
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '72299',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: true,
    	 // OPTIONAL: Limit by course format
	     limitByFormat: true, // Change to true to limit by format
	     // adjust the formats as needed. Format must be set for the course and in this array for tools to load
	     formatArray: [
            'on-campus'
        ],
        // OPTIONAL: Limit tools loading by users role
        limitByRole: true, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'admin'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: false, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            '1147',
            '987654'
        ]
};

// Run the necessary code when a page loads
$(document).ready(function () {
    'use strict';
    // This runs code that looks at each page and determines what controls to create
    $.getScript(DT_variables.path + 'js/master_controls.js', function () {
        console.log('master_controls.js loaded');
    });
});
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////

///// Javascript for Blue course evaluations
var BLUE_CANVAS_SETUP={connectorUrl:"https://harvard.bluera.com/harvardBlueConnector/",canvasAPI:"https://canvas.harvard.edu",domainName:"com.explorance",consumerID:"uneAb3wY2QaWRG4D4S117w==",defaultLanguage:"en-us"},BlueCanvasJS=document.createElement("script");BlueCanvasJS.setAttribute("type","text/javascript");BlueCanvasJS.setAttribute("src","https://harvard.bluera.com/harvardBlueConnector//Scripts/Canvas/BlueCanvas.min.js");document.getElementsByTagName("head")[0].appendChild(BlueCanvasJS);