import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native'

//Constants
import { SIZES, COLORS, ICONS } from '@Utils/constants';

const ItemProduct = ({ index, item, action, isLeftColumn, formattedPrice }) => {
  const { title,
    price,
    category,
    image } = item;

  return (
    <TouchableOpacity style={[styles.container, isLeftColumn ? { marginRight: "2%" } : { marginLeft: "2%" }]} onPress={() => { action(item) }}>
      <Text style={styles.category}>{category}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title} numberOfLines={3} adjustsFontSizeToFit>{title}</Text>
      <Text style={styles.price}>{formattedPrice(price)}</Text>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={ICONS.RightArrow} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '46%',
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: COLORS.black,
    marginBottom: 10,
    paddingHorizontal: 25
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    overflow: "hidden"
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.black,
    marginBottom: 5
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.black,
    marginTop: 5,
    textAlign: "left"
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.black
  },
  iconContainer: {
    marginTop: 10,
    width: 20,
    height: 20,
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary
  },
  icon: {
    width: 8,
    height: 8,
    resizeMode: "contain",
    tintColor: COLORS.white
  },
});
export default ItemProduct