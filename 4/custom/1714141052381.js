Blockly.Blocks['1714141052381'] = {
  init: function() {
    this.jsonInit({
      "type": "1714141052381",
      "message0": "1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714141052381'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,98,102,77,115,100,132,187,10,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,155,98,102,77,115,100,131,186,45,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714141052381'] = function(block) {
  let code = "base_action.action('1')\n";
  return code;
}

