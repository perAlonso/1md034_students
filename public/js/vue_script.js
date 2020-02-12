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
	mapClicked: false,
	order: {
	    details: {
		x: 0,
		y: 0},
	    contact
	},
	currentOrderId: 0
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
	    this.markDone();
	    this.order.contact = this.contactInfo;

	    if(!this.mapClicked) {
		alert("You need to select a delivery location");
		return;
	    }
	    
	    socket.emit('addOrder', {
		orderId: this.currentOrderId++,
		details: this.order.details,
		orderItems: this.checkedBurgers,
		contact: this.contactInfo,
	    });
	},
	displayOrder: function(event) {
	    console.log(event);
	    this.mapClicked = true;
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.order.details = {
		x: event.clientX - 10 - offset.x,
		y: event.clientY - 10 - offset.y
	    }
	},
    }
});

