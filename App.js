import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Image , TextInput, Button, SafeAreaView } from 'react-native';

export default function App() {
  const [name , setName] = useState('');
  return (

    <SafeAreaView style={styles.container} >

      
      <View >
      <Text style={styles.text}>
        Wellcome {name}
       </Text>
      <Image
      source={{uri: 'https://media.istockphoto.com/id/1358361176/photo/minimal-notification-bell-icon-in-phone-isolated-on-white-background-one-new-notification.jpg?s=612x612&w=0&k=20&c=xa6O49K0Yosoy-7OEyohXfAgpRuHNN-r4brcIZE-2ao=' }}
      style={styles.imageStyle}
      />

      <TextInput 
       placeholder='Enter your name'
       keyboardType='email-address'
       style={styles.inputContaner}
       onSubmitEditing={(value) => setName(value.nativeEvent.text)}
      />
      <Button 
        style={styles.buttonStyles} 
        title='Submit' 
        onPress={()=>alert("Welcome "+ name)}  
      />
        
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex',
    justifyContent: 'center',
    padding:20,
  },
  imageStyle:{
    width: 150,
    height:150,
    marginBottom: 10,
    alignContent: 'center'
  },
  inputContaner:{
    borderWidth:0.7,
    borderRadius: 15,
    padding:10,
    marginBottom:10,  
  },
  text:{
    fontSize:20,
    fontWeight: 'bold',
    marginBottom:50,
    alignSelf: 'center'
  },
  buttonStyles:{
    height: 20,
    marginTop: 10,
    width: 'auto',
    borderRadius:10,

  }
});
