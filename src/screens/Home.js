import { StyleSheet, StatusBar, View, Text} from "react-native";

export default function Home(){

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#9059a1' />
            <Text style={styles.Titulo}>Bem Vindo</Text>
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
      fontSize: 40,
      fontWeight: 'bold',
      color: '#fff',
      width: '100%',
      textAlign: 'left',
      paddingLeft: 20
    },
});