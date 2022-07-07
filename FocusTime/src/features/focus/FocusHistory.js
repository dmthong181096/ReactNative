import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, paddingSizes } from "../../utils/sizes";
const HistoryItem = ({ item, index }) => {
    return (
        <Text>
            {item} 
        </Text>
    )
}

export const FocusHistory = ({ focusHistory, onClear }) => {
    const clearHistory = () => {
        onClear()
    }
    return (
        <View>
            <SafeAreaView style={{ flex: 1 }}>
                <Text>Things we focus on</Text>
                {!focusHistory.length &&
                    (<FlatList 
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flex: 1, alignItems: "center" }}
                        data={focusHistory}
                        renderItem={HistoryItem}
                    />
                    )}
            </SafeAreaView>
        </View>
    )

}
