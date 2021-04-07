import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigation from "./components/navigations/RootNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


// name={"Model X"}
// tagline={"Order Online for"}
// taglineCTA={"Touchless Delivery"}
// image={BackGrImg}



// Valid style props: [
//   "alignContent",
//   "alignItems",
//   "alignSelf",
//   "aspectRatio",
//   "backfaceVisibility",
//   "backgroundColor",
//   "borderBottomColor",
//   "borderBottomEndRadius",
//   "borderBottomLeftRadius",
//   "borderBottomRightRadius",
//   "borderBottomStartRadius",
//   "borderBottomWidth",
//   "borderColor",
//   "borderEndColor",
//   "borderEndWidth",
//   "borderLeftColor",
//   "borderLeftWidth",
//   "borderRadius",
//   "borderRightColor",
//   "borderRightWidth",
//   "borderStartColor",
//   "borderStartWidth",
//   "borderStyle",
//   "borderTopColor",
//   "borderTopEndRadius",
//   "borderTopLeftRadius",
//   "borderTopRightRadius",
//   "borderTopStartRadius",
//   "borderTopWidth",
//   "borderWidth",
//   "bottom",
//   "color",
//   "decomposedMatrix",
//   "direction",
//   "display",
//   "elevation",
//   "end",
//   "flex",
//   "flexBasis",
//   "flexDirection",
//   "flexGrow",
//   "flexShrink",
//   "flexWrap",
//   "fontFamily",
//   "fontSize",
//   "fontStyle",
//   "fontVariant",
//   "fontWeight",
//   "height",
//   "includeFontPadding",
//   "justifyContent",
//   "left",
//   "letterSpacing",
//   "lineHeight",
//   "margin",
//   "marginBottom",
//   "marginEnd",
//   "marginHorizontal",
//   "marginLeft",
//   "marginRight",
//   "marginStart",
//   "marginTop",
//   "marginVertical",
//   "maxHeight",
//   "maxWidth",
//   "minHeight",
//   "minWidth",
//   "opacity",
//   "overflow",
//   "overlayColor",
//   "padding",
//   "paddingBottom",
//   "paddingEnd",
//   "paddingHorizontal",
//   "paddingLeft",
//   "paddingRight",
//   "paddingStart",
//   "paddingTop",
//   "paddingVertical",
//   "position",
//   "resizeMode",
//   "right",
//   "rotation",
//   "scaleX",
//   "scaleY",
//   "shadowColor",
//   "shadowOffset",
//   "shadowOpacity",
//   "shadowRadius",
//   "start",
//   "textAlign",
//   "textAlignVertical",
//   "textDecorationColor",
//   "textDecorationLine",
//   "textDecorationStyle",
//   "textShadowColor",
//   "textShadowOffset",
//   "textShadowRadius",
//   "textTransform",
//   "tintColor",
//   "top",
//   "transform",
//   "transformMatrix",
//   "translateX",
//   "translateY",
//   "width",
//   "writingDirection",
//   "zIndex"
// ]