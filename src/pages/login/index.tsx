import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { style } from "./style";
import Logo from '../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from "../../global/themes";


export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    async function getLogin() {
        try {
            
            setLoading(true)

            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigratórios')
            }
            setTimeout(() => {
                if (email == 'teste@123' && password == '123456') {
                    Alert.alert('Logado com sucesso!')
                } else {
                    Alert.alert('Usuário não encontrado!')
                }
                setLoading(false)
            }, 3000)



        } catch (error) {

            console.log(error)

        }
    }



    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta !</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAILl</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                    />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themas.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {
                        loading ?
                            <ActivityIndicator color={'#FFFF'} size={"small"} />
                            :
                            <Text style={style.textButton} >ENTRAR</Text>
                    }
                </TouchableOpacity>

            </View>
            <Text style={style.textBottom}>NÃO TEM CONTA? <Text style={{ color: themas.colors.primary }}>CRIE AGORA!</Text></Text>
        </View>

    )
}