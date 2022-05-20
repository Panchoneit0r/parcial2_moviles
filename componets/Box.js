import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';



function Box({ id, name ,description, image, stock}) {

    const navigation = useNavigation();

    return (
        <View style={styles.root}>
            <Image 
                style={styles.ver}
                source={{uri: image}}
            />
            <Text> {name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Button
                color="#455a64"
                title="Ver"
                onPress={
                    () => navigation.navigate('Details', {
                        id: id,
                        name: name,
                        description: description,
                        image: image,
                        stock: stock
                    })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: 160,
        height: 250,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
        
    },
    text:{ textAlign: 'center'},
    ver:{
        width: 158,
        height: 150,
        bottom: 4,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    }
})

export default Box;