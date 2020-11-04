import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
 
const AppNavigator = createStackNavigator({
  Main: {
    screen: PeoplePage
  },
  PeopleDetail: {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const { first, last } = navigation.state.params.people.name;

      const peopleName =  ` ${ first } ${ last }`;

      return ({
        title: peopleName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
      
        }
      });
    } 
  }
},{
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'

    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      
      alignSelf: 'center'
    }
  }
});
 
const AppContainer = createAppContainer(AppNavigator);
 
export default AppContainer;