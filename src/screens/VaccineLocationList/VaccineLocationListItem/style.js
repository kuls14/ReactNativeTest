import { StyleSheet } from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    padding: moderateScale(10),
    margin: moderateScale(4),
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: moderateScale(1) },
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(4),
    backgroundColor: Colors.white,
  },
  viewAppointmentMap: {
    flexDirection: 'row',
    flex: 1,
    height: verticalScale(40),
  },
  viewAppointmentContainer: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
  },
  viewMapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAppointmentWebsite: {
    color: Colors.white,
    fontWeight: '600',
  },
  textToMap: {
    color: 'blue',
    fontWeight: '600',
  },
  viewTakesAppointment: {
    backgroundColor: Colors.green20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    marginLeft: horizontalScale(10),
    height: verticalScale(24),
  },
  textTakesAppointment: {
    color: 'green',
    fontSize: 12,
  },
  viewLastCheckedContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(24),
    backgroundColor: 'gray',
    borderRadius: moderateScale(5),
    overflow: 'hidden',
  },
  viewLastCheckAppointment: {
    marginVertical: verticalScale(4),
    flexDirection: 'row',
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLastCheckedTitle: {
    backgroundColor: 'gray',
    fontSize: 12,
  },
  textLastCheckedValue: {
    fontSize: 12,
    color: Colors.white,
  },
  textName: {
    fontSize: 24,
    fontWeight: '600',
  },
  textAddress: {
    fontSize: 16,
  },
  viewAppointmentFoundContainer: {
    flexDirection: 'row',
    height: verticalScale(30),
    borderRadius: moderateScale(5),
    overflow: 'hidden',
    marginVertical: verticalScale(8),
  },
  viewLblAppointmentFound: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewValueAppointmentFound: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTextLastCheckValue: {
    height: '100%',
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTextLastCheckTitle: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAppointmentAgo: {
    color: Colors.white,
  },
});

export default styles;
