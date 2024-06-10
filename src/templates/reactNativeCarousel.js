import React from "react";
import { View, Text, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

const data = [
  { title: "Slide 1", url: "https://via.placeholder.com/400x300" },
  { title: "Slide 2", url: "https://via.placeholder.com/400x300" },
  { title: "Slide 3", url: "https://via.placeholder.com/400x300" },
];

const renderItem = ({ item }) => (
  <View>
    <Image source={{ uri: item.url }} style={{ width: 400, height: 300 }} />
    <Text>{item.title}</Text>
  </View>
);

const SimpleCarousel = () => {
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={400}
    />
  );
};

export default SimpleCarousel;
