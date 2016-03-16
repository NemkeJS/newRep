/*$(function() {
$(document).scroll(function() {
var y = $(this).scrollTop(); 
if( y > 40 ) {
 $('header').slideUp('slow');   
}
else {
 $('header').slideDown('slow');   
    
}    
});
var mainObj =  {
getColor: function() {
$('#second-color').hover(function() {
if(2< 3) {
 $(this).slideUp();   
}
    
});
    
}

    
}

mainObj.getColor();

    

    
});*/


(function() {
var people = {
  people: ["Nemke","Duka"],
    init: function() {
    this.cacheDom();
    this.bindEvents();    
    this.render();
},
cacheDom: function() {
 this.$el = $("#peopleModule");
this.$button = this.$el.find('button');
this.$input = this.$el.find('input');
this.$ul = this.$el.find('ul');
this.template = this.$el.find('#people-template').html();    
},
    
bindEvents: function() {
  this.$button.on('click',this.addPerson.bind(this)); 
  this.$ul.delegate('i.del','click', this.removePerson.bind(this)); 
    this.$input.bind('keyup', this.addEnter.bind(this));
},
render: function() {
  var data = {
    people: this.people,  
  };
 this.$ul.html(Mustache.render(this.template,data));  
},
addPerson: function(event) {    
 this.people.push(this.$input.val()) 
this.render();
this.$input.val(""); 
 
},
removePerson: function(event) {
 var $remove = $(event.target).closest('li');
var i = this.$ul.find('li').index($remove);
this.people.splice(i, 1);
this.render();    
},
addEnter:  function(event) {
 if(event.which ==13 ||event.keyCode ==13) {
     this.people.push(this.$input.val()) 
this.render();
this.$input.val(""); 
 }
},


    
};
    
people.init();    

})()