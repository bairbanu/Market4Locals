import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupSuccess, signupFailure } from '../../actions/index.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.handleSignupPress = this.handleSignupPress.bind(this);
  }

  handleSignupPress(event) {
    alert('Replace me with a redux action');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Signup</Text>
        <Text style={styles.header}>Email</Text>
        <TextInput
          style={styles.form}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <Text style={styles.header}>Password</Text>
        <TextInput
          style={styles.form}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.header}>Confirm Password</Text>
        <TextInput
          style={styles.form}
          onChangeText={(password) => this.setState({ confirmPassword })}
          value={this.state.confirmPassword}
          secureTextEntry={true}
        />
        <Button
          title="Login"
          large
          backgroundColor="#D44541"
          onPress={this.handleSignupPress}
         />
      </View>
    );
  }
}

function mapStateToProps({ marketList }) {
  return { marketList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signupSuccess, signupFailure }, dispatch);
}

const styles = StyleSheet.create({
  Title: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 40,
    paddingBottom: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    width: Dimensions.get('window').width,
    height: 0.1 * Dimensions.get('window').height,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
