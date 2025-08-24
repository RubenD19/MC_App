import { useState } from "react";
import { Platform, View, TouchableOpacity, Text } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./datepicker.style";


const DatePicker = ({currentDate ,setSelectedDate}) => {
    if (Platform.OS == 'android') { 
        const [showPicker, setShowPicker] = useState(false)

        return (<View>
            <TouchableOpacity style={styles.dateButton} onPress={() => setShowPicker(true)}>
                <Text style={styles.dateText} >{currentDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showPicker ? (<DateTimePicker
                value={currentDate}
                onChange={(event, date) => {setSelectedDate(date); setShowPicker(false)}}
            />) : (<View/>)}  
        </View>)
    } else if (Platform.OS == 'ios') {
        return (
            <DateTimePicker
                value={currentDate}
                onChange={(event, date) => setSelectedDate(date)}
            />
        )
    }
}

export default DatePicker