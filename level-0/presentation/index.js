import React from 'react'

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";


const images = {
  nodejs: require('./assets/nodejs.jpg'),
  npm: require('./assets/npm-logo.svg'),
  semver: require('./assets/semver.png')
}

preloader(images);

const theme = createTheme({
  primary: "#47C757"
});

export default class Level0 extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide bgColor={'primary'}>
            <Heading size={1} fit caps lineHeight={1} textColor="#fff">
              Level 0
            </Heading>
          </Slide>
          <Slide>
            <Heading>
              Git Basics
            </Heading>
          </Slide>
          <Slide>
            <Heading>
              Useful *nix tricks
            </Heading>
          </Slide>
          <Slide bgImage={images.nodejs} textColor='#fff' >
            <Layout>
              <Fill>
                <Heading textAlign={'right'}>Node.js</Heading>
                  <Appear>
                    <List textAlign={'left'} margin='50px 0 0 70%'>
                      <ListItem>弱类型</ListItem>
                      <ListItem>动态</ListItem>
                      <ListItem>单线程</ListItem>
                      <ListItem>非阻塞 I/O</ListItem>
                    </List>
                  </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Layout>
              <Fill>
                <Image src={images.npm} margin='0px auto' height='150px'/>
              </Fill>
              <Fill>
                <CodePane
                  lang='js'
                  source={require('raw!./assets/npmCode')}
                  margin='0px auto' />
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={2} textColor={'#fff'}>Semver</Heading>
            <Image bgColor={'#fff'} src={images.semver}></Image>
          </Slide>
          <Slide>
            <Heading size={2} textColor={'#fff'}>Common Tools</Heading>
              <List textColor={'#fff'} textAlign={'center'}>
                <ListItem>Gulp</ListItem>
                <ListItem>Yeoman</ListItem>
                <ListItem>Browerify</ListItem>
                <ListItem>Webpack</ListItem>
              </List>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
