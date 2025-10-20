Blockly.Blocks['1724497590734'] = {
  init: function() {
    this.jsonInit({
      "type": "1724497590734",
      "message0": "dao45",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724497590734'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOmove19(12,53,188,100,100,145,44,99,190,151,23,100,100,55,155,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(12,53,180,93,155,130,60,99,190,151,23,101,49,70,140,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(12,53,180,93,102,77,42,97,190,151,23,100,101,122,159,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(12,53,180,93,95,74,119,98,190,151,23,99,104,118,83,92,0,0,100)\nMOTOwait()\nMOTOsetspeed(42)\nMOTOmove19(12,53,188,100,93,55,124,100,190,151,23,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724497590734'] = function(block) {
  let code = "base_action.action('dao45')\n";
  return code;
}

