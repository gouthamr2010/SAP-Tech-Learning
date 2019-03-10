sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.SmartControl.controller.View1", {
		onInit: function () {
			this.getView().bindElement("/Employees(1)");
		}
	});
});