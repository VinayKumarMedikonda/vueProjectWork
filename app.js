var app = new Vue({
  
  el: '#app',
  data: {
  
    message: 'Hello Vinay Kumar!'
  }

});

var app2 = new Vue({
  
  el: '#app-2',
  data: {
  
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }

});


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app3 = new Vue({

	el:'#app-3',
	data:{
			items:[
			{text:'item-1'},
			{text:'item-2'},
			{text:'item-3'},
			{text:'item-4'},
			{text:'item-5'}
		],
		groceryList: [
	      { id: 0, text: 'Vegetables' },
	      { id: 1, text: 'Cheese' },
	      { id: 2, text: 'Whatever else humans are supposed to eat' }
	    ]
	}

});


