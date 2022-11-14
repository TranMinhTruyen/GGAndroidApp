import React from 'react';
import {AlertDialog} from "native-base";

const LoginAlertDialog = ({openDialog, closeDialog, message}) => {
    const cancelRef = useRef(null);
    return (
        <AlertDialog leastDestructiveRef={cancelRef}>
            <AlertDialog.Content>
                <AlertDialog.CloseButton/>
                <AlertDialog.Header>Message</AlertDialog.Header>
            </AlertDialog.Content>
        </AlertDialog>
    )
}
export default LoginAlertDialog;