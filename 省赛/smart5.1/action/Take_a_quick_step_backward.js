Blockly.Blocks['Take_a_quick_step_backward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_backward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_BACKWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_backward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,55,65,90,80,50,25,25,25,55,65,90,80,50)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 55, 124, 89, 120, 170, 100, 98, 107, 145, 78, 93)',
    'MOTOwait()',
    'MOTOsetspeed(58)',
    'MOTOmove16(80, 30, 120, 99, 113, 100, 99, 100, 120, 170, 120, 101, 100, 141, 77, 99)',
    'MOTOwait()',
    'MOTOsetspeed(68)',
    'MOTOmove16(80, 30, 120, 99, 95, 70, 109, 100, 120, 170, 120, 101, 100, 141, 77, 99)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 120, 99, 90, 60, 117, 105, 120, 170, 120, 101, 95, 118, 91, 99)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 100, 59, 123, 101, 120, 170, 80, 101, 87, 100, 101, 100)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 100, 59, 123, 101, 120, 170, 80, 101, 105, 130, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(78)',
    'MOTOmove16(80, 30, 80, 99, 105, 82, 109, 101, 120, 170, 80, 101, 110, 140, 83, 95)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 120, 97, 113, 100, 99, 100, 120, 170, 120, 101, 103, 145, 78, 96)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 97, 120, 170, 100, 100, 107, 145, 76, 103)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_backward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_BACKWARD'] + "')\n";
  return code;
}

