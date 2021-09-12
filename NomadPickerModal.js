import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function({ label, values, selectedValue, visible, handleSubmit }) {
    const [ pickerValue, setPickerValue ] = useState(selectedValue || values[0]);

    return (
        <Modal animationType="fade"
                transparent={true}
                visible={visible}>
            <View>
                <View style={styles.modalView}>
                    <Text style={{marginBottom: 15}}>{label}</Text>
                    <Picker style={styles.picker}
                            selectedValue={selectedValue}
                            onValueChange={setPickerValue}>
                        { values.map((value, index) => {
                                return <Picker.Item label={value} value={value} key={`${index}_${value}`}/>
                            })
                        }  
                    </Picker>
                    <Button onPress={() => handleSubmit(pickerValue)}>Submit</Button>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        margin: 50,
        marginTop: 250,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      picker: { 
          height: 50, 
          width: "100%", 
          justifyContent: "center", 
          marginBottom: 60, 
          marginTop: 50
        }
});
