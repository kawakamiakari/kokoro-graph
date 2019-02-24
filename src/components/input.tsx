import React from 'react';

import Twemoji from 'react-twemoji';

// Wheel of emotions wrote by Plutchik
const emotions = [
  {
    emotion: 'joy',
    emotion_ja: '嬉しい',
    emoji: '😆',
  },
  {
    emotion: 'trust',
    emotion_ja: '安心',
    emoji: '😌',
  },
  {
    emotion: 'fear',
    emotion_ja: '不安',
    emoji: '😖',
  },
  {
    emotion: 'suprise',
    emotion_ja: '驚き',
    emoji: '😮',
  },
  {
    emotion: 'sadness',
    emotion_ja: '悲しい',
    emoji: '😢',
  },
  {
    emotion: 'disgust',
    emotion_ja: '嫌悪感',
    emoji: '😑',
  },
  {
    emotion: 'anger',
    emotion_ja: '怒り',
    emoji: '😡',
  },
  {
    emotion: 'anticipation',
    emotion_ja: 'わくわく',
    emoji: '😳',
  },
];

class Input extends React.Component {
  render() {
    let list = [];

    for (let i in emotions) {
      list.push(
        <li>
          <Twemoji options={{ className: 'twemoji' }}>
            {emotions[i].emoji} {emotions[i].emotion_ja}
          </Twemoji>
        </li>
      );
    }

    return (
      <div>
        <span>どんな気持ちになった？</span>
        <ul>{list}</ul>
        <input type="text" />
      </div>
    );
  }
}

export default Input;
