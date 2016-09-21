(function(){
    function AlbumCtrl(){
        //Add an albumData property that holds a copy of albumPicasso.
        //how to link fixtures.js to this so albumPicasso means something?

        this.albumData = angular.copy(albumPicasso)
        console.log(albumPicasso);
        
    }
    
    angular
        .module("blocJams")
        .controller('AlbumCtrl', AlbumCtrl);
})();