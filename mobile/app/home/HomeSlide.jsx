import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

function HomeSlide() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://jinjacity.go.ug/sites/default/files/2023-04/jinja.jpg",
    "https://brilliant-uganda.imgix.net/Wild-Waters-Lodge-Jinja-Main-Area.jpeg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=580&h=480&q=40",
    "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://www.ugandabudgetsafaris.com/wp-content/uploads/2019/06/Jinja-District-750x450.jpg",
    // Add more images here
  ];

  const handleChangeIndex = () => {
    setIndex((index + 1) % images.length);
  };
  useEffect(() => {
    const slideInterval = setInterval(handleChangeIndex, 5000);
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(slideInterval);
    };
  }, [index, images.length]);
  const hitPrev = () => {
    handleChangeIndex(index - 1 < 0 ? images.length - 1 : index - 1);
  };
  const hitNext = () => {
    setIndex((index + 1) % images.length);
  };
  return (
    <>
      <Card style={styles.imageCard} elevation={5}>
        <Image
          style={styles.image}
          source={{ uri: images[index] }}
          alt="Image"
        />
      </Card>
      <IconButton
        icon={"chevron-left"}
        onPress={hitPrev}
        style={[styles.icon, styles.leftIcon]}
      />
      <IconButton
        icon={"chevron-right"}
        onPress={hitNext}
        style={[styles.icon, styles.rightIcon]}
      />

      <View style={styles.dots}>
        {Array(images.length)
          .fill(null)
          .map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                { backgroundColor: i === index ? "#FF5733" : "#fff" },
              ]}
            />
          ))}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "96%",
  },
  imageCard: {
    width: "96%",
    height: 150,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    padding: 0,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  dots: {
    width: 100,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#FF5733",
    top: 150,
  },
  rightIcon: { left: "80%" },
  leftIcon: { left: "5%" },
});

export default HomeSlide;
