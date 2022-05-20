import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Box from './Box';
import productos from './productos';

function StoreScreen() {
    return (
        
        <View style={styles.root}>
            <ScrollView style={styles.margen}>
            <View style={styles.containerBox}>
                {
                    productos.map((producto, i) => (
                        <Box 
                            key={i}
                            id = {producto.id}
                            name = {producto.name}
                            description = {producto.description}    
                            image = {producto.image}
                            stock = {producto.stock}
                        />
                    ))
                }
            </View>
            </ScrollView>
                   
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ccff90',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    margen:{
        marginBottom: 50
    }
})
export default StoreScreen;