import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { loadAsync } from 'expo-font';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';

SplashScreen.preventAutoHideAsync()

const Layout = () => {
    const [resourcesLoaded, setResourcesLoaded] = useState(false)

    const loadResources =  async () => {
        try {
            const imageAssets = [
                require('./../assets/images/home.png'),
                require('./../assets/images/pill.png'),
                require('./../assets/images/refresh.png'),
                require('./../assets/images/calendar-blank.png'),
                require('./../assets/images/file-certificate-outline.png'),
            ].map(image => {return Asset.fromModule(image).downloadAsync()})
            
            await Promise.all(...imageAssets)

            await loadAsync({
                'Poppins Regular': require('./../assets/fonts/Poppins-Regular.otf'),
                'Poppins Bold': require('./../assets/fonts/Poppins-Bold.otf'),
                'Work Sans Regular': require('./../assets/fonts/WorkSans-Regular.ttf'),
                'Work Sans Bold': require('./../assets/fonts/WorkSans-Bold.ttf')
            })
        } catch (error) {
            console.log(error)
        } finally {
            setResourcesLoaded(true)
            SplashScreen.hideAsync()
        }  
    }

    useEffect(() => {
        loadResources()
      }, []);

    if (!resourcesLoaded) return null

    return (
        <>
        <Stack>
            <Stack.Screen
                name='(tabs)'
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='index'
                options={{headerShown: false}}
            />
        </Stack>
        <StatusBar style="dark"/>
        </>
    )
}

export default Layout;
