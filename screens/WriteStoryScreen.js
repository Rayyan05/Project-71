import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Header } from 'react-native-elements';

export default class TransactionScreen extends React.Component {
  
render() {
    
      return (
        <View style={styles.container}>
         
           
            <Text style={{ textAlign: 'center', fontSize: 30 }}>Write a story</Text>
          
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Title of the Story"
              
            />
            
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox}
              placeholder="Author"
            
            />
            </View>

             <View style={styles.inputView}>
            <TextInput
              style={styles.inputBox2}
              placeholder="Write your story"
              multiline={true}
            
            />
            </View>
        
        
           
        </View>

      )
}
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  inputView: {
    flexDirection: 'row',
    margin: 20,
  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
  },

  inputBox2:{
    width:200,
    height: 200,
     borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 30,
  }
  

  
});
