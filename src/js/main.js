import Vue from 'vue';
const $=require('jquery');
global.$=global.jQuery=$;
require('bootstrap');



var jsapp = new Vue(
    {
        el: "#js-app",
        data: {
            message: "Hello World!!",	
            note: [
                {nota: "5"},
                {nota: "7"}
            ],
            noteObj: [
                {
                    firstName: "Paul",
                    lastName: "Barna",
                    nota: 7
                },
                {
                    firstName: "Bianca",
                    lastName: "Bulc",
                    nota: 7.5
                }

            ],
            title: "Title 1",
        },
        methods: {
            changeText: function(){
                this.message = "Hi Beni";
            },
            sayHello: function() {
                return this.title;
            }, 
        }

    }
);