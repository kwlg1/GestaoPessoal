import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import auth from '../config/firebaseConfig';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function doLogin(){
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            setEmail('')
            setPassword('')
        })
        .catch((error) => {
            Alert.alert("ERRO", "Email ou senha incorreta")
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#9059a1' />

            <View style={styles.form}>
                <Text style={styles.Titulo}>Acesse sua conta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
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
                    onPress={() => doLogin()}
                >
                    <Text style={{ color: '#fff' }}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.Ou}>Ou</Text>

                <TouchableOpacity
                    style={styles.Btn}
                >
                    <Text style={{color: '#fff'}}>Redefinir Senha</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Btn}
                    onPress={()=> navigation.navigate('SignUp')}
                >
                    <Text style={{color: '#fff'}}>Cadastrar Conta</Text>
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
        backgroundColor: '#9059a1'
    },
    Titulo: {
        top: -50,
        left: -15,
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
        borderRadius: 10,
        marginTop: 5,
    },
    Ou: {
        fontSize: 16    ,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10,
    }
});