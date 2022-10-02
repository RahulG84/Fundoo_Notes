import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Styles} from '../utility/CSS';
import TextFrom from '../components/TextFrom';

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onPressSubmitbutton = () => {
    let result = {};
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email === '' || !regEmail.test(email)) {
      result.email = 'Please Enter Valid Mail';
    } else {
      navigation.navigate('NewPassword');
    }
    setError(result);
  };

  return (
    <View style={Styles.for_mainView}>
      <Image
        style={Styles.Frgtlogo}
        source={require('../assets/Image/ForgetPasswordLogo.jpeg')}
      />
      <Text style={Styles.forg_txt}>Forget Password?</Text>
      <TextFrom
        placeholder="Enter Mail"
        value={email}
        error={error.email}
        setValue={setEmail}
      />
      <TouchableOpacity
        style={Styles.frog_button}
        onPress={onPressSubmitbutton}>
        <Text style={Styles.fortextButt}>Submit</Text>
      </TouchableOpacity>
      <View style={Styles.conditionFrg}>
        <Text style={Styles.conditionFrgtext}>Back to</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={[Styles.conditionFrgtext, {color: 'blue'}]}>
            {} Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;
