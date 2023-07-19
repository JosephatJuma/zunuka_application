import React, { useState } from "react";
import {
  View,
  Modal,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const CustomActionsheet = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const animation = new Animated.Value(0);

  const handleShow = () => {
    setIsVisible(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleHide = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
    });
  };

  if (!isVisible) return null;

  const actionsheetTranslateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 0], // Adjust the value as per your desired width
  });

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={handleHide}>
      <TouchableOpacity
        style={styles.overlay}
        onPress={handleHide}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            styles.actionsheetContainer,
            { transform: [{ translateX: actionsheetTranslateX }] },
          ]}
        >
          {/* Content of the Actionsheet */}
          <View style={styles.content}>
            <Text>Actionsheet Content</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  actionsheetContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 20,
    paddingBottom: 20,
    maxHeight: 500,
    height: "100%",
    width: "100%",
  },
  content: {
    marginTop: 10,
    backgroundColor: "white",
    height: "100%",
    width: "60%",
  },
});

export default CustomActionsheet;
