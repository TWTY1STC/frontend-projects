(function() {
    function CollectionCtrl(){
        this.albums = [];
        for (var i = 0; i<12; i++){
            this.albums.push(angular.copy(albumPicasso));
        }
    }
    //how to link fixtures.js to this so albumPicasso means something?
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
})();