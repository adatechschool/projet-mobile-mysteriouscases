import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Link } from "react-router-native";
import Svg, { G, Path } from 'react-native-svg'; 

const Navbar = () => {
    return (
        <View style={styles.container}>
            <Link to="/">
                <Text style={styles.title}>Mystery Quest</Text>
            </Link>
            <Link to="/Menu">
                <Svg 
                width={24} 
                height={24} 
                viewBox="0 0 448 512"
                >
                    <G fill="#eab308">
                        <Path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </G>
                </Svg>
            </Link>
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
      color: "#EAB308",
      fontFamily: "Mystery",
      fontSize: 16,
      textAlign: "center",
    },
    container: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
    }
  });
export default Navbar;