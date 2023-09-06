/*  Communicating between JS and RNative
3. Web -> React Native: The postMessage method and onMessage prop
*/

import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebviewDemo() {
  const [myColor, setMyColor] = useState('');

  const html = `
  <meta name="viewport" content="width=device-width">
  <script src="https://cdn.jsdelivr.net/npm/echarts" ></script>

<body>
  <div id="chart" style="width: 100%;height:100%;" ></div>
</body>
  <script> 
  const chart = echarts.init(document.getElementById('chart'));
  chart.setOption({
      series:[{
          type: 'pie',
          label:   {show:false},
          data:[
              {name:'Red', value:1},
              {name:'Green', value:1},
              {name:'Blue', value:1},
          ],
          color:[
              'rgb(255,99,132)',
              'rgb(75,192,192)',
              'rgb(54,162,235)',
          ]
      }]
  });
  chart.on('click', function(params){
      window.ReactNativeWebView.postMessage(params.name)
  });
  </script>
  
  `;

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{html}}
        originWhitelist={['*']}
        onMessage={event => {
          setMyColor(event.nativeEvent.data);
        }}
      />

      <Text style={{alignSelf: 'center', fontSize: 21, fontWeight: '600'}}>
        {myColor ? myColor : 'choose a color'}
      </Text>
    </View>
  );
}
