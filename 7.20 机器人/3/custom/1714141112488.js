Blockly.Blocks['1714141112488'] = {
  init: function() {
    this.jsonInit({
      "type": "1714141112488",
      "message0": "2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1714141112488'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,98,102,77,115,100,132,187,10,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,155,98,102,77,115,100,131,186,45,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1714141112488'] = function(block) {
  let code = "base_action.action('2')\n";
  return code;
}

