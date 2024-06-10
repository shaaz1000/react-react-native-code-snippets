# React & React Native Component Generator

This VS Code extension helps you generate React and React Native components quickly and efficiently. It also includes utilities for form validation, date operations, Redux actions and reducers, Axios API services, and React context providers.

## Features

- Generate basic React functional components.
- Generate React class components.
- Generate React Native functional components.
- Generate React Native card components.
- Generate React Native modal components.
- Integrate React Native stack navigation.
- Integrate React Native tab navigation.
- Add basic React Native animations.
- Perform API calls with all methods using Axios.
- Form validation utilities.
- Date operations utilities.
- Redux actions and reducers.
- Axios API service.
- React context and provider.
- Express.js route handler.
- Express.js middleware.
- React Higher-Order Component (HOC).
- Custom React hook.
- React Native StyleSheet.
- React and React Native login and signup components.
- Express.js JWT authentication middleware.
- Real-time notifications using WebSockets for Express and NestJS backends, and React/React Native frontends.
- API documentation generation.
- Comprehensive logging module.

## Installation

1. **Install the extension** from the VS Code marketplace.
2. **Clone the repository** if you prefer to modify or extend the extension:
    ```sh
    git clone https://github.com/shaaz1000/react-reactnative-component-generator.git
    cd react-reactnative-component-generator
    npm install
    npm run compile
    ```

3. **Run the extension**:
    - Open the project in VS Code.
    - Press `F5` to open a new VS Code window with your extension loaded.

## Usage

1. **Create a new file** in your project with a meaningful name. For example, `MyComponent.js`.
2. **Type one of the following commands** to generate the corresponding component or utility:

### React Components

- **React Functional Component**:
  - **Command**: `Create React Functional Component`
  - **Snippet**: `RFE`
  - **Generated Code**:
    ```jsx
    import React from 'react';

    const MyComponent = () => {
      return (
        <div>
          MyComponent Component
        </div>
      );
    }

    export default MyComponent;
    ```

- **React Class Component**:
  - **Command**: `Create React Class Component`
  - **Generated Code**:
    ```jsx
    import React, { Component } from 'react';

    class MyComponent extends Component {
      render() {
        return (
          <div>
            MyComponent Component
          </div>
        );
      }
    }

    export default MyComponent;
    ```

### React Native Components

- **React Native Functional Component**:
  - **Command**: `Create React Native Functional Component`
  - **Generated Code**:
    ```jsx
    import React from 'react';
    import { View, Text } from 'react-native';

    const MyComponent = () => {
      return (
        <View>
          <Text>MyComponent Component</Text>
        </View>
      );
    }

    export default MyComponent;
    ```

- **React Native Card Component**:
  - **Command**: `Create React Native Card Component`
  - **Generated Code**:
    ```jsx
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    const MyComponent = () => {
      return (
        <View style={styles.card}>
          <Text>MyComponent Component</Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
      card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 5,
      },
    });

    export default MyComponent;
    ```

- **React Native Modal Component**:
  - **Command**: `Create React Native Modal Component`
  - **Generated Code**:
    ```jsx
    import React, { useState } from 'react';
    import { Modal, View, Text, Button, StyleSheet } from 'react-native';

    const MyComponent = () => {
      const [visible, setVisible] = useState(false);

      return (
        <View>
          <Button title="Show Modal" onPress={() => setVisible(true)} />
          <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.modal}>
              <Text>MyComponent Component</Text>
              <Button title="Close" onPress={() => setVisible(false)} />
            </View>
          </Modal>
        </View>
      );
    }

    const styles = StyleSheet.create({
      modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    });

    export default MyComponent;
    ```

- **React Native Stack Navigation**:
  - **Command**: `Create React Native Stack Navigation`
  - **Generated Code**:
    ```jsx
    import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import { View, Text, Button } from 'react-native';

    const Stack = createStackNavigator();

    const HomeScreen = ({ navigation }) => (
      <View>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </View>
    );

    const DetailsScreen = () => (
      <View>
        <Text>Details Screen</Text>
      </View>
    );

    const MyComponent = () => {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    export default MyComponent;
    ```

- **React Native Tab Navigation**:
  - **Command**: `Create React Native Tab Navigation`
  - **Generated Code**:
    ```jsx
    import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { View, Text } from 'react-native';

    const Tab = createBottomTabNavigator();

    const HomeScreen = () => (
      <View>
        <Text>Home Screen</Text>
      </View>
    );

    const SettingsScreen = () => (
      <View>
        <Text>Settings Screen</Text>
      </View>
    );

    const MyComponent = () => {
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }

    export default MyComponent;
    ```

### Utilities

- **API Call using Axios**:
  - **Command**: `Create API Call`
  - **Generated Code**:
    ```js
    import axios from 'axios';

    const MyComponent = {
      get: async (url, config) => {
        try {
          const response = await axios.get(url, config);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
      post: async (url, data, config) => {
        try {
          const response = await axios.post(url, data, config);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
      put: async (url, data, config) => {
        try {
          const response = await axios.put(url, data, config);
          return response.data;
        } catch (error) {
          throw error;
        }
      },
      delete: async (url, config) => {
        try {
          const response = await axios.delete(url, config);
          return response.data;
        } catch (error) {
          throw error;
        }
      }
    };

    export default MyComponent;
    ```

- **Form Validation**:
  - **Command**: `Create Form Validation`
  - **Generated Code**:
    ```js
    const validateRequired = (value) => {
      return value !== undefined && value !== null && value !== '';
    };

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
      // Password must be at least 8 characters, including one letter and one number
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
    };

    const validatePhoneNumber = (phoneNumber) => {
      const re = /^[0-9]{10}$/;
      return re.test(phoneNumber);
    };

    const validateMinLength = (value, minLength) => {
      return value.length >= minLength.
    };

    export { validateRequired, validateEmail, validatePassword, validatePhoneNumber, validateMinLength };
    ```

- **Date Operations**:
  - **Command**: `Create Date Operations`
  - **Generated Code**:
    ```js
    const formatDate = (date, format) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(date).toLocaleDateString(undefined, options);
    };

    const parseDate = (dateString) => {
      return new Date(dateString);
    };

    const addDays = (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };

    const subtractDays = (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() - days);
      return result.
    };

    const differenceInDays = (date1, date2) => {
      const diffTime = Math.abs(date2 - date1);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    export { formatDate, parseDate, addDays, subtractDays, differenceInDays };
    ```

- **Redux Actions**:
  - **Command**: `Create Redux Actions`
  - **Generated Code**:
    ```js
    export const MyComponentActionTypes = {
      FETCH_REQUEST: 'MyComponent_FETCH_REQUEST',
      FETCH_SUCCESS: 'MyComponent_FETCH_SUCCESS',
      FETCH_FAILURE: 'MyComponent_FETCH_FAILURE',
    };

    export const fetchMyComponentRequest = () => ({
      type: MyComponentActionTypes.FETCH_REQUEST,
    });

    export const fetchMyComponentSuccess = (data) => ({
      type: MyComponentActionTypes.FETCH_SUCCESS,
      payload: data,
    });

    export const fetchMyComponentFailure = (error) => ({
      type: MyComponentActionTypes.FETCH_FAILURE,
      payload: error,
    });
    ```

- **Redux Reducer**:
  - **Command**: `Create Redux Reducer`
  - **Generated Code**:
    ```js
    import { MyComponentActionTypes } from './MyComponentActions';

    const initialState = {
      data: [],
      loading: false,
      error: null,
    };

    const MyComponentReducer = (state = initialState, action) => {
      switch (action.type) {
        case MyComponentActionTypes.FETCH_REQUEST:
          return { ...state, loading: true, error: null };
        case MyComponentActionTypes.FETCH_SUCCESS:
          return { ...state, loading: false, data: action.payload };
        case MyComponentActionTypes.FETCH_FAILURE:
          return { ...state, loading: false, error: action.payload };
        default:
          return state;
      }
    };

    export default MyComponentReducer.
    ```

- **Axios Service**:
  - **Command**: `Create Axios Service`
  - **Generated Code**:
    ```js
    import axios from 'axios';

    const apiClient = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    export const getMyComponent = async (id) => {
      try {
        const response = await apiClient.get(`/mycomponent/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    };

    export const createMyComponent = async (data) => {
      try {
        const response = await apiClient.post('/mycomponent', data);
        return response.data.
      } catch (error) {
        throw error.
      }
    };

    export const updateMyComponent = async (id, data) => {
      try {
        const response = await apiClient.put(`/mycomponent/${id}`, data);
        return response.data;
      } catch (error) {
        throw error.
      }
    };

    export const deleteMyComponent = async (id) => {
      try {
        await apiClient.delete(`/mycomponent/${id}`);
      } catch (error) {
        throw error.
      }
    };
    ```

- **React Context and Provider**:
  - **Command**: `Create React Context`
  - **Generated Code**:
    ```js
    import React, { createContext, useContext, useReducer } from 'react';

    const MyComponentContext = createContext();

    const MyComponentProvider = ({ reducer, initialState, children }) => (
      <MyComponentContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </MyComponentContext.Provider>
    );

    const useMyComponentContext = () => useContext(MyComponentContext);

    export { MyComponentProvider, useMyComponentContext };
    ```

### Express.js Components

- **Express Route**:
  - **Command**: `Create Express Route`
  - **Generated Code**:
    ```js
    const express = require('express');
    const router = express.Router();

    // GET endpoint
    router.get('/', (req, res) => {
      res.send('GET request to the homepage');
    });

    // POST endpoint
    router.post('/', (req, res) => {
      res.send('POST request to the homepage');
    });

    // PUT endpoint
    router.put('/:id', (req, res) => {
      res.send(`PUT request to update item with id ${req.params.id}`);
    });

    // DELETE endpoint
    router.delete('/:id', (req, res) => {
      res.send(`DELETE request to delete item with id ${req.params.id}`);
    });

    module.exports = router;
    ```

- **Express Middleware**:
  - **Command**: `Create Express Middleware`
  - **Generated Code**:
    ```js
    const myMiddleware = (req, res, next) => {
      console.log('Middleware is working');
      next();
    };

    module.exports = myMiddleware;
    ```

### Advanced React Components

- **React Higher-Order Component (HOC)**:
  - **Command**: `Create React HOC`
  - **Generated Code**:
    ```js
    import React from 'react';

    const withMyComponent = (WrappedComponent) => {
      return class extends React.Component {
        render() {
          return <WrappedComponent {...this.props} />;
        }
      };
    };

    export default withMyComponent;
    ```

- **Custom React Hook**:
  - **Command**: `Create React Hook`
  - **Generated Code**:
    ```js
    import { useState, useEffect } from 'react';

    const useMyComponent = () => {
      const [state, setState] = useState(null);

      useEffect(() => {
        // Perform some action
      }, []);

      return [state, setState];
    };

    export default useMyComponent;
    ```

- **React Native StyleSheet**:
  - **Command**: `Create React Native StyleSheet`
  - **Generated Code**:
    ```js
    import { StyleSheet } from 'react-native';

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: '#000',
      },
    });

    export default styles;
    ```

### Authentication Components

- **React Login Component**:
  - **Command**: `Create React Login Component`
  - **Generated Code**:
    ```jsx
    import React, { useState } from 'react';

    const LoginComponent = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = () => {
        // Add login logic here
      };

      return (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    };

    export default LoginComponent;
    ```

- **React Native Login Component**:
  - **Command**: `Create React Native Login Component`
  - **Generated Code**:
    ```jsx
    import React, { useState } from 'react';
    import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

    const LoginComponent = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = () => {
        // Add login logic here
      };

      return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        padding: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 10,
      },
    });

    export default LoginComponent;
    ```

- **Express JWT Middleware**:
  - **Command**: `Create Express JWT Middleware`
  - **Generated Code**:
    ```js
    const jwt = require('jsonwebtoken');

    const jwtMiddleware = (req, res, next) => {
      const token = req.header('Authorization').replace('Bearer ', '');

      if (!token) {
        return res.status(401).send({ error: 'Access denied, no token provided.' });
      }

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
      } catch (ex) {
        res.status(400).send({ error: 'Invalid token.' });
      }
    };

    module.exports = jwtMiddleware;
    ```

### Real-Time Notifications

- **Express WebSocket Server**:
  - **Command**: `Create Express WebSocket Server`
  - **Generated Code**:
    ```js
    const WebSocket = require('ws');

    const wss = new WebSocket.Server({ port: 8080 });

    wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        console.log('received:', message);
      });

      ws.send('Hello! Message From Server!!');
    });

    module.exports = wss;
    ```

- **React WebSocket Client**:
  - **Command**: `Create React WebSocket Client`
  - **Generated Code**:
    ```jsx
    import React, { useEffect } from 'react';

    const WebSocketComponent = () => {
      useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onopen = () => {
          ws.send('Hello! Message From Client!!');
        };

        ws.onmessage = (event) => {
          console.log('Message from server', event.data);
        };

        return () => {
          ws.close();
        };
      }, []);

      return <div>WebSocket Client</div>;
    };

    export default WebSocketComponent;
    ```

- **React Native WebSocket Client**:
  - **Command**: `Create React Native WebSocket Client`
  - **Generated Code**:
    ```jsx
    import React, { useEffect } from 'react';
    import { View, Text } from 'react-native';

    const WebSocketComponent = () => {
      useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onopen = () => {
          ws.send('Hello! Message From Client!!');
        };

        ws.onmessage = (event) => {
          console.log('Message from server', event.data);
        };

        return () => {
          ws.close();
        };
      }, []);

      return (
        <View>
          <Text>WebSocket Client</Text>
        </View>
      );
    };

    export default WebSocketComponent;
    ```

### API Documentation

- **Generate API Documentation**:
  - **Command**: `Generate API Documentation`
  - **Generated Code**:
    ```sh
    npx swagger-jsdoc -d swaggerDef.js -o ./swagger.json
    ```

### Logging

- **Create Logger Module**:
  - **Command**: `Create Logger Module`
  - **Generated Code**:
    ```js
    const winston = require('winston');

    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
      ],
    });

    if (process.env.NODE_ENV !== 'production') {
      logger.add(new winston.transports.Console({
        format: winston.format.simple(),
      }));
    }

    module.exports = logger;
    ```
### React Components

- **React Auth Higher-Order Component (HOC)**:
  - **Command**: `Create React Auth HOC`
  - **Generated Code**:
    ```js
    import React from 'react';
    import { Redirect } from 'react-router-dom';

    const withAuth = (WrappedComponent) => {
      return class extends React.Component {
        render() {
          const isAuthenticated = // logic to check if user is authenticated;
          return isAuthenticated ? (
            <WrappedComponent {...this.props} />
          ) : (
            <Redirect to="/login" />
          );
        }
      };
    };

    export default withAuth;
    ```
### Real-Time Notifications

- **NestJS WebSocket Gateway**:
  - **Command**: `Create NestJS WebSocket Gateway`
  - **Generated Code**:
    ```typescript
    import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer } from '@nestjs/websockets';
    import { Server } from 'socket.io';

    @WebSocketGateway()
    export class MyGateway implements OnGatewayInit {
      @WebSocketServer() server: Server;

      afterInit(server: Server) {
        console.log('WebSocket server initialized');
      }

      @SubscribeMessage('message')
      handleMessage(client: any, payload: any): string {
        return 'Hello world!';
      }
    }
    ```
### Theming

- **React Native Theme Switching**:
  - **Command**: `Create React Native Theme Switching`
  - **Generated Code**:
    ```jsx
    import React, { createContext, useState, useContext } from 'react';
    import { View, Button, Text, StyleSheet } from 'react-native';

    const ThemeContext = createContext();

    const themes = {
      light: {
        background: 'white',
        color: 'black',
      },
      dark: {
        background: 'black',
        color: 'white',
      },
    };

    export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState(themes.light);

      const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
      };

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };

    export const useTheme = () => useContext(ThemeContext);

    const App = () => {
      const { theme, toggleTheme } = useTheme();

      return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <Text style={{ color: theme.color }}>Hello, Theme!</Text>
          <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });

    export default App;
    ```

### Animations

- **React Native Animations**:
  - **Command**: `Create React Native Animations`
  - **Generated Code**:
    ```jsx
    import React, { useRef } from 'react';
    import { View, Animated, Button } from 'react-native';

    const ReactNativeAnimations = () => {
      const fadeAnim = useRef(new Animated.Value(0)).current;

      const fadeIn = () => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      };

      return (
        <View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
          </Animated.View>
          <Button title="Fade In" onPress={fadeIn} />
        </View>
      );
    };

    export default ReactNativeAnimations;
    ```
    ### Maps

- **React Native Maps**:
  - **Command**: `Create React Native Maps`
  - **Generated Code**:
    ```jsx
    import React from 'react';
    import { View, StyleSheet } from 'react-native';
    import MapView, { Marker } from 'react-native-maps';

    const ReactNativeMaps = () => {
      return (
        <View style={styles.container}>
          <MapView style={styles.map}>
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
          </MapView>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
    });

    export default ReactNativeMaps;
    ```
### Context API

- **React Context API Boilerplate**:
  - **Command**: `Create React Context API Boilerplate`
  - **Generated Code**:
    ```jsx
    import React, { createContext, useContext, useReducer } from 'react';

    const initialState = {
      // initial state
    };

    const reducer = (state, action) => {
      switch (action.type) {
        // define case actions
        default:
          return state;
      }
    };

    const StateContext = createContext();

    export const StateProvider = ({ children }) => (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    );

    export const useStateValue = () => useContext(StateContext);
    ```

### Email, Phone Number, and Website Link Handlers

- **Handle Email Click**:
  - **Command**: `Create Handle Email`
  - **Generated Code**:
    ```js
    import { Linking } from 'react-native';

    const handleEmailClick = (email) => {
      Linking.openURL(`mailto:${email}`);
    };

    export default handleEmailClick;
    ```

- **Handle Mobile Phone Number Click**:
  - **Command**: `Create Handle Mobile Phone Number`
  - **Generated Code**:
    ```js
    import { Linking } from 'react-native';

    const handlePhoneNumberClick = (phoneNumber) => {
      Linking.openURL(`tel:${phoneNumber}`);
    };

    export default handlePhoneNumberClick;
    ```

- **Handle Website Link Click**:
  - **Command**: `Create Handle Website Link`
  - **Generated Code**:
    ```js
    import { Linking } from 'react-native';

    const handleWebsiteLinkClick = (url) => {
      Linking.openURL(url);
    };

    export default handleWebsiteLinkClick;
    ```

### Internet Connectivity

- **Check Internet Access**:
  - **Command**: `Create Check Internet Access`
  - **Generated Code**:
    ```jsx
    import React, { useEffect, useState } from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import NetInfo from '@react-native-community/netinfo';

    const CheckInternetAccess = ({ children }) => {
      const [isConnected, setIsConnected] = useState(true);

      useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
          setIsConnected(state.isConnected);
        });

        return () => {
          unsubscribe();
        };
      }, []);

      if (!isConnected) {
        return (
          <View style={styles.container}>
            <Text style={styles.text}>No internet connection</Text>
          </View>
        );
      }

      return children;
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'red',
      },
    });

    export default CheckInternetAccess;
    ```

### Media Pickers

- **Image Picker Function**:
  - **Command**: `Create Handle Image Picker Function`
  - **Generated Code**:
    ```js
    import ImagePicker from 'react-native-image-picker';

    const handleImagePicker = (options, callback) => {
      ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          callback(response);
        }
      });
    };

    export default handleImagePicker;
    ```

- **Image Picker Boilerplate**:
  - **Command**: `Create Image Picker Boilerplate`
  - **Generated Code**:
    ```jsx
    import React, { useState } from 'react';
    import { View, Button, Image } from 'react-native';
    import handleImagePicker from './handleImagePicker';

    const ImagePickerComponent = () => {
      const [image, setImage] = useState(null);

      const selectImage = () => {
        const options = {
          title: 'Select Image',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };

        handleImagePicker(options, (response) => {
          setImage(response.uri);
        });
      };

      return (
        <View>
          <Button title="Select Image" onPress={selectImage} />
          {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
        </View>
      );
    };

    export default ImagePickerComponent;
    ```

- **Video Picker Function**:
  - **Command**: `Create Handle Video Picker Function`
  - **Generated Code**:
    ```js
    import ImagePicker from 'react-native-image-picker';

    const handleVideoPicker = (options, callback) => {
      ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
          console.log('User cancelled video picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          callback(response);
        }
      });
    };

    export default handleVideoPicker;
    ```

- **Video Picker Boilerplate**:
  - **Command**: `Create Video Picker Boilerplate`
  - **Generated Code**:
    ```jsx
    import React, { useState } from 'react';
    import { View, Button, Video } from 'react-native';
    import handleVideoPicker from './handleVideoPicker';

    const VideoPickerComponent = () => {
      const [video, setVideo] = useState(null);

      const selectVideo = () => {
        const options = {
          title: 'Select Video',
          mediaType: 'video',
          storageOptions: {
            skipBackup: true,
            path: 'videos',
          },
        };

        handleVideoPicker(options, (response) => {
          setVideo(response.uri);
        });
      };

      return (
        <View>
          <Button title="Select Video" onPress={selectVideo} />
          {video && <Video source={{ uri: video }} style={{ width: 100, height: 100 }} />}
        </View>
      );
    };

    export default VideoPickerComponent;
    ```

### Firebase Analytics

- **Handle Firebase Analytics Function**:
  - **Command**: `Create Handle Firebase Analytics Function`
  - **Generated Code**:
    ```js
    import analytics from '@react-native-firebase/analytics';

    const logEvent = async (eventName, params) => {
      try {
        await analytics().logEvent(eventName, params);
        console.log('Event logged:', eventName);
      } catch (error) {
        console.error('Error logging event:', error);
      }
    };

    export default logEvent;
    ```

- **Firebase Analytics Boilerplate**:
  - **Command**: `Create Firebase Analytics Boilerplate`
  - **Generated Code**:
    ```jsx
    import React from 'react';
    import { View, Button } from 'react-native';
    import logEvent from './logEvent';

    const FirebaseAnalyticsComponent = () => {
      const handleButtonClick = () => {
        logEvent('button_click', { button: 'test_button' });
      };

      return (
        <View>
          <Button title="Click me" onPress={handleButtonClick} />
        </View>
      );
    };

    export default FirebaseAnalyticsComponent;
    ```

### Location

- **Handle Location Function**:
  - **Command**: `Create Handle Location Function`
  - **Generated Code**:
    ```js
    import Geolocation from '@react-native-community/geolocation';

    const getCurrentLocation = (callback) => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          callback({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    export default getCurrentLocation;
    ```

- **Location Boilerplate**:
  - **Command**: `Create Location Boilerplate`
  - **Generated Code**:
    ```jsx
    import React, { useState, useEffect } from 'react';
    import { View, Text, Button } from 'react-native';
    import getCurrentLocation from './handleLocation';

    const LocationComponent = () => {
      const [location, setLocation] = useState(null);

      const fetchLocation = () => {
        getCurrentLocation((coords) => {
          setLocation(coords);
        });
      };

      useEffect(() => {
        fetchLocation();
      }, []);

      return (
        <View>
          <Button title="Get Location" onPress={fetchLocation} />
          {location && (
            <Text>
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </Text>
          )}
        </View>
      );
    };

    export default LocationComponent;
    ```

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT © [Shaaz Khan](https://github.com/shaaz1000/react-reactnative-component-generator)
