Ext.define('CityBars.controller.Bar', {
    extend : 'Ext.app.Controller',

    config : {
        control : {
            'list' : {
                'itemtap' : 'onItemTapHandler'
            }
        }
    },

    onItemTapHandler : function() {
        Ext.Msg.alert('ItemTap', 'Item was tapped!');
    }
});