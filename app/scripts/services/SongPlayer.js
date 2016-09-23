(function(){
    function SongPlayer(){
        var SongPlayer = {};    //empty object
                                //the service returns this and makes the properties and methods available to the rest of the application.
        
        var currentSong = null; //private attribute
        
        /**
         * @desc Buzz object audio file
         * @type {Object}
         */
        var currentBuzzObject = null; //private attribute
        
        /**
        *@function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song){
            if(currentBuzzObject){ //click on a different song than the one that's playing
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true  
            });
            
            currentSong = song; 
        }; //private function
        
        SongPlayer.play = function(song) {
            if (currentSong !== song){
                setSong(song);
                currentBuzzObject.play();
                song.playing = true; 
            } else if (currentSong === song){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
        }; //public method
        
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        }; //public method
        
        return SongPlayer;
        
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();