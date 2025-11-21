import React from "react";
import { View, ActivityIndicator, StyleSheet, Modal } from "react-native";

const LoaderIndicator = ({ visible }: { visible: boolean }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.backdrop}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoaderIndicator;
