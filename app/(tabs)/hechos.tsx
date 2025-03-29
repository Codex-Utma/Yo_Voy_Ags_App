import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface FileUploadButtonProps {
    label: string;
    icon: string;
    onPress: () => void;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({ label, icon, onPress }) => (
    <TouchableOpacity style={styles.uploadBox} onPress={onPress}>
        <Icon name={icon} size={40} color="#6B7280" />
        <Text style={styles.uploadText}>{label}</Text>
        <Text style={styles.fileTypes}>MP4, JPG o PNG</Text>
    </TouchableOpacity>
);

const DocumentosRequeridos: React.FC<{ onUpload: (field: string) => void }> = ({ onUpload }) => {
    return (
        <View>
            <Text style={styles.label}>Evidencia:</Text>
            <FileUploadButton
                label="Subir evidencia de los hechos ocurridos"
                icon="file-upload-outline"
                onPress={() => onUpload("Evidencia")}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 5,
    },
    uploadBox: {
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderStyle: "dashed",
        borderRadius: 8,
        paddingVertical: 20,
        alignItems: "center",
        marginBottom: 10,
    },
    uploadText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#374151",
        marginTop: 5,
    },
    fileTypes: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 3,
    },
});

export default DocumentosRequeridos;