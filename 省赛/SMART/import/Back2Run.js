Blockly.Blocks['1680745656786'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745656786",
      "message0": "Back2Run",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745656786'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 100, 88, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 86, 90, 95, 84, 90, 120, 165, 110, 94, 107, 146, 78, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 88, 74, 53, 105, 85, 120, 165, 110, 93, 101, 144, 79, 91, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 106, 93, 53, 124, 113, 120, 165, 110, 114, 87, 164, 45, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 106, 93, 53, 124, 113, 120, 165, 90, 114, 95, 105, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,95,95,95,65,30,30,30,50,50,50,50,50,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(80, 35, 100, 104, 83, 32, 135, 111, 120, 165, 100, 115, 111, 150, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745656786'] = function(block) {
  let code = "base_action.action('Back2Run')\n";
  return code;
}

