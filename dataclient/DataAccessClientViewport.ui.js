/*
 * File: DataAccessClientViewport.ui.js
 * Date: Sun Dec 05 2010 17:01:14 GMT-0800 (PST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

DataAccessClientViewportUi = Ext.extend(Ext.Viewport, {
    layout: 'border',
    id: 'dataAccessClientViewport',
    initComponent: function() {
        this.items = [
            {
                xtype: 'container',
                region: 'west',
                width: 400,
                layout: 'border',
                split: true,
                ref: 'componentsContainer',
                id: 'componentsContainer',
                items: [
                    {
                        xtype: 'grid',
                        title: 'Parts',
                        store: 'partStore',
                        region: 'center',
                        split: true,
                        columnLines: true,
                        stripeRows: true,
                        ref: '../partsGridPanel',
                        id: 'partsGridPanel',
                        columns: [
                            {
                                xtype: 'gridcolumn',
                                dataIndex: 'id',
                                header: 'Identifier',
                                sortable: true,
                                width: 80,
                                editable: false
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Type',
                                sortable: true,
                                width: 100,
                                dataIndex: 'biofunction'
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Description',
                                sortable: true,
                                width: 100,
                                dataIndex: 'description'
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Composibility',
                                sortable: true,
                                width: 100,
                                dataIndex: 'composibility',
                                editable: false
                            }
                        ]
                    },
                    {
                        xtype: 'grid',
                        title: 'Constructs',
                        store: 'constructStore',
                        region: 'south',
                        split: true,
                        height: 300,
                        stripeRows: true,
                        columnLines: true,
                        ref: '../constructsGridPanel',
                        id: 'constructsGridPanel',
                        selModel: new Ext.grid.RowSelectionModel({
                            singleSelect: true
                        }),
                        columns: [
                            {
                                xtype: 'gridcolumn',
                                dataIndex: 'biofabid',
                                header: 'Identifier',
                                sortable: true,
                                width: 100,
                                editable: false
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Description',
                                sortable: true,
                                width: 100,
                                dataIndex: 'description',
                                editable: false,
                                hidden: true
                            },
                            {
                                xtype: 'numbercolumn',
                                header: 'Fluorescence',
                                sortable: true,
                                width: 100,
                                align: 'left',
                                editable: false,
                                dataIndex: 'prmean'
                            },
                            {
                                xtype: 'gridcolumn',
                                dataIndex: 'strain',
                                header: 'Strain',
                                sortable: true,
                                width: 100,
                                editable: false
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Media',
                                sortable: true,
                                width: 100,
                                dataIndex: 'media',
                                editable: false
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Phase',
                                sortable: true,
                                width: 100,
                                dataIndex: 'phase',
                                editable: false
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                activeTab: 0,
                region: 'center',
                split: true,
                ref: 'infoTabPanel',
                id: 'infoTabPanel'
            }
        ];
        DataAccessClientViewportUi.superclass.initComponent.call(this);
    }
});
