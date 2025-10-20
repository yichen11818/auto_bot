Blockly.Blocks['1719230293044'] = {
  init: function() {
    this.jsonInit({
      "type": "1719230293044",
      "message0": "Box_moveright3s",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1719230293044'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(62,12,190,65,90,55,127,95,135,190,13,100,110,145,73,105,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(62,12,190,105,90,55,127,99,135,190,13,100,110,145,73,100,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(62,12,190,65,90,55,127,95,135,190,13,100,110,145,73,105,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(62,12,190,105,90,55,127,99,135,190,13,100,110,145,73,100,0,0,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(62,12,190,65,90,55,127,95,135,190,13,100,110,145,73,105,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(62,12,190,105,90,55,127,99,135,190,13,100,110,145,73,100,0,0,100)\nMOTOwait()\nDelayMs(300)\n";
  return code;
}

Blockly.Python['1719230293044'] = function(block) {
  let code = "base_action.action('Box_moveright3s')\n";
  return code;
}

