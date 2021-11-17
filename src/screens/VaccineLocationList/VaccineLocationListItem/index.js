import moment from 'moment';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';
import styles from './style';

const VaccineLocationListItem = ({ row, openWebsite, openMapView }) => {
  let lblAppointmentFound = '';

  if (row?.appointments_available === '1') {
    lblAppointmentFound = 'Appointments found';
  } else {
    lblAppointmentFound = 'No appointments found';
  }

  return (
    <ShadowView style={styles.container}>
      <View>
        <Text style={styles.textName}>{row?.provider}</Text>
        <Text style={styles.textAddress}>{row?.address}</Text>
      </View>
      <View style={styles.viewAppointmentFoundContainer}>
        <View style={styles.viewLblAppointmentFound}>
          <Text>{lblAppointmentFound}</Text>
        </View>
        <View style={styles.viewValueAppointmentFound}>
          <Text style={styles.textAppointmentAgo}>
            {moment(row?.appointments_last_modified).fromNow()}
          </Text>
        </View>
      </View>
      <View style={styles.viewLastCheckAppointment}>
        <View style={styles.viewLastCheckedContainer}>
          <View style={styles.viewTextLastCheckTitle}>
            <Text style={styles.textLastCheckedTitle}>{'Last Checked'}</Text>
          </View>
          <View style={styles.viewTextLastCheckValue}>
            <Text style={styles.textLastCheckedValue}>
              {moment(row?.appointments_last_fetched).fromNow()}
            </Text>
          </View>
        </View>
        <View style={styles.viewTakesAppointment}>
          <Text style={styles.textTakesAppointment}>
            {'Takes Appointment Online'}
          </Text>
        </View>
      </View>
      <View style={styles.viewAppointmentMap}>
        <Pressable
          style={styles.viewAppointmentContainer}
          onPress={openWebsite}>
          <Text style={styles.textAppointmentWebsite}>
            {'Appointment Website'}
          </Text>
        </Pressable>
        <Pressable style={styles.viewMapContainer} onPress={openMapView}>
          <Text style={styles.textToMap}>{'Map (to zip code)'}</Text>
        </Pressable>
      </View>
    </ShadowView>
  );
};

export default VaccineLocationListItem;
