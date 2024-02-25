import { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, View, Text, TouchableOpacity, TextInput } from "react-native";
import firebase from '../config/firebaseConfig'

export default function Home() {
  const [Dados, setDados] = useState({nome: '', valor: ''})
  const [Valor, setValor] = useState()
  const user = firebase.auth().currentUser

  useEffect(() => {
    async function getDados() {
      await firebase.database().ref("User/" + user.uid).on("value", (snapshot) => {
        const data = snapshot.val()
        setDados(data)
      })
    }

    getDados()

  }, [])

  function Modificar(op){

    const user = firebase.auth().currentUser
    const value = {nome: Dados.nome, valor: op==='+'? Dados.valor + Number(Valor): Dados.valor - Number(Valor)}

    firebase.database().ref("User").child(user.uid)
    firebase.database().ref("User/"+user.uid).set(value)
  }
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor='#9059a1' />
      <Text style={styles.Titulo}>{`${Dados.nome}`}</Text>
      <Text style={styles.Valor}>{`R$ ${Dados.valor.toFixed(2)}`}</Text>

      <View style={styles.Box}>
        <TextInput 
          style={styles.Input}
          value={Valor}
          onChangeText={setValor}
          keyboardType='numeric'
          placeholder="Digite o valor"
        />
      <TouchableOpacity
          style={styles.button}
          onPress={() => Modificar('+')}
        >
          <Text style={{color: '#fff', fontSize: 40}}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Modificar('-')}
        >
          <Text style={{color: '#fff', fontSize: 40}}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ListNotes}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9059a1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    position: 'absolute',
    top: 200,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    width: '100%',
    textAlign: 'left',
    paddingLeft: 20
  },
  Box: {
    position: 'absolute',
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    top: 350,
    width: '100%',
    padding: 20
  },
  button: {
    backgroundColor: '#451575',
    height: 60,
    width: 60,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    width: 200,
    height: 60,
    backgroundColor: '#e3c9df',
    borderWidth: 1,
    borderRadius: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
    padding: 15
  },
  Valor: {
    position: 'absolute',
    top: 300,
    color: '#fff', 
    fontSize: 30
  }
});