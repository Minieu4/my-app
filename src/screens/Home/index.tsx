import { Text, View } from "react-native";
import{ styles} from "./styles";

export const config='';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventTitle}>Nome do Evento</Text>
            <Text style={styles.eventSubtitle}>Sexta, 9 de abril de 20141a</Text>
        </View>
    );
    }
