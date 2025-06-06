import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default function  Cadastro(){
//Tela de Cadastro
   
    return(
        <View style={styles.container}>
          
            <Text style={styles.titulo}>Cadstre-se</Text>
            <TextInput style={styles.TextInput} placeholder='nome'/>       
            <TextInput style={styles.TextInput} placeholder='E-mail'/>
            <TextInput style={styles.TextInput} placeholder='Senha'/>
            <View style={styles.btConteiner}>
           <Link href="..">
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonsText}>Cadastrar</Text>
            </TouchableOpacity>
            </Link>

          <Link href="..">
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
    backgroundColor: "black",
    padding: 20,
 },

 titulo:{
   color:"white",
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 140,
    marginBottom: 30,
    
 },

 TextInput:{
    color: "#white",   
    borderRadius: 7,
    padding: 10,
    backgroundColor: "#1d1d1d",
    width: "80%",
 },
 btConteiner:{
    gap: 20,
    width: "80%",
    justifyContent:'center',
    flexDirection: "row",
 },
 buttons:{
    backgroundColor:"green",
    padding: 10,
    width: 120,
    borderRadius: 10,
    
 },
 buttonsText:{
    color:"white",
    fontWeight: "bold",
    fontSize:16,
    textAlign: "center",
    
 },
 
})