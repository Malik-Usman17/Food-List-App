import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteFood } from '../actions/food';

function FoodList({ foods, deleteList }) {
    console.log('foods', foods);
    return (
        <FlatList style={styles.listContainer}
            data={foods}
            keyExtractor={(item, index) => item.key.toString()}
            renderItem={
                ({ item }) => {
                    console.log('data', item);
                    return <ListItem
                        title={item.name}
                        bottomDivider
                        rightIcon={<Icon
                            name='delete'
                            size={36}
                            onPress={() => deleteList.delete(item.key)} />} />
                }
            } />

    )
};


const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#dce2ff',
        padding: 16
    },
    listText: {
        fontSize: 30
    },
});



const mapStateToProps = (state) => {
    console.log('foodlist state', state.foodList);
    return {
        foods: state.foodList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteList: {
            delete: (key) => dispatch(deleteFood(key))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);