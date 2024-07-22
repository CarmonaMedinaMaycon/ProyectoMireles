import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Input, Image, Button, Icon } from "@rneui/base";
import { isEmpty } from "lodash";

export default function FormLogin() {
  const [username,setUsername] = useState(null)
  const [password,setPassword] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState({username:'papito escribe bien', password:'papito escribe bien'})

  const login =() =>{
    console.log("datos", username, password);
    if(isEmpty(username)||isEmpty(password)){
      setError({usernameError: '', passwordError:''})
    }else {
      setError({usernameError:'', passwordError:''})
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 100, height: 100, marginBottom: 16 }}
      />
      <Input
        placeholder="Usuario"
        label="Usuario"
        labelStyle={styles.label}
        style={{marginBottom:16}}
        errorMessage={error.username}
        onChange={event=> setUsername(event)}
      />
      <Input
        placeholder="*****"
        label="contraseña"
        labelStyle={styles.label}
        style={{ marginBottom: 16 }}
        secureTextEntry={showPassword}
        errorMessage={error.password}
        onChange={event=> setPassword(event)}
        rightIcon={
          <Icon
          name={showPassword ? "eye-off": "eye"}
          type="material-community"
          onPress={()=> setShowPassword(!showPassword)}/>
        }
      />
      <Button
        title={"iniciar sesion"}
        containerStyle={{ width: "80%" }}
        color={"white"}
        titleStyle={{ color: "green" }}
        icon={<Icon name="login" type="material-community" color={"green"} />}
        iconPosition="left"
        onPress={login}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    color: "#f3f3f3",
  },
});
