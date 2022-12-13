import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export const GroupScreen = () => {

  return (
    <View style={styles.container}>
    <View style={styles.groups}>
      {/* First group example */}
      <View style={styles.groupContainer}>
        <Text style={styles.headerText}>Family</Text>
          <View style={styles.listItem}>
            <Text style={styles.listText}>Matti</Text>
            <View style={styles.deleteIcon}>
              <TouchableOpacity>
               <AntDesign name={'delete'} size={30} color={'yellow'}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.listItem}>
           <Text style={styles.listText}>Maija</Text>
           <View style={styles.deleteIcon}>
              <TouchableOpacity>
               <AntDesign name={'delete'} size={30} color={'yellow'}/>
              </TouchableOpacity>
            </View>
          </View>

        <View style={styles.newMember}>
        <Text style={styles.headerText}>Add new member</Text>
        <TouchableOpacity>
          <AntDesign name={'plus'} size={30} color={'black'}/>
        </TouchableOpacity>
      </View>
      </View>
      {/* Second group example */}
      <Text style={styles.headerText}>Friends</Text>
      <View style={styles.listItem}>
          <Text style={styles.listText}>Late</Text>
          <View style={styles.deleteIcon}>
              <TouchableOpacity>
               <AntDesign name={'delete'} size={30} color={'yellow'}/>
              </TouchableOpacity>
            </View>
      </View>
      <View style={styles.listItem}>
          <Text style={styles.listText}>Pete</Text>
          <View style={styles.deleteIcon}>
              <TouchableOpacity>
               <AntDesign name={'delete'} size={30} color={'yellow'}/>
              </TouchableOpacity>
            </View>
      </View>
      <View style={styles.newMember}>
        <Text style={styles.headerText}>Add new member</Text>
        <TouchableOpacity>
          <AntDesign name={'plus'} size={30} color={'black'}/>
        </TouchableOpacity>
      </View>
    <View >
        
      </View>

      <View style={styles.newGroup}>
        <Text style={styles.headerText}>Create a Group</Text>
        <TouchableOpacity>
          <AntDesign name={'plus'} size={30} color={'white'}/>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
};

export default GroupScreen;

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
    alignItems: 'center',
    paddingTop: 10,
  },
  groupContainer: {
    paddingVertical: 50,
    width: '100%',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
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
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row'
    
  },
  newGroup: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'green',
    color: 'white',
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row'
    
  },

  newMember: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    //backgroundColor: 'gray',
    color: 'white',
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row'
    
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