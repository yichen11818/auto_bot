Blockly.Blocks['1724086739099'] = {
  init: function() {
    this.jsonInit({
      "type": "1724086739099",
      "message0": "抱箱子1-9",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724086739099'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(150)\nMOTOmove19(80, 47, 147, 100, 93, 55, 124, 100, 119, 147, 50, 100, 107, 145, 76, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 47, 147, 100, 113, 90, 109, 100, 119, 147, 50, 100, 87, 111, 91, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(80, 47, 147, 100, 136, 150, 62, 100, 119, 147, 50, 100, 72, 50, 138, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 47, 147, 100, 160, 150, 67, 100, 119, 147, 60, 100, 45, 50, 133, 100, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73, 10, 158, 100, 160, 150, 67, 100, 134, 190, 51, 100, 45, 50, 133, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(70, 10, 158, 100, 108, 132, 70, 100, 132, 190, 50, 100, 89, 69, 130, 100, 128, 78, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(70, 10, 158, 100, 90, 55, 127, 100, 132, 190, 50, 100, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724086739099'] = function(block) {
  let code = "robot.leju_action('抱箱子1-9')\n";
  return code;
}

