Blockly.Blocks['Front_fall&roll_up'] = {
  init: function () {
    this.jsonInit({
      type: "Front_fall&roll_up",
      message0: "%{BKY_FRONT_FALL&ROLL_UP}",
      previousStatement: null,
      nextStatement: null,
      colour: "#48BCBC",
      toolip: "",
      helpUrl: ""
    });
  }
};

Blockly.Lua['Front_fall&roll_up'] = function (block) {
  const code = [
    "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)",
    "MOTOmove16(80, 90, 101, 101, 93, 57, 124, 101, 131, 100, 98, 102, 107, 143, 77, 99)",
    "MOTOwait()",
    "MOTOsetspeed(53)",
    "MOTOsetspeed(53)",
    "MOTOmove16(74, 95, 101, 100, 92, 47, 46, 100, 134, 101, 98, 101, 106, 154, 157, 99)",
    "MOTOwait()",
    "MOTOsetspeed(53)",
    "MOTOmove16(37, 92, 182, 100, 92, 68, 44, 100, 153, 107, 19, 101, 106, 129, 158, 99)",
    "MOTOwait()",
    "MOTOmove16(82, 33, 169, 100, 157, 152, 43, 100, 130, 161, 35, 101, 45, 32, 161, 99)",
    "MOTOwait()",
    "MOTOsetspeed(53)",
    "MOTOmove16(90, 15, 155, 100, 162, 175, 35, 100, 110, 185, 45, 100, 38, 25, 165, 100)",
    "MOTOwait()",
    "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)",
    "DelayMs(50)",
    "MOTOsetspeed(42)",
    "MOTOmove16(90, 15, 140, 100, 162, 175, 50, 100, 110, 185, 60, 100, 38, 25, 150, 100)",
    "MOTOwait()",
    "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)",
    "MOTOsetspeed(40)",
    "MOTOmove16(80, 30, 113, 100, 155, 175, 62, 100, 120, 170, 87, 100, 45, 25, 138, 100)",
    "MOTOwait()",
    "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)",
    "DelayMs(50)",
    "MOTOmove16(80, 30, 113, 100, 135, 175, 62, 100, 120, 170, 87, 100, 65, 25, 138, 100)",
    "MOTOwait()",
    "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)",
    "DelayMs(150)",
    "MOTOsetspeed(25)",
    "MOTOmove16(80, 30, 113, 84, 136, 151, 60, 88, 120, 170, 87, 102, 64, 46, 139, 106)",
    "MOTOwait()",
    "MOTOmove16(80, 30, 113, 95, 116, 61, 135, 94, 120, 170, 87, 109, 82, 124, 77, 104)",
    "MOTOwait()",
    "MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)",
    "MOTOwait()",
    "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)",
    ""
  ];
  return code.join("\n");
}

