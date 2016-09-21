(function(){
    function AlbumCtrl(Fixtures){
        //Add an albumData property that holds a copy of albumPicasso.
        //how to link fixtures.js to this so albumPicasso means something?
            //by adding a service.
        this.albumData = Fixtures.getAlbum();
        
    }
    
    angular
        .module("blocJams")
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();