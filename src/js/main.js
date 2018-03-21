import Vue from 'vue';
const $=require('jquery');
global.$=global.jQuery=$;
require('bootstrap');



var jsapp = new Vue(
    {
        el: "#js-app",
        data: {
            message: "Hello World!!",	
        },
    }
);