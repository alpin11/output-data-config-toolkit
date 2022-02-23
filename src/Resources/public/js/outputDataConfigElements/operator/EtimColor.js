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
                text: t(this.defaultText),
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

    getConfigDialog: function(node) {
    },

    commitData: function() {
    }
});
