pimcore.registerNS("pimcore.bundle.outputDataConfigToolkit.outputDataConfigElements.operator.EtimColor");

pimcore.bundle.outputDataConfigToolkit.outputDataConfigElements.operator.EtimColor = Class.create(pimcore.bundle.outputDataConfigToolkit.outputDataConfigElements.Abstract, {
    type: "operator",
    class: "EtimColor",
    iconCls: "pimcore_icon_operator_text",
    defaultText: "operator_etim_color",

    getConfigTreeNode: function (configAttributes) {
        if (configAttributes) {
            var node = {
                draggable: true,
                iconCls: this.iconCls,
                text: configAttributes.etimFeatureLabel,
                configAttributes: configAttributes,
                isTarget: true,
                maxChildCount: 1,
                expanded: true,
                leaf: false,
                expandable: false
            };
        } else {
            // For building up operator list
            var configAttributes = { type: this.type, class: this.class};
            var node = {
                draggable: true,
                iconCls: this.iconCls,
                text: t(this.defaultText),
                configAttributes: configAttributes,
                isTarget: true,
                maxChildCount: 1,
                leaf: true
            };
        }

        return node;
    },

    getConfigDialog: function(node) {
        this.node = node;

        this.etimFeatureLabel = new Ext.form.TextField({
            fieldLabel: "ETIM Feature Label",
            length: 255,
            width: 200,
            value: this.node.data.configAttributes.etimFeatureLabel
        });

        this.configPanel = new Ext.Panel({
            layout: "form",
            bodyStyle: "padding: 10px;",
            items: [this.etimFeatureLabel],
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

    getCopyNode: function (source) {
        var copy = source.createNode({
            iconCls: this.iconCls,
            text: t(this.defaultText),
            isTarget: true,
            leaf: false,
            maxChildCount: 1,
            expanded: true,
            expandable: false,
            configAttributes: {
                label: 'ETIM color',
                type: this.type,
                class: this.class
            }
        });
        return copy;
    },

    commitData: function() {
        this.node.data.configAttributes.etimFeatureLabel = this.etimFeatureLabel.getValue();
        this.node.set('text', this.etimFeatureLabel.getValue());
        this.window.close();
    }
});
