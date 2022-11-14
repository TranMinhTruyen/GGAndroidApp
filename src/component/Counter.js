import React, {useState} from 'react';
import {Button, Input, Row, useToast} from 'native-base';

const Counter = ({getValue, initValue, minValue, maxValue}) => {
    const [value, setValue] = useState(initValue);
    const warningMaxValueToast = useToast();
    const warningMinValueToast = useToast();

    const increasePress = () => {
        if (value < maxValue) {
            let newValue = value + 1;
            setValue(newValue);
            getValue(newValue);
        } else {
            if (!warningMaxValueToast.isActive('max-value')) {
                warningMaxValueToast.show({
                    id: 'max-value',
                    title: 'Warning',
                    status: 'warning',
                    duration: 2000,
                    description: 'Max value is ' + maxValue + ' unit',
                });
            }
        }
    };

    const decreasePress = () => {
        if (value !== minValue) {
            let newValue = value - 1;
            setValue(value - 1);
            getValue(newValue);
        } else {
            if (!warningMinValueToast.isActive('min-value')) {
                warningMinValueToast.show({
                    id: 'min-value',
                    title: 'Warning',
                    status: 'warning',
                    duration: 2000,
                    description: 'Min value is ' + minValue + ' unit',
                });
            }
        }
    };

    return (
        <Row>
            <Input
                width={175}
                textAlign={'center'}
                fontSize={16}
                borderRadius={15}
                borderColor={'#000000'}
                onChangeText={value => {
                    setValue(value);
                }}
                InputLeftElement={
                    <Button
                        onPress={() => decreasePress()}
                        size={'lg'}
                        _pressed={{backgroundColor: '#1fd000'}}
                        backgroundColor={'#000000'}
                        rounded="none"
                        height={'full'}
                        width={50}>
                        -
                    </Button>
                }
                InputRightElement={
                    <Button
                        onPress={() => increasePress()}
                        size={'lg'}
                        _pressed={{backgroundColor: '#1fd000'}}
                        backgroundColor={'#000000'}
                        rounded="none"
                        height={'full'}
                        width={50}>
                        +
                    </Button>
                }>
                {value}
            </Input>
        </Row>
    );
};
export default Counter;
