Ext.define('CityBars.view.Bars', {
    extend : 'Ext.Container',
    config : {
        fullscreen : true,
        layout : 'fit',
        items : [
            {
                xtype : 'list',
                store : 'TorontoBars',
                itemTpl : '{name}<br />{address1}'
            }
        ]
    }
});