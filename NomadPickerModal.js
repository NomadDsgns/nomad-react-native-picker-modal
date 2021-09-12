import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


import Button from './Button';

function PickerModal({ label, values, selectedValue, visible, handleChange, handleCancel }) {
    return (
        <Modal animationType="fade"
                transparent={true}
                visible={visible}>
            <View>
                <View style={styles.modalView}>
                    <Text style={{marginBottom: 15}}>{label}</Text>
                    <Picker style={styles.picker}
                    selectedValue={selectedValue ? selectedValue : values[0]}
                            onValueChange={handleChange}>
                        { values.map((value, index) => {
                                return <Picker.Item label={value} value={value} key={`${index}_${value}`}/>
                            })
                        }  
                    </Picker>
                    <Button onPress={() => {
                        handleCancel(!visible);
                    }}>Submit</Button>
                </View>
            </View>
        </Modal>
    );
}

export default PickerModal;

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
