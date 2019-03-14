new Vue({
    el: '#app',
    data: {
        title:'todoList',
        inputVal:'',
        dataObj: data
    },
    computed: {
        checkendAll:{
            get(){
                var bl = this.dataObj.every(function(item){
                    return item.ischenced===true
                });
                return bl
            },
            set(newVal){
                this.dataObj.forEach(function(item){
                    item.ischenced=newVal;
                });
            }
        }
    },
    methods: {
        addItem: function (val) {
            var value = val&&val.trim();
            if(value===''){
                return
            }
            this.dataObj.push({
                text: val,
                ischenced: false
            });
            this.inputVal='';

        }
    }
});