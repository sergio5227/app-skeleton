import { FC } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import CustomButtonStyle from "./CustomButtonStyle";

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    height?: number;
    disabled?: boolean
}

const CustomButton: FC<CustomButtonProps> = (props: CustomButtonProps) => {
    return (
        <View style={{ ...CustomButtonStyle.container, ...props?.height ? { height: props?.height } : {} }}>
            <Button
                disabled={props?.disabled}
                onPress={() => {
                    props.onPress();
                }}>
                <Text style={CustomButtonStyle.buttonText}>{props?.title}</Text>
            </Button>
        </View>
    );
}

export default CustomButton;