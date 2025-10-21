Blockly.Blocks['1713433879052'] = {
  init: function() {
    this.jsonInit({
      "type": "1713433879052",
      "message0": "左转快5s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1713433879052'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,95,71,55,109,95,140,190,50,105,89,145,51,105,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,10,149,95,80,55,109,92,140,190,50,105,81,145,51,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(19)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(35)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1713433879052'] = function(block) {
  let code = "robot.leju_action('左转快5s')\n";
  return code;
}

