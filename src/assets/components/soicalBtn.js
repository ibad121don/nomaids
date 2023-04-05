import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR, wp } from '../enum/styleGuide'


export default function SocialBtn(props) {
    return (
        <TouchableOpacity style={styles.mainCard}>
            {props?.svg && props.svg}
            <View style={{ width: wp(50) }}>
                <Text style={{ color: COLOR.black, marginLeft: 10 }}>{
                    props.title
                }
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    mainCard: {
        width: wp(90),
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLOR.white, borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20,
        elevation: 6,
    }
})