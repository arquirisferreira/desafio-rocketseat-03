import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333',
});

export default api;

/**
 * IOS com emulador: localhost
 * IOS com dispositivo fisico: ip da maquina
 * Android com emulador: usando o adb reverse (localhost)
 * Android com emulador: usar ip do emulador do android studio (10.0.2.2)
 * Genymotio: 10.0.3.2
 * Android Fisico: ip da maquina 
 */