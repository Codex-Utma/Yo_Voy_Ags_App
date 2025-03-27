import Form from "@/components/Report/Form";
import axiosInstance from "@/config/axios";
import { UsedLastHourType } from "@/types/cardUsedLastHour";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from "react-native";

const ReportForm = () => {

  const [usedLastHourData, setUsedLastHourData] = useState<UsedLastHourType | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {

    async function getLastUsedData() {
      try {
        setLoading(true);
        const code = await AsyncStorage.getItem("code");
        const response = await axiosInstance.get(`transactions/usedLastHour/${code}`);
        setUsedLastHourData(response.data.cardUsed);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    getLastUsedData();
  }, [refreshing]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text> Loading </Text>
      </View>
    );
  }

  if (!usedLastHourData) {
    return (
      <View style={styles.container}>
        <Text> No data </Text>
      </View>
    );
  }

  return (
    <>
      <Form usedLastHourData={usedLastHourData} />
      <Pressable onPress={() => setRefreshing(!refreshing)}>
        <Text>Refresh</Text>
      </Pressable>
    </>
  );
};

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
});

export default ReportForm;
