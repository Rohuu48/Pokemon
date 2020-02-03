import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    padding: 30
  },
  image: {
    height: 200,
    width: 200
  },
  text: {
    flex: 1,
    flexDirection: "column",
    textTransform: "capitalize",
    alignSelf: "center",
    margin: 15
  },
  textHeader: {
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  pokemonContainer: {
    backgroundColor: "wheat",
    width: "100%",
    margin: 5
  }
});
export default class Main extends React.Component {
  state = { list: [], limit: 20 };
  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then(resp => resp.json())
      .then(response => {
        response.results.forEach(element => {
          fetch(element.url)
            .then(res => res.json())
            .then(res5 => {
              this.setState({
                list: this.state.list.concat(res5)
              });
            });
        });
      });
  }

  increaseLimit = () => {
    this.setState(
      {
        limit: this.state.limit + 20
      },
      () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.state.limit}`)
          .then(resp => resp.json())
          .then(response => {
            response.results.forEach(element => {
              fetch(element.url)
                .then(res => res.json())
                .then(res5 => {
                  this.setState({
                    list: this.state.list.concat(res5)
                  });
                });
            });
          });
      }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>My Favorite Pokemons</Text>
        {this.state.list == 0 ? (
          <Image
            source={{
              uri:
                "https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDFUN-PLAY-POKSK-Z227950C8B81D57/1564601128929_0..jpg?imwidth=320&impolicy=hq"
            }}
          />
        ) : null}
        <FlatList
          onEndReachedThreshold={1}
          showsVerticalScrollIndicator={false}
          data={this.state.list}
          onEndReached={this.increaseLimit}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.pokemonContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: item.sprites.front_default }}
                />
                <Text style={styles.text}>{item.species.name}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
