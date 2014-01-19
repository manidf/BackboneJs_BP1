require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
        backbonelocalstorage: 'libs/backbone.localStorage/backbone.localStorage'
    }
});

require([
    'app',
], function(App){
    App.initialize();
});