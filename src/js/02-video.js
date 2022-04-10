import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";

const secondsVimeo = localStorage.getItem(STORAGE_KEY);

if (secondsVimeo) {
player.setCurrentTime(JSON.parse(secondsVimeo));
};

player.on('timeupdate', throttle(({seconds}) =>{

 localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds)) ;
   
}, 1000));

