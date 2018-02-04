import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loading } from '../../actions/index.js';

class SellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      ImgUrl: '',
      Description: '',
    };
    this.handleSellPress = this.handleSellPress.bind(this);
  }

  handleSellPress() {
    this.props.loading();
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
        <Button
          title="Sell"
          large
          backgroundColor="#D44541"
          onPress={this.handleSellPress}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loading }, dispatch);
}

export default connect(null, mapDispatchToProps)(SellItem);
