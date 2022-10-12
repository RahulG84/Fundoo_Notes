import {StyleSheet} from 'react-native';

import {Dimensions, PixelRatio} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const widthPercentage = width => {
  const screenWidth = Dimensions.get('window').width;
  const elementWidth = parseFloat(width);
  return PixelRatio.roundToNearestPixel((screenWidth * elementWidth) / 100);
};

export const heightPercentage = height => {
  const screenHeight = Dimensions.get('window').height;
  const elementHeight = parseFloat(height);
  return PixelRatio.roundToNearestPixel((screenHeight * elementHeight) / 100);
};

export const Styles = StyleSheet.create({
  forg_txt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 95,
    color: 'blue',
    marginBottom: 20,
  },
  for_mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  Frgtlogo: {
    width: 200,
    height: 200,
    marginHorizontal: 105,
    marginTop: 30,
  },
  frog_button: {
    width: 300,
    height: 40,
    backgroundColor: 'blue',
    marginHorizontal: 42,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  fortextButt: {
    fontSize: 20,
    paddingTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  conditionFrg: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 20,
  },
  conditionFrgtext: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
