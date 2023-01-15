import React, {useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text} from 'react-native';
import {
    Center, Checkbox,
    Column,
    FormControl,
    IconButton,
    Input,
    Row,
    Toast,
    WarningOutlineIcon,
} from 'native-base';
import {Icon} from '@rneui/themed';
import CustomButton from "../component/CustomButton";
import GlobalStyles from "../styles/GlobalStyles";
import userApi from '../api/userApi';
import {useDispatch} from 'react-redux';
import {setToken} from '../redux/reducers';
import LoginConfirmModal from "../component/LoginConfirmModal";

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [checkUsernameInvalid, setUserNameInvalid] = useState(false);
    const [checkPasswordInvalid, setPasswordInvalid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [spinner, setAction] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            e.preventDefault();
        });
    }, [navigation]);

    function registerOnPressHandler() {
        navigation.navigate('Register');
    }

    const onHandleShowPassword = () => setShowPassword(!showPassword);

    async function loginOnPressHandler() {
        if (username !== '' && password !== '') {
            setAction(true);
            let result = await userApi.login(username, password, remember);

            switch (result.status) {
            case 200:
                if (result.payload !== null && result.payload !== '') {
                    setAction(false);
                    dispatch(setToken(result.payload.accessToken));
                }
                break;
            case 401:
                setAction(false);
                setModalVisible(true);
            }
        } else {
            setUserNameInvalid(true);
            setPasswordInvalid(true);
            Toast.show({title: 'Warning', status: 'warning', description: 'You must input username and password!',});
        }
    }

    const closeModel = (value) => {
        setModalVisible(value);
    }

    return (
        <KeyboardAvoidingView
            style={styles.body}
            behavior={'position'}
            keyboardVerticalOffset={-150}>
            <Center>
                <LoginConfirmModal
                    openModel={modalVisible}
                    closeModel={closeModel}
                    username={username}
                    password={password}>
                </LoginConfirmModal>
                <Image
                    style={styles.image}
                    source={require('../utils/image/GGexamplelogo.jpg')}
                    resizeMode={'center'}
                />
                <Column style={{width: '80%', alignItems: 'center'}} space={5}>
                    <Text style={{color: '#ff0000', fontSize: 30, fontWeight: 'bold'}}>
                        LOGIN
                    </Text>
                    <FormControl isInvalid={checkUsernameInvalid}>
                        <Input
                            InputLeftElement={
                                <Icon
                                    color={'#ff0000'}
                                    name={'account-circle'}
                                    style={{marginLeft: 10}}
                                />
                            }
                            borderColor={'#000000'}
                            variant={'rounded'}
                            borderWidth={2}
                            placeholder={'Username'}
                            fontWeight={'bold'}
                            onChangeText={value => {
                                setUsername(value);
                                setUserNameInvalid(false);
                            }}
                            onEndEditing={e => {
                                if (e.nativeEvent.text !== '') {
                                    setUserNameInvalid(false);
                                } else {
                                    setUserNameInvalid(true);
                                }
                            }}
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}>
                            This is required
                        </FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={checkPasswordInvalid}>
                        <Input
                            InputLeftElement={
                                <Icon
                                    color={'#ff0000'}
                                    name={'lock'}
                                    style={{marginLeft: 10}}
                                />
                            }
                            InputRightElement={
                                <IconButton
                                    icon={
                                        showPassword ? (
                                            <Icon
                                                color={'#ff0000'}
                                                name={'visibility'}
                                                style={{marginRight: 10}}
                                            />
                                        ) : (
                                            <Icon
                                                color={'#ff0000'}
                                                name={'visibility-off'}
                                                style={{marginRight: 10}}
                                            />
                                        )
                                    }
                                    onPress={onHandleShowPassword}
                                    backgroundColor={'#ffffff'}
                                />
                            }
                            borderColor={'#000000'}
                            type={showPassword ? 'text' : 'password'}
                            variant={'rounded'}
                            borderWidth={2}
                            placeholder={'Password'}
                            fontWeight={'bold'}
                            onChangeText={value => {
                                setPassword(value);
                                setPasswordInvalid(false);
                            }}
                            onEndEditing={e => {
                                if (e.nativeEvent.text !== '') {
                                    setPasswordInvalid(false);
                                } else {
                                    setPasswordInvalid(true);
                                }
                            }}
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}>
                            This is required
                        </FormControl.ErrorMessage>
                    </FormControl>
                    <Center>
                        <Row style={{alignSelf: "flex-end", marginEnd: 30}}>
                            <Checkbox
                                colorScheme="red"
                                onChange={(isSelected) => {setRemember(isSelected)}}>
                                Remember me
                            </Checkbox>
                        </Row>
                        <Row>
                            <CustomButton
                                buttonStyle={GlobalStyles.button}
                                placeHolderName={'Register'}
                                onPressHandle={registerOnPressHandler}
                            />
                            <CustomButton
                                buttonStyle={GlobalStyles.button}
                                spinner={spinner}
                                placeHolderName={'Login'}
                                onPressHandle={loginOnPressHandler}
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
