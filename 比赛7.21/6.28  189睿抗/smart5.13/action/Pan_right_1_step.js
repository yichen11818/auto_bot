Blockly.Blocks['Pan_right_1_step'] = {
  init: function () {
    this.jsonInit({
      type: 'Pan_right_1_step',
      message0: '%{BKY_PAN_RIGHT_1_STEP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pan_right_1_step'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90)',
    'MOTOwait()',
    'MOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Pan_right_1_step'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['PAN_RIGHT_1_STEP'] + "')\n";
  return code;
}

