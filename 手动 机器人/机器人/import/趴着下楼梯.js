Blockly.Blocks['1680501740489'] = {
  init: function() {
    this.jsonInit({
      "type": "1680501740489",
      "message0": "趴着下楼梯",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680501740489'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 100, 149, 38, 100, 120, 170, 100, 100, 99, 50, 159, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 148, 100, 156, 150, 40, 100, 120, 170, 56, 100, 45, 50, 159, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 185, 100, 97, 87, 48, 100, 120, 170, 16, 100, 101, 111, 149, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 185, 100, 152, 150, 41, 100, 120, 170, 16, 100, 49, 50, 156, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 149, 100, 151, 150, 56, 100, 120, 170, 56, 100, 51, 50, 144, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 142, 100, 143, 150, 54, 100, 120, 170, 60, 100, 58, 50, 144, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 142, 100, 110, 150, 47, 100, 120, 170, 60, 100, 90, 50, 151, 100, 128, 71, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 142, 100, 116, 110, 97, 100, 120, 170, 60, 100, 83, 90, 103, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680501740489'] = function(block) {
  let code = "robot.leju_action('趴着下楼梯')\n";
  return code;
}

