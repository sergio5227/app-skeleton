import React, { useMemo } from 'react';
import BottomSheet, {
    BottomSheetModal,
    BottomSheetView
} from '@gorhom/bottom-sheet';
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface BottomSheetProps {
    ref: any;
    snapPoints?: (string | number)[];
    children: React.ReactNode;
    title?: string;
    onClose?: () => void;
    backgroundColor?: string;
    index?: number;
    indicatorBackgroundColor?: string;
    handleSheetChanges?:any
}

const CustomBottomSheet = React.forwardRef<BottomSheet, BottomSheetProps>(
    (
        {
            snapPoints = ['25%', '50%', '90%'],
            children,
            title,
            onClose,
            backgroundColor = '#fff',
            index = 0,
            indicatorBackgroundColor = '#fff',
            handleSheetChanges = null
        },
        ref
    ) => {
        const animatedSnapPoints = useMemo(() => snapPoints, [snapPoints]);
        const insets = useSafeAreaInsets();

        return (
            <BottomSheet
                ref={ref}
                snapPoints={animatedSnapPoints}
                index={index}
                onChange={handleSheetChanges}
                keyboardBehavior="interactive"
                keyboardBlurBehavior="restore"
                android_keyboardInputMode="adjustResize"
                handleStyle={{ ...styles.bottomSheetHandle, ...{ backgroundColor } }}
                backgroundStyle={{...styles.bottomSheetBackground,...{ backgroundColor }}}
                handleIndicatorStyle={{ backgroundColor: indicatorBackgroundColor, height: 4 }}
                enablePanDownToClose={false}
            >
                <BottomSheetView style={[styles.container, { backgroundColor }]}>
                    {title && (
                        <View style={styles.header}>
                            <View style={styles.dragHandle} />
                            <Text style={styles.title}>{title}</Text>
                            <Pressable onPress={() => (ref as any).current?.dismiss()}>
                                <Icon name="close" size={24} color="#000" />
                            </Pressable>
                        </View>
                    )}
                    <View style={styles.content}>
                        {children}
                    </View>
                </BottomSheetView>
            </BottomSheet>
        );
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    dragHandle: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 2,
        textAlign: 'center',
        color: '#000',
    },
    content: {
        flex: 1,
        display: 'flex',
        paddingVertical: 16,
    },
    bottomSheetHandle: {
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17
    },
    bottomSheetBackground: {
        backgroundColor: '#fff',
        
    },
});

export default CustomBottomSheet;
