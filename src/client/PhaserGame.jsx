import Phaser from 'phaser';
import WebFont from 'webfontloader';
import {Level1} from './level1';
import {Load} from "./loading_menu/LoadingScene.jsx"
import {Menu} from './loading_menu/MenuScene';
import {PauseScene} from './pauseScene';

import {LoginScene} from './loading_menu/Login_Phaser.jsx';
import { CST } from './loading_menu/CST.jsx';

const PhaserGame = () => {
  var config = {
    type: Phaser.AUTO,
    parent:'//cdn.jsdelivr.net/npm/phaser@3.70.0/dist/phaser.js',
    width: 1600,
    height: 1200,
    // line required fr use of dom elements
    dom: {
      createContainer: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene:[ LoginScene, Load, Menu, Level1, PauseScene]
  };

  WebFont.load({
    custom: {
        families: ['p-script', 'pixle script bold']
    },
    active: function() {
        console.log('font loaded');
        // Once the fonts are loaded, start the Phaser game
        var game = new Phaser.Game(config);
    }
  });
//old code
  return <div id="phaser-game"></div>;
};

export default PhaserGame;