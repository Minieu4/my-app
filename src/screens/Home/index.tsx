import { Text, TextInput, View, TouchalbeOpacity } from "react-native";
import{ styles} from "./styles";

export const config='';

export function Home() {

    function handleParticipantAdd(){
        console.log('Adicionando participante');
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.eventTitle}>Nome do Evento</Text>

                <Text style={styles.eventSubtitle}>Sexta, 9 de abril de 2014</Text>

                <TextInput style={styles.input}
                    placeholder="Digite o nome do participante"
                    placeholderTextColor={"#6B6B6B"}
                    keyboardType="default"
                />
                <TouchalbeOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchalbeOpacity>
            </View>
        </View>
    );
    }

