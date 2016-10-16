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
        x: tx + 50,
        y: ty
    }
}


var vm = new Vue({
    el: '#main_wrapper',
    data: {
        name: "Wenjun Mao",
        tab: 1,
        content: "",
        email_focus: true,
        content_focus: false,
        images: ["./assets/Mfj.gif",
            "./assets/caifuup.gif",
            "./assets/raytracer.gif",
            "./assets/Cellsociety_1.gif",
            "./assets/EPG.jpg",
            "./assets/cs.gif",
            "./assets/beergame.png",
            "./assets/Slogo.gif",
            "./assets/Mfj.gif",
            "./assets/caifuup.gif",
            "./assets/raytracer.gif"
        ],
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
        }],
        masks: [false, false, false, false, false, false, false, false, false, false, false],
        titles: ["Manfenjie", "Caifuup", "Raytracer", "Cellsociety", "EPG", "FPS Game", "Beer Game", "Slogo", "Manfenjie", "Caifuup", "Raytracer"]
    },
    methods: {
        prev_tab: function() {
            Vue.set(vm,'tab', vm.tab - 1);
        },
        next_tab: function() {
            Vue.set(vm,'tab', vm.tab + 1);
        },
        set_tab: function(tab_id) {
            Vue.set(vm,'tab', tab_id);
        },
        down_link: function(link) {
            var newTab = window.open('about:blank');
            newTab.location.replace(link);
            // newTab.location.href = link;
        },
        mask: function(index) {
            for (var i = 0; i <= 12; i++) {
                if (i != index) {
                    vm.$set(this.masks, i, false);
                }
            }
            vm.$set(this.masks, index, true);
        },
        unmask: function() {
            for (var i = 0; i <= 12; i++) {
                vm.$set(this.masks, i, false);
            }

        }
    },
    computed: {
        // a computed property for the polygon's points
        points: function() {
            var total = 6
            return this.stats.map(function(stat, i) {
                var point = valueToPoint(stat.value, i, total)
                return point.x * 2 + ',' + point.y * 2
            }).join(' ')
        },
        point: function() {
            return valueToPoint(+this.stats.value + 10,
                this.index,
                this.total
            )
        },
        content_length_exceeded: function() {
            return this.content.length > 200;
        }
    }
})

function set_focus(element_id) {
    if (element_id == 'email') {
        Vue.set(vm, "email_focus", true);
        Vue.set(vm, "content_focus", false);
    } else {
        Vue.set(vm, "content_focus", true);
        Vue.set(vm, "email_focus", false);
    }
}

function set_blur(element_id) {
    if (element_id == 'email') {
       Vue.set(vm,"email_focus", false);
    } else {
       Vue.set(vm,"content_focus", false);
    }
}