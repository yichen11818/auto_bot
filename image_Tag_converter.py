#!/usr/bin/python
# -*- coding: utf-8 -*-
import time
import rospy
import tf
import math
from sensor_msgs.msg import Image
from ar_track_alvar_msgs.msg import AlvarMarkers
from cv_bridge import CvBridge, CvBridgeError
import numpy as np


class ImgConverter():
    def __init__(self):
        self.bridge = CvBridge()
        self.sub_chest = rospy.Subscriber('/usb_cam_chest/image_raw', Image, self.cb_chest)
        self.img_chest = None

    def cb_chest(self, msg):
        cv2_img = self.bridge.imgmsg_to_cv2(msg, "bgr8")
        self.img_chest = cv2_img


    def chest_image(self):
        return True, self.img_chest


class TagConverter():
    def __init__(self):
        self.sub = rospy.Subscriber('/chest/ar_pose_marker', AlvarMarkers, self.sub_cb)
        self.markers = []

    def sub_cb(self, msg):
        # global Debug
        markers_load = []
        time_sec = msg.header.stamp.secs
        for marker in msg.markers:
            pos = marker.pose.pose.position
            quat = marker.pose.pose.orientation

            rpy = tf.transformations.euler_from_quaternion([quat.x, quat.y, quat.z, quat.w])  # 四元数转欧拉角
            rpy_arc = [0, 0, 0]
            for i in range(len(rpy)):   #弧度转角度
                rpy_arc[i] = rpy[i] / math.pi * 180

            # print(rpy_arc)
            # print("poseX--poseY--rpy_y:", pos.x, ",", pos.y, ",",rpy_arc[2]+90)       # 测试标点
            if len(rpy_arc) == 0:
                print('rpy_arc 为 空')
            markers_load.append([marker.id, pos.x, pos.y, rpy_arc[2], time_sec])  # (id,x,y,z,  )

        self.markers = markers_load.copy()

    def get_markers(self):
        # print('get_markers')
        return self.markers

    def get_nearest_marker(self):
        '''
        返回最小id二维码
        '''
        min_id = 15 
        min_idx = 0 
        markers = [] 
        for i in range(20):
            time.sleep(0.01)
            markers += self.markers

        for index, m in enumerate(markers): # 找到最小的id 
            print('enumerate  m:', m)
            if m[0] < min_id:  # 比较每个markers的第一值，即id   
                min_idx = index
                min_id = m[0]
        if min_id == 15:
            return []
        else:
            return markers[min_idx]   #返回距离 最近的ARTag信息


def main():
    try:
        rospy.init_node('image_listener')
        print('Node init')
        image_reader = ImgConverter()

        while True:
            rospy.spin()
            time.sleep(0.01)

    except rospy.ROSInterruptException:
        pass

# testing
if __name__ == '__main__':
    # main()
    rospy.init_node('image_listener')
    tag = TagConverter()
    while True:
        marker = tag.get_nearest_marker()
        time.sleep(1)
