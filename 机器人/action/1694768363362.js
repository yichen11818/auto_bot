Blockly.Blocks['1694768363362'] = {
  init: function() {
    this.jsonInit({
      "type": "1694768363362",
      "message0": "侧面上高台夺箱子6-2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1694768363362'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(80,29,20,99,95,55,150,99,119,170,180,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(80,80,20,99,95,55,150,99,119,120,180,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,80,100,99,95,55,150,99,119,120,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,99,95,55,150,99,119,165,100,99,105,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(30)\nMOTOmove19(80,30,77,99,93,55,150,99,119,165,123,99,105,145,50,99,128,71,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,77,99,128,55,150,99,119,165,123,99,71,145,50,99,128,71,101)\nMOTOwait()\n\n\n-- 上完\nMOTOsetspeed(30)\nMOTOmove19(80,29,77,100,100,134,150,99,119,164,123,98,105,65,46,99,128,71,101)\nMOTOwait()\n\n\n-- 上完抱\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,100,133,150,99,80,25,90,100,107,65,46,99,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,100,133,150,99,80,25,123,100,105,65,46,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 抱起来\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,100,133,150,99,80,25,123,100,105,65,46,99,128,71,100)\nMOTOwait()\n\n\n-- 推\nMOTOsetspeed(30)\nMOTOmove19(115,180,80,100,93,55,124,100,80,25,123,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(115,180,105,100,93,55,124,100,80,25,90,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(92,25,97,100,113,150,50,100,108,175,103,100,85,50,150,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1694768363362'] = function(block) {
  let code = "robot.leju_action('侧面上高台夺箱子6-2')\n";
  return code;
}

