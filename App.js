import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import BottomBar from './BottomBar';

const app = () => {
  // List of shop data with id, name, image URL, and credits
  const shopData = [
    { id: '1', name: 'Trendy Mart', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable'},
    { id: '2', name: 'Luxe Boutique', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '3', name: 'Urban Treasures', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '4', name: 'Fresh Finds Emporium', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '5', name: 'Serenity Style Co.', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '6', name: 'Urban Haven', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '7', name: 'Slick Style Emporium.', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '8', name: 'Nature Nook', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '9', name: 'Blissful Boutiques', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '10', name: 'TrendCraft Gallery', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '11', name: 'Velvet Visions', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
    { id: '12', name: 'Mystic Emporium', image: 'https://inspire.org.mt/wp-content/uploads/2022/01/IMG_7469-1024x768.jpeg', credit: '€0.10 per recycable' },
  ];

  // Use state to manage the current balance
  const [currentBalance, setCurrentBalance] = useState(0.00);

  // Function to handle adding balance
  const handleAddBalance = (amount) => {
    setCurrentBalance(currentBalance + amount);
  };

  // Function to render each shop item in the FlatList
  const renderShopItem = ({ item }) => ( 
    <View style={styles.shopItem}>
      <Image source={{ uri: item.image }} style={styles.shopImage} />
      <View style={styles.textContainer}>
        <Text style={styles.rightAlign}>{item.name}</Text>
        <Text style={styles.rightAlign}>{item.credit}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>   
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>REWARDIFY</Text>

      {/* Display current balance */}
      <Text style={styles.curBalText}>Current Balance</Text>
      <Text style={styles.curBal}>€{currentBalance.toFixed(2)}</Text>

      {/* List of Shops */}
      <FlatList
        style={styles.shopListContainer}
        data={shopData}
        keyExtractor={(item) => item.id}
        renderItem={renderShopItem}
      />

      {/* Bottom Bar Component */}
      <BottomBar onAddVoucherPress={() => {}} onAddBalance={handleAddBalance} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdf5f',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    marginTop: 20,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  title: {
    color: '#31bac3',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 5,
    marginVertical: 10,
  },
  curBalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginVertical: 10,
  },
  curBal: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  shopListContainer: {
    flex: 1,  // Take up the available space
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 45,
  },
  shopItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  shopImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column', // Stack text components vertically
    marginLeft: 10, // Add margin to separate text from the image
  },
  rightAlign: {
    textAlign: 'right',
  },
});

export default app;
