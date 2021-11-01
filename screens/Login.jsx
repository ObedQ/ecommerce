import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from "react-native";


export const Login = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const login = () => {
        if (username || password) {
            navigation.navigate("Home");

        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Login In,</Text>
            <Text style={{ color: "white" }}>
                Login to continue
            </Text>
            <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
                <Label title="Username" />
                <View style={styles.inpCt}>
                    <TextInput
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <Label title="Password" />
                <View style={styles.inpCt}>
                    <TextInput
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={styles.btnCtn}>
                    <TouchableOpacity style={styles.btn} onPress={login}>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 18,
                            }}
                        >
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
const Label = function ({ title }) {
    return <Text style={styles.inputLabel}>{title}</Text>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
    },

    headerText: {
        marginTop: 80,
        textAlign: "left",
        fontSize: 35,
        color: "white",
    },
    inputLabel: {
        color: "black",
        marginBottom: 20,
        marginVertical: 20,
        fontSize: 14,
    },
    input: {
        borderBottomColor: "#000000",
        borderBottomWidth: 2,
        borderWidth: 1,
    },
    inpCt: {
        borderBottomColor: "#EBECEF",
        borderBottomWidth: 2,
        justifyContent: "flex-end",
    },
    btnCtn: {
        alignItems: "center",
        marginTop: 50,
    },
    btn: {
        backgroundColor: "black",
        width: "60%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
});
