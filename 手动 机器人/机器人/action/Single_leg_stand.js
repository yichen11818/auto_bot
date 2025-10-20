Blockly.Blocks['Single_leg_stand'] = {
  init: function () {
    this.jsonInit({
      type: 'Single_leg_stand',
      message0: '%{BKY_SINGLE_LEG_STAND}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Single_leg_stand'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,50,50,50,50,50)',
    'MOTOsetspeed(22)',
    'MOTOmove16(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 87)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 100, 90, 115, 145, 47, 85, 100, 100, 100, 103, 102, 145, 74, 88)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(25)',
    'MOTOmove16(125, 65, 100, 90, 115, 145, 47, 90, 125, 86, 100, 103, 102, 145, 74, 89)',
    'MOTOwait()',
    'DelayMs(1000)',
    'MOTOsetspeed(33)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 93, 102, 145, 74, 88)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(22)',
    'MOTOmove16(100, 100, 100, 90, 91, 48, 129, 88, 100, 100, 100, 92, 107, 146, 76, 88)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Single_leg_stand'] = function(block) {
  var code = "robot.leju_action('" + Blockly.Msg['SINGLE_LEG_STAND'] + "')\n";
  return code;
}

