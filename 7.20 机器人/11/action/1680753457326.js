Blockly.Blocks['1680753457326'] = {
  init: function() {
    this.jsonInit({
      "type": "1680753457326",
      "message0": "LiftCubeUp",
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680753457326'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 98, 102, 77, 115, 100, 132, 187, 10, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1680753457326'] = function(block) {
  let code = "base_action.action('LiftCubeUp')\n";
  return code;
}

