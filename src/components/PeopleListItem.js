import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const PeopleListItem = (props) => {
  const { people } = props;
  const { title, first, last } = people.name;
  const matheus = people.name + "matheus";

  return (
    <TouchableOpacity onPress={() => console.log("clicou ", first ) }>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }}/>
        <Text style={styles.lineText}>{`${title} ${first} ${last}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",

    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,

    flex: 7,
  },
  avatar: {
    aspectRatio: 1,

    marginLeft: 15,
    borderRadius: 50,

    flex: 1,
  },
});

export default PeopleListItem;
