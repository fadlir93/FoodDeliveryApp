import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { FONTS, SIZES, COLORS, icons, dummyData} from '../../constants'
import { HorizontalFoodCard } from '../../components';

const Home = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(1)
    const [selectedMenuType, setSelectedMenuType] = useState(1)
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])

    //handler
    const handleChangeCategory = (categoryId, menuTypeId) => {
        // Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id === menuTypeId)

        // Set the menu based on the categoryId
        setMenuList(selectedMenu?.list?.filter(a => a.categories.includes(categoryId)))
    }
    
    const renderSearch = () => {
        return (
            <View
            style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2
            }}>
            {/* icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black
                    }}
                />
                {/* Text input */}
                <TextInput 
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder="search"
                />

                {/* filter */}
                <TouchableOpacity>
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Search */}
            {renderSearch()}

            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                    console.log('items', item)
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius,
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110
                            }}
                            item={item}
                            onPress={() => console.log('horizontalFoodCard')}
                        />
                    )
                }}
            />
        </View>
    )
}

export default Home;