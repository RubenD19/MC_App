import { Tabs } from 'expo-router';
import { TabIcon, TabLabel } from '../../components';
import { images, COLORS } from '../../constants';
import { View, SafeAreaView} from 'react-native';

const Layout = () => {
    return (
        <SafeAreaView style={{height: "100%"}}>
            <View style={{height: "3%", backgroundColor:COLORS.white}}/>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveTintColor: COLORS.lightGrey,
                    tabBarStyle: {
                      borderTopWidth: 2,
                      borderTopColor: COLORS.primary,
                      borderColor: COLORS.primary,
                      height: 150,
                    },
                  }}>
                <Tabs.Screen
                    name='index'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        href: null,
                    }}
                />
                <Tabs.Screen
                    name='appointment'   
                    options={{
                        title: 'Request Appointment',
                        tabBarIcon: ({color}) => 
                            <TabIcon 
                                icon={images.calendar} 
                                color={color} 
                            />,
                        tabBarLabel: ({color, focused}) => 
                            <TabLabel
                                name='Request Appointment' 
                                color={color} 
                                focused={focused}
                            />
                    }}
                />
                <Tabs.Screen
                    name='prescription'   
                    options={{
                        title: 'Repeat Prescription',
                        tabBarIcon: ({color}) => 
                            <TabIcon 
                                icon={images.pill} 
                                color={color} 
                            />,
                        tabBarLabel: ({color, focused}) => 
                            <TabLabel
                                name='Repeat Prescription' 
                                color={color} 
                                focused={focused}
                            />
                    }}         
                />
                <Tabs.Screen
                    name='certification'   
                    options={{
                        title: 'Request Certification',
                        tabBarIcon: ({color}) => 
                            <TabIcon 
                                icon={images.certificate} 
                                color={color} 
                            />,
                        tabBarLabel: ({color, focused}) => 
                            <TabLabel
                                name='Request Certification'
                                color={color} 
                                focused={focused}
                            />
                    }}         
                />
            </Tabs>
            </SafeAreaView>
    )
}

export default Layout;
