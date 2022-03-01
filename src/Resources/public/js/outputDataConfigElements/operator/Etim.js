/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Commercial License (PCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 *  @license    http://www.pimcore.org/license     GPLv3 and PCL
 */


pimcore.registerNS("pimcore.bundle.outputDataConfigToolkit.outputDataConfigElements.operator.Etim");

pimcore.bundle.outputDataConfigToolkit.outputDataConfigElements.operator.Etim = Class.create(pimcore.bundle.outputDataConfigToolkit.outputDataConfigElements.Abstract, {
    type: "operator",
    class: "Etim",
    iconCls: "pimcore_icon_operator_text",
    defaultText: "operator_etim",


    getConfigTreeNode: function(configAttributes) {
        console.log(configAttributes)
        if(configAttributes) {
            var node = {
                draggable: true,
                iconCls: this.iconCls,
                text: configAttributes.etimFeatureCode,
                configAttributes: configAttributes,
                isTarget: true,
                maxChildCount: 1,
                expanded: true,
                leaf: false,
                expandable: false
            };
        } else {

            //For building up operator list
            var configAttributes = { type: this.type, class: this.class};

            var node = {
                draggable: true,
                iconCls: this.iconCls,
                text: this.defaultText,
                configAttributes: configAttributes,
                isTarget: true,
                maxChildCount: 1,
                leaf: true
            };
        }
        return node;
    },


    getCopyNode: function(source) {
        var copy = source.createNode({
            iconCls: this.iconCls,
            text: source.data.etimFeatureCode,
            isTarget: true,
            leaf: false,
            maxChildCount: 1,
            expanded: true,
            expandable: false,
            configAttributes: {
                label: 'ETIM',
                type: this.type,
                class: this.class
            }
        });
        return copy;
    },


    getConfigDialog: function(node) {
        this.node = node;

        this.etimFeatureCode = new Ext.form.TextField({
            fieldLabel: "ETIM Feature Code"
            length: 255,
            width: 200,
            value: this.node.data.configAttributes.etimFeatureCode
        });

        this.configPanel = new Ext.Panel({
            layout: "form",
            bodyStyle: "padding: 10px;",
            items: [this.etimFeatureCode],
            buttons: [{
                text: t("apply"),
                iconCls: "pimcore_icon_apply",
                handler: function () {
                    this.commitData();
                }.bind(this)
            }]
        });

        this.window = new Ext.Window({
            width: 400,
            height: 350,
            modal: true,
            title: "ETIM",
            layout: "fit",
            items: [this.configPanel]
        });

        this.window.show();
        return this.window;
    },

    commitData: function() {
        this.node.data.configAttributes.etimFeatureCode = this.etimFeatureCode.getValue();
        this.node.set('text', this.etimFeatureCode.getValue());
        this.window.close();
    }
});
