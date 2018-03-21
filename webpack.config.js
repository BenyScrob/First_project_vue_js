var webpack=require('webpack');

var config={
context:__dirname+'/src',
entry:['./js/main.js'],
output: {
path:__dirname +'/dist',
filename: 'main.js',
},

resolve: {
	alias:{
		'vue$':'vue/dist/vue.esm.js'
	}
}
};
module.exports = config;
