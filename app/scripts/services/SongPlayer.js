(function(){
    function SongPlayer(){
        var SongPlayer = {};    //empty object
                                //the service returns this and makes the properties and methods available to the rest of the application.
        //Private attributes
        /**
         * @desc tracks current song
         * @type {Object} song
        */
        var currentSong = null; 
        
        /**
         * @desc Buzz object audio file
         * @type {Object}
         */
        var currentBuzzObject = null; 
        
        //Private functions
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
        }; 
        
        /**
        * @function playSong
        * @desc plays the audio file of song and updates playing attribute
        * @param {Object} song
        */
        var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true;
        };
        
        //Public methods:
        /**
         * @name SongPlayer.play
         * @param {Object} song
         * @desc plays song audio file for new and paused songs
         */
        SongPlayer.play = function(song) {
            if (currentSong !== song){
                setSong(song);
                playSong(song);
                console.log(currentSong);
            } else if (currentSong === song){
                if(currentBuzzObject.isPaused()){
                    currentBuzzObject.play();
                }
            }
        }; 
        
        /**
         * @name SongPlayer.pause
         * @param {Object} song
         * @desc pauses an already playing song audio file and updates song.playing status to false
         */
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