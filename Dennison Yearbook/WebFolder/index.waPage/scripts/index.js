
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var fileUpload2 = {};	// @fileUpload
	var textField3 = {};	// @textField
	var button8 = {};	// @button
	var documentEvent = {};	// @document
	var dataGrid2 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	fileUpload2.filesUploaded = function fileUpload2_filesUploaded (event)// @startlock
	{// @endlock
		/*var uploadedFiles = $$('fileUpload2').getFiles();
		var i = 0;
		var length = uploadedFiles.length;
		
		for (i = 0, i < length; i++) {
			sources.photo.fileName = uploadedFiles.name;
			sources.photo.save({
				onSuccess: function(event) {
					sources.photo.autoDispatch();
					alert(event.response);
				},
				onError function(event) {
					alert(event.error[0].message);
				}
			});
		}*/
	};// @lock

	textField3.blur = function textField3_blur (event)// @startlock
	{// @endlock
		/*if ($$('textField3').getValue() != "") {
			$$('fileUpload2').show();
		}
		else {
			$$('fileUpload2').hide();
		}*/
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		sources.photo.fileName = 'Not defined yet';
		sources.photo.save();
		sources.photo.autoDispatch();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		/*if ($$('textField3').getValue() != "") {
			$$('fileUpload2').show();
		}
		else {
			$$('fileUpload2').hide();
		}*/
	};// @lock

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		/*if ($$('textField3').getValue() != "") {
			$$('fileUpload2').show();
		}
		else {
			$$('fileUpload2').hide();
		}*/
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("fileUpload2", "filesUploaded", fileUpload2.filesUploaded, "WAF");
	WAF.addListener("textField3", "blur", textField3.blur, "WAF");
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
// @endregion
};// @endlock
