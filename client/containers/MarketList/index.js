import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MarketCard from '../../components/MarketCard';

export default class MarketList extends Component {
  render() {
    return (
      <FlatList
        data={[
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
        ]}
        contentContainterStyle={styles.container}
        renderItem={({ item }) => (
            <MarketCard
              title1={item.title}
              price1={item.price}
              imageSrc1={item.imageSrc}
              description1={item.description}
              isBought1={item.isBought}
              inDelivery1={item.inDelivery}
              isDelivered1={item.isDelivered}
            />
          )
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
