import React, { useState } from "react";
import {
    View,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const Input = (props) => {

    const [value, setValue] = useState("");
    const [makeSecureVisible, setMakeSecureVisible] = useState(false);

    const handleChange = (text) => {
        setValue(text);
        if(props.onChangeText) props.onChangeText(text);
    }

    const handleOnEndEditing = (text) => {
        setValue(text.nativeEvent.text);
        if (props.onEndEditing) props.onEndEditing(text.nativeEvent.text);
    };

    return (
        <View style={[styles.mainOuterContainer, props.mainOuterContainer]}>
            <View style={[styles.itemContainer, props.itemContainer]}>
                <TextInput
                    ref={props.forwardRef}
                    style={[styles.input, props.inputStyle]}
                    onChangeText={handleChange}
                    value={value || props.value}
                    placeholder={props.placeholder}
                    autoCorrect={props.autoCorrect ?? true}
                    autoCapitalize={props.autoCapitalize ?? true}
                    secureTextEntry={props.secureTextEntry && !makeSecureVisible}
                    underlineColorAndroid="transparent"
                    keyboardType={props.keyboardType}
                    returnKeyType={props.returnKeyType}
                    onSubmitEditing={props.onSubmitEditing}
                    onFocus={props.onFocus}
                    onEndEditing={handleOnEndEditing}
                    editable={props.editable}
                    multiline={props.multiline}
                    maxLength={props.maxLength}
                />
                {props.rightIcon ? (
                    <View>
                        <Image style={[styles.rightIcon, props.rightIconStyle]} source={props.rightIcon} />
                    </View>
                    ) : <View />
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainOuterContainer: {
        borderWidth: 0,
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    itemContainer:{
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: '#EFEFEF',
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input:{
        height: 40,
        flexGrow: 1,
        borderWidth: 0,
        fontSize: 15,
    },
    rightIcon:{
        height: 24,
        width: 24,
        borderWidth: 0,
    }

});

export default Input;