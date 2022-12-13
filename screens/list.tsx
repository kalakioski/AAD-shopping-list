import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export const ListScreen = () => {

  return (
    <View style={styles.container}>
    <View style={styles.lists}>
      <Text style={styles.headerText}>Groceries</Text>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>List item</Text>
          <Text style={styles.subHeaderText}>Amount</Text>
        </View>
        <View style={styles.listItem}>
          <View>
          <Text style={styles.listText}>Banana</Text>
          </View>
          <View style={styles.itemAmount}>
            <TouchableOpacity>
              <AntDesign name={'minus'} size={25} color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.listText}>2</Text>
            <TouchableOpacity>
              <AntDesign name={'plus'} size={25} color={'white'}/>
            </TouchableOpacity>
            <View style={styles.deleteIcon}>
              <TouchableOpacity>
               <AntDesign name={'delete'} size={30} color={'yellow'}/>
              </TouchableOpacity>
          </View>
          </View>
          
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listText}>Tomato</Text>
          <View style={styles.itemAmount}>
          <TouchableOpacity>
              <AntDesign name={'minus'} size={25} color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.listText}>5</Text>
            <TouchableOpacity>
              <AntDesign name={'plus'} size={25} color={'white'}/>
            </TouchableOpacity>
            <View style={styles.deleteIcon}>
              <TouchableOpacity>
               <AntDesign name={'delete'} size={30} color={'yellow'}/>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
        <View>
        <Text style={styles.headerText}>Add new item</Text>
      </View>
      <View >
        <TouchableOpacity>
          <AntDesign name={'plus'} size={30} color={'black'}/>
        </TouchableOpacity>
      </View> 
      </View>
  </View>
  )
};

export default ListScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lists: {
    flex: 4.5,
    alignItems: 'center',
    paddingTop: 10
  },
  subHeader: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    paddingTop: 10
  },
  groups: {
    flex: 4.5,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: 'pink',
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 5
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  itemAmount: {
    //backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    width: '40%'
  },
  listText: {
    color: 'white',
    fontSize: 20
  },
  deleteIcon: {
    alignItems: 'flex-end',
    //backgroundColor: 'blue',
    paddingLeft: 10
  }
})