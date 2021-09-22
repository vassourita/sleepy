import React, { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

import { styles } from "./ScreenContainer.styles";

export function ScreenContainer({ children, style }: PropsWithChildren<ViewProps>) {
  return (
    <View style={[styles.container]}>
      <View style={[styles.insideContainer, style]}>
        {children}
      </View>
    </View>
  );
}