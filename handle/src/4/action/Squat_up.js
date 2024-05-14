Blockly.Blocks['Squat_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat_up',
      message0: '%{BKY_SQUAT_UP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Squat_up'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(42)',
    'MOTOmove16(46, 101, 100, 100, 107, 142, 48, 100, 161, 105, 102, 102, 93, 60, 149, 102)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(116, 42, 100, 100, 107, 142, 48, 100, 77, 158, 102, 102, 93, 60, 149, 102)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(46, 101, 100, 100, 116, 135, 65, 100, 161, 105, 102, 102, 82, 69, 132, 99)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(116, 42, 100, 100, 116, 135, 65, 100, 77, 158, 102, 102, 82, 69, 132, 99)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(63, 63, 100, 100, 116, 101, 104, 100, 140, 140, 102, 100, 82, 106, 97, 101)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(87, 36, 101, 100, 116, 101, 104, 100, 120, 162, 100, 100, 82, 106, 97, 101)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 30, 100, 100, 93, 56, 124, 100, 120, 170, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    'DelayMs(250)',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 44, 100, 95, 93, 56, 124, 95, 120, 158, 101, 103, 107, 146, 76, 105)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Squat_up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SQUAT_UP'] + "')\n";
  return code;
}

