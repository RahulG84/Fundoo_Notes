import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TextFrom from '../components/TextFrom';
import Button from '../components/Button';
import {AuthContext} from '../navigation/AuthProvide';

const LogIn = ({navigation}) => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {login, googleLogin} = useContext(AuthContext);

  const onPressSignInButton = () => {
    let box = {};
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var regxPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (email === ' ' || !regEmail.test(email)) {
      box.userName = 'Please Enter Valid Mail';
    }
    if (password === ' ' || !regxPassword.test(password)) {
      box.password = 'Please Enter min. 6 and max. 16 characters';
    } else {
      login(email, password);
    }
    setError(box);
  };

  const onPressSignInFacebook = () => {
    Alert.alert(email);
  };

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={require('../assets/Image/LoginImage.jpeg')}
      />
      <Text style={styles.text}>FUNDOO NOTES</Text>
      <TextFrom
        placeholder="Email"
        value={email}
        error={error.userName}
        setValue={setMail}
      />
      <TextFrom
        placeholder="Password"
        value={password}
        error={error.password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Button onPress={onPressSignInButton} text="Sign In" />
      <Button
        onPress={() => navigation.navigate('ForgetPassword')}
        text="Forget Password ?"
        typeOfButton="TERTIARY"
        secureTextEntry={true}
      />
      <Button
        onPress={onPressSignInFacebook}
        typeOfButton="TERTIARY"
        text="Sign In With Facebook"
      />
      <Text style={styles.orText}>
        ------------------------- or -------------------------
      </Text>
      {Platform.OS === 'android' ? (
        <Button
          onPress={() => googleLogin()}
          typeOfButton="TERTIARY"
          text="Sign In With Google"
        />
      ) : null}

      <View style={styles.condition}>
        <Text style={styles.conditionSignIn}>
          You Don't have an account? {}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.conditionSignIn, {color: 'blue'}]}>
            Let's Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    marginHorizontal: 80,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  condition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'center',
  },
  conditionSignIn: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

export default LogIn;
