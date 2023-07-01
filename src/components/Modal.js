import { StyleSheet, Text, View, Button, Modal as NewModal } from "react-native";
import React from "react";

const Modal = ({isVisible, actionDeleteItem, itemSelected }) => {
    return (
        <NewModal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
                <View>
                    <Text>Estas seguro que deseas borrar este elemento?</Text>
                    <Text styl0={styles.modalTextStyle}>{itemSelected.name}</Text>
                    <Button
                        title="Eliminar"
                        color={"red"}
                        onPress={() => actionDeleteItem()}
                    />
                </View>
            </View>
        </NewModal>
    );
};

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalStyle:{
        margin:20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTextStyle:{
        fontSize: 30,
    },
})

