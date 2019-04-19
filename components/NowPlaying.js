import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

class NowPlaying extends Component {

    state = {
        results: []
    }

    componentDidMount = async() => {
        const number = Math.floor(Math.random() * 10)
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=${number}`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    render() {
        return(
            <View style={styles.container}>

                {this.state.results.slice(0, 1).map((result, i) => {
                    return(
                        <View key={i} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                            <Image style={styles.imageContainer} resizeMode={'contain'} source={{uri: `https://image.tmdb.org/t/p/w500/${result.poster_path}`}} />
                            <Text style={{textAlign: 'center', marginTop: 20, fontSize: 20}}>Title: {result.title}</Text>

                        </View>
                    )
                })}

            </View>
        )
    }

}

export default NowPlaying

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 30
    },
    imageContainer: {
        height: 300,
        width: 300
    }
})