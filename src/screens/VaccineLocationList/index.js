import { Container } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Linking, View } from 'react-native';
import MapView from 'react-native-map-clustering';
import { showLocation } from 'react-native-map-link';
import { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { AppConsts } from '../../constants';
import VaccineListActions, {
  VaccineListSelectors,
} from '../../redux/VaccineListRedux';
import styles from './style';
import VaccineLocationListItem from './VaccineLocationListItem/index';

const VaccineMapView = ({ data }) => {
  return (
    <View style={styles.viewMapContainer}>
      <MapView
        animationEnabled={false}
        style={styles.mapContainer}
        initialRegion={{
          latitude: parseFloat(data?.result[0]?.latitude ?? 0),
          longitude: parseFloat(data?.result[0]?.longitude ?? 0),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0921,
        }}>
        {data?.result?.map((item, index) => {
          let long = parseFloat(item?.longitude ?? 0.0);
          let lat = parseFloat(item?.latitude ?? 0.0);
          if (lat === 0.0) {
            lat = 0.001;
          }
          if (long === 0.0) {
            long = 0.001;
          }
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: lat,
                longitude: long,
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const VaccineListView = ({ data, fetching, dispatch }) => {
  const callForMoreData = () => {
    if (data?.page * AppConsts.perPage < data?.totalResults) {
      dispatch(
        VaccineListActions.vaccineListRequest({
          state_code: 'AK',
          page: parseInt(data?.page) + 1,
        }),
      );
    }
  };

  const openWebsite = (item) => {
    Linking.canOpenURL(item?.url).then((supported) => {
      if (supported) {
        Linking.openURL(item?.url);
      } else {
      }
    });
  };

  const openMapView = (item) => {
    showLocation({
      latitude: item?.latitude ?? 0,
      longitude: item?.longitude ?? 0,
      title: item?.name, // optional
      googleForceLatLon: true, // optionally force GoogleMaps to use the latlon for the query instead of the title
      alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
    });
  };

  return (
    <FlatList
      listKey={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
      data={data?.result ?? []}
      numColumns={1}
      keyExtractor={({ id }, index) => index}
      ListFooterComponent={() => {
        return fetching && <ActivityIndicator />;
      }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item, index }) => (
        <VaccineLocationListItem
          row={item}
          openWebsite={() => openWebsite(item)}
          openMapView={() => openMapView(item)}
        />
      )}
      onEndReached={callForMoreData}
    />
  );
};

const VaccineLocationListScreen = () => {
  const dispatch = useDispatch();

  const vaccineListData = useSelector(VaccineListSelectors.vaccineListData);
  const fetching = useSelector(VaccineListSelectors.fetching);

  useEffect(() => {
    dispatch(
      VaccineListActions.vaccineListRequest({ state_code: 'AK', page: 1 }),
    );
  }, []);

  return (
    <Container style={styles.container}>
      <VaccineMapView data={vaccineListData} />
      <VaccineListView
        data={vaccineListData}
        fetching={fetching}
        dispatch={dispatch}
      />
    </Container>
  );
};

export default VaccineLocationListScreen;
