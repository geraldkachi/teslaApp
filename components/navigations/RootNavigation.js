import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CarsList from "../carlist/CarsList";

const Drawer = createDrawerNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Home"
      drawerPosition="right"
      >
        <Drawer.Screen name="Home" component={CarsList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});


// <NavigationContainer> 
//  <Drawer.Navigator 
//   drawerPosition="right" 
//   drawerType="slide" initialRouteName="Home" 
//   drawerContent={() => <SideBar />}>
//    <Drawer.Screen name="Home" component={HomeScreen} /> 
//    <Drawer.Screen name="NewIndex" component={NewIndex} /> 
// </Drawer.Navigator>
// </NavigationContainer>

///////////////////////////////////////////
// from navigation 5 project 

// return (
//   <PaperProvider theme={PaperDarkTheme}>
//       <AuthContext.Provider value={authContext}>
//           <NavigationContainer theme={DarkTheme}>
//               { userToken !== null ? (
//               <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
//                   <Drawer.Screen name="HomeDrawer" component={RoutesTab}  />
//                   <Drawer.Screen name="SupportScreen" component={SupportScreen}  />
//                   <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> 
//                   <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> 
//                   <Drawer.Screen name="ProfileScreen" component={ProfileScreen} /> 
//               </Drawer.Navigator>
//               ) :
//               <RootStackScreen />
//               }
//           </NavigationContainer>
//       </AuthContext.Provider>
//   </PaperProvider>
//   )