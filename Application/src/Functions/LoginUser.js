import auth from '@react-native-firebase/auth';

export default function LoginUser(credentials, navigation) {
    console.log(credentials.email);
    console.log(credentials.password);

    auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((data) => {
            console.log(data)
            navigation.replace('MainPage')

        })
        .catch((error) => {alert(error.code) })
}