import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    height: hp(25),
  },
  iconsContainer: {
    marginHorizontal: wp(8),
    marginTop: hp(8),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerIcons: {
    color: colors.black,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(4),
    marginHorizontal: wp(7),
    paddingHorizontal: wp(4),
    borderRadius: wp(1.5),
    borderWidth: wp(0.3),
    borderColor: colors.greyLight,
  },
  inputText: {
    fontFamily: 'Muli Regular',
    width: wp(70)
  }
})