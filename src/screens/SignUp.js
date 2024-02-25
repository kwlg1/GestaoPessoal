import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import firebase from '../config/firebaseConfig'


export default function SignUp() {
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [ConfirmarSenha, setConfirmarSenha] = useState('')
    const [MostrarSenha, setMostrarSenha] = useState(true)

    async function CreateChild(){
        const user = firebase.auth().currentUser
        const Dados = {nome: user.email, valor: 0}

        firebase.database().ref("User").child(user.uid)
        firebase.database().ref("User/"+user.uid).set(Dados)

    }
    function doSignUp(){
        if(Senha === ConfirmarSenha && Senha !== "" && ConfirmarSenha !== ""){
            firebase.auth().createUserWithEmailAndPassword(Email, Senha)
            .then((user) => {
                CreateChild()
                setEmail('')
                setPassword('')
                setConfirmarSenha('')
                setMostrarSenha(false)
            })
            .catch((error) => {
              if( error.code === 'auth/weak-password'){
                Alert.alert('Senha', 'sua senha precisar ter, pelo menos, 6 caracteres.')
              } 
              if (error.code === 'auth/invalid-email'){
                Alert.alert('Email', 'Email incorreto!')
              }
              if(error.code === 'auth/email-already-in-use' ){
                Alert.alert('email', 'O endereço de email digitado já está cadastrado!')
              }
            })  
          } else if(Email === "" && Senha === "" && ConfirmarSenha === ""){
            Alert.alert('Dados não inseridos', 'Você não inseriu os dados, insira os dados e tente novamente!')
          } else {

            Alert.alert("Erro", "As senhas precisam ser iguais!")
          }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#9059a1' />

            <View style={styles.form}>
                <Text style={styles.Titulo}>Cadastre sua conta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={Email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={MostrarSenha}
                    value={Senha}
                    onChangeText={setSenha}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    secureTextEntry={MostrarSenha}
                    value={ConfirmarSenha}
                    onChangeText={setConfirmarSenha}
                />

                <TouchableOpacity
                    onPress={() => setMostrarSenha(!MostrarSenha)}
                >
                    <Text style={styles.MostrarSenha}>Mostrar Senha</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.Btn}
                    onPress={() => doSignUp()}
                >
                    <Text style={{ color: '#fff' }}>Cadastrar</Text>
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
        borderRadius: 10
    },
    MostrarSenha: {
        width: 300,
        color: '#fff',
        textAlign: 'right',
        marginTop: -10,
        marginBottom: 20
    }
});