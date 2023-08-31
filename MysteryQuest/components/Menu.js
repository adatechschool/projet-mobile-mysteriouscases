import React from 'react';
import { Text, View } from 'react-native';
import Navbar from './Navbar';

const Menu = () => {
    return (
        <View>
            <Navbar/>
            <Text> Coucou je suis le menu</Text>
        </View>
    );
};

export default Menu;