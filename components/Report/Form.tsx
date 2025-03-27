import axiosInstance from "@/config/axios";
import { UsedLastHourType } from "@/types/cardUsedLastHour";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface ReportOptionsType {
    id: number;
    name: string;
}

export default function Form({ usedLastHourData }: { usedLastHourData: UsedLastHourType }) {

    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const [options, setOptions] = useState<ReportOptionsType[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    useEffect(() => {
        async function fetchOptions() {
            try {
                const response = await axiosInstance.get("reports/types");
                setOptions(response.data);
            } catch {
                alert("Error al cargar las opciones");
            } finally {
                setLoading(false);
            }
        }
        fetchOptions();
    }, []);

    const handleSubmit = async () => {
        try {
            await axiosInstance.post("reports", {
                reportTypeId: selectedOption,
                busId: usedLastHourData.Bus.id,
                description,
            });
            alert("Reporte enviado correctamente");
            setDescription("");
            setSelectedOption(null);
        } catch (error) {
            alert("Error al enviar el reporte");
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuevo Reporte</Text>

            {/* Campo Tipo de Reporte */}
            <Text style={styles.label}>
                Tipo de Reporte <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue) => setSelectedOption(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Seleccione un tipo" value={null} />
                    {options.map((option) => (
                        <Picker.Item key={option.id} label={option.name} value={option.id} />
                    ))}
                </Picker>
            </View>

            {/* Entrada de Descripción */}
            <Text style={styles.label}>
                Descripción <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Describa los detalles del reporte"
                placeholderTextColor="#AAA"
                multiline
                numberOfLines={4}
                value={description}
                onChangeText={setDescription}
            />

            {/* Botones de acción */}
            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCancel}
                onPress={() => {
                    setDescription("");
                    setSelectedOption(null);
                }}
            >
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        elevation: 3,
        width: "90%",
        alignSelf: "center",
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
    },
    required: {
        color: "red",
    },
    selectField: {
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 6,
        padding: 12,
        backgroundColor: "#FFF",
        justifyContent: "center",
        marginBottom: 12,
    },
    selectText: {
        fontSize: 14,
        color: "#AAA", // Color tenue para el placeholder
    },
    input: {
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 6,
        padding: 10,
        fontSize: 14,
        marginBottom: 12,
        backgroundColor: "#FFF",
    },
    textArea: {
        height: 80,
        textAlignVertical: "top",
    },
    buttonSave: {
        backgroundColor: "#9333EA",
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 10,
    },
    buttonCancel: {
        backgroundColor: "#2563EB",
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#AAA",
        borderRadius: 5,
        marginTop: 5,
    },
    picker: {
        height: 50,
        width: "100%",
    },
});
