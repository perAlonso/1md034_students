/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();

const vm = new Vue({
    el: '#main',
    data: {
	burgers: food,
	name: undefined,
	email: undefined,
	street: undefined,
	house_number: undefined,
	payment: "Western union",
	gender: "na",
	contactInfo: [],
	checkedBurgers: [],
	submitted: false,
	orders: {}
    },
    created: function() {
	socket.on('initialize', function(data) {
	    this.orders = data.orders;
	}.bind(this));
	
	socket.on('currentQueue', function(data) {
	    this.orders = data.orders;
	}.bind(this));
    },
    methods: {
	markDone: function() {
	    this.contactInfo = [];
	    this.contactInfo.push(this.name);
	    this.contactInfo.push(this.email);
	    this.contactInfo.push(this.payment);
	    this.contactInfo.push(this.gender);
	    

	    this.submitted = true;
	},
	getNext: function() {
	    let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
	    }, 0);
	    return lastOrder + 1;
	},
	addOrder: function(event) {
	    console.log(event);
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
		orderItems: ['Beans', 'Curry'],
	    });
	},
    }
});

