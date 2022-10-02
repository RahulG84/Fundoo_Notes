import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Styles} from '../utility/CSS';
import TextFrom from '../components/TextFrom';

const NewPassword = ({navigation}) => {
  const [code, setCode] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmitButton = () => {
    let value = {};
    var regxPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (code === '') {
      value.code = 'Please Enter Verification Code';
    }
    if (newpassword === '' || !regxPassword.test(newpassword)) {
      value.newpassword = 'Please Enter minimum 6 and maximum 16 characters';
    }
    if (newpassword !== confirmPassword) {
      value.confirmPassword = 'Password Not Matching';
    }
    setError(value);
  };

  return (
    <View style={Styles.for_mainView}>
      <Image
        style={Styles.Frgtlogo}
        source={require('../assets/Image/ConfirmPassLogo.jpeg')}
      />
      <Text style={Styles.forg_txt}>Verify Password</Text>
      <TextFrom
        placeholder="Enter The Code"
        value={code}
        error={error.code}
        setValue={setCode}
      />
      <TextFrom
        placeholder="Enter New Password"
        value={newpassword}
        error={error.newpassword}
        setValue={setNewPassword}
      />
      <TextFrom
        placeholder="Confirm Password"
        value={confirmPassword}
        error={error.confirmPassword}
        setValue={setconfirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={Styles.frog_button} onPress={onSubmitButton}>
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

export default NewPassword;
