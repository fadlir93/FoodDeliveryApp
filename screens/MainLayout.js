import React, {useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated'
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabActions';
import {
    Home,
    Search,
    CartTab,
    Favourite,
    Notification
} from '../screens'

import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData
} from '../constants'

import { Header } from '../components';

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab}) => {
    useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])
    
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                ...drawerAnimationStyle
            }}
        >
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center',
                }}
                title={selectedTab.toUpperCase()}
                leftComponent={
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: COLORS.gray,
                            borderRadius: SIZES.radius
                        }}
                        onPress={() => navigation.openDrawer()}
                    >
                       <Image 
                           source={icons.menu}
                       /> 
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity
                        style={{
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={dummyData?.myProfile?.profile_image}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius:SIZES.radius
                            }}
                        />
                    </TouchableOpacity>
                }
            />
            <View
                style={{
                    flex: 1
                }}
            > 
                <Text>MainLayout</Text>
            </View>
        </Animated.View>
    )
}


function mapStateToProps(state) {
    return {
      selectedTab: state.tabReducer.selectedTab
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      setSelectedTab: (selectedTab) => { return dispatch(setSelectedTab(selectedTab))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)