Blockly.Blocks['Shake_arm'] = {
  init: function () {
    this.jsonInit({
      type: 'Shake_arm',
      message0: '%{BKY_SHAKE_ARM}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Shake_arm'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 96, 100, 77, 95, 57, 124, 77, 104, 102, 100, 119, 107, 145, 78, 123)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(77, 64, 100, 74, 95, 57, 124, 71, 39, 119, 101, 102, 82, 94, 107, 103)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(117, 154, 100, 100, 93, 56, 124, 100, 120, 170, 100, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'MOTOsetspeed(14)',
    'MOTOmove16(117, 154, 100, 100, 93, 55, 122, 108, 120, 163, 100, 107, 109, 152, 71, 115)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(115, 156, 100, 102, 93, 56, 122, 107, 72, 52, 99, 109, 99, 157, 57, 120)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(25, 68, 99, 100, 93, 56, 124, 100, 177, 132, 100, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 56, 124, 100, 120, 170, 100, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Shake_arm'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SHAKE_ARM'] + "')\n";
  return code;
}

