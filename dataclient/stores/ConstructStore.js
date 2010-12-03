/*
 * File: ConstructStore.js
 * Date: Thu Dec 02 2010 20:38:56 GMT-0800 (PST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

ConstructStore = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        ConstructStore.superclass.constructor.call(this, Ext.apply({
            storeId: 'constructStore',
            root: 'constructs',
            url: '../data/constructs.json',
            idProperty: 'biofabid',
            autoLoad: true,
            fields: [
                {
                    name: 'biofabid',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'prmean',
                    allowBlank: false,
                    type: 'float'
                },
                {
                    name: 'strain',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'media',
                    type: 'string'
                },
                {
                    name: 'phase',
                    type: 'string'
                }
            ]
        }, cfg));
    }
});
new ConstructStore();