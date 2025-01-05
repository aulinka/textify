import type {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lmikusova.app',
  appName: 'textify',
  webDir: 'www',
  server: {
    url: 'http://192.168.88.231:4201',
    cleartext: true
  }
};
export default config;
