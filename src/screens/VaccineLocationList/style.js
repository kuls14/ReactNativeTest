import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(12),
  },
  viewMapContainer: {
    height: 200,
    width: '100%',
  },
  mapContainer: { flex: 1, alignSelf: 'stretch' },
});

export default styles;
