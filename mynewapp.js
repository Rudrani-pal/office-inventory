sap.ui.define([
  'jquery.sap.global',
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, JSONModel) {
  "use strict";

  var oController = Controller.extend("mynewapp.controller.example", {
			onPressDetailBack: function () {
                this.getSplitAppObj().backDetail();
            },
    
            onPressMasterBack: function () {
                this.getSplitAppObj().backMaster();
            },
    
            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
    
                this.getSplitAppObj().toDetail(this.createId(sToPageId));
            },
    
            onPressModeBtn: function (oEvent) {
                var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();
    
                this.getSplitAppObj().setMode(sSplitAppMode);
                MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, { duration: 5000 });
            },
    
            getSplitAppObj: function () {
                var result = this.byId("SplitAppDemo");
                if (!result) {
                    Log.info("SplitApp object can't be found");
                }
                return result;
            }
  });

  return oController;
});

var oView = sap.ui.xmlview({
  viewContent: jQuery('#oView').html()
});

oView.placeAt('content');