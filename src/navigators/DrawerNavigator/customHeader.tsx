import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Appearance } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { mainCcolors, mainStyle } from '../../theme/styles';

interface CustomHeaderProps {
    title?: string
    regresar?: boolean
    bgColor?: string
}

const CustomHeader: FC<CustomHeaderProps> = (props: CustomHeaderProps) => {
    const navigation: any = useNavigation();

    return (
        <View style={{ ...mainStyle.headerDrawerContainer, ...props?.bgColor ? { backgroundColor: props?.bgColor } : {}, ... props?.bgColor ? { borderBottomWidth:10, borderBottomColor: props?.bgColor } : {}}} >
            <View style={{...mainStyle.dropBorder,... props?.bgColor ? { backgroundColor: props?.bgColor,  borderBottomColor: props?.bgColor } : {}}} />
            {props?.regresar ?
                <TouchableOpacity style={mainStyle.headerBottonBack} onPress={() => navigation.openDrawer()}>
                    <IconButton
                        icon="arrow-left-circle"
                        iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                        size={25}
                        style={mainStyle.iconsStyle}
                        onPress={() => navigation.goBack()}
                    /></TouchableOpacity> : null}
            {props?.title ? <Text style={mainStyle.headerTitle}>{props?.title}</Text> : null}
            {!props?.regresar ? <TouchableOpacity style={mainStyle.headerBottomMenu} onPress={() => navigation.openDrawer()}>
                <IconButton
                    icon="menu"
                    iconColor={Appearance.getColorScheme() === 'dark' ? mainCcolors.whiteText : mainCcolors.darkText}
                    size={25}
                    style={mainStyle.iconsStyle}

                />
            </TouchableOpacity> : null}
        </View>
    );
}

export default CustomHeader;