var vm = new Vue({
    el: '#main_wrapper',
    data: {
        name: "Wenjun Mao",
        tab: 1
    },
    methods: {
        prev_tab: function() {
            vm.$set("tab", this.tab - 1);
        },
        next_tab: function() {
            vm.$set("tab", this.tab + 1);
        },
        set_tab: function(tab_id) {
            vm.$set("tab", tab_id);
        }
    }
})