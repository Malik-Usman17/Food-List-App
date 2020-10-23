import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addFood} from '../actions/food';

const FoodForm = ({navigation, add}) => {
    const [food, setFood] = useState('');
    return (
       <View style={styles.container}>
           <Text style={styles.title}>Redux</Text>
           <TextInput
               value = {food}
               placeholder = 'Name'
               style={styles.foodInput}
               onChangeText = {(food) => setFood(food)} 
            />
           <TouchableOpacity 
              style={{marginBottom: 16}}
              onPress={() => add(food)}>
              
              <Text style={{fontSize: 22, color: '#5fc9f8'}}>
                  Submit
              </Text>
           </TouchableOpacity>
           <TouchableOpacity style={{marginBottom: 16}}
               onPress = {() => navigation.navigate('FoodList')}>
               <Text style={{fontSize: 22}}>
                   Go to FoodList
               </Text>
           </TouchableOpacity>
        
       </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 16,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 64,
      marginBottom: 48
    },
    foodInput: {
      fontSize: 32,
      marginBottom: 32,
      borderWidth: 1,
      padding: 8,
      width: '80%',
      borderRadius: 10,
    }
  });

const mapStateToProps = (state) => {
  console.log(state)
  return {
      foods: state.FoodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      add: (food) => dispatch(addFood(food))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);