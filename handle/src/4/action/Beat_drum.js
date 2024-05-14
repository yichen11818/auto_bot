Blockly.Blocks['Beat_drum'] = {
  init: function () {
    this.jsonInit({
      type: 'Beat_drum',
      message0: '%{BKY_BEAT_DRUM}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Beat_drum'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 30, 138, 100, 93, 55, 124, 100, 121, 170, 19, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 20, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 38, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 20, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 38, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 20, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 38, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 20, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 38, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 20, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 38, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 20, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 38, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 40, 139, 100, 93, 55, 124, 100, 170, 182, 20, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 30, 138, 100, 93, 55, 124, 100, 121, 170, 19, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Beat_drum'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BEAT_DRUM'] + "')\n";
  return code;
}

