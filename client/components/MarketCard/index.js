import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

export default class MarketCard extends Component {
  handlePress(event) {
    alert('Hey');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>{this.props.title}</Text>
        <Text style={styles.head}>{this.props.price}</Text>
        <Image
          source={{ uri: this.props.imageSrc }}
          style={styles.image}
         />
        <Text style={styles.text}>{this.props.description}</Text>
        {this.props.isBought ? (
          this.props.inDelivery ? (
            <Text style={styles.text}>In Delivery</Text>
          ) : (
            <Text style={styles.text}>Delivered</Text>
          )
        ) : (<Button
          title="Buy"
          color="#5800b7"
          onPress={this.handlePress}
        />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    height: 300,
    width: 300,
  },
  text: {
    maxWidth: '75%',
  },
  deliveryText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
});
