import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Select({ label, items }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <View style={{ zIndex: 1000, marginHorizontal: 12, marginTop: 16 }}>
            <Text className="font-bold text-center text-white mb-1">{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                style={{
                    borderColor: '#fff',
                    borderRadius: 10,
                    backgroundColor: '#fff', // azul oscuro con transparencia
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                }}
                dropDownContainerStyle={{
                    backgroundColor: '#fff)', // menú desplegable con más opacidad
                    borderRadius: 10,
                    borderColor: '#FFF',
                }}
                textStyle={{
                    color: 'white',
                    textAlign: 'center', // alinea el texto en el selector
                    fontWeight: '',
                }}
                labelStyle={{
                    color: 'white',
                    textAlign: 'center', // alinea el texto en el menú desplegable
                }}
                placeholder="Select an option"
                placeholderStyle={{
                    color: '#ccc',
                    textAlign: 'center',
                }}
            />
        </View>
    );
}