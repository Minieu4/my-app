import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FDFCFE',
        marginTop: 20
    },
    eventSubtitle: {
        fontSize: 16,
        color: 'grey'
    },
    input: {
        backgroundColor:'#1F1E25',
        borderRadius:25,
        height: 56,
        color:'#FFF',
        padding: 16,
        fontSize:16,
        flex: 1,
        marginRight: 12,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#31CF67',
        borderRadius: 25,
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        padding: 16
    },
    form: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
    },
})