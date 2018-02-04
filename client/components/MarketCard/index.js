import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

export default class MarketCard extends Component {
  constructor(props) {
    super(props);
    this.handleBuyPress = this.handleBuyPress.bind(this);
    this.handleDeliverPress = this.handleDeliverPress.bind(this);
  }

  handleBuyPress(event) {
    alert('Hey');
  }

  handleDeliverPress(event) {
    alert('Holla!');
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
            this.props.isDelivered ? (
              <Text style={styles.text}>Delivered</Text>
            ) : (
                <Button
                  title="Deliver"
                  color="#5800b7"
                  onPress={this.handleDeliverPress}
                />
              )
            )
          ) : (
            <Button
              title="Buy"
              color="#5800b7"
              onPress={this.handleBuyPress}
            />
          )}
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
