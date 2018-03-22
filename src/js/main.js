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
            link:"https://www.google.ro/",
            fullhref: "<a href='http://yahoo.com'>Yahoo</a>",
            counter: 0,
            x: 0,
            y: 0,
        },
        methods: {
            changeText: function(){
                this.message = "Hi Beni";
            },
            sayHello: function() {
                return this.title;
            }, 
            sayHello2: function() {
                this.title="Title 2";
           },
           incrementValue() {
                this.counter++;
           },
           mPosition: function (event) {
               this.x = event.clientX;
               this.y = event.clientY;
           },
           alertMe: function(event) {
                alert(event.target.value);
           },
        }
    }
);



//  ==================================================

var exercise = new Vue({
    el: '#exercise',
    data: {
        age: 20 ,
        name: 'Beniamin Scrob',
        text: 'Beni Scrob',
        imagine:"<img style='width:100px; height:100px' src='https://scontent.fotp3-2.fna.fbcdn.net/v/t1.0-9/14484776_1052056211582127_4514996501344980644_n.jpg?oh=2afefe8b00f84d3f4b1af84f5808b814&oe=5B3C175C'>",
        counter: 0,
    },
    methods: {
        randomFloat: function () {
            return Math.random() * 100;
        },
        incrementValue() {
            this.counter++;
        },
        decrementValue() {
            this.counter--;
        },
    }

});
