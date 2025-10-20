Blockly.Blocks['Back_fall&roll_up'] = {
  init: function () {
    this.jsonInit({
      type: "Back_fall&roll_up",
      message0: "%{BKY_BACK_FALL&ROLL_UP}",
      previousStatement: null,
      nextStatement: null,
      colour: "#48BCBC",
      toolip: "",
      helpUrl: ""
    });
  }
};

Blockly.Lua['Back_fall&roll_up'] = function (block) {
  const code = [
    "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)",
    "MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)",
    "MOTOwait()",
    "MOTOsetspeed(35)",
    "MOTOmove16(35, 130, 20, 101, 131, 126, 170, 100, 165, 70, 180, 99, 69, 74, 30, 100)",
    "MOTOwait()",
    "MOTOmove16(21, 105, 21, 101, 131, 126, 170, 100, 179, 95, 180, 99, 69, 74, 30, 100)",
    "MOTOwait()",
    "MOTOmove16(92, 16, 46, 100, 80, 160, 60, 100, 108, 184, 154, 100, 120, 40, 140, 100)",
    "MOTOwait()",
    "MOTOmove16(92, 18, 58, 100, 73, 158, 40, 100, 108, 182, 142, 100, 127, 42, 160, 100)",
    "MOTOwait()",
    "MOTOmove16(92, 25, 135, 100, 124, 160, 50, 100, 108, 175, 65, 100, 76, 40, 150, 100)",
    "MOTOwait()",
    "MOTOsetspeed(35)",
    "MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)",
    "MOTOwait()",
    ""
  ];
  return code.join("\n");
}

