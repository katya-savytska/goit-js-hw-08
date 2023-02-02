import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (data) {
    const time = data.seconds;
    console.log(time);
   localStorage.setItem(TIME_DATA_PLAYER, time)
},1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));