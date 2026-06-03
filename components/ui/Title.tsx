import React from "react";
import { StyleSheet, Text } from "react-native";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title} allowFontScaling={false}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 12,
    fontSize: 24,
    width: "auto",
    borderWidth: 2,
    color: "white",
    textAlign: "center",
    borderColor: "white",
    fontFamily: "open-sans-bold",
  },
});
