import library from '../assets/concept/tapscribe-native-library.webp';
import recording from '../assets/concept/tapscribe-recording.webp';
export const tapscribeStory = {
 id:'tapscribe',title:'Private conversations. Fewer steps.',context:'TapScribe · My own product',
 summary:'A coach needed a simpler way to record and transcribe client sessions locally. I built TapScribe to bring the steps together.',
 image:library,alt:'TapScribe’s native Library displaying a fictional sample conversation and its local transcript.',
 recording,recordingAlt:'TapScribe’s recording window showing microphone and Mac audio levels.',
 contribution:'Workflow design · Native Mac app · Audio capture · Local transcription',
 steps:[
  {title:'Private conversations.',accent:'A disconnected process.',body:'A coach wanted to record and transcribe client sessions without sending them to a cloud service. The workflow involved QuickTime, audio extraction and a local Python script running Whisper. It worked, but every session meant several manual steps.',visual:'local-workflow'},
  {title:'I brought the steps',accent:'into one Mac app.',body:'I built TapScribe to record microphone and Mac audio, then transcribe it locally. The coach can start recording before or during a meeting, even when they aren’t the host.',visual:'local-recording'},
  {title:'Fewer steps.',accent:'Recording and transcript together.',body:'Recordings and transcripts are kept together in the app, ready to find and use. Recording and transcription happen on the Mac. Sharing a transcript with another AI service is a separate choice.',visual:'local-library'}
 ]
};
