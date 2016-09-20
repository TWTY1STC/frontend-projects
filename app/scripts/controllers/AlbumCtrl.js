(function(){
    function AlbumCtrl(){
        //Add an albumData property that holds a copy of albumPicasso.
        //how to link fixtures.js to this so albumPicasso means something?
<<<<<<< HEAD
        
        this.albumData = angular.copy(albumPicasso)
       
=======

        var albumData = angular.copy(albumPicasso)
        var albumData = albumPiscasso = {
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: 'assets/images/album_covers/01.png',
            songs: [
                { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue'},
                { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green' },
                { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red' },
                { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink'},
                { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta'}
            ]
        };
        
>>>>>>> master
    }
    
    angular
        .module("blocJams")
        .controller('AlbumCtrl', AlbumCtrl);
})();