/*
 * File: ConstructHasPart.js
 * Date: Thu Dec 02 2010 20:38:56 GMT-0800 (PST)
 * 
 * This file was generated by Ext Designer version xds-1.0.2.14.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

ConstructHasPart = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        ConstructHasPart.superclass.constructor.call(this, Ext.apply({
            storeId: 'constructHasPartStore',
            root: 'constructhaspart',
            url: '../data/constructhaspart.json',
            autoLoad: true,
            fields: [
                {
                    name: 'id',
                    allowBlank: false,
                    type: 'int'
                },
                {
                    name: 'construct',
                    allowBlank: false,
                    type: 'string'
                },
                {
                    name: 'part',
                    allowBlank: false,
                    type: 'string'
                }
            ]
        }, cfg));
    }
});
new ConstructHasPart();