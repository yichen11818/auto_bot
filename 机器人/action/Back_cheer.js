Blockly.Blocks['Back_cheer'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_cheer',
      message0: '%{BKY_BACK_CHEER}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_cheer'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(90, 100, 185, 101, 38, 131, 42, 100, 110, 100, 15, 99, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(90, 100, 185, 100, 38, 131, 42, 100, 110, 100, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(52)',
    'MOTOmove16(50, 20, 185, 100, 38, 131, 42, 100, 150, 180, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 70, 185, 100, 38, 131, 42, 100, 120, 130, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(50, 20, 185, 100, 38, 131, 42, 100, 150, 180, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 70, 185, 100, 38, 131, 42, 100, 120, 130, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(50, 20, 185, 100, 38, 131, 42, 100, 150, 180, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 70, 185, 100, 38, 131, 42, 100, 120, 130, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(50, 20, 185, 100, 38, 131, 42, 100, 150, 180, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 70, 185, 100, 38, 131, 42, 100, 120, 130, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(50, 20, 185, 100, 38, 131, 42, 100, 150, 180, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 70, 185, 100, 38, 131, 42, 100, 120, 130, 15, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 70, 100, 100, 38, 131, 42, 100, 120, 130, 100, 100, 162, 69, 156, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(90, 40, 100, 100, 80, 130, 55, 100, 110, 160, 100, 100, 120, 70, 145, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 40, 100, 99, 110, 120, 79, 100, 120, 160, 100, 101, 90, 80, 121, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_cheer'] = function(block) {
  var code = "robot.leju_action('" + Blockly.Msg['BACK_CHEER'] + "')\n";
  return code;
}

