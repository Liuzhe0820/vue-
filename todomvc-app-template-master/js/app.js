(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	new Vue({
		el: '#app',
		data: {
			title: 'todoList',
			inputVal: '',
			dataObj: [],
			num:0
		},
		computed: {
			checkendAll: {
				get() {
					var bl = this.dataObj.every(function (item) {
						return item.ischecked === true
					});
					return bl
				},
				set(newVal) {
					this.dataObj.forEach(function (item) {
						item.ischecked = newVal;
					});
				}
			},
			checkedLen:function(){
				var len = this.dataObj.filter(function(item){
					return item.ischecked===false
				}).length;
				return len	
			},
			isShowRemoveAll(){
				var bl;
				if(this.dataObj.length===0){
					bl = true;
					return bl
				}
				bl = this.dataObj.every(function(item){
					return item.ischecked === false
				});
				console.log(bl)
				return bl
			}
		},
		methods: {
			addItem: function (val) {
				var value = val && val.trim();
				if (value === '') {
					return
				}
				this.dataObj.push({
					text: val,
					ischecked: false,
					id:this.num++
				});
				this.inputVal = '';
			},
			removeItem:function(itemId){
				var _this = this;
				this.dataObj.forEach(function(item,index){
					if(item.id===itemId){
						console.log(index)
						_this.dataObj.splice(index,1);
					}
				});
			},
			removeAll:function(){
				var _this = this;
				this.dataObj.forEach(function(item){
					if(item.ischecked){
						_this.dataObj.splice(index,1);
					}
				});
			}
		}
	});
})(window);
