import React, {useState, useContext} from 'react';
import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import TextFrom from '../components/TextFrom';
import Button from '../components/Button';
import {AuthContext} from '../navigation/AuthProvide';

const SignUp = ({navigation}) => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [error, setError] = useState('');

  const {register, googleLogin} = useContext(AuthContext);

  const onPressSignUpButton = () => {
    let result = {};
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var regxPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (firstName === '') {
      result.firstName = 'Please Enter First Name';
    }
    if (firstName === '' || lastName === '') {
      result.lastName = 'Please Enter Last Name';
    }
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      !regEmail.test(email)
    ) {
      result.email = 'Please Enter Valid Mail';
    }
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      !regxPassword.test(password)
    ) {
      result.password = 'Please Enter min. 6 and max. 16 characters';
    } else if (password !== confirmPassword) {
      result.confirmPassword = 'Password Not Matching';
    } else if (password === confirmPassword) {
      register(email, password);
    }

    // register(email, password)
    // if (
    //   firstName === '' &&
    //   lastName === '' &&
    //   (email === '' || !regEmail.test(email)) &&
    //   (password === '' || !regxPassword.test(password)) &&
    //   password !== confirmPassword
    // ) {
    //   result.firstName = 'Please Enter First Name';
    //   result.lastName = 'Please Enter Last Name';
    //   result.email = 'Please Enter Valid Mail';
    //   result.password = 'Please Enter min. 6 and max. 16 characters';
    //   result.confirmPassword = 'Password Not Matching';
    // } else {
    //   register(email, password);
    // }
    setError(result);
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Create Your Account</Text>
      <TextFrom
        placeholder="First Name"
        value={firstName}
        setValue={setfirstName}
        error={error.firstName}
      />
      <TextFrom
        placeholder="Last Name"
        value={lastName}
        setValue={setlastName}
        error={error.lastName}
      />
      <TextFrom
        placeholder="Email"
        value={email}
        setValue={setemail}
        error={error.email}
      />
      <TextFrom
        placeholder="Password"
        value={password}
        setValue={setpassword}
        error={error.password}
        secureTextEntry={true}
      />
      <TextFrom
        placeholder="Confirm Password"
        value={confirmPassword}
        error={error.confirmPassword}
        setValue={setconfirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.container} onPress={onPressSignUpButton}>
        <Text style={styles.textRegister}>Register</Text>
      </TouchableOpacity>
      <View style={styles.condition}>
        <Text style={styles.condtionText}>
          By Clicking Join now , you agree to FundooNote's
        </Text>
        <TouchableOpacity onPress={() => Alert.alert('Services is ok')}>
          <Text style={[styles.condtionText, {color: 'red'}]}>
            Terms of conditions
          </Text>
        </TouchableOpacity>
        <Text style={styles.condtionText}> and </Text>
        <TouchableOpacity onPress={() => Alert.alert('Policy is  Ok')}>
          <Text style={[styles.condtionText, {color: 'red'}]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => Alert.alert(firstName)}
        typeOfButton="TERTIARY"
        text="Sign In With Facebook"
      />
      <Text style={styles.orText}>
        ------------------------- or -------------------------
      </Text>
      <Button
        onPress={() => googleLogin()}
        typeOfButton="TERTIARY"
        text="Sign In With Google"
      />
      <View style={styles.condition}>
        <Text style={styles.conditionSignUp}>
          Already account on FundooNote's? {}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={[styles.conditionSignUp, {color: 'blue'}]}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
    padding: 25,
    paddingLeft: 80,
    paddingBottom: 10,
    paddingTop: 40,
  },
  condition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'center',
  },
  condtionText: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
    paddingHorizontal: 5,
  },
  orText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  conditionSignUp: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  container: {
    width: 350,
    height: 50,
    backgroundColor: 'blue',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    paddingLeft: 20,
  },
  textRegister: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SignUp;
