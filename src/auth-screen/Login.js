import React, {useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text} from 'react-native';
import {Link} from '@react-navigation/native';
import {Center, Column, FormControl, IconButton, Input, Row, WarningOutlineIcon} from 'native-base';
import {Icon} from 'react-native-elements';
import CustomButton from '../utils/Common/CustomButton';
import GlobalStyles from '../utils/Common/GlobalStyles';

const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkUsernameInvalid, setUserNameInvalid] = useState(false);
    const [checkPasswordInvalid, setPasswordInvalid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [spinner, setAction] = useState(false);

    const onHandleShowPassword = () => setShowPassword(!showPassword);

    return (
        <KeyboardAvoidingView style={styles.body} behavior={'position'} keyboardVerticalOffset={-150}>
            <Center>
                <Image style={styles.image} source={require('../image/GGexamplelogo.jpg')}
                       resizeMode={'center'}></Image>
                <Column style={{width: '80%', alignItems: 'center'}} space={5}>
                    <Text style={{color: '#ff0000', fontSize: 30, fontWeight: 'bold'}}>LOGIN</Text>
                    <FormControl isInvalid={checkUsernameInvalid}>
                        <Input InputLeftElement={<Icon color={'#ff0000'} name={'account-circle'}
                                                       style={{marginLeft: 10}}/>}
                               borderColor={'#000000'}
                               variant={'rounded'}
                               borderWidth={2}
                               placeholder={'Username'}
                               fontWeight={'bold'}
                               onChangeText={(value) => {
                                   setUsername(value);
                                   setUserNameInvalid(false);
                               }}
                               onEndEditing={(e) => {
                                   if (e.nativeEvent.text !== '') {
                                       setUserNameInvalid(false);
                                   } else {
                                       setUserNameInvalid(true);
                                   }
                               }}>
                        </Input>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                            This is required
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={checkPasswordInvalid}>
                        <Input InputLeftElement={<Icon color={'#ff0000'} name={'lock'} style={{marginLeft: 10}}/>}
                               InputRightElement={
                                   <IconButton
                                       icon={showPassword ?
                                           <Icon color={'#ff0000'} name={'visibility'}
                                                 style={{marginRight: 10}}></Icon> :
                                           <Icon color={'#ff0000'} name={'visibility-off'}
                                                 style={{marginRight: 10}}></Icon>}
                                       onPress={onHandleShowPassword}
                                       backgroundColor={'#ffffff'}></IconButton>
                               }
                               borderColor={'#000000'}
                               type={showPassword ? 'text' : 'password'}
                               variant={'rounded'}
                               borderWidth={2}
                               placeholder={'Password'}
                               fontWeight={'bold'}
                               onChangeText={(value) => {
                                   setPassword(value);
                                   setUserNameInvalid(false);
                               }}
                               onEndEditing={(e) => {
                                   if (e.nativeEvent.text !== '') {
                                       setPasswordInvalid(false);
                                   } else {
                                       setPasswordInvalid(true);
                                   }
                               }}
                        >
                        </Input>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                            This is required
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Center>
                        <Row>
                            <CustomButton
                                buttonStyle={GlobalStyles.button}
                                placeHolderName={'Register'}
                            />
                            <CustomButton
                                buttonStyle={GlobalStyles.button}
                                spinner={spinner}
                                placeHolderName={'Login'}
                            />
                        </Row>
                    </Center>
                </Column>
            </Center>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        height: 300,
        width: 300,
        marginBottom: -50,
    },
});

export default Login;
