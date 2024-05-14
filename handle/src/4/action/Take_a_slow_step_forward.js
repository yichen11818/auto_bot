Blockly.Blocks['Take_a_slow_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_slow_step_forward',
      message0: '%{BKY_TAKE_A_SLOW_STEP_FORWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_slow_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_slow_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_SLOW_STEP_FORWARD'] + "')\n";
  return code;
}

