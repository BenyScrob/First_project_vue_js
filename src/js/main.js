import Vue from 'vue';
const $=require('jquery');
global.$=global.jQuery=$;
require('../scss/main.scss');
require('bootstrap/dist/css/bootstrap.css');
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



// ============== Tema(curs15) ================

var exercise2 = new Vue({
    el: '#exercise2',
    data: {
        value:''
    },
    methods: {
        alertMe2: function() {
            alert("Isus te iubeste ❤❤❤ !!!");
        },
        inputValue: function (event) {
            this.value = event.target.value;
        }, 
    }
}); 

// Search list

var widget1 = new Vue ({
    el: "#app",
    data: {
        title:"TITLU",
        findName:'',
        students: [
            "Daniel",
            "Beniamin",
            "Paul",
            "Flaviu",
            "Vladut"
        ]
    },
    computed:{
         search: function() {
            var inputText = new RegExp(this.findName, "i");
            return this.students.filter(el => el.match(inputText));
         }
    },
    watch:
    {
        findName:function(value) {
            console.log("changed: "+ value);
        }
    }
});



    var widget2 = new Vue ({
        //el: "#app2",
        data: {
            title:"Search in list ",
        },
        methods:{
            changeTitle: function () {
                this.title="Search in list 2";
                widget1.title=this.title;
            },
            destroy : function () {
                this.$this.destroy();
            },
        },   
            
         beforeCreate: function () {
            console.log("beforeCreate")
         },
         created: function () {
            console.log("created")
         },
         beforeMount: function(){
            console.log("beforeMount") 
         },
         mounted: function (){
            console.log("mounted") 
         },
         beforeUpdate: function (){
            console.log("beforeUpdate")  
         },
         updated: function (){
            console.log("updated") 
         },
         beforeDestroy: function (){
            console.log("beforeDestroyed") 
         },
         destroyed: function (){
            console.log("destroyed") 
         },


});

widget1.titl="search";


widget2.$mount(document.getElementById("app2"));

console.log(widget1);
console.log(widget2);
