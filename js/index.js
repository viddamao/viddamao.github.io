// math helper...
function valueToPoint(value, index, total) {
    var x = 0
    var y = -value * 0.8
    var angle = Math.PI * 2 / total * index
    var cos = Math.cos(angle)
    var sin = Math.sin(angle)
    var tx = x * cos - y * sin + 100
    var ty = x * sin + y * cos + 100
    return {
        x: tx+50,
        y: ty
    }
}


var vm = new Vue({
    el: '#main_wrapper',
    data: {
        name: "Wenjun Mao",
        tab: 6,
        stats: [{
            label: 'HTML',
            value: 100
        }, {
            label: 'CSS',
            value: 100
        }, {
            label: 'JavaScript',
            value: 80
        }, {
            label: 'Smashing computer while debugging',
            value: 110
        }, {
            label: 'Vue.js',
            value: 80
        }, {
            label: 'Node.js',
            value: 80
        }]
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
        },
        down_link:function(link){
             var newTab=window.open('about:blank');
             newTab.location.href=link;
        }
    },
    computed: {
        // a computed property for the polygon's points
        points: function() {
            var total = 6
            return this.stats.map(function(stat, i) {
                var point = valueToPoint(stat.value, i, total)
                return point.x * 2+ ',' + point.y * 2
            }).join(' ')
        },
        point: function() {
            return valueToPoint(+this.stat.value + 10,
                this.index,
                this.total
            )
        }
    }
})