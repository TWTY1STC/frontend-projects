(function(){
    function SongPlayer(){
        var SongPlayer = {};    //empty object
                                //the service returns this and makes the properties and methods available to the rest of the application.
        var currentSong = null;
        var currentBuzzObject = null;
        
        SongPlayer.play = function(song) {
            if (currentSong !== song){
                if(currentBuzzObject){ //click on a different song than the one that's playing
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                }
                
                currentBuzzObject = new buzz.sound(song.audioUrl, {
                    formats: ['mp3'],
                    preload: true  
                });
                
                currentSong = song; 
            
                currentBuzzObject.play();
                song.playing = true; 
            }
            else if (currentSong === song){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
        };
        
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        return SongPlayer;
        
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();