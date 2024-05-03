import { Text, TextInput, View } from "react-native";
import{ styles} from "./styles";

export const config='';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventTitle}>Nome do Evento</Text>

            <Text style={styles.eventSubtitle}>Sexta, 9 de abril de 2014</Text>

            <TextInput style={styles.input}
            placeholder="Digite o nome do participante"
            placeholderTextColor={"#6B6B6B"}
            keyboardType="default"
            />
        </View>
    );
    }

