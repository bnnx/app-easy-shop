import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  topContainer: {
    height: hp(55),
    backgroundColor: colors.yellow
  },
  iconsContainer: {
    marginHorizontal: wp(8),
    marginTop: hp(6),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerIcons: {
    color: colors.black,
  },
  bottomContainer: {
    position: 'absolute',
    top: hp(50),
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    padding: wp(8)
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  starsContainer: {
    marginTop: hp(1),
    flexDirection: 'row',
  },
  title: {
    color: colors.black,
    fontFamily: 'Muli Bold',
    fontSize: wp(5)
  },
  price: {
    color: colors.green,
    fontFamily: 'Muli Bold',
    fontSize: wp(5)
  },
  description: {
    color: colors.greyDark,
    fontFamily: 'Muli Regular',
    fontSize: wp(4.2),
    marginTop: hp(2)
  },
  infosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2)
  },
  weightTitle: {
    color: colors.black,
    fontFamily: 'Muli Bold',
    fontSize: wp(3.3),
  },
  weight: {
    color: colors.greyDark,
    fontFamily: 'Muli Regular',
    fontSize: wp(3.3),
  },
  quantityContainer: {
    flexDirection: 'row'
  },
  quantityText: {
    color: colors.black,
    fontFamily: 'Muli Bold',
    fontSize: wp(4.8),
    marginHorizontal: wp(5)
  },
  quantityButton: {
    backgroundColor: colors.greyLighter,
    borderRadius: wp(1.5),
    width: wp(7.5),
    height: wp(7.5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2)
  },
  favButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderWidth: wp(0.2),
    borderRadius: wp(2),
    borderColor: colors.greyLight,
    width: wp(13),
    height: wp(13)
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    borderRadius: wp(2),
    width: wp(65),
    height: wp(13)
  },
  addText: {
    color: colors.white,
    fontFamily: 'Muli Regular',
    fontSize: wp(3.5),
  }
})