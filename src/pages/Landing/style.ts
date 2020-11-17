import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#96DCB2',
        alignItems: "center",
    },

    header: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: hp("10%")
    },

    image: {
        width: wp("90%"),
        height: hp("35%"),
    },

    logo: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: -2
    },

    mouseIcon: {
        width: 25,
        height: 25,
        marginLeft: 5
    },

    slogan:{
        fontFamily: "BalsamiqSans_700Bold",
        fontSize: 11
    },

    title: {
        marginTop: hp("5%"),
        marginLeft: 25,
        alignSelf: "flex-start",
        fontSize: 25,
        fontFamily: 'Signika_700Bold',
        color: "#2A6E45"
    },

    buttonGroup:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        marginTop: hp("5%")
    },

    buttons: {
        marginHorizontal: 10,
        padding: 4,
        height: 150,
        width: 150,
        borderRadius: 8,
        justifyContent: "space-around",
        alignItems: "center"
    },

    buttonInfo:{
        backgroundColor: '#2A6E45',
        borderColor: "#245437",
        borderWidth: 1
    },

    buttonMap:{
        backgroundColor: '#A1524D',
        borderColor: "#8C4843",
        borderWidth: 1
    },

    buttonText: {
        fontFamily: "BalsamiqSans_700Bold",
        fontSize: 22,
        textAlign: "center",
    },

    buttonTextInfo: {
        color: "#A5E198"
    },
    buttonTextMap: {
        color: "#FFB8B4"
    },

    footer:{
        position:"relative",
        bottom: 0,
        backgroundColor: "#7FBA95",
        marginTop: 0,
        width: "100%",
        padding: 7,
        justifyContent: "center",
        alignItems: "center"
    },

    footerText:{
        fontFamily: "BalsamiqSans_400Regular",
        fontSize: 10
    }
})

export default styles;