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

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT © [Shaaz Khan](https://github.com/shaaz1000/react-reactnative-component-generator)
