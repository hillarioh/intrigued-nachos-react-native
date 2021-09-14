import React, {useState} from 'react'
import {  StyleSheet,SafeAreaView, View, Modal, Text, TextInput, ScrollView, FlatList,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../assets/Colors';
import * as theme from '../assets/theme';
import plants from '../assets/plants';
import Card from '../components/Card';

const currentTheme = theme.colors.light;

const DATA = [
  {
    id: 'hd_1',
    title: 'Popular',
  },
  {
    id: 'hd_2',
    title: 'All',
  },
  {
    id: 'hd_3',
    title: 'Dinner Set',
  },
   {
    id: 'hd_4',
    title: 'Cups',
  },
   {
    id: 'hd_5',
    title: 'Cutlery',
  },
   {
    id: 'hd_6',
    title: 'Cookware',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {DATA.map((category) => (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.8}
            >
            <View>
              <Text style={styles.subTitleText}>
                {category.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

function Home({navigation}){

   const [bagVisible, setBagVisible] = useState(false)

    const ToggleBagVisible = () => {
        setBagVisible(!bagVisible)
    }

    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return(
        <SafeAreaView style={styles.container}> 
                {/* Header */}
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.titleText}>Victoria Utensils</Text>  
                    </View>
                    <TouchableOpacity style={styles.iconCaontainer} onPress={() => ToggleBagVisible()}>
                        <Icon name="shopping-cart" color={COLORS.grey} size={25} />
                        <View style={styles.badgeContainer}>
                            <Text style={styles.badgeText}>6</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
                  <Icon name="search" color={theme.colors.gray} size={25} />
                  <TextInput
                    placeholder="Search Item..."
                    style={styles.textInputContainer} 
                    placeholderTextColor={theme.colors.gray}
                  />  
                  <Icon name="filter-list" color={COLORS.grey} size={25} />
                </View>
                <View>
                  <ListCategories /> 
                </View>
                 
                              
                <FlatList
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  showsVerticalScrollIndicator={false}                    
                  numColumns={2}
                  data={plants}
                  renderItem={({item}) => {
                    return <Card plant={item} navigation={navigation}/>;
                  }}
                />
        </SafeAreaView>
            
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: currentTheme.background
    },
    // Header Style
    headerContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    badgeContainer: {
        top: -4, 
        right: -4,
        width: 18,
        height: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        backgroundColor: theme.colors.green
    },
    badgeText: {
        color: theme.colors.light.background
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h5
    },
    subTitleText: {
      padding:10,
        fontSize: theme.sizes.h3,
        fontWeight: 700,
        color: theme.colors.gray
    }, 
    iconCaontainer: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: currentTheme.foreground
    },
    // Search Style
    searchContainer: {
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: theme.colors.clouds
    },
    textInputContainer: {
        flex: 1
    },
    item: {
      padding:10,
    },
    // Body Style
    bodyContainer: {
        flex:1
    }
})

export default Home;