import {StyleSheet} from 'react-native';
import {COLORS} from '../../../common/theme/colors';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputLabel: {
    color: COLORS.DARK_GREY,
    fontSize: 24,
    fontWeight: '700',
  },
  searchInput: {
    borderRadius: 8,
    backgroundColor: COLORS.WHITE,
    color: COLORS.DARK_GREY,
    marginVertical: 8,
    padding: 0,
    paddingHorizontal: 8,
    height: 40,
  },
});
