Blockly.Blocks['Hail'] = {
  init: function () {
    this.jsonInit({
      type: 'Hail',
      message0: '%{BKY_HAIL}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Hail'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(52)',
    'MOTOmove16(115, 180, 100, 99, 92, 59, 121, 100, 85, 20, 100, 99, 109, 144, 78, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 145, 100, 99, 92, 59, 121, 100, 100, 55, 100, 99, 109, 144, 78, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(115, 180, 100, 99, 92, 59, 121, 100, 85, 20, 100, 99, 109, 144, 78, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(100, 145, 100, 99, 92, 59, 121, 100, 100, 55, 100, 99, 109, 144, 78, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(115, 180, 100, 99, 92, 59, 121, 100, 85, 20, 100, 99, 109, 144, 78, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Hail'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['HAIL'] + "')\n";
  return code;
}

