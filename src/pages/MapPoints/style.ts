import { StyleSheet, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#96DCB2',
        width: '100%',
        justifyContent: "flex-start",

    },

    matrizInfoButton: {
        width: width - 160,
        height: 100,
        backgroundColor: '#2A6E45',
        borderColor: "#245437",
        borderWidth: 1,
        maxHeight: 200,
        marginHorizontal: 80,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 8
    },

    matrizInfoText: {
        color: "#A5E198",
        fontFamily: "BalsamiqSans_700Bold",
        fontSize: 22
        
    },

    map: {
        position: "relative",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: hp("100%"),
        width: "100%",
    },

    scrollViewContainer: {
        position: "absolute",
        bottom: 40,
    },

    toScroll:{
        position: "absolute",
        bottom: 15,
        left: 145
    },

    scrollText:{
        fontFamily: "BalsamiqSans_700Bold",
        color: '#4A89CC'
    }

})

export default styles;