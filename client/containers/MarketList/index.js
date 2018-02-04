import React, { Component } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure } from '../../actions/index.js';
import MarketCard from '../../components/MarketCard';

class MarketList extends Component {
  componentWillMount() {
    this.props.fetchItemsRequest('http://localhost:3090/items');
  }

  render() {
    return (
      <FlatList
        data={this.props.marketList.items}
        contentContainterStyle={styles.container}
        renderItem={({ item }) => (
            <MarketCard
              title={item.title}
              price={item.price}
              imageSrc={item.imageSrc}
              description={item.description}
              isBought={item.isBought}
              inDelivery={item.inDelivery}
              isDelivered={item.isDelivered}
            />
          )
        }
      />
    );
  }
}

function mapStateToProps({ marketList }) {
  return { marketList };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, { fetchItemsRequest, fetchItemsSuccess, fetchItemsFailure })(MarketList);
