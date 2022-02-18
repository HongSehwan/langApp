import React, { useEffect, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Box = styled.TouchableOpacity`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function App() {
  const Y = new Animated.Value(0);
  const moveUp = () => {
    Animated.timing(Y, {
      toValue: 200,
    });
  };
  return (
    <Container>
      <Box
        onPress={moveUp}
        style={{
          transform: [{ translateY: Y }],
        }}
      />
    </Container>
  );
}
