import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  console.log(results);
  return (
    <View>
      <Text style={styles.textStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  },
});

export default ResultsList;
