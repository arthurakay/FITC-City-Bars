Ext.application({
    name : 'CityBars',

    controllers : [
        'Bar'
    ],

    stores : [
        'Bars'
    ],

    launch : function() {
        console.log('Launch!');

        Ext.create('CityBars.view.Bars');
    }
});