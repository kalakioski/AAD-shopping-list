import React from "react";
import { View, Text, StyleSheet,  } from "react-native";

export const GroupScreen = () => {

  return (
    <View style={styles.container}>
    <View style={styles.lists}>
      <Text style={styles.headerText}>SHOPPING LISTS</Text>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>List</Text>
          <Text style={styles.subHeaderText}>Created</Text>
          <Text style={styles.subHeaderText}>Group</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listText}>Groceries</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listText}>Snacks</Text>
        </View>
      </View>
    <View style={styles.groups}>
      <Text style={styles.headerText}>GROUPS</Text>
      <View style={styles.listItem}>
          <Text style={styles.listText}>Family</Text>
      </View>
      <View style={styles.listItem}>
          <Text style={styles.listText}>Roommates</Text>
      </View>
    </View>
  </View>
  )
};

export default GroupScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  header: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lists: {
    flex: 4.5,
    backgroundColor: 'blue',
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
    backgroundColor: 'yellow',
    alignItems: 'center',
    paddingTop: 10,
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
    
  },
  listText: {
    color: 'white',
    fontSize: 20
  }
})