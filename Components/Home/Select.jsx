import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Select({ label, items }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <View style={{ zIndex: 1000, marginHorizontal: 12, marginTop: 16 }}>
            <Text className="font-bold text-center text-principal mb-1">{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                style={{
                    borderColor: '#FFF',
                    borderRadius: 10,  
                    elevation: 0,
                    shadowOpacity: 0,    
                    paddingTop: 4,
                }}
                dropDownContainerStyle={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                }}
                placeholder="Select an option"
            />
        </View>
    );
}