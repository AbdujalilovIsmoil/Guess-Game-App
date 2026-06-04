import React from "react";
import { StyleSheet, Text } from "react-native";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Text style={styles.title} allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    width: 300,
    padding: 12,
    fontSize: 24,
    borderWidth: 2,
    maxWidth: "80%",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    fontFamily: "open-sans-bold",
  },
});
