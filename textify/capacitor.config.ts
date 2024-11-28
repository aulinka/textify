import type {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'textify',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // Duration in milliseconds
      launchAutoHide: true, // Automatically hides splash screen
      backgroundColor: '#ffffff', // Background color
      androidSplashResourceName: 'splash', // Android splash resource
      androidScaleType: 'CENTER_CROP', // Android image scaling
    }
  }
};
export default config;
