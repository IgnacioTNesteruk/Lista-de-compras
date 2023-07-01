import { Button, Text, StyleSheet, TextInput, View, FlatList } from "react-native";
import { useState } from "react";
import  Modal  from "./src/components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeText = text => {
    setTextItem(text);
    console.log(text);
  };

  const addItem = () => {
    setList(prevState => [
      ...prevState,
      { name: textItem, id: Math.random().toString() },
    ]);
    setTextItem("");
  };

  const onHandleModal = item => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const onHandleDelete = item => {
    console.log("eliminar este item", item);
    setList(prevState => prevState.filter(element => element.name !== item.name));
    setModalVisible(false);
  }

  const renderItem = ({ item }) => (
    <View style={styles.renderItemStyle}>
      <Text>{item.name}</Text>
      <Button
        title="X"
        onPress={() => onHandleModal(item)}
        color={"red"}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputConteiner}>
        <Text style={styles.titleContainer}>Shopping List</Text>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="Elemento de la lista"
            style={styles.input}
            onChangeText={onHandleChangeText}
            value={textItem}
          />
          <Button title="Agregar a la lista" onPress={addItem} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        itemSelected={itemSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7DC6F",
  },
  inputConteiner: {

    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  titleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#16A085",
  },
  addItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 170,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,

  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: 'center',
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
