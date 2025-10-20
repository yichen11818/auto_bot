Blockly.Blocks['1680500221546'] = {
  init: function() {
    this.jsonInit({
      "type": "1680500221546",
      "message0": "放",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1680500221546'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,20,149,100,93,55,127,100,140,180,50,100,107,145,73,100,128,71,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,100,111,150,54,102,140,180,50,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65,20,149,100,101,150,42,102,140,180,50,100,99,51,158,101,128,71,100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65,20,149,101,107,149,43,100,140,180,50,101,92,51,157,100,128,71,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,101,107,149,43,100,120,165,66,101,92,51,157,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,100,111,150,54,102,120,165,66,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

