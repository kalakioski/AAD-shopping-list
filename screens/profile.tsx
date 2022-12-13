import React from "react";
import { View, Text, StyleSheet,  } from "react-native";

export const ProfileScreen = () => {

  return (
    <View style={styles.container}>
    <View style={styles.lists}>
      <Text style={styles.headerText}>User XYZ</Text>
    </View>
  </View>
  )
};

export default ProfileScreen;

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