import time
import cv2
import threading
import numpy as np
import rospy
import math
from functools import wraps
import sys
# 导入相关库
from pydobot import Dobot


from image_Tag_converter import ImgConverter
from image_Tag_converter import TagConverter

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import base_action


#定义一些参数
Chest_img = None
ChestOrg = None

marker = None

chest_circle_x = None
chest_circle_y = None
Debug = 0

# 不同色块的hsv范围
color_range = {
    'green': [( 44 , 76 , 73 ),( 67 , 146 , 138 )],
    'orange': [( 17 , 163 , 133 ),( 25 , 242 , 152 )]
}



# ******************************************动作函数***********************************************
#放下箱子
def Box_Down(n):   
    for i in range (0,n):
        base_action.action("PutCubeDown")
        time.sleep(0.5)

#后退
def Box_Back(n):
    for i in range (0,n):
            base_action.action("BoxBack1Rungai")
            time.sleep(0.5)
def Box_Back1(n):
    for i in range (0,n):
            base_action.action("BoxBack2-1")
            time.sleep(0.5)
def Back2(n):
    for i in range (0,n):
            base_action.action("Back2Run")
            time.sleep(0.5)
def Back1(n):
    for i in range (0,n):
            base_action.action("Back1Run")
            time.sleep(0.5)

#前进#
def go_fast(n):   #快速前进一步
    for i in range (0,n):
        base_action.action("Forwalk01")
        time.sleep(0.5)
def go_fast1(n):   #快速前进一步
    for i in range (0,n):
        base_action.action("FastForward1s")
        time.sleep(0.5)
def go_fast2(n):   #快速前进两步
    for i in range (0,n):
        base_action.action("FastForward2s")
        time.sleep(0.5)
def go_fast3(n):   #快速前进三步
    for i in range (0,n):
        base_action.action("FastForward3s")
        time.sleep(0.5)
def box_go(n):
    for i in range (0,n):
        base_action.action("BoxForward02gai")
        time.sleep(0.5)
def box_go1(n):    #抱着箱子前进一步
    for i in range (0,n):
        base_action.action("BoxForward1s")
        time.sleep(1)
def box_go2(n):     #抱着箱子前进两步
    for i in range (0,n):
        base_action.action("BoxForward2s")
        time.sleep(1)
def box_go3(n):     #抱着箱子前进三步
    for i in range (0,n):
        base_action.action("BoxForward3s")
        time.sleep(1)


#侧移#
def L_move1 (n):           #左侧移
    for i in  range (0,n):
        base_action.action ("Left02move")
        print('左移1.5cm')
        time.sleep(0.5)
def L_move2 (n):           #左侧移
    for i in  range (0,n):
        base_action.action('move_left')
        time.sleep(0.5)
def BoxL_move1 (n):           #左侧移  
    for i in  range (0,n):
        base_action.action ("BoxLeft1")
        time.sleep(1)
def BoxL_move2 (n):           #左侧移
    for i in  range (0,n):
        base_action.action('Box_move_left')
        time.sleep(1)
def R_move1 (n):           #右侧移  
    for i in  range (0,n):
        base_action.action ("Right02move")
        time.sleep(0.5)
def R_move2 (n):           #右侧移  
    for i in  range (0,n):
        base_action.action('move_right')
        time.sleep(0.5)
def BoxR_move1 (n):           #右侧移 
    for i in  range (0,n):
        base_action.action ("BoxRight1")
        time.sleep(1)
def BoxR_move2 (n):           #右侧移 
    for i in  range (0,n):
        base_action.action('Box_move_right')
        time.sleep(1)
def BoxR_move4b (n):           #右侧移 
    for i in  range (0,n):
        base_action.action('Box_move_right_4b')
        time.sleep(1)
        

#转向#
def L_turn1 (n):           #左转  左转7°
    for i in  range (0,n):
        base_action.action("turn003L")
        time.sleep(0.5)
def L_turn2 (n):
    for i in range (0,n):
        base_action.action("LeftTurn1s")
        time.sleep(0.5)
def BoxL_turn1(n):           #左转 
    for i in  range (0,n):
        base_action.action("BoxTurnL1")
        time.sleep(1)
def BoxL_turn2(n):           #左转 
    for i in  range (0,n):
        base_action.action("BoxLeftTurn1s")
        time.sleep(1)
def R_turn1 (n):           #右转 
    for i in  range (0,n):
        base_action.action("turn003R")
        time.sleep(0.5)
def R_turn2 (n):           #右转 
    for i in  range (0,n):
        base_action.action("RightTurn1s")
        time.sleep(0.5)
def BoxR_turn1 (n):           #右转
    for i in  range (0,n):
        base_action.action("BoxTurnR1")
        time.sleep(1)
def BoxR_turn2 (n):           #右转
    for i in  range (0,n):
        base_action.action("BoxRightTurn1s")
        time.sleep(1)


#获取图像
def get_img():
    global Chest_img,ChestOrg
    global ret
    image_reader_chest = ImgConverter()
    while True:
        ret, ChestOrg = image_reader_chest.chest_image()
        time.sleep(0.3)
        if ChestOrg is not None:
            Chest_img = ChestOrg
            time.sleep(0.05)
            #Chest_img = cv2.flip(Chest_img, 1)
        else:
            time.sleep(0.3)
            print("暂时未获取到图像")
th2 = threading.Thread(target=get_img)
th2.setDaemon(True)
th2.start()

#查找方块
def find_box(img,color_name):
    global chest_circle_x, chest_circle_y
    if Chest_img is None:
        print('等待获取图像中...')
        time.sleep(0.3)
    else:
        box_img = img
        box_img_bgr = cv2.cvtColor(box_img, cv2.COLOR_RGB2BGR)  # 将图片转换到BRG空间
        box_img_hsv = cv2.cvtColor(box_img, cv2.COLOR_BGR2HSV)  # 将图片转换到HSV空间
        box_img = cv2.GaussianBlur(box_img_hsv, (3, 3), 0)  # 高斯模糊
        box_img_mask = cv2.inRange(box_img, color_range[color_name][0], color_range[color_name][1])  # 二值化
        box_img_closed = cv2.erode(box_img_mask, None, iterations=2)  # 腐蚀
        box_img_opened = cv2.dilate(box_img_mask, np.ones((4, 4), np.uint8), iterations=2)  # 膨胀    先腐蚀后运算等同于开运算
        (contours, hierarchy) = cv2.findContours(box_img_opened, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        if len(contours) != 0:
            area = []
            for cn in contours:
                contour_area = math.fabs(cv2.contourArea(cn))
                area.append(contour_area)
            max_index = np.argmax(area)
            (chest_circle_x,chest_circle_y),chest_radius = cv2.minEnclosingCircle(contours[max_index])
            cv2.circle(img,(int(chest_circle_x),int(chest_circle_y)),int(chest_radius),(0,0,255))
            print('A','x=',chest_circle_x,'y=',chest_circle_y)

            if Debug:
                # cv2.imwrite('image.png',img)
                cv2.imshow("Box", img)
                cv2.waitKey(2000)

        else:
            print('正在寻找目标')

#搬箱子
def goto_box():
    global level, ID
    if chest_circle_x is None :
        print('等待中获取坐标中...')
        time.sleep(0.3)
    else:
        if chest_circle_x < 275:
            print("正在左侧移 ",chest_circle_x)
            base_action.action("Left3move")
            time.sleep(0.5)
        elif chest_circle_x < 295: 
            print("正在左侧移 ",chest_circle_x)
            base_action.action("Left02move")
            time.sleep(0.5)
        elif chest_circle_x > 365:    
            print("正在右侧移 ",chest_circle_x)
            base_action.action("Right3move")
            time.sleep(0.5)
        elif chest_circle_x > 345:    
            print("正在右侧移 ",chest_circle_x)
            base_action.action("Right02move")
            time.sleep(0.5)
        else:
            if chest_circle_y < 300:  
                print("前进",chest_circle_y)
                base_action.action("FastForward1s")
                time.sleep(0.5)
            elif chest_circle_y >= 340:  
                print("后退",chest_circle_y)
                base_action.action("Back1Run")
                time.sleep(0.5)
            else:
                print("开始抱箱子")
                base_action.action("Forwalk01")
                base_action.action("Forwalk01")
                base_action.action("GrabCube")
                base_action.action("LiftCubeUp")
                level = "end_box"


# ***************************************tag对正****************************************
def turn_to_tag(dis_x, dis_y, theta, x_offset=0, y_offset=0, theta_offset=0, x_threshold=0.03, y_threshold=0.02, theta_threshold=5):
    is_turn_done = False
    check_flag = 0

    x_error = dis_x-x_offset
    y_error = dis_y-y_offset
    theta_error = theta-theta_offset
    print("ID:", marker[0], "dis_x:", dis_x, "dis_y:", dis_y, "theta:", theta, "theta_offset", theta_offset)
    print("x_error:", x_error, "y_error:", y_error, "theta_error:", theta_error)
    

    # 不偏离赛道
    if step == 1:
        if (x_error < x_threshold-0.03):
            print("后退",x_error, " < ", x_threshold-0.03)
            Box_Back(1)

        elif (theta_error+theta_threshold > 35):
            print("1左转身", theta_error, " > ", 14+theta_threshold)
            BoxL_turn2(1)
        elif (theta_error-theta_threshold < -35):
            print("1右转身", theta_error, " < ", -14-theta_threshold)
            BoxR_turn2(1)
        
        # 左右平移
        elif (y_error > y_threshold+0.05):
            print("1左移动", y_error, " > ", y_threshold)
            BoxL_move2(1)
        elif (y_error < -y_threshold-0.05):
            print("1右移动 ", y_error," < ", -y_threshold)
            BoxR_move2(1)

        # 快速靠近标签
        elif (x_error > x_threshold+0.2):
            print("向前靠近标签", x_error, " > ", x_threshold+0.12)
            box_go2(1)

        # 方向平行与标签
        elif (theta_error > theta_threshold):
            print("2左转 ", theta_error, " > ", theta_threshold)
            BoxL_turn1(1)
        elif (theta_error < -theta_threshold):
            print("2右转 ", theta_error, " < ", theta_threshold)
            BoxR_turn1(1)

        # 精确调整左右平移
        elif (y_error > y_threshold):
            print("1左移动", y_error, " > ", y_threshold)
            BoxL_move1(1)
        elif (y_error < -y_threshold):
            print("1右移动 ", y_error," < ", -y_threshold)
            BoxR_move1(1)

        # 靠近标签
        elif (x_error > x_threshold+0.12):
            print("向前靠近标签", x_error, " > ", x_threshold+0.08)
            box_go1(1)
        elif (x_error > x_threshold+0.06):
            print("向前靠近标签", x_error, " > ", x_threshold+0.06)
            box_go(1)
        else:    
            is_turn_done = True 

         
    elif step == 2:
        if (theta_error+theta_threshold > 35):
            print("1左转身", theta_error, " > ", 14+theta_threshold)
            L_turn2(1)
        elif (theta_error-theta_threshold < -35):
            print("1右转身", theta_error, " < ", -14-theta_threshold)
            R_turn2(1)
        
        # 左右平移
        elif (y_error > y_threshold+0.05):
            print("1左移动", y_error, " > ", y_threshold)
            L_move2(1)
        elif (y_error < -y_threshold-0.05):
            print("1右移动 ", y_error," < ", -y_threshold)
            R_move2(1)

        # 快速靠近标签
        elif (x_error > x_threshold+0.2):
            print("向前靠近标签", x_error, " > ", x_threshold+0.12)
            go_fast2(1)

        # 方向平行与标签
        elif (theta_error > theta_threshold):
            print("2左转 ", theta_error, " > ", theta_threshold)
            L_turn1(1)
        elif (theta_error < -theta_threshold):
            print("2右转 ", theta_error, " < ", theta_threshold)
            R_turn1(1)

        # 精确调整左右平移
        elif (y_error > y_threshold):
            print("1左移动", y_error, " > ", y_threshold)
            L_move1(1)
        elif (y_error < -y_threshold):
            print("1右移动 ", y_error," < ", -y_threshold)
            R_move1(1)

        # 靠近标签
        elif (x_error > x_threshold+0.12):
            print("向前靠近标签", x_error, " > ", x_threshold+0.08)
            go_fast1(1)
        elif (x_error > x_threshold+0.06):
            print("向前靠近标签", x_error, " > ", x_threshold+0.06)
            go_fast(1)
        else:    
            is_turn_done = True 

    return is_turn_done


if __name__ == '__main__':
    rospy.init_node('image_listener')   #ROS节点初始化
    Tag = TagConverter()
    time.sleep(0.5)
    ID = 0                      #手中有箱子ID=0，刚抱起ID=1 ID为当前要对正的tag码号码
    step = 1                    #step=1 正向  step=2 反向
    level = "start_box"         #start为还未抱到箱子，end为已抱起
    time.sleep(5)
    while ChestOrg is None:
        print('wite')
        time.sleep(0.1)

    print('启动')
    go_fast2(1)

    while not rospy.is_shutdown():
        if ID == 0:  #搬箱子
            if level == "start_box":
                find_box(Chest_img, 'green')
                goto_box()                      #218 抱箱函数
                time.sleep(0.1)
            elif level == "end_box":
                if step == 1:
                    box_go2(4)              #抱起箱子后前进
                    box_go1(1)
                    BoxR_turn2(1)
                elif step == 2:
                    BoxR_turn2(3)
                    step = 1
                ID += 1                     #抱起箱子时Id为1
        else:     
            marker = Tag.get_nearest_marker()

            if len(marker) == 0:                    #机器人未捕捉到tag
                print("无tag")
                if (ID == 1 and level == "end_box"):
                    print("右转")
                    BoxR_turn2(1)
                elif (ID == 1 and level == "start_moving") or ID == 2 or ID == 3 or ID == 4 or (ID == 5 and step == 1):
                    print("抱着箱子后退")
                    Box_Back(1)
                elif (ID == 5 and step == 2 and level == "start_moving"):
                    print("右转")
                    R_turn2(1)
                elif (ID == 6) or (ID == 7) or (ID == 5 and step == 2 and level == "reverse_moving"):
                    print("后退")
                    Back2(1)
                              
            else:
                robot_tag_x = marker[1]
                robot_tag_y = marker[2]
                tag_yaw = marker[3] + 90 # artag 正方向与机器人正方向对齐

                if step == 1:
                    if marker[0] == 1:
                        if ID == 1:
                            level = "start_moving"
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.08 , 0.0 , 2)
                            if result == True:
                                print('一号码对正完毕，前进对正二号码')
                                ID += 1
                                box_go2(4)
                        else:                   #一号码对正后前进去寻找二号码
                            print("前进")
                            box_go2(3)

                    elif marker[0] == 2:
                        if ID == 2:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12 , 0.0 , 0)
                            if result == True:
                                print('二号码对正完毕，右侧移对正三号码')
                                ID += 1
                                BoxR_move4b(1)
                        else:
                            print("右移")           #二号码对正后右移寻找三号码
                            BoxR_move2(1)

                    elif marker[0] == 3:
                        if ID == 3:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12 , 0.11 , 0)
                            if result == True:
                                print('三号码对正完毕，右侧移对正四号码')
                                ID += 1
                                BoxR_move2(1)
                                BoxR_move1(2)        #三号码对正后右移寻找四号码
                                box_go2(3)           #右移后前进
                                box_go1(4)
                        else:
                            print("右移")
                            BoxR_move2(1)
                            

                    elif marker[0] == 4:
                        if ID == 4:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12 , -0.1 , 0)
                            if result == True:
                                print('四号码对正完毕，左移对正五号码')
                                ID += 1
                                BoxL_move2(3)
                        else:
                            print("左移")
                            BoxL_move2(1)

                    elif marker[0] == 5:
                        if ID == 5:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.12 , 0.0 , 0)
                            if result == True:
                                print('五号码对正完毕，前进至大本营并放下海绵块')
                                box_go2(3)
                                Box_Down(1)
                                R_turn2(3)
                                step = 2
            
                elif step == 2:
                    #反方向
                    if marker[0] == 5:
                        result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.08 , 0.0 , 180)#5号为反方向
                        level = "reverse_moving"
                        if result == True:
                            print('五号码对正完毕，左侧移对正8号码')
                            ID += 1
                            go_fast2(1)
                            go_fast1(2)
                    elif marker[0] == 6:
                        if ID == 6:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.05 , -0.1 , 0)
                            if result == True:
                                print('六号码对正完毕，左侧移对正七号码')
                                ID += 1
                                L_move2(5)
                                go_fast2(3)
                                go_fast1(4)
                    
                    elif marker[0] == 7:
                        if ID == 7:
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.06 , 0.10 , 0)
                            if result == True:
                                print('七号码对正完毕，右侧移反向对正一号码')
                                R_move2(5)
                    elif marker[0] == 1:
                        result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw, 0.1 , 0.0 , 180)#1号为反方向
                        if result == True:
                            print('一号码对正完毕，前进抓取海绵块')
                            go_fast2(3)
                            ID = 0
                            level = "start_box"
            time.sleep(0.1)
# 连接乐聚机器人
device = Dobot(port='COM6')  # 根据实际情况修改端口号

# 获取当前机器人的电量信息
battery_percentage = device.get_battery_percentage()
print("当前机器人剩余电量：{}%".format(battery_percentage))