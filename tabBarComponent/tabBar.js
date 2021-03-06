/**
 * Created by arvin on 16/5/23.
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    NavigatorIOS,
    View,
    AlertIOS,
    TabBarIOS
} from 'react-native';

import Home from '../home/home';
import Test from '../home/test';

export default class TabBar extends Component {

    // 构造
      constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'first'
        };
      }

    render(){

        let TabBarItemIOS = TabBarIOS.Item;

        return(

            <TabBarIOS selectedTab={this.state.selectedTab}>

                <TabBarItemIOS
                    name="first"
                    title="首页"
                    icon={require('image!tab_page')}
                    selectedIcon={require('image!tab_Pageactive')}
                    accessibilityLabel="first"
                    selected={this.state.selectedTab === 'first'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'first',
                        });
                    }}>

                    <NavigatorIOS
                        style={[styles.container,{flex : 1, marginTop : 0}]}
                        initialRoute={{
                            title: "首页",
                            component: Home,
                            rightButtonTitle: "登录",
                            onRightButtonPress: function(){
                            	AlertIOS.alert(
                            		'温馨提示',
      								'您还没有登录，请问您要登录吗？',
      								[
								        {
								            text: '确定', onPress: () => {
                                               alert("2");
								            },
								        },
								        {
								            text: '取消'
								        }
								    ]
                            	)
                            }
                        }} />

                </TabBarItemIOS>


                <TabBarItemIOS
                    accessibilityLabel="second"
                    name="second"
                    title={"预约"}
                    icon={require('image!tab_appointment')}
                    selectedIcon={require('image!tab_appointmentactive')}
                    selected={this.state.selectedTab === 'second'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'second',
                        });
                    }}>

                    <NavigatorIOS
                        style={[styles.container,{flex : 1, marginTop : 0}]}
                        initialRoute={{
                            title: "预约",
                            component: Test,
                        }} />

                </TabBarItemIOS>

                <TabBarItemIOS
                    name="third"
                    title={"消息"}
                    icon={require('image!message_inactive')}
                    selectedIcon={require('image!message_active')}
                    accessibilityLabel="third"
                    selected={this.state.selectedTab === 'third'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'third',
                        });
                    }}>

                    <NavigatorIOS
                        style={[styles.container,{flex : 1, marginTop : 0}]}
                        initialRoute={{
                            title: "消息",
                            component: Home,
                        }} />

                </TabBarItemIOS>

            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});