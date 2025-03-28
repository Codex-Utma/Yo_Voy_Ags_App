import Card from "@/components/Card/Card";
import NewCard from "@/components/Card/NewCard";
import React, { useEffect, useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from "react-native";

export default function Screen() {

    const [cardId, setCardId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCardId() {
            try {
                setLoading(true);
                const code = await AsyncStorage.getItem('code');
                if (code) {
                    setCardId(code);
                }

            } catch {
            } finally {
                setLoading(false);
            }

        }

        getCardId();
    }, []);

    if (loading) {
        return <Text>Cargando...</Text>
    }

    if (!cardId) {
        return (
            <NewCard setCardId={setCardId} />
        )
    }

    return (
        <Card cardId={cardId} setCardId={setCardId} />
    )
}
