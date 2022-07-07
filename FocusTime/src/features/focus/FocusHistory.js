import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, paddingSizes } from "../../utils/sizes";
const HistoryItem = ({ item, index }) => {
    return (
        <Text style={styles.HistoryItem(item.status)}>
            {/* {JSON.stringify(item.subject)} */}
            {item.subject}
        </Text>
    )
}

export const FocusHistory = ({ focusHistory, onClear }) => {
    const clearHistory = () => {
        onClear()
    }
    return (
        <View>
            <SafeAreaView style={{ alignItems: "center" }}>
                {focusHistory.length ?
                    (<><Text style={styles.title}>Things we focus on</Text>
                        <FlatList
                            style={{ paddingBottom: paddingSizes.lg }}
                            contentContainerStyle={{ alignItems: "center" }}
                            data={focusHistory}
                            renderItem={HistoryItem}
                        />
                        <View style={styles.btnClear}>
                            <RoundedButton size={75} title={"Clear"} onPress={() => onClear()}></RoundedButton>
                        </View>
                    </>)
                    : (<Text style={{ alignItems: "center" }}></Text>)}

            </SafeAreaView>

        </View>
    )

}
const styles = StyleSheet.create({
    HistoryItem: (status) => ({
        color: status > 1 ? "red" : "green",
        fontSize: fontSizes.lg
    }),
    title: {
        color: "white",
        fontSize: fontSizes.xl
    },
    btnClear: {
        paddingTop: paddingSizes.xxxl,
        // justifyContent: "flex-end",
        alignItems: "center"
    }
})
