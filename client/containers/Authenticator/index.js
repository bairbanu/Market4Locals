import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoggedInTabs } from '../../components/LoggedInNavigation/index.js';
import { NotLoggedInTabs } from '../../components/NotLoggedInNavigation/index.js';
import { Image, Text, View, StyleSheet } from 'react-native';


class Authenticator extends Component {
  render() {
    return (
      this.props.marketList.loading ? (
        <View style={styles.container}>
          <Text style={styles.text}>Don't worry, the cat will wake up soon!</Text>
          <Image
            source={{ uri: 'https://i.imgur.com/f1yeHVO.jpg' }}
            style={styles.image}
           />
       </View>
      ) : (
        this.props.marketList.isLoggedIn ? (
          <LoggedInTabs />
        ) : (
          <NotLoggedInTabs />
        )
      )
    );
  }
}

function mapStateToProps({ marketList }) {
  return { marketList };
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default connect(mapStateToProps)(Authenticator);
