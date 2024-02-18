import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#481658' />
            <Text style={styles.Titulo}>Acesse sua conta</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={{ color: '#fff' }}>Login</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#481658'
    },
    Titulo: {
        position: 'absolute',
        top: 200,
        left: 15,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'

    },
    form: {
        position: 'absolute',
        bottom: 40, 
    },
    input: {
        width: 300,
        height: 60,
        backgroundColor: '#e3c9df',
        borderWidth: 1,
        borderRadius: 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10,
        padding: 15
    },
    Btn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#11114e',
        width: 300,
        height: 50,
        borderRadius: 10
    }
});