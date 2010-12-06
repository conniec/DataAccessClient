/*
 * File: DataAccessClientViewport.js
 * 
 * 
 * 
 * 
 */

DataAccessClientViewport = Ext.extend(DataAccessClientViewportUi, 
{
    initComponent: function() 
    {
        DataAccessClientViewport.superclass.initComponent.call(this);
        
        var constructsGridSelectionModel = this.constructsGridPanel.getSelectionModel();
		constructsGridSelectionModel.on('rowselect', this.constructsGridSelectHandler, this);
    },
    
	constructsGridSelectHandler: function(selectModel, rowIndex, record)
	{
	    var id = record.get("biofabid");
	    this.showDatasheet(id);
	},
	
	showDatasheet: function(componentID)
	{
		var tab = this.infoTabPanel.add({
			xtype: 'panel',
			title: componentID,
			items: [{
                        xtype: 'tabpanel',
                        activeTab: 0,
                        items:[
                               {
                            	   xtype:'panel',
                            	   title: 'Design',
                            	   items:[{
                            		   		xtype: 'flash',
                            		   		url: '../designviewer/DesignViewer.swf',
                            		   		flashVars:{constructID:componentID}
	                            	     }]
                            	},
                            	{
                        			xtype: 'panel',
                        			title: 'Behaviors'
                            	}
                               ]
                     }]
          });

		this.infoTabPanel.setActiveTab(tab);
	}
});
