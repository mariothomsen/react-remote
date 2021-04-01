import {
  s42828,
  s24855,
  s24885,
  s120806,
  s18018,
  s78204,
  xBirds,
} from '../components/radioLogos'

const echos = {
  wohnung: 'b3facf1955ff465cb9a1581c8b15f6fd',
  südflügel: 'f4cf13c2be114f4fa0ff7a0a9e9530ac',
  büro: 'G090VP048417012P',
  wohnzimmer: 'G090XG0793243824',
  küche: 'G090VP04851402VS',
  badezimmer: 'G0911M079317235D',
  schlafzimmer: 'G0911W0794162UBK',
}

const windowContacts = {
  wohnzimmer: 'contact_197c63',
  küche: 'contact_18de74',
  badezimmer: 'contact_18de81',
  schlafzimmer: 'contact_193593',
  büro: 'contact_18de48',
}

const radioMenu = (roomName) => [
  {
    node: 'javascript.0.handler.radio',
    text: 'Hamburg Zwei',
    targetState: roomName + '.s78204',
    logo: s78204,
  },
  {
    node: 'javascript.0.handler.radio',
    text: 'Radio HH',
    targetState: roomName + '.s18018',
    logo: s18018,
  },
  {
    node: 'javascript.0.handler.radio',
    text: 'NDR Info',
    targetState: roomName + '.s24885',
    logo: s24885,
  },
  {
    node: 'javascript.0.handler.radio',
    text: 'Deutschlandfunk',
    targetState: roomName + '.s42828',
    logo: s42828,
  },
  {
    node: 'javascript.0.handler.radio',
    text: 'DLF Nova',
    targetState: roomName + '.s120806',
    logo: s120806,
  },
  {
    node: 'javascript.0.handler.radio',
    text: 'Bayern 2',
    targetState: roomName + '.s24855',
    logo: s24855,
  },
  {
    node: 'javascript.0.handler.radio',
    text: 'Waldgeräusche',
    targetState: roomName + '.xBirds',
    logo: xBirds,
  },
]

export default function useRoomConfig(
  getApiState,
  updateApiState,
  updateLocalState
) {
  // DEFINE ROOM DATA
  var roomData = {}

  roomData['küche'] = loadStandardRoomData(
    'küche',
    getApiState,
    updateApiState,
    updateLocalState
  )

  roomData['badezimmer'] = loadStandardRoomData(
    'badezimmer',
    getApiState,
    updateApiState,
    updateLocalState
  )

  roomData['schlafzimmer'] = loadStandardRoomData(
    'schlafzimmer',
    getApiState,
    updateApiState,
    updateLocalState
  )

  /************************ WOHNZIMMER (custom) *************************/
  let roomName = 'wohnzimmer'
  roomData['wohnzimmer'] = {
    name: roomName,
    infos: [
      {
        value: getApiState(
          'maxcube.0.devices.' + windowContacts['büro'] + '.opened'
        ),
        type: 'window',
        prepand: ' ',
        append: '\u00A0|',
      },
      {
        value: getApiState(
          'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentArtist'
        ),
        type: 'currentPlaying',
        prepand: ' ',
        append: '\u00A0|',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'Temp'),
        type: 'temp',
        prepand: ' ',
        append: '° / ',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'TargetTemp'),
        type: 'temp',
        prepand: ' ',
        append: '° |\u00A0 ',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'Humidity'),
        type: 'humidity',
        prepand: ' ',
        append: '% ',
      },
    ],
    lightHandler: 'javascript.0.handler.lights',
    lightValue: getApiState('javascript.0.lights.' + roomName + '.current'),
    lightNode: 'javascript.0.lights.' + roomName + '.current',
    lightWidgetLayout: '2fr 1fr',
    lightMenu: [
      {
        node: 'javascript.0.handler.lights',
        text: 'Gemütlich',
        color: '#ffa10070',
        targetState: roomName + '.1',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Normal',
        color: 'var(--color-primary)',
        targetState: roomName + '.2',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Hell',
        color: '#e3f2ff',
        icon: '',
        targetState: roomName + '.3',
      },
    ],
    settings: [
      {
        node: 'javascript.0.lights.' + roomName + '.autoMode',
        value: getApiState('javascript.0.lights.' + roomName + '.autoMode'),
        text: 'Autom. Licht',
      },
    ],
    volumneValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume'
    ),
    volumneNode: 'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume',
    radioHandler: 'javascript.0.handler.radio',
    radioValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState'
    ),
    radioNode:
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState',
    radioMenu: radioMenu(roomName),
    heatingValue: getApiState('javascript.0.klima.' + roomName + 'TargetTemp'),
    heatingNode: 'javascript.0.klima.' + roomName + 'TargetTemp',
    heatingHandler: 'javascript.0.handler.heating',
    updateApiNode: updateApiState,
    updateLocalNode: updateLocalState,
    tvState: getApiState('javascript.0.statusInfos.tvon'),
    tvHandler: 'javascript.0.handler.tv',
  }

  /************************ Büro (custom) *************************/
  roomName = 'büro'
  roomData['büro'] = {
    name: roomName,
    infos: [
      {
        value: getApiState(
          'maxcube.0.devices.' + windowContacts[roomName] + '.opened'
        ),
        type: 'window',
        prepand: ' ',
        append: '\u00A0|',
      },
      {
        value: getApiState(
          'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentArtist'
        ),
        type: 'currentPlaying',
        prepand: ' ',
        append: '\u00A0|',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'Temp'),
        type: 'temp',
        prepand: ' ',
        append: '° / ',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'TargetTemp'),
        type: 'temp',
        prepand: ' ',
        append: '° |\u00A0 ',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'Humidity'),
        type: 'humidity',
        prepand: ' ',
        append: '% ',
      },
    ],
    lightHandler: 'javascript.0.handler.lights',
    lightValue: getApiState('javascript.0.lights.' + roomName + '.current'),
    lightNode: 'javascript.0.lights.' + roomName + '.current',
    lightWidgetLayout: '2fr 1fr',
    lightMenu: [
      {
        node: 'javascript.0.handler.lights',
        text: 'Gemütlich',
        color: '#ffa10070',
        targetState: roomName + '.1',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Normal',
        color: 'var(--color-primary)',
        targetState: roomName + '.2',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Normal II',
        color: 'var(--color-primary)',
        targetState: roomName + '.7',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Hell',
        color: '#e3f2ff',
        icon: '',
        targetState: roomName + '.3',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Meeting',
        color: '#e3f2ff',
        icon: '',
        targetState: roomName + '.6',
      },
    ],
    settings: [
      {
        node: 'javascript.0.lights.' + roomName + '.autoMode',
        value: getApiState('javascript.0.lights.' + roomName + '.autoMode'),
        text: 'Autom. Licht',
      },
    ],
    volumneValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume'
    ),
    volumneNode: 'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume',
    radioHandler: 'javascript.0.handler.radio',
    radioValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState'
    ),
    radioNode:
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState',
    radioMenu: radioMenu(roomName),
    heatingValue: getApiState('javascript.0.klima.' + roomName + 'TargetTemp'),
    heatingNode: 'javascript.0.klima.' + roomName + 'TargetTemp',
    heatingHandler: 'javascript.0.handler.heating',
    updateApiNode: updateApiState,
    updateLocalNode: updateLocalState,
    tvState: getApiState('javascript.0.statusInfos.tvon'),
    tvHandler: 'javascript.0.handler.tv',
  }

  /************************ TERRASSE (custom) *************************/
  roomName = 'terrasse'
  roomData['terrasse'] = {
    name: roomName,
    lightHandler: 'javascript.0.handler.lights',
    lightValue: getApiState('javascript.0.lights.' + roomName + '.current'),
    lightNode: 'javascript.0.lights.' + roomName + '.current',
    lightWidgetLayout: '2fr 1fr',
    lightMenu: [
      {
        node: 'javascript.0.handler.lights',
        text: 'Gemütlich',
        color: '#ffa10070',
        targetState: roomName + '.1',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Normal',
        color: 'var(--color-primary)',
        targetState: roomName + '.2',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Hell',
        color: '#e3f2ff',
        icon: '',
        targetState: roomName + '.3',
      },
    ],
    updateApiNode: updateApiState,
    updateLocalNode: updateLocalState,
  }

  /************************ WOHNUNG (custom) *************************/
  roomName = 'wohnung'
  roomData['wohnung'] = {
    name: roomName,
    infos: [
      {
        value: getApiState(
          'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentArtist'
        ),
        type: 'currentPlaying',
        prepand: ' ',
        append: '\u00A0|',
      },
      {
        value: getApiState(
          'alexa2.0.Echo-Devices.' +
            echos['südflügel'] +
            '.Player.currentArtist'
        ),
        type: 'currentPlaying',
        prepand: ' ',
        append: '\u00A0|',
      },
      {
        value: getApiState('javascript.0.klima.terasseTemp'),
        type: 'temp',
        prepand: 'Außen: ',
        append: '°\u00A0\u00A0|\u00A0\u00A0',
      },
      {
        value: getApiState('javascript.0.statusInfos.tempInnen'),
        type: 'temp',
        prepand: 'Flur: ',
        append: '°',
      },
    ],
    ddmenu: [
      {
        node: 'javascript.0.handler.lights',
        text: 'Scene 1',
        color: '#ffa10070',
        targetState: roomName + '.1',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Scene 2',
        color: 'var(--color-primary)',
        targetState: roomName + '.2',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Scene 3',
        color: 'var(--color-primary)',
        targetState: roomName + '.2',
      },
    ],
    volumneValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume'
    ),
    volumneNode: 'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume',
    radioHandler: 'javascript.0.handler.radio',
    radioValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState'
    ),
    radioNode:
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState',
    radioMenu: radioMenu(roomName),
    updateApiNode: updateApiState,
    updateLocalNode: updateLocalState,
    settings: [
      {
        node: 'javascript.0.klima.autoMode',
        value: getApiState('javascript.0.klima.autoMode'),
        text: 'Autom. Heizung',
      },
      {
        node: 'javascript.0.settings.radio.automatic',
        value: getApiState('javascript.0.settings.radio.automatic'),
        text: 'Autom. Radio',
      },
    ],
  }

  /************************ SÜDFLÜGEL (custom) *************************/
  roomName = 'südflügel'
  roomData['südflügel'] = {
    name: roomName,
    volumneValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume'
    ),
    volumneNode: 'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume',
    radioHandler: 'javascript.0.handler.radio',
    radioValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState'
    ),
    radioNode:
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState',
    radioMenu: radioMenu(roomName),
    updateApiNode: updateApiState,
    updateLocalNode: updateLocalState,
  }

  return {
    roomData,
  }
}

/************************ loadStandardRoomData *************************/

function loadStandardRoomData(
  roomName,
  getApiState,
  updateApiState,
  updateLocalState
) {
  return {
    name: roomName,
    infos: [
      {
        value: getApiState(
          'maxcube.0.devices.' + windowContacts[roomName] + '.opened'
        ),
        type: 'window',
        prepand: ' ',
        append: '\u00A0|',
      },
      {
        value: getApiState(
          'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentArtist'
        ),
        type: 'currentPlaying',
        prepand: ' ',
        append: '\u00A0|',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'Temp'),
        type: 'temp',
        prepand: ' ',
        append: '° / ',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'TargetTemp'),
        type: 'temp',
        prepand: ' ',
        append: '° |\u00A0 ',
      },
      {
        value: getApiState('javascript.0.klima.' + roomName + 'Humidity'),
        type: 'humidity',
        prepand: ' ',
        append: '% ',
      },
    ],
    lightHandler: 'javascript.0.handler.lights',
    lightValue: getApiState('javascript.0.lights.' + roomName + '.current'),
    lightNode: 'javascript.0.lights.' + roomName + '.current',
    lightWidgetLayout: '2fr 1fr',
    lightMenu: [
      {
        node: 'javascript.0.handler.lights',
        text: 'Gemütlich',
        color: '#ffa10070',
        targetState: roomName + '.1',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Normal',
        color: 'var(--color-primary)',
        targetState: roomName + '.2',
      },
      {
        node: 'javascript.0.handler.lights',
        text: 'Hell',
        color: '#e3f2ff',
        icon: '',
        targetState: roomName + '.3',
      },
    ],
    settings: [
      {
        node: 'javascript.0.lights.' + roomName + '.autoMode',
        value: getApiState('javascript.0.lights.' + roomName + '.autoMode'),
        text: 'Autom. Licht',
      },
    ],
    volumneValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume'
    ),
    volumneNode: 'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.volume',
    radioHandler: 'javascript.0.handler.radio',
    radioValue: getApiState(
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState'
    ),
    radioNode:
      'alexa2.0.Echo-Devices.' + echos[roomName] + '.Player.currentState',
    radioMenu: radioMenu(roomName),
    heatingValue: getApiState('javascript.0.klima.' + roomName + 'TargetTemp'),
    heatingNode: 'javascript.0.klima.' + roomName + 'TargetTemp',
    heatingHandler: 'javascript.0.handler.heating',
    updateApiNode: updateApiState,
    updateLocalNode: updateLocalState,
  }
}
