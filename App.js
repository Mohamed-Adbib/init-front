import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
} from './data/getData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      id: null,
      user: null,
      firstname: null,
      lastname: null,
      idToDelete: null,
    };
  }

  _getAllUsers = () => {
    getAllUsers().then((response) => {
      this.setState({users: response});
    });
  };

  _onChangeTextId = (id) => {
    this.setState({id: id});
  };
  _onChangeTextFirstname = (firstname) => {
    this.setState({firstname: firstname});
  };
  _onChangeTextLastname = (lastname) => {
    this.setState({lastname: lastname});
  };
  _onChangeTextIdToDelete = (ID) => {
    this.setState({idToDelete: ID});
  };

  _getUserById = (id) => {
    getUserById(id).then((response) => {
      this.setState({user: response});
    });
  };

  _createUser = (firstname, lastname) => {
    createUser(firstname, lastname);
  };

  _deleteUserById(id) {
    deleteUserById(id).then((resp) => console.log('data', resp));
  }

  render() {
    const {users, user, id, firstname, lastname, idToDelete} = this.state;
    console.log('--------idToDelete---------', idToDelete);
    //console.log('--------lastname---------', lastname);
    return (
      <ScrollView>
        <View style={styles.container}>
          <Button title="GET ALL USERS" onPress={this._getAllUsers} />

          {users
            ? users.map((user) => {
                return (
                  <View key={user.id} style={styles.textContainer}>
                    <Text style={styles.text}>{user ? user.id : null}</Text>
                    <Text style={styles.text}>
                      {user ? user.firstname : null}
                    </Text>
                    <Text style={styles.text}>
                      {user ? user.lastname : null}
                    </Text>
                  </View>
                );
              })
            : null}
          <Button title="GET USER" onPress={() => this._getUserById(id)} />
          <TextInput
            style={styles.textinput}
            onChangeText={(id) => this._onChangeTextId(id)}
            value={id}
            placeholder="Enter the ID of the user"
            keyboardType="numeric"
          />
          {user ? (
            <View style={styles.textContainer}>
              <Text style={styles.text}>{user ? user.id : null}</Text>
              <Text style={styles.text}>{user ? user.firstname : null}</Text>
              <Text style={styles.text}>{user ? user.lastname : null}</Text>
            </View>
          ) : null}
          <Button
            title="CREATE USER"
            onPress={() => this._createUser(firstname, lastname)}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(firstname) => this._onChangeTextFirstname(firstname)}
            value={firstname}
            placeholder="Fistname of the user"
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(lastname) => this._onChangeTextLastname(lastname)}
            value={lastname}
            placeholder="Lastname of the user"
          />
          <Button
            title="DELETE USER"
            onPress={() => this._deleteUserById(idToDelete)}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(idToDelete) =>
              this._onChangeTextIdToDelete(idToDelete)
            }
            value={idToDelete}
            placeholder="Enter the ID of the user"
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  text: {
    paddingHorizontal: 10,
  },
  textinput: {
    borderWidth: 2,
    marginVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    textAlign: 'center',
    fontSize: 15,
    borderColor: '#888888',
  },
});
export default App;
