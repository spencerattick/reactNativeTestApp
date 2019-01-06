/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Button } from 'react-native-elements';
import analytics from '@segment/analytics-react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userId: '123',
        email: 'test@example.com',
        name: 'Mr. Peanut Butter'
      },
      showIdentifySettings: false,
      input: {
        userId: '',
        email: '',
        name: ''
      }
    }
  }
  componentWillMount() {
     analytics.setup('ilrQLGpSKvTLr1iuBuKjSH3wwBD7RDOh', {
      // Record screen views automatically!
      // recordScreenViews: true,
      // Record certain application events automatically!
      // trackAppLifecycleEvents: true
    })
  }

  track1Press() {
    analytics.track('Skill Gained', {
      item: 'spider-sense',
      stength: '75%'
    })
  }

  track2Press() {
    analytics.track('Ally Acquired', {
      name: 'Ganke Lee',
      relationship: 'friend'
    })
  }

  identifyPress() {
    analytics.identify(this.state.user.userId, {
      name: this.state.user.name,
      email: this.state.user.email
    });
  }

  screenPress() {
    analytics.screen('Ultimate Comics Spider-Man, Vol. 1', {
      author: 'Brian Michael Bendis',
      illustrator: 'Sara Pichelli '
    })
  }
  
  flushPress = () => {
    analytics.flush()
  }
  
  resetPress = () => {
    analytics.reset();
  }

  identifySettingsPress() {
    this.setState(previousState => (
      { showIdentifySettings: !previousState.showIdentifySettings }
    ))
  }

  render() {
    if (this.state.showIdentifySettings) {
      return (
        <View style={styles.container}>
      <Image
      style={{alignSelf: 'center'}}
      source={require('./logo.png')}
      />
        <View style={styles.buttonContainer}>
          <Text style={styles.instructions}>{instructions}</Text>
          <Button
            buttonStyle={styles.button}
            onPress={() => this.identifySettingsPress()}
            title="Identify Settings"
          />
        </View>
      </View>
      );
    }
    return (
      <View style={styles.container}>
      <Image
      style={{alignSelf: 'center'}}
      source={require('./logo.png')}
      />
        <View style={styles.buttonContainer}>
          <Text style={styles.instructions}>{instructions}</Text>
          <Button
            buttonStyle={styles.button}
            onPress={() => this.track1Press()}
            title="Track 1"
          />
          <Button
            buttonStyle={styles.button}
            onPress={() => this.track2Press()}
            title="Track 2"
          />
          <Button
            buttonStyle={styles.button}
            onPress={() => this.identifyPress()}
            title="Identify"
          />
          <Button
            buttonStyle={styles.button}
            onPress={() => this.screenPress()}
            title="Screen"
          />
          <Button
            buttonStyle={styles.button}
            onPress={() => this.flushPress()}
            title="Flush"
          />
          <Button
            buttonStyle={styles.button}
            onPress={() => this.resetPress()}
            title="Reset"
          />
          <Button
            buttonStyle={styles.button}
            onPress={() => this.identifySettingsPress()}
            title="Identify Settings"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    maxHeight: '100%',
    backgroundColor: '#01376C'
  },
  instructions: {
    textAlign: 'center',
    color: 'orange',
    marginBottom: 5,
  },
  buttonContainer: {
    justifyContent: 'space-around',
    minWidth: '75%',
    minHeight: '50%'
  },
  button: {
    backgroundColor: '#46B67E',
  }
});
