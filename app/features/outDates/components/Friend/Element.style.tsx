import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../common/theme/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 8,
    marginHorizontal: 16,
    backgroundColor: COLORS.WHITE,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
    backgroundColor: COLORS.DARK_GREY,
    marginRight: 8,
  },
  rightButton: {
    backgroundColor: COLORS.ACTION,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  rightButtonText: {
    color: COLORS.WHITE,
  },
  rightButtonSelected: {
    backgroundColor: COLORS.LIGHT_GREY,
  },
});
