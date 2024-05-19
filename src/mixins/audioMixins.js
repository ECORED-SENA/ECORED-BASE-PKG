export default {
  props: {
    audio: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    audioElement: null,
    audioCanPlay: false,
    audioDuration: 0,
    currentTime: 0,
    state: 'pause',
  }),
  computed: {
    currentTimeDisplay() {
      return this.currentTime
        .toFixed(2)
        .toLocaleString({ style: 'unit', unit: 'second' })
    },
    audioDurationDisplay() {
      return this.audioDuration
        .toFixed(2)
        .toLocaleString({ style: 'unit', unit: 'second' })
    },
  },
  mounted() {
    this.audioElement = this.createAudioElement()
    this.audioElement.oncanplay = () => {
      this.audioCanPlay = true
    }
    this.audioElement.onloadedmetadata = ({ target }) => {
      this.audioCanPlay = true
      this.audioDuration = target.duration
    }
    this.audioElement.onended = () => {
      this.audioElement.currentTime = 0
      this.state = 'pause'
    }
    this.audioElement.ontimeupdate = ({ target }) => {
      this.currentTime = target.currentTime
    }
  },
  beforeDestroy() {
    this.audioElement.remove()
  },
  methods: {
    createAudioElement() {
      const audioElement = document.createElement('audio')
      audioElement.setAttribute('preload', 'metadata')
      audioElement.setAttribute('src', this.audio)
      document.body.appendChild(audioElement)
      return audioElement
    },
    play() {
      this.state = 'play'
      this.audioElement.play()
    },
    pause() {
      this.state = 'pause'
      this.audioElement.pause()
    },
    stop() {
      this.state = 'pause'
      this.audioElement.pause()
      this.audioElement.currentTime = 0
    },
  },
}
