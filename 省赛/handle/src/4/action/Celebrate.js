Blockly.Blocks['Celebrate'] = {
  init: function () {
    this.jsonInit({
      type: 'Celebrate',
      message0: '%{BKY_CELEBRATE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Celebrate'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(129, 170, 101, 100, 93, 55, 124, 100, 70, 30, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(103, 162, 101, 100, 93, 55, 124, 100, 97, 32, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(129, 170, 101, 100, 93, 55, 124, 100, 70, 30, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(103, 162, 101, 100, 93, 55, 124, 100, 97, 32, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(129, 170, 101, 100, 93, 55, 124, 100, 70, 30, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(103, 162, 101, 100, 93, 55, 124, 100, 97, 32, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(129, 170, 101, 100, 93, 55, 124, 100, 70, 30, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(103, 162, 101, 100, 93, 55, 124, 100, 97, 32, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(129, 170, 101, 100, 93, 55, 124, 100, 70, 30, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(81, 31, 101, 100, 93, 55, 124, 100, 120, 171, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Celebrate'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['CELEBRATE'] + "')\n";
  return code;
}

