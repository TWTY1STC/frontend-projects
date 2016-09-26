(function(){
    function SongPlayer(Fixtures){
        var SongPlayer = {}; //empty object, the service returns this and makes the properties and methods available to the rest of the application.
        
        /**
         * @desc injects Fixtures properties to get access to information
        */
        var currentAlbum = Fixtures.getAlbum();
    
        //Private attributes
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
                SongPlayer.currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true  
            });
            
            SongPlayer.currentSong = song; 
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
        /**
         * @function stopSong
         * @desc stops current audio file and sets playing property to null
         * @param {Object} song
         */
        var stopSong = function(song){
            currentBuzzObject.stop();
            song.playing = null;
        };
        
        //Public methods:
        /**
         * @desc tracks index of a song
         * @param {Objec} song
         *
         */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
        
        /**
         * @desc tracks current song
         * @type {Object} song
        */
        SongPlayer.currentSong = null; 
        
        /**
         * @name SongPlayer.play
         * @param {Object} song
         * @desc plays song audio file for new and paused songs
         */
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song){
                setSong(song);
                playSong(song);
                console.log(SongPlayer.currentSong);
            } else if (SongPlayer.currentSong === song){
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
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        }; 
        
        /**
         * @desc reduces current song index by one and stops audio if first song
         *
         */
        SongPlayer.previous = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            var song = currentAlbum.songs[currentSongIndex];
            if (currentSongIndex < 0){
                stopSong(song);
            }else {
                setSong(song);
                playSong(song);
            }
        };
        
        /**
         * @desc increases current song index by one; stops playing audio if one last song
         *
         */
        SongPlayer.next = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            var song = currentAlbum.songs[currentSongIndex];
            
            if(currentSongIndex > currentAlbum.songs.length){
                stopSong(song);
            }else {
                setSong(song);
                playSong(song);
            }
        };
         
        return SongPlayer;
        
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();