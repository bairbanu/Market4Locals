import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Dimensions } from 'react-native';

export default class SellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      ImgUrl: '',
      Description: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Sell Your Stuff</Text>
        <Text style={styles.header}>Title</Text>
        <TextInput
          style={styles.form}
          onChangeText={(Title) => this.setState({ Title })}
          value={this.state.Title}
        />
        <Text style={styles.header}>Image</Text>
        <TextInput
          style={styles.form}
          onChangeText={(ImgUrl) => this.setState({ ImgUrl })}
          value={this.state.ImgUrl}
        />
        <Text style={styles.header}>Description</Text>
        <TextInput
          style={styles.longForm}
          multiLine={true}
          numberOfLines={6}
          onChangeText={(Description) => this.setState({ Description })}
          value={this.state.Description}
        />
      </View>
    );
  }
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
  longForm: {
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    width: Dimensions.get('window').width,
    height: 0.25 * Dimensions.get('window').height,
  },
});
