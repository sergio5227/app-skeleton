import React, { useRef, useCallback } from 'react';
import { Animated, Easing, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, LocaleConfig } from 'react-native-calendars';
import testIDs from './testIDs';
import { agendaItems, getMarkedDates } from './AgendaItems';
import AgendaItem from './AgendaItem';
import { getTheme, themeColor, lightThemeColor } from './theme';
import type XDate from 'xdate';

const leftArrowIcon = require('./imgs/previous.png');
const rightArrowIcon = require('./imgs/next.png');
const ITEMS: any[] = agendaItems;

interface Props {
    onPress: (item: any) => void
}

const CHEVRON = require('./imgs/next.png');

LocaleConfig.locales['es'] = {
    monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ],
    monthNamesShort: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic'
    ],
    dayNames: [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
};

// Establece el idioma por default
LocaleConfig.defaultLocale = 'es';


const Agenda = (props: Props) => {
    const marked = useRef(getMarkedDates());
    const theme = useRef(getTheme());
    const todayBtnTheme = useRef({
        todayButtonTextColor: themeColor
    });
    const renderItem = useCallback(({ item }: any) => {
        return <AgendaItem item={item} onPress={props?.onPress} />;
    }, []);

    const calendarRef = useRef<{ toggleCalendarPosition: () => boolean }>(null);
    const rotation = useRef(new Animated.Value(0));

    const toggleCalendarExpansion = useCallback(() => {
        const isOpen = calendarRef.current?.toggleCalendarPosition();
        Animated.timing(rotation.current, {
            toValue: isOpen ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease)
        }).start();
    }, []);

    const renderHeader = useCallback(
        (date?: XDate) => {
            const rotationInDegrees = rotation.current.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '-180deg']
            });
            return (
                <TouchableOpacity style={styles.header} onPress={toggleCalendarExpansion}>
                    <Text style={styles.headerTitle}>{date?.toString('MMMM yyyy')}</Text>
                    <Animated.Image source={CHEVRON} style={{ transform: [{ rotate: '90deg' }, { rotate: rotationInDegrees }] }} />

                </TouchableOpacity>
            );
        },
        [toggleCalendarExpansion]
    );

    const onCalendarToggled = useCallback(
        (isOpen: boolean) => {
            rotation.current.setValue(isOpen ? 1 : 0);
        },
        [rotation]
    );

    return (
        <CalendarProvider
            date={ITEMS[1]?.title}
            showTodayButton
            theme={todayBtnTheme.current}
            todayBottomMargin={16}
        >
            <ExpandableCalendar


                testID={testIDs.expandableCalendar.CONTAINER}
                renderHeader={renderHeader}
                ref={calendarRef}
                onCalendarToggled={onCalendarToggled}
                theme={{
                    ...theme.current, ...{
                        todayButtonTextColor: 'red',
                        todayButtonFontWeight: 'bold'
                    }
                }}
                firstDay={1}
                markedDates={marked.current}
                leftArrowImageSource={leftArrowIcon}
                rightArrowImageSource={rightArrowIcon}
                animateScroll
            />
            <AgendaList
                sections={ITEMS}
                renderItem={renderItem}
                sectionStyle={styles.section}
            />
        </CalendarProvider>
    );
};

export default Agenda;

const styles = StyleSheet.create({
    calendar: {
        paddingLeft: 5,
        paddingRight: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    headerTitle: { fontSize: 16, fontWeight: 'bold', marginRight: 6 },
    section: {
        backgroundColor: lightThemeColor,
        color: 'grey',
        textTransform: 'capitalize'
    }
});