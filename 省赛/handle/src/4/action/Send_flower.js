Blockly.Blocks['Send_flower'] = {
  init: function () {
    this.jsonInit({
      type: 'Send_flower',
      message0: '%{BKY_SEND_FLOWER}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Send_flower'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,70,60,60,60,70,60,60,60,30,30,30,30,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 94, 139, 117, 109, 97, 120, 170, 100, 105, 144, 124, 133, 104)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(69, 35, 151, 94, 139, 117, 109, 97, 131, 170, 55, 105, 144, 124, 133, 104)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(23, 37, 150, 94, 139, 117, 109, 97, 177, 165, 50, 105, 144, 124, 133, 104)',
    'MOTOwait()',
    'MOTOsetspeed(18)',
    'MOTOmove16(20, 33, 184, 94, 139, 117, 109, 97, 189, 155, 16, 105, 144, 124, 133, 104)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(58, 15, 186, 94, 139, 117, 109, 97, 141, 190, 13, 105, 144, 124, 133, 104)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(18)',
    'MOTOmove16(60, 39, 187, 94, 139, 117, 109, 97, 142, 161, 13, 105, 144, 124, 133, 104)',
    'MOTOwait()',
    'MOTOsetspeed(38)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Send_flower'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SEND_FLOWER'] + "')\n";
  return code;
}

