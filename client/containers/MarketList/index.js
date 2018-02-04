import React, { Component } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../../actions/index.js';
import MarketCard from '../../components/MarketCard';

class MarketList extends Component {
  componentWillMount() {
    this.props.fetchItems([
      { key: 0,
        title: 'Title1',
        price: '$500',
        imageSrc: 'https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
        description: 'This is a great cat, but I can no longer afford to keep him. Please buy my cat so it has a nice home.',
        isBought: false,
        inDelivery: false,
        isDelivered: false,
      },
      { key: 1,
        title: 'Title2',
        price: '$800',
        imageSrc: 'https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
        description: 'This is a great cat, but I can no longer afford to keep him. Please buy my cat so it has a nice home.',
        isBought: true,
        inDelivery: true,
        isDelivered: false,
      },
      { key: 2,
        title: 'Title3',
        price: '$1500',
        imageSrc: 'https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
        description: 'This is a great cat, but I can no longer afford to keep him. Please buy my cat so it has a nice home.',
        isBought: true,
        inDelivery: false,
        isDelivered: true,
      },
    ]);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems }, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketList);
