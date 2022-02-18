import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Box = styled(Animated.createAnimatedComponent(TouchableOpacity))`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

const AnimatedBox = createAnimatedComponent(Box);

export default function App() {
  const Y = Animated.Value(0);
  const moveUp = () => {};
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
