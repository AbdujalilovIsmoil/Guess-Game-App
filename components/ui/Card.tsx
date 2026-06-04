import Colors from "@/constants/colors";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

interface CardProps {
  children: React.ReactNode;
}

const deviceWidth = Dimensions.get("window").width;

const Card = ({ children }: CardProps) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    elevation: 4,
    borderRadius: 8,
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowColor: "black",
    marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary800,
    marginTop: deviceWidth < 380 ? 18 : 36,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
});