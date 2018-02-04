import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

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
                  large
                  backgroundColor="#D44541"
                  onPress={this.handleDeliverPress}
                />
              )
            )
          ) : (
            <Button
              title="Buy"
              large
              backgroundColor="#D44541"
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
    backgroundColor: '#0B777A',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#DF9208',
  },
  image: {
    height: 300,
    width: 300,
  },
  text: {
    padding: 10,
    fontSize: 20,
    maxWidth: '75%',
    borderStyle: "solid",
    borderColor: "black",
    color: '#DF9208',
  },
  deliveryText: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    color: "#5800b7",
    borderStyle: "solid",
    borderColor: "black"
  }
});
