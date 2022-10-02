import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
export const AuthContext = createContext();

export const AuthProvide = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch(error => {
                // let wronError = {};
                if (error.code === 'auth/user-not-found') {
                  //   wronError.error = 'user not Exist';
                  console.log('user not Exist');
                }
                if (error.code === 'auth/invalid-email') {
                  //   wronError.error = 'That email address is invalid!';
                  console.log('That email address is invalid!');
                }
                if (error.code === 'auth/wrong-password') {
                  //   wronError.error = 'Password is invalid!';
                  console.log('Password is invalid!');
                }

                console.error(error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                console.log('User account created & signed in!');
              })
              .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
                }

                console.error(error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth()
              .signOut()
              .then(() => console.log('User signed out!'));
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
