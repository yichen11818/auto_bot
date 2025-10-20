Blockly.Blocks['1680745718471'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745718471",
      "message0": "Forwalk01",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745718471'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,55,85,100,90,50,30,30,30,75,85,100,90,70,0,0,0)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(80, 35, 100, 85, 91, 50, 128, 88, 120, 165, 100, 95, 117, 168, 62, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,55,50,50,50,30,30,30,75,85,100,90,60,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 90, 86, 99, 37, 147, 88, 120, 165, 90, 90, 121, 168, 63, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 80, 98, 99, 37, 147, 98, 120, 165, 80, 100, 121, 168, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 100, 108, 88, 54, 124, 108, 120, 165, 100, 110, 135, 158, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 100, 105, 83, 32, 135, 110, 120, 165, 100, 115, 109, 150, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745718471'] = function(block) {
  let code = "base_action.action('Forwalk01')\n";
  return code;
}

