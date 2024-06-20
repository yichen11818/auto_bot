Blockly.Blocks['1711625446707'] = {
  init: function() {
    this.jsonInit({
      "type": "1711625446707",
      "message0": "Box_backrun1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1711625446707'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 88, 91, 48, 132, 80, 132, 187, 10, 94, 107, 146, 72, 85, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(30,30,30,30,30,30,30,30,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 86, 90, 95, 84, 85, 132, 187, 10, 94, 107, 146, 72, 88, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60, 15, 190, 86, 66, 35, 121, 90, 132, 187, 10, 94, 107, 146, 72, 88, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 106, 93, 53, 124, 110, 132, 187, 10, 114, 102, 154, 55, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,30,30,30,30,30,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 106, 93, 53, 129, 113, 132, 187, 10, 114, 105, 95, 120, 110, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,30,50,50,50,30,30,30,30,30,50,50,50,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 100, 93, 55, 129, 100, 132, 187, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1711625446707'] = function(block) {
  let code = "base_action.action('Box_backrun1')\n";
  return code;
}

