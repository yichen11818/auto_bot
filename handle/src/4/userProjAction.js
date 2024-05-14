Blockly.Blocks['Take_a_quick_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_quick_step_forward',
      message0: '%{BKY_TAKE_A_QUICK_STEP_FORWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_quick_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_quick_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_QUICK_STEP_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['aelos_if_else'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if_else',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2 %{BKY_AELOS_ELSE} %3',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'if_do',
        },
        {
          type: 'input_statement',
          name: 'else_do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if_else'] = function(block) {
  var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "false";
  var if_do = Blockly.Lua.statementToCode(block, "if_do");
  var else_do = Blockly.Lua.statementToCode(block, "else_do");

  var code = `if ${condition} then \n${if_do} \nHKEY()\nelse \n${else_do}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if_else'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const if_do = Blockly.Python.statementToCode(block, 'if_do') || Blockly.Python.PASS;
  const else_do = Blockly.Python.statementToCode(block, 'else_do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${if_do}else:\n${else_do}`;
  return code;
}

Blockly.Blocks['Squat'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat',
      message0: '%{BKY_SQUAT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Squat'] = function (block) {
  const code = [
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 130, 130, 77, 100, 120, 170, 100, 100, 70, 70, 123, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Squat'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SQUAT'] + "')\n";
  return code;
}

Blockly.Blocks['Oversee'] = {
  init: function () {
    this.jsonInit({
      type: 'Oversee',
      message0: '%{BKY_OVERSEE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Oversee'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,50,50,75,70,50,25,25,25,50,50,75,70,50)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(120, 62, 98, 91, 100, 57, 127, 101, 41, 105, 98, 108, 122, 178, 64, 120)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 93, 79, 23, 140, 80, 41, 47, 118, 115, 82, 106, 97, 98)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 85, 118, 94, 103, 102, 41, 47, 118, 108, 121, 175, 59, 123)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 93, 79, 23, 140, 80, 41, 47, 118, 115, 82, 106, 97, 98)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 91, 118, 102, 99, 90, 41, 47, 118, 107, 82, 98, 101, 107)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(92, 37, 96, 85, 118, 94, 103, 102, 41, 47, 118, 107, 121, 177, 60, 120)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(250)',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Oversee'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['OVERSEE'] + "')\n";
  return code;
}

Blockly.Blocks['Beat_wooden_drum'] = {
  init: function () {
    this.jsonInit({
      type: 'Beat_wooden_drum',
      message0: '%{BKY_BEAT_WOODEN_DRUM}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Beat_wooden_drum'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 30, 100, 100, 106, 142, 50, 100, 120, 170, 100, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 30, 138, 100, 106, 142, 50, 100, 121, 170, 19, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 35, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(27, 37, 139, 100, 106, 142, 50, 100, 170, 177, 20, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 30, 138, 100, 106, 142, 50, 100, 121, 170, 19, 100, 97, 60, 154, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 38, 103, 98, 105, 141, 51, 99, 108, 170, 90, 115, 96, 62, 147, 114)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(24)',
    'MOTOmove16(79, 38, 103, 93, 105, 73, 115, 94, 108, 170, 90, 108, 93, 126, 79, 106)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(24)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Beat_wooden_drum'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BEAT_WOODEN_DRUM'] + "')\n";
  return code;
}

Blockly.Blocks['Air_kiss1'] = {
  init: function () {
    this.jsonInit({
      type: 'Air_kiss1',
      message0: '%{BKY_AIR_KISS1}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Air_kiss1'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(150, 160, 28, 100, 93, 55, 124, 100, 44, 36, 159, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(6)',
    'MOTOmove16(150, 149, 32, 100, 105, 55, 130, 100, 44, 40, 159, 100, 93, 145, 72, 100)',
    'MOTOwait()',
    'DelayMs(800)',
    'MOTOsetspeed(42)',
    'MOTOmove16(101, 132, 16, 100, 93, 55, 124, 100, 91, 54, 174, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(119, 96, 13, 100, 93, 55, 124, 100, 102, 84, 174, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Air_kiss1'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['AIR_KISS1'] + "')\n";
  return code;
}

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

Blockly.Python['Single_leg_stand'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SINGLE_LEG_STAND'] + "')\n";
  return code;
}

Blockly.Blocks['Push-up'] = {
  init: function () {
    this.jsonInit({
      type: 'Push-up',
      message0: '%{BKY_PUSH-UP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Push-up'] = function (block) {
  const code = [
    'MOTOrigid16(90,90,90,40,40,40,40,40,90,90,90,40,40,40,40,40)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 41, 154, 100, 110, 140, 55, 100, 120, 159, 46, 100, 90, 60, 145, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 41, 157, 98, 156, 140, 44, 100, 120, 159, 43, 99, 43, 59, 156, 99)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(100, 10, 185, 100, 160, 130, 35, 100, 100, 190, 15, 100, 40, 70, 165, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(15, 80, 190, 99, 109, 50, 154, 100, 185, 120, 10, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOrigid16(65,65,65,60,60,60,60,60,65,65,65,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100)',
    'MOTOwait()',
    'MOTOsetspeed(53)',
    'MOTOmove16(15, 80, 190, 100, 120, 90, 45, 100, 185, 120, 10, 100, 80, 110, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(90, 15, 190, 63, 160, 145, 35, 75, 110, 185, 10, 137, 40, 55, 165, 125)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(70)',
    'MOTOmove16(90, 15, 190, 63, 160, 145, 35, 67, 110, 185, 10, 137, 40, 55, 165, 133)',
    'MOTOwait()',
    'MOTOsetspeed(55)',
    'MOTOmove16(80, 15, 160, 65, 158, 150, 55, 70, 120, 185, 40, 135, 42, 50, 145, 130)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(88, 61, 139, 74, 160, 145, 62, 74, 109, 140, 64, 126, 40, 55, 138, 126)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(85, 50, 130, 100, 121, 150, 45, 100, 115, 150, 70, 100, 88, 50, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(79, 41, 101, 99, 105, 145, 45, 99, 116, 150, 111, 101, 94, 55, 160, 101)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Push-up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PUSH-UP'] + "')\n";
  return code;
}

Blockly.Blocks['Front_fall_dance'] = {
  init: function () {
    this.jsonInit({
      type: 'Front_fall_dance',
      message0: '%{BKY_FRONT_FALL_DANCE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Front_fall_dance'] = function (block) {
  const code = [
    'MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)',
    'MOTOsetspeed(30)',
    'MOTOmove16(85, 50, 130, 100, 100, 145, 44, 99, 115, 150, 70, 100, 100, 55, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(78, 27, 180, 93, 155, 130, 60, 99, 115, 178, 20, 101, 49, 70, 140, 96)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(28, 69, 188, 93, 102, 77, 42, 97, 178, 110, 16, 100, 101, 122, 159, 93)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(118, 58, 187, 93, 95, 74, 119, 98, 116, 113, 18, 99, 104, 118, 83, 92)',
    'MOTOwait()',
    'MOTOsetspeed(31)',
    'MOTOmove16(10, 160, 125, 100, 80, 80, 70, 100, 190, 40, 75, 100, 120, 120, 130, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(33)',
    'MOTOmove16(70, 45, 115, 100, 93, 55, 124, 100, 130, 155, 85, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(33)',
    'MOTOmove16(70, 45, 130, 100, 20, 125, 75, 100, 130, 155, 70, 100, 180, 80, 125, 100)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(70, 45, 170, 100, 57, 71, 108, 100, 130, 155, 30, 100, 143, 129, 92, 100)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(70, 45, 172, 100, 55, 31, 136, 100, 130, 155, 25, 100, 145, 169, 62, 100)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(25)',
    'MOTOmove16(70, 45, 172, 40, 60, 31, 136, 42, 130, 155, 25, 160, 140, 169, 64, 158)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(70, 45, 172, 97, 60, 31, 136, 100, 130, 155, 25, 105, 140, 169, 64, 100)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(70, 45, 172, 40, 60, 31, 136, 42, 130, 155, 25, 160, 140, 169, 64, 158)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(70, 45, 172, 97, 60, 31, 136, 100, 130, 155, 25, 105, 140, 169, 64, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 45, 172, 100, 65, 71, 111, 100, 130, 155, 25, 100, 135, 129, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 45, 160, 100, 20, 125, 75, 100, 130, 155, 40, 100, 180, 80, 125, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 45, 110, 100, 10, 135, 75, 100, 130, 155, 90, 100, 190, 65, 125, 100)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 143, 189, 69, 142, 113, 46, 94, 189, 65, 16, 127, 51, 86, 157, 109)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(10, 143, 189, 50, 150, 115, 45, 80, 189, 66, 16, 150, 50, 85, 155, 120)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(90, 15, 190, 63, 162, 145, 33, 75, 110, 185, 10, 137, 38, 55, 167, 125)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(90, 15, 190, 63, 162, 145, 33, 67, 110, 185, 10, 137, 38, 55, 167, 133)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(103, 39, 113, 74, 162, 145, 62, 74, 97, 161, 87, 126, 38, 55, 138, 126)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(85, 50, 130, 100, 121, 155, 45, 100, 115, 150, 70, 100, 88, 40, 155, 100)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(79, 41, 101, 99, 105, 145, 45, 99, 116, 150, 111, 101, 94, 55, 160, 101)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Front_fall_dance'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['FRONT_FALL_DANCE'] + "')\n";
  return code;
}

Blockly.Blocks['Spread_wings'] = {
  init: function () {
    this.jsonInit({
      type: 'Spread_wings',
      message0: '%{BKY_SPREAD_WINGS}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Spread_wings'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(78, 105, 99, 99, 92, 56, 124, 99, 121, 90, 100, 101, 106, 142, 75, 99)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(100, 100, 100, 89, 92, 58, 122, 82, 100, 100, 100, 93, 102, 133, 86, 91)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 90, 98, 69, 114, 86, 100, 100, 100, 93, 102, 133, 86, 88)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 88, 98, 145, 74, 87)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 79, 90, 100, 100, 70, 93, 71, 128, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 62, 165, 53, 87)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(140, 150, 170, 85, 54, 55, 102, 90, 60, 50, 30, 93, 50, 170, 48, 88)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 170, 85, 54, 55, 102, 90, 130, 150, 30, 93, 55, 170, 48, 86)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 50, 170, 48, 86)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,60,60,60,60,70)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 89, 61, 94, 101, 88, 100, 100, 30, 93, 77, 165, 57, 89)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 53, 90, 100, 100, 70, 93, 85, 131, 83, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 100, 85, 111, 86, 96, 85, 100, 100, 100, 93, 103, 142, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 89, 92, 50, 121, 85, 100, 100, 100, 93, 102, 139, 83, 92)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,60,60,60,60,40,40,40,40,60,60,60,60,60)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Spread_wings'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPREAD_WINGS'] + "')\n";
  return code;
}

Blockly.Blocks['LOVE-Flag_language_LOVE'] = {
  init: function () {
    this.jsonInit({
      type: 'LOVE-Flag_language_LOVE',
      message0: '%{BKY_LOVE-FLAG_LANGUAGE_LOVE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['LOVE-Flag_language_LOVE'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(98, 132, 101, 100, 93, 55, 124, 100, 105, 149, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(126, 170, 58, 100, 93, 55, 124, 100, 105, 108, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(93, 46, 97, 100, 93, 55, 124, 100, 111, 25, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(92, 134, 98, 100, 93, 55, 124, 100, 110, 178, 101, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['LOVE-Flag_language_LOVE'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LOVE-FLAG_LANGUAGE_LOVE'] + "')\n";
  return code;
}

Blockly.Blocks['Back_Bow'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_Bow',
      message0: '%{BKY_BACK_BOW}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_Bow'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 35, 160, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(28, 21, 175, 100, 93, 55, 124, 100, 180, 155, 155, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(28, 21, 175, 100, 145, 55, 145, 100, 180, 155, 155, 100, 55, 145, 55, 100)',
    'MOTOwait()',
    'DelayMs(1600)',
    'MOTOsetspeed(21)',
    'MOTOmove16(28, 21, 175, 100, 93, 55, 124, 100, 120, 120, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 40, 160, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_Bow'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BACK_BOW'] + "')\n";
  return code;
}

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

Blockly.Blocks['Left_foot_shot'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_foot_shot',
      message0: '%{BKY_LEFT_FOOT_SHOT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_foot_shot'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 40, 100, 86, 91, 48, 129, 85, 120, 160, 100, 92, 107, 145, 77, 86)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 40, 100, 86, 142, 112, 104, 83, 120, 160, 100, 95, 87, 145, 70, 85)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(65, 35, 165, 77, 61, 116, 78, 96, 110, 163, 162, 93, 87, 132, 85, 85)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(81, 45, 101, 77, 102, 95, 81, 88, 121, 161, 100, 95, 87, 140, 76, 85)',
    'MOTOwait()',
    'MOTOsetspeed(110)',
    'MOTOmove16(80, 40, 50, 77, 150, 47, 171, 96, 129, 177, 34, 95, 101, 139, 75, 85)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 130, 78, 131, 83, 120, 160, 100, 95, 108, 144, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 110, 81, 114, 80, 120, 160, 100, 95, 105, 145, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 40, 100, 87, 94, 76, 109, 82, 120, 160, 100, 93, 107, 145, 77, 90)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_foot_shot'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_FOOT_SHOT'] + "')\n";
  return code;
}

Blockly.Blocks['Kick'] = {
  init: function () {
    this.jsonInit({
      type: 'Kick',
      message0: '%{BKY_KICK}',
      previousStatement: null,
      nextStatement: null,
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Kick'] = function (block) {
  const code = [
    'MOTOrigid16(65,65,65,70,70,70,70,70,65,65,65,50,50,50,50,50)',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 97, 93, 55, 124, 95, 120, 170, 100, 103, 107, 145, 76, 105)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 105, 120, 170, 100, 105, 117, 163, 68, 125)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 105, 93, 55, 124, 110, 120, 170, 100, 110, 117, 163, 68, 115)',
    'MOTOwait()',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 105, 93, 55, 124, 110, 120, 170, 100, 110, 117, 163, 68, 115)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 85, 50, 125, 110, 122, 150, 101, 119, 70, 60, 118, 103)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 93, 56, 125, 110, 122, 150, 101, 117, 46, 72, 107, 104)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 93, 56, 125, 110, 122, 150, 101, 119, 42, 109, 11, 114)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 100, 56, 125, 110, 123, 150, 101, 118, 93, 101, 32, 105)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 97, 103, 56, 125, 110, 123, 150, 101, 119, 92, 94, 107, 124)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 100, 98, 56, 125, 110, 123, 150, 101, 119, 94, 131, 75, 126)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 100, 98, 56, 125, 110, 123, 150, 101, 109, 107, 145, 76, 126)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 50, 101, 100, 93, 54, 124, 95, 123, 150, 101, 100, 107, 146, 76, 105)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(12)',
    'MOTOmove16(80, 30, 100, 105, 93, 54, 124, 100, 120, 170, 100, 95, 107, 146, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Kick'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['KICK'] + "')\n";
  return code;
}

Blockly.Blocks['Continuous_punches'] = {
  init: function () {
    this.jsonInit({
      type: 'Continuous_punches',
      message0: '%{BKY_CONTINUOUS_PUNCHES}',
      previousStatement: null,
      nextStatement: null,
      colour: '#377DFD',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Continuous_punches'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(26)',
    'MOTOmove16(10, 131, 186, 91, 115, 113, 98, 94, 190, 62, 15, 108, 158, 146, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 61, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 135, 190, 21, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(79, 10, 180, 91, 115, 114, 98, 94, 190, 62, 15, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(10, 131, 186, 91, 115, 114, 98, 94, 143, 190, 23, 109, 158, 146, 112, 114)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(10, 131, 186, 91, 115, 113, 98, 94, 190, 62, 15, 108, 158, 146, 123, 112)',
    'MOTOwait()',
    'MOTOsetspeed(22)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Continuous_punches'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['CONTINUOUS_PUNCHES'] + "')\n";
  return code;
}

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

Blockly.Blocks['Sit'] = {
  init: function () {
    this.jsonInit({
      type: 'Sit',
      message0: '%{BKY_SIT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Sit'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 31, 100, 100, 95, 130, 60, 100, 121, 171, 100, 100, 105, 70, 140, 100)',
    'MOTOwait()',
    'DelayMs(3500)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Sit'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SIT'] + "')\n";
  return code;
}

Blockly.Blocks['Pull_over'] = {
  init: function () {
    this.jsonInit({
      type: 'Pull_over',
      message0: '%{BKY_PULL_OVER}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Pull_over'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(81, 30, 100, 100, 93, 57, 126, 101, 121, 190, 53, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 121, 190, 53, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 140, 190, 53, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 108, 190, 54, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 140, 190, 53, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(94, 181, 64, 100, 93, 57, 126, 101, 108, 190, 54, 102, 109, 145, 78, 101)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(48)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Pull_over'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PULL_OVER'] + "')\n";
  return code;
}

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

Blockly.Blocks['Oblique_Embrace'] = {
  init: function () {
    this.jsonInit({
      type: 'Oblique_Embrace',
      message0: '%{BKY_OBLIQUE_EMBRACE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Oblique_Embrace'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 60, 100, 90, 91, 48, 129, 88, 120, 150, 40, 92, 107, 146, 76, 92)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 60, 100, 90, 94, 55, 124, 85, 120, 150, 40, 98, 102, 135, 81, 92)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 50, 160, 75, 109, 85, 108, 90, 120, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(50, 50, 160, 75, 109, 85, 108, 90, 150, 150, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(17)',
    'MOTOmove16(80, 55, 160, 75, 109, 85, 108, 90, 120, 145, 12, 82, 102, 141, 76, 97)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 40, 100, 90, 94, 55, 124, 85, 120, 140, 40, 98, 102, 135, 81, 92)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 40, 100, 90, 91, 48, 129, 88, 110, 140, 60, 92, 107, 146, 76, 92)',
    'MOTOwait()',
    'MOTOsetspeed(21)',
    'MOTOmove16(80, 40, 100, 95, 93, 54, 125, 95, 110, 140, 60, 92, 107, 146, 76, 91)',
    'MOTOwait()',
    'MOTOsetspeed(11)',
    'MOTOmove16(80, 30, 100, 98, 93, 55, 124, 95, 120, 170, 100, 102, 107, 145, 76, 105)',
    'MOTOwait()',
    'MOTOsetspeed(11)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Oblique_Embrace'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['OBLIQUE_EMBRACE'] + "')\n";
  return code;
}

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

Blockly.Blocks['Salute_one'] = {
  init: function () {
    this.jsonInit({
      type: 'Salute_one',
      message0: '%{BKY_SALUTE_ONE}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Salute_one'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 59, 31, 130, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(2000)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Salute_one'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SALUTE_ONE'] + "')\n";
  return code;
}

Blockly.Blocks['Salute_two'] = {
  init: function () {
    this.jsonInit({
      type: 'Salute_two',
      message0: '%{BKY_SALUTE_TWO}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Salute_two'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(68)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 47, 49, 103, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(2000)',
    'MOTOsetspeed(64)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Salute_two'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SALUTE_TWO'] + "')\n";
  return code;
}

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

Blockly.Blocks['SOS-Flag_Language_SOS'] = {
  init: function () {
    this.jsonInit({
      type: 'SOS-Flag_Language_SOS',
      message0: '%{BKY_SOS-FLAG_LANGUAGE_SOS}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['SOS-Flag_Language_SOS'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(92, 55, 99, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(136, 172, 58, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(92, 55, 99, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['SOS-Flag_Language_SOS'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SOS-FLAG_LANGUAGE_SOS'] + "')\n";
  return code;
}

Blockly.Blocks['STOP-Flag_language_STOP'] = {
  init: function () {
    this.jsonInit({
      type: 'STOP-Flag_language_STOP',
      message0: '%{BKY_STOP-FLAG_LANGUAGE_STOP}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['STOP-Flag_language_STOP'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(92, 55, 99, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(94, 182, 100, 100, 93, 55, 124, 100, 106, 51, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(136, 172, 58, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(750)',
    'MOTOsetspeed(52)',
    'MOTOmove16(94, 182, 100, 100, 93, 55, 124, 100, 106, 104, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['STOP-Flag_language_STOP'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['STOP-FLAG_LANGUAGE_STOP'] + "')\n";
  return code;
}

Blockly.Blocks['Easy&Attention'] = {
  init: function () {
    this.jsonInit({
      type: 'Easy&Attention',
      message0: '%{BKY_EASY&ATTENTION}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Easy&Attention'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 169, 100, 107, 99, 163, 56, 112)',
    'MOTOwait()',
    'DelayMs(1500)',
    'MOTOsetspeed(52)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Easy&Attention'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['EASY&ATTENTION'] + "')\n";
  return code;
}

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

Blockly.Blocks['color_identification_rgbhsv'] = {
  init: function () {
    this.jsonInit({
      type: 'color_identification_rgbhsv',
      message0: '%{BKY_VISUAL_COLOR_RGBHSV_TITLE_1}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'field_colour', name: 'colour', colour: '#ff0000' },
        { type: 'input_dummy' },
        { type: 'input_dummy' },
        hsvArgs.hmin,
        hsvArgs.hmax,
        { type: 'input_dummy' },
        hsvArgs.smin,
        hsvArgs.smax,
        { type: 'input_dummy' },
        hsvArgs.vmin,
        hsvArgs.vmax,
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_identification_rgbhsv'] = undefined

Blockly.Python['color_identification_rgbhsv'] = function (block) {
  const camera = block.getFieldValue('camera');
  const colour = block.getFieldValue('colour');
  const { hmin, hmax, smin, smax, vmin, vmax } = getHsvRangeParams(block);
  return `# HSVMarker('${camera}', '${colour}', {${hmin}, ${hmax}, ${smin}, ${smax}, ${vmin}, ${vmax}})\n`;
}

Blockly.Blocks['color_rgbhsv_position_range'] = {
  init: function () {
    this.jsonInit({
      type: 'color_rgbhsv_position_range',
      message0:
        '%1 %{BKY_CAMERA} %{BKY_VISUAL_RGBHSV_POSITION_RANGE_TITLE_1} %2 %3 %{BKY_VISUAL_RGBHSV_POSITION_RANGE_TITLE_2} %4 Hmin: %5 ~Hmax: %6 %7 Smin :  %8 ~Smax :  %9 %10 Vmin : %11 ~Vmax: %12',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'field_dropdown', name: 'position', options: colorPositionOptions() },
        { type: 'input_dummy' },
        { type: 'input_dummy' },
        hsvArgs.hmin,
        hsvArgs.hmax,
        { type: 'input_dummy' },
        hsvArgs.smin,
        hsvArgs.smax,
        { type: 'input_dummy' },
        hsvArgs.vmin,
        hsvArgs.vmax,
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_rgbhsv_position_range'] = undefined

Blockly.Python['color_rgbhsv_position_range'] = function (block) {
  const camera = block.getFieldValue('camera');
  const hsvString = getHsvRangeParams(block, true);
  const position = block.getFieldValue('position');
  const code = `colour_port.get_hsv_position('${camera}', '${position}', ${hsvString})`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['Take_a_slow_step_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_a_slow_step_forward',
      message0: '%{BKY_TAKE_A_SLOW_STEP_FORWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_a_slow_step_forward'] = function (block) {
  const code = [
    'MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_a_slow_step_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_A_SLOW_STEP_FORWARD'] + "')\n";
  return code;
}

Blockly.Blocks['aelos_compare'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'input_1',
          check: ['Number', 'Variable', 'Remote_type'],
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'input_value',
          name: 'input_2',
          check: ['Number', 'Variable', 'Remote_type'],
        },
      ],
      inputsInline: true,
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_compare'] = function(block) {
  var op_map = {
    "JNE": "==",
    "JE": "~=",
    "JAE": "<",
    "JA": "<=",
    "JBE": ">",
    "JB": ">="
  };
  var input_1 = Blockly.Lua.valueToCode(block, "input_1", Blockly.Lua.ORDER_ATOMIC);
  var input_2 = Blockly.Lua.valueToCode(block, "input_2", Blockly.Lua.ORDER_ATOMIC);
  var operation = op_map[block.getFieldValue("OP")];
  var code = "";

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = "FALSE";
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '!=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Python.valueToCode(block, 'input_1', Blockly.Python.ORDER_ATOMIC);
  const input_2 = Blockly.Python.valueToCode(block, 'input_2', Blockly.Python.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'False';
  }

  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['Take_three_quick_steps_forward'] = {
  init: function () {
    this.jsonInit({
      type: 'Take_three_quick_steps_forward',
      message0: '%{BKY_TAKE_THREE_QUICK_STEPS_FORWARD}',
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Take_three_quick_steps_forward'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(60)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 91, 94)',
    'MOTOwait()',
    'MOTOsetspeed(70)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 91, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 109, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 110, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 94)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 80, 99, 115, 99, 103, 100, 120, 170, 80, 101, 109, 134, 89, 98)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 74, 121, 100, 120, 170, 80, 101, 114, 137, 89, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 80, 99, 110, 61, 126, 104, 120, 170, 80, 101, 100, 127, 94, 100)',
    'MOTOwait()',
    'MOTOsetspeed(75)',
    'MOTOmove16(80, 30, 120, 99, 91, 66, 111, 102, 120, 170, 120, 101, 85, 101, 97, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 86, 63, 111, 100, 120, 170, 120, 101, 90, 126, 79, 100)',
    'MOTOwait()',
    'MOTOsetspeed(80)',
    'MOTOmove16(80, 30, 120, 99, 100, 73, 106, 100, 120, 170, 120, 101, 90, 139, 74, 96)',
    'MOTOwait()',
    'MOTOsetspeed(65)',
    'MOTOmove16(80, 30, 120, 96, 95, 70, 110, 100, 120, 170, 120, 102, 109, 146, 75, 96)',
    'MOTOwait()',
    'MOTOsetspeed(45)',
    'MOTOmove16(80, 30, 100, 99, 93, 54, 122, 90, 120, 170, 100, 98, 107, 146, 75, 95)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Take_three_quick_steps_forward'] = function (block) {
  var code = "base_action.action('" + Blockly.Msg['TAKE_THREE_QUICK_STEPS_FORWARD'] + "')\n";
  return code;
}

