Blockly.Blocks['1680745892513'] = {
  init: function() {
    this.jsonInit({
      "type": "1680745892513",
      "message0": "BoxRight1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680745892513'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,100,100,100,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 54, 130, 105, 132, 187, 10, 110, 102, 136, 72, 110, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 94, 93, 54, 130, 100, 132, 187, 10, 106, 107, 146, 70, 110, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 91, 93, 54, 130, 88, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 128, 71, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 128, 71, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680745892513'] = function(block) {
  let code = "base_action.action('BoxRight1')\n";
  return code;
}

