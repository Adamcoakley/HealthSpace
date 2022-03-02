import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { USERS } from '../data/users';

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{paddingHorizontal: 5,}}>
        <View style={styles.border}>
          <View style={styles.innerBorder}>
            <Image source={require('../assets/profile-pic.jpg')} style={styles.image}/>
              <View style={{ position: 'absolute', bottom: 0, right: 0, borderRadius: 50, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
                <Entypo name="circle-with-plus" style={{ fontSize: 20, color: '#0C4BAE'}} />
              </View>
          </View>
        </View>
        <Text style={styles.username}>Your Story</Text>
      </View>
      {USERS.map((story, index) => (
      <View key={index} style={{paddingHorizontal: 5,}}>
        <View style={styles.border}>
          <View style={styles.innerBorder}>
            <Image source={story.image} style={styles.image}/>
          </View>
        </View>
        <Text style={styles.username}>{
                story.user.length > 11 ? story.user.slice(0,10) + '...' : story.user
        }</Text>
      </View>))}
    </ScrollView>
  </View>
  );
}

export default Stories;

const styles = StyleSheet.create({
    container:{
        marginVertical: 5,
    },
    border:{
        backgroundColor: '#0C4BAE',
        height: 68,
        width: 68,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerBorder: {
        backgroundColor: '#fff',
        height: 64,
        width: 64,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    users:{
        alignItems: 'center',
        marginRight: 10,
    },
    username:{
        marginTop: 5,
        fontSize: 12,
    }
});