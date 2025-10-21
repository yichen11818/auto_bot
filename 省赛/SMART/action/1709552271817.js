Blockly.Blocks['1709552271817'] = {
  init: function() {
    this.jsonInit({
      "type": "1709552271817",
      "message0": "a",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1709552271817'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(57,30,190,100,93,55,124,100,120,183,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(57,30,190,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1709552271817'] = function(block) {
  let code = "base_action.action('a')\n";
  return code;
}

