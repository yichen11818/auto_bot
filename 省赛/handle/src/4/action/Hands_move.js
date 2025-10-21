Blockly.Blocks['Hands_move'] = {
  init: function () {
    this.jsonInit({
      type: 'Hands_move',
      message0: '%{BKY_HANDS_MOVE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Hands_move'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 56, 124, 100, 95, 112, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(101, 97, 101, 100, 93, 56, 124, 100, 95, 112, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(101, 97, 101, 100, 93, 56, 124, 100, 182, 112, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(12, 97, 101, 100, 93, 56, 124, 100, 182, 112, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(56)',
    'MOTOmove16(12, 97, 101, 100, 93, 56, 124, 100, 40, 112, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(56)',
    'MOTOmove16(163, 97, 101, 100, 93, 56, 124, 100, 40, 112, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(163, 97, 101, 100, 93, 56, 124, 100, 107, 114, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(89, 93, 101, 100, 93, 56, 124, 100, 107, 114, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(89, 93, 101, 100, 93, 56, 124, 100, 107, 176, 101, 100, 107, 145, 77, 101)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(81, 31, 100, 100, 93, 56, 124, 100, 121, 170, 100, 100, 107, 146, 76, 101)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Hands_move'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['HANDS_MOVE'] + "')\n";
  return code;
}

