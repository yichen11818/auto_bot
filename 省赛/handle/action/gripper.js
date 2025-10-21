Blockly.Blocks['gripper'] = {
  init: function() {
        this.jsonInit({
          "type": "gripper",
          "message0": "%1 %{BKY_GRASP_EXECUTION} %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "point",
              "options": [
                [
                  "%{BKY_LEFT}",
                  "left"
                ],
                [
                  "%{BKY_RIGHT}",
                  "right"
                ],
                [
                  "%{BKY_DOUBLE}",
                  "double"
                ]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "angle",
              "options": [
                [
                  "%{BKY_SPREAD}",
                  "60"
                ],
                [
                  "%{BKY_PINCH}",
                  "20"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#3ABDFB",
          "tooltip": "",
          "helpUrl": ""
        });
    }
};

Blockly.Lua['gripper'] = function(block) {
  const point = block.getFieldValue("point");
  const angle = block.getFieldValue("angle");
  let leftAngle = ajustGripperFactor + parseInt(angle);
  let rightMirrorAngle = mirrorGripperMax - leftAngle;
  if (point === 'left'){//左抓 17 号舵机
    let code = `MOTOmove19(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,${leftAngle},0,0)\nMOTOwait()\n`;
    return code;
  }else if (point === 'right'){//右抓 18 号舵机
    let code = `MOTOmove19(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,${rightMirrorAngle},0)\nMOTOwait()\n`;
    return code;
  }
  let code = `MOTOmove19(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,${leftAngle},${rightMirrorAngle},0)\nMOTOwait()\n`;
  return code;
}

Blockly.Python['gripper'] = function (block) {
  const point = block.getFieldValue('point');
  const angle = block.getFieldValue('angle');
  return `robot.leju_action('${point}_paw', ${angle})\n`;
}

