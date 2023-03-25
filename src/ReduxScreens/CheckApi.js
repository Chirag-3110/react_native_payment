import React, { useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const CheckApi=()=>{
    const getMoviesFromApi = async () => {
        try {
            const response = await fetch('https://ddc8-103-159-45-133.in.ngrok.io/wallet',{
                method:"POST",
            });
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log(error);
          }
      };
    return(
        <View style={{flex:1,alignItems: 'center',justifyContent: 'center',backgroundColor:"white"}}>
            <Text style={{color:"black"}}>Check</Text>
            <TouchableOpacity style={{
                width:'90%',
                height:40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:"limegreen",
                borderRadius:5
            }}
                onPress={getMoviesFromApi}
            >
                <Text>Click</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CheckApi;