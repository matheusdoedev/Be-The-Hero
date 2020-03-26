import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Incidents() {
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contado pois gostaria de ajudar no caso "cadelinha atropelada"';

    function navigateToIncidents() {
        navigation.navigate('Incidents')
    };
    
    function sendEmail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['diego@rocketseat.com.br'],
            body: message,
        });
    };

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+5571987325822&text=${message}`);
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateToIncidents}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Caso 1</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={[styles.incidentValue, { marginBottom: 0 }]}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
              <Text style={styles.heroTitle}>Salve o dia!</Text>
              <Text style={styles.heroTitle}>Seja o heróio desse caso.</Text>

              <Text style={styles.heroDescription}>Entre em contato:</Text>

              <View style={styles.actions}>
                  <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                      <Text style={styles.actionText}>Whatsapp</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.action} onPress={sendEmail}>
                      <Text style={styles.actionText}>Email</Text>
                  </TouchableOpacity>
              </View>
            </View>
        </View>
    );
} 