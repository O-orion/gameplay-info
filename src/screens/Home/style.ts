import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
// Tela do iphone

export const styles = StyleSheet.create({
    container: {

    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    },
    content: {
        marginTop: 42
    },
    matches: {
        marginTop: 24,
        marginLeft: 24,
    }
})
