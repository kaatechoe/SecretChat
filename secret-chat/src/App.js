import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGF3bi1jcmVkaXQtNiIsImV4cCI6MTYxOTA0Nzk1NX0.T-a6ZrZi2P5mrfo_eJV1XjNlVpdbJGmePvnD9yaVVhM';

chatClient.connectUser(
  {
    id: 'dawn-credit-6',
    name: 'dawn',
    image: 'https://getstream.io/random_png/?id=dawn-credit-6&name=dawn',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'dawn-credit-6', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['dawn-credit-6'],
});

const App = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
