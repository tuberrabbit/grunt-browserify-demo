bf.controller('ThreadListCtrl', function () {
    var vm = this;
    vm.items = [];
    for (var i = 0; i < 10; ++i) {
        vm.items.push({
            title: 'Topic' + i,
            poster: 'user' + i,
            dateCreated: Date.now()
        });
    }
});