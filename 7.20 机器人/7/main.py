import sys
sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")

from leju import *



def main():
    nodes.node_initial()
    try:

colour_port.get_color_percent(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX ,V_MAX)
        base_action.action('Getcube')
        base_action.action('Left3move')
        # 98
        base_action.action('Left02move')
        base_action.action('Right3move')
        base_action.action('Right02move')
        # 137
        base_action.action('LeftTurn1s')
        # 153
        base_action.action('RightTurn1s')
        base_action.action('BoxLeftTurn1sgai')
        base_action.action('BoxRightTurn1sgai')
        base_action.action('Box_rightturn2gai2')
        base_action.action('BoxBack1-1gai')
        base_action.action('BoxBack2-3gai')
        base_action.action('Back1run')
        # 57
        base_action.action('Back1Run')
        # 53
        base_action.action('Back2Run')
        base_action.action('BoxLeft1gai1')
        base_action.action('BoxRight1gai1')
        base_action.action('BoxForward2sgai')
        base_action.action('BoxForward6gai3')
        base_action.action('BoxForward7gai1')
        base_action.action('BoxForward8gai2')
        base_action.action('BoxForward9gai1')
        base_action.action('Box_moveleft1sgai1')
        base_action.action('BoxturnL1')
        base_action.action('BoxturnR1')
        base_action.action('Box_Right2_go7sgai')
        base_action.action('Box_Left3')
        base_action.action('Box_go6s_pctgai2s')
        # 63
        base_action.action('Forwalk01')
        base_action.action('BoxForward1-1gai')
        # 67
        base_action.action('FastForward1s')
        # 71
        base_action.action('FastForward2s')
        base_action.action('FastForward4s')
        base_action.action('BoxForward3s')
        base_action.action('turnL-1')
        base_action.action('turnR-2')
        base_action.action('move_left2')
        base_action.action('move_right2')
        base_action.action('Fast6s')
        base_action.action('Fast7s')
        base_action.action('Left4_go8s')
        base_action.action('Right7_go2s')
        base_action.action('Box_move_right1gai1')
        base_action.action('Box_move_right2gai5')
        base_action.action('Box_move_right4gai1')
        base_action.action('Box_moveright1s')
        base_action.action('Box_moveright2s')
        base_action.action('Box_moveright3s')
        base_action.action('Box_moveright5s')

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()
colour_port.get_central_coordinate(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX , V_MAX)colour_port.have_color(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX , V_MAX)colour_port.have_color(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX , V_MAX)colour_port.get_central_coordinate(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX , V_MAX)colour_port.get_frame(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX ,V_MAX , return_value)artag_port.tag_id()colour_port.get_color_percent(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX ,V_MAX)colour_port.have_color(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX , V_MAX)sensor_port.get_gpio(io)sensor_port.get_gpio(io)colour_port.get_color_percent(camera, H_MIN, S_MIN, V_MIN, H_MAX , S_MAX ,V_MAX)