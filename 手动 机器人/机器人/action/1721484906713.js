Blockly.Blocks['1721484906713'] = {
  init: function() {
    this.jsonInit({
      "type": "1721484906713",
      "message0": "左移720-3",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1721484906713'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70,0,0,0)\nMOTOsetspeed(60)\nMOTOmove19(65, 15, 149, 93, 90, 55, 127, 89, 140, 180, 50, 145, 110, 145, 73, 102, 127, 78, 100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(65, 15, 149, 100, 90, 55, 127, 100, 140, 180, 50, 95, 110, 145, 73, 100, 127, 78, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1721484906713'] = function(block) {
  let code = "robot.leju_action('左移720-3')\n";
  return code;
}

