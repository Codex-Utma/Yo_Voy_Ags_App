import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface FormData {
    nombre: string;
    curp: string;
    tipoTarjeta: string;
    numeroTarjeta: string;
    estadoAnterior: string;
    motivoReactivacion: string;
    constanciaEstudio: File | null;
    credencialEstudiante: File | null;
}

const ReactivacionTarjeta: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        nombre: "",
        curp: "",
        tipoTarjeta: "Estudiante",
        numeroTarjeta: "",
        estadoAnterior: "Inactivo",
        motivoReactivacion: "",
        constanciaEstudio: null,
        credencialEstudiante: null,
    });

    const handleInputChange = (name: keyof FormData, value: string) => {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleFileUpload = (field: keyof FormData) => {
        console.log(`Subiendo archivo para: ${field}`);
    };

    const handleSubmit = () => {
        console.log("Formulario enviado:", form);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Reactivación de Tarjeta</Text>

                <Text style={styles.label}>Nombre Completo:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su nombre"
                    value={form.nombre}
                    onChangeText={(text) => handleInputChange("nombre", text)}
                />

                <Text style={styles.label}>CURP:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su CURP"
                    value={form.curp}
                    onChangeText={(text) => handleInputChange("curp", text)}
                />

                <Text style={styles.label}>Tipo de Tarjeta:</Text>
                {['Estudiante', 'Tercera Edad', 'Discapacidad'].map((tipo) => (
                    <View key={tipo} style={styles.radioItem}>
                        <RadioButton
                            value={tipo}
                            status={form.tipoTarjeta === tipo ? 'checked' : 'unchecked'}
                            onPress={() => handleInputChange("tipoTarjeta", tipo)}
                        />
                        <Text>{tipo}</Text>
                    </View>
                ))}

                <Text style={styles.label}>Número de Tarjeta:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su número de tarjeta"
                    value={form.numeroTarjeta}
                    onChangeText={(text) => handleInputChange("numeroTarjeta", text)}
                />

                <Text style={styles.label}>Estado Anterior:</Text>
                {['Activo', 'Inactivo', 'Bloqueada'].map((estado) => (
                    <View key={estado} style={styles.radioItem}>
                        <RadioButton
                            value={estado}
                            status={form.estadoAnterior === estado ? 'checked' : 'unchecked'}
                            onPress={() => handleInputChange("estadoAnterior", estado)}
                        />
                        <Text>{estado}</Text>
                    </View>
                ))}

                <Text style={styles.label}>Motivo de Reactivación:</Text>
                <TextInput
                    style={[styles.input, { height: 100 }]}
                    placeholder="Describa el motivo"
                    multiline
                    value={form.motivoReactivacion}
                    onChangeText={(text) => handleInputChange("motivoReactivacion", text)}
                />

                <Text style={styles.label}>Documentos Requeridos:</Text>
                <FileUploadButton
                    label="Subir Constancia de Estudio"
                    icon="file-upload-outline"
                    onPress={() => handleFileUpload("constanciaEstudio")}
                />
                <FileUploadButton
                    label="Subir Credencial de Estudiante"
                    icon="card-account-details-outline"
                    onPress={() => handleFileUpload("credencialEstudiante")}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.cancelButton]}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const FileUploadButton: React.FC<{ label: string; icon: string; onPress: () => void }> = ({ label, icon, onPress }) => (
    <TouchableOpacity style={styles.uploadBox} onPress={onPress}>
        <Icon name={icon} size={40} color="#6B7280" />
        <Text style={styles.uploadText}>{label}</Text>
        <Text style={styles.fileTypes}>PDF, JPG o PNG</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    // Container Style
    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
        padding: 10
    },

    // Card Style
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5
    },

    // Title Style
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15
    },

    // Label Style
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 5
    },

    // Input Style
    input: {
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10
    },

    // Radio Item Style
    radioItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5
    },

    // Upload Box Style
    uploadBox: {
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderStyle: "dashed",
        borderRadius: 8,
        paddingVertical: 20,
        alignItems: "center",
        marginBottom: 10
    },

    // Upload Text Style
    uploadText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#374151",
        marginTop: 5
    },

    // File Types Style
    fileTypes: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 3
    },

    // Button Container Style
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },

    // Button Style
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 8,
        alignItems: "center"
    },

    // Cancel Button Style
    cancelButton: {
        backgroundColor: "#FF4081",
        marginRight: 10
    },

    // Submit Button Style
    submitButton: {
        backgroundColor: "#4CAF50"
    },

    // Button Text Style
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
});


export default ReactivacionTarjeta;
