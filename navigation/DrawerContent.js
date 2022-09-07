import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Avatar
} from 'react-native-paper'
import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const DrawerContent = (props) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={require('../assets/simpson/simpson.png')}
                                size={50}
                            
                            />
                            <View style={{marginLeft: 15}}>
                                <Title style={styles.title}>Aina Nirina</Title>
                                <Caption style={styles.caption}>@BastardC</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='home-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='account-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='bookmark-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='head-cog-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                    name='account-check-outline'
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents='none'>
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <MaterialCommunityIcons
                            name='exit-to-app'
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
})
