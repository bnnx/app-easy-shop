import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  iconsContainer: {
    marginHorizontal: wp(8),
    marginTop: hp(6),
  },
  headerIcons: {
    color: colors.black,
  },
  titleContainer: {
    marginTop: hp(3),
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.black,
    fontFamily: 'Muli Bold',
    fontSize: wp(5.8)
  },
  itemsContainer: {
    //backgroundColor: colors.red,
    alignItems: 'center',
    height: hp(62.8)
  },
  item: {
    flexDirection: 'row',
    width: wp(85),
    height: hp(10),
  },
  image: {
    width: wp(25),
    height: hp(7),
    resizeMode: 'cover',
    borderRadius: wp(3)
  },
  imageContainer: {
    //backgroundColor: colors.blue,
    //borderRadius: wp(3),
    //alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp(25),
    height: hp(7),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(35),
    marginHorizontal: wp(2.5)
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(20),
  },
  quantityText: {
    textAlign: 'center',
    width: wp(7),
    fontFamily: 'Muli Bold',
    color: colors.black,
    fontSize: wp(3.8)
  },
  xText: {
    width: wp(5),
    fontFamily: 'Muli Bold',
    color: colors.black,
    fontSize: wp(3.4),
  },
  nameText: {
    width: wp(23),
    fontFamily: 'Muli Bold',
    color: colors.black,
    fontSize: wp(3.8)
  },
  priceText: {
    fontFamily: 'Muli Bold',
    color: colors.greyDark,
    fontSize: wp(3.8)
  },
  bottomContainer: {
    position: 'absolute',
    bottom: hp(3),
    left: 0,
    right: 0,
    marginTop: hp(2),
    marginHorizontal: wp(5),
    alignItems: 'center'
  },
  line: {
    width: wp(90),
    borderBottomColor: colors.black,
    borderBottomWidth: 0.5
  },
  totalPriceContainer: {
    width: wp(85),
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalText: {
    fontFamily: 'Muli Regular',
    fontSize: wp(5.4),
    color: colors.black
  },
  totalPriceText: {
    fontFamily: 'Muli Bold',
    fontSize: wp(6.4),
    color: colors.black
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    borderRadius: wp(3),
    marginTop: hp(3),
    height: hp(6),
    width: wp(85)
  },
  buttonText: {
    fontFamily: 'Muli Bold',
    fontSize: wp(4.4),
    color: colors.white
  }
})