import React from 'react';
import {Center, FormControl, Input, Modal, Row, Text, WarningOutlineIcon} from "native-base";
import {Icon} from "@rneui/base";
import GlobalStyles from "../styles/GlobalStyles";
import CustomButton from "./CustomButton";


const LoginConfirmModal = ({openModel, closeModel, username, password}) => {
    return (
        <Modal isOpen={openModel} onClose={() => closeModel(false)}>
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Login confirm</Modal.Header>
                <Modal.Body>
                    <Center>
                        <FormControl>
                            <Input
                                InputLeftElement={
                                    <Icon
                                        color={'#ff0000'}
                                        name={'key'}
                                        style={{marginLeft: 10}}
                                        type={'material-community'}
                                    />
                                }
                                borderColor={'#000000'}
                                variant={'rounded'}
                                borderWidth={2}
                                placeholder={'Confirm Key'}
                                fontWeight={'bold'}
                            />
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}>
                                This is required
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <Row>
                            <CustomButton
                                buttonStyle={GlobalStyles.button}
                                placeHolderName={'Cancel'}
                                onPressHandle={() => closeModel(false)}
                            />
                            <CustomButton
                                buttonStyle={GlobalStyles.button}
                                placeHolderName={'Confirm'}
                            />
                        </Row>
                    </Center>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}
export default LoginConfirmModal;