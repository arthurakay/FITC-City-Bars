Ext.define('CityBars.store.Bars', {
    extend : 'Ext.data.Store',
    requires : [
        'CityBars.model.Bar'
    ],

    config : {
        storeId  : 'TorontoBars',
        autoLoad : true,
        model : 'CityBars.model.Bar',

        proxy    : {
            type   : 'jsonp',
            url    : 'http://api.yelp.com/business_review_search?ywsid=U57WYaLLGf42NgkGYIkD_Q&term=bars&location=Toronto',
            reader : {
                type         : 'json',
                rootProperty : 'businesses'
            }
        }
    }
});