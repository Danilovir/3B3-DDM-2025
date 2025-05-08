import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default function  Cadastro(){

   
    return(
        <View style={styles.container}>
          
            <Text style={styles.titulo}>Faça seu Cadastro</Text>
            <TextInput style={styles.TextInput} placeholder='nome'/>       
            <TextInput style={styles.TextInput} placeholder='e-mail'/>
            <TextInput style={styles.TextInput} placeholder='Password'/>
            <View style={styles.btConteiner}>
            <Link href="/">
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Cadastrar</Text>
            </TouchableOpacity>
            </Link>

          <Link href="/">
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Voltar</Text>
            </TouchableOpacity>
            </Link>
            
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    gap: 15,
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: "black",
    padding: 20,
 },

 titulo:{
    fontSize: 35,
    fontWeight: 600,
    marginBottom: 30,
    color: "white",
 },

 TextInput:{
    color: "#fff",
    fontWeight: 600,
    letterSpacing: 1.5,
    borderRadius: 7,
    padding: 10,
    backgroundColor: "#141f25",
    width: "100%",
 },
 btConteiner:{
    gap: 10,
    width: "80%",
    flexDirection: "row",
 },
 buttons:{
    backgroundColor:"green",
    padding: 10,
    flex:1,
    borderRadius: 10,
    
 },
 buttonsText:{
    color:"#fff",
    fontWeight: "bold",
    fontSize:16,
    textAlign: "center",
    
 },
 
})