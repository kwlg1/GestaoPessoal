import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../config/firebaseConfig'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [MostrarSenha, setMostrarSenha] = useState(true);
    const navigation = useNavigation();

    function doLogin(){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            setEmail('')
            setPassword('')
        })
        .catch((error) => {
            Alert.alert("ERRO", "Email ou senha incorreta")
        })
    }

    function doResetPassword(){       
        if(email === ''){
            Alert.alert("ERRO", "Digite seu email")
        } else {
            firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert("SUCESSO", "Email enviado com sucesso")
            })
            .catch((error) => {
                if(error.code){
                    Alert.alert('ERRO', 'Email não cadastrado')
                }
            })
        }
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
                    secureTextEntry={MostrarSenha}
                    value={password}
                    onChangeText={setPassword}
                />
                
                <TouchableOpacity
                    onPress={() => setMostrarSenha(!MostrarSenha)}
                >
                    <Text style={styles.MostrarSenha}>Mostrar Senha</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => doLogin()}
                >
                    <Text style={{ color: '#fff' }}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.Ou}>Ou</Text>

                <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => doResetPassword()}
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
        top: -40,
        left: -15,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff'

    },
    form: {
        position: 'absolute',
        bottom: 20, 
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
    },
    MostrarSenha: {
        width: 300,
        color: '#fff',
        textAlign: 'right',
        marginTop: -10,
        marginBottom: 15
    }
});