import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { f } from "./../../config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  button: {
    margin: 20,
    padding: 5,
    height: 35,
    borderWidth: 1
  },
  text: {
    fontWeight: "bold"
  }
});
class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null, reenterpassword: "" };

  handleSignUp = () => {
    const { email, password, reenterpassword } = this.state;
    {
      password === reenterpassword
        ? f
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate("Login"))
            .catch(error => this.setState({ errorMessage: error.message }))
        : this.setState({
            errorMessage: "Passwords don't match!"
          });
    }
  };
  show = () => {
    this.props.navigation.navigate("Login");
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDFUN-PLAY-POKSK-Z227950C8B81D57/1564601128929_0..jpg?imwidth=320&impolicy=hq"
          }}
        />

        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder="Re-enter Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={reenterpassword => this.setState({ reenterpassword })}
          value={this.state.reenterpassword}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.text}>SignUp</Text>
        </TouchableOpacity>

        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

export default SignUp;
