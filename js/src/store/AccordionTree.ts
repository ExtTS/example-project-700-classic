// TODO:
declare namespace App.store.AccordionTree {
	interface Operation extends Ext.data.operation.Operation{
		node: any;
		config: any;
	}
}

Ext.define('App.store.AccordionTree', <Ext.data.TreeStore.Def>{
	extend: 'Ext.data.TreeStore',
	requires: [
		'App.store.AccordionTreeProxy'
	],
	config: {
		autoLoad: false,
		nodeParam: 'id', // default: 'node'
		// proxy: {type: 'ajax', url: 'ur is set dynamicly from Main controller throught '} 
		root: {
			expanded: true
		},
		/*
		folderSort: true,
		sorters: [{
			property: 'sequence',
			direction: 'ASC'
		}],
		*/
		listeners: <Ext.data.TreeStore.Events>{
			beforeload: function (store: Ext.data.Store, operation: App.store.AccordionTree.Operation, eOpts: object) {
				var nodeRawValues = operation.node.raw,
					operationParams = operation.config.params;
				if (typeof(nodeRawValues) == 'undefined') {
					operationParams.id = '0';
					operationParams.module = '';
				} else {
					operationParams.id = nodeRawValues.i;
					operationParams.module = nodeRawValues.m;
				}
				return true;
			},
			load: function (_this: Ext.data.TreeStore, records: Ext.data.TreeModel[], successful: boolean, operation: Ext.data.Operation, node: Ext.data.NodeInterface, eOpts: object) {
				console.log("loaded");
			}
		}
	}
});
