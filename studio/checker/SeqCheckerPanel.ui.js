/*
 * File: SeqCheckerPanel.ui.js
 * Date: Wed Dec 01 2010 17:23:40 GMT-0800 (PST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

SeqCheckerPanelUi = Ext.extend(Ext.TabPanel, {
    activeTab: 0,
    width: 800,
    height: 600,
    title: 'Sequence Checker',
    closable: true,
    id: 'seqCheckerPanel',
    initComponent: function() {
        this.items = [
            {
                xtype: 'panel',
                title: 'Parameters',
                height: 200,
                layout: 'absolute',
                id: 'parametersPanel',
                items: [
                    {
                        xtype: 'displayfield',
                        value: 'Traces Folder:',
                        width: 145,
                        x: 10,
                        y: 35,
                        ref: '../traces',
                        id: 'tracesDisplayField'
                    },
                    {
                        xtype: 'textfield',
                        x: 165,
                        y: 35,
                        width: 245,
                        ref: '../tracesTextField',
                        id: 'tracesTextField'
                    },
                    {
                        xtype: 'displayfield',
                        value: 'Constructs Folder:',
                        width: 150,
                        x: 10,
                        y: 10,
                        ref: '../constructsDisplayField',
                        id: 'constructsDisplayField'
                    },
                    {
                        xtype: 'textfield',
                        x: 165,
                        y: 10,
                        width: 245,
                        ref: '../constructsTextField',
                        id: 'constructsTextField'
                    },
                    {
                        xtype: 'displayfield',
                        value: 'Regular Expression:',
                        width: 150,
                        x: 10,
                        y: 60,
                        ref: '../regExpDisplayField',
                        id: 'regExpDisplayField'
                    },
                    {
                        xtype: 'textfield',
                        x: 165,
                        y: 60,
                        width: 245,
                        ref: '../regExpTextField',
                        id: 'regExpTextField'
                    },
                    {
                        xtype: 'displayfield',
                        value: 'Mapping File:',
                        width: 145,
                        x: 10,
                        y: 85,
                        ref: '../mappingDisplayField',
                        id: 'mappingDisplayField'
                    },
                    {
                        xtype: 'textfield',
                        x: 165,
                        y: 85,
                        width: 245,
                        readOnly: true,
                        ref: '../regExpTextField',
                        id: 'mappingTextField'
                    },
                    {
                        xtype: 'displayfield',
                        value: 'Boundaries:',
                        width: 145,
                        x: 10,
                        y: 115,
                        ref: '../boundariesDisplayField',
                        id: 'boundariesDisplayField'
                    },
                    {
                        xtype: 'editorgrid',
                        store: 'startStopStore',
                        width: 245,
                        x: 165,
                        y: 110,
                        height: 160,
                        columnLines: true,
                        stripeRows: true,
                        ref: '../startStopEditorGrid',
                        id: 'startStopEditorGrid',
                        columns: [
                            {
                                xtype: 'gridcolumn',
                                dataIndex: 'start',
                                header: 'Start',
                                sortable: true,
                                width: 120,
                                align: 'left',
                                editor: {
                                    xtype: 'textfield'
                                }
                            },
                            {
                                xtype: 'gridcolumn',
                                header: 'Stop',
                                sortable: true,
                                width: 120,
                                editor: {
                                    xtype: 'textfield'
                                }
                            }
                        ],
                        bbar: {
                            xtype: 'toolbar',
                            id: 'startStopToolbar',
                            items: [
                                {
                                    xtype: 'button',
                                    text: '+',
                                    width: 20,
                                    ref: '../../../addStartStopButton',
                                    id: 'addStartStopButton'
                                },
                                {
                                    xtype: 'button',
                                    text: '-',
                                    width: 20,
                                    ref: '../../../deleteStartStopButton',
                                    id: 'deleteStartStopButton'
                                }
                            ]
                        }
                    }
                ],
                tbar: {
                    xtype: 'toolbar',
                    ref: '../parametersToolbar',
                    id: 'parametersToolbar',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Check',
                            ref: '../../checkButton',
                            id: 'checkButton'
                        }
                    ]
                }
            },
            {
                xtype: 'panel',
                title: 'Result',
                height: 400,
                layout: 'fit',
                ref: 'resultPanel',
                id: 'resultPanel',
                items: [
                    {
                        xtype: 'textarea',
                        region: 'center',
                        split: true,
                        ref: '../resultTextArea',
                        id: 'resultTextArea'
                    }
                ],
                tbar: {
                    xtype: 'toolbar',
                    ref: '../resultsToolbar',
                    id: 'resultsToolbar',
                    items: [
                        {
                            xtype: 'button',
                            text: 'BIOFAB',
                            ref: '../../biofabButton',
                            id: 'biofabButton'
                        }
                    ]
                }
            }
        ];
        SeqCheckerPanelUi.superclass.initComponent.call(this);
    }
});