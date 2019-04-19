import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.titleText}>API Movie App</Text>
        <Text style={styles.baseText}>Recently Playing Movie</Text>
    </View>
)

export default Header

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        height: '15%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    baseText: {
        fontSize: 15
    }
})