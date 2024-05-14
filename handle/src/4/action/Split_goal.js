Blockly.Blocks['Split_goal'] = {
  init: function () {
    this.jsonInit({
      type: 'Split_goal',
      message0: '%{BKY_SPLIT_GOAL}',
      previousStatement: null,
      nextStatement: null,
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Split_goal'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 20, 128, 133, 59, 65, 100, 100, 100, 180, 72, 67, 141, 135)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(101, 100, 101, 20, 80, 32, 135, 65, 99, 100, 99, 180, 120, 168, 65, 135)',
    'MOTOwait()',
    'DelayMs(600)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 20, 128, 133, 59, 65, 100, 100, 100, 180, 72, 67, 141, 135)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(103, 39, 113, 74, 125, 139, 62, 74, 97, 161, 87, 126, 75, 61, 138, 126)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(85, 50, 130, 100, 125, 135, 67, 100, 115, 150, 70, 100, 75, 65, 134, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 98, 108, 143, 44, 103, 118, 166, 99, 103, 97, 59, 160, 103)',
    'MOTOwait()',
    'DelayMs(250)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Split_goal'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPLIT_GOAL'] + "')\n";
  return code;
}

