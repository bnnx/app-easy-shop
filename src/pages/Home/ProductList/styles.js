import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(8),
    backgroundColor: colors.white,
  },
  productCard: {
    marginTop: hp(3),
    borderRadius: wp(2.5),
    width: wp(38),
    height: hp(25),
    backgroundColor: colors.green,
  },
  productText: {
    color: colors.white,
    fontSize: wp(4.5),
    fontFamily: 'Muli Regular'
  },
  infosContainer: {
    position: 'absolute',
    paddingTop: wp(3),
    paddingHorizontal: wp(4),
  },
  addCartButton: {
    backgroundColor: '#00000025',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(8),
    height: hp(4),
    borderTopRightRadius: wp(2.5),
    borderBottomLeftRadius: wp(2)
  },
  addIcon: {
    color: colors.white,
  },
  flatlistContainer: {
    paddingBottom: hp(3),
  },
  columnStyle: {
    justifyContent: 'space-between'
  },
  labelStyle: {
    fontFamily: 'Muli Bold'
  },
  tabStyle: {
    width: wp(30),
  },
  tabBarStyle: {
    elevation: 0,
    marginBottom: wp(1.5),
  },
  tabIndicator: {
    backgroundColor: colors.black,
    width: wp(2),
    height: wp(2),
    borderRadius: wp(2)/2,
    marginLeft: (wp(30)/2) - (wp(2)/2)
  }
})