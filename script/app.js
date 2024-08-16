/* Create a new Vue application */
const app = Vue.createApp({
    /* Define the data properties */
    data() {
        return {
            randomFact: '',
            /* Initialize weather data */
            weather: {
                city: '',
                temperature: '',
                wind: '',
                description: ''
            },
            city: '',
            /* Initialize word data */
            word: '',
            phonetic: '',
            partOfSpeech: '',
            definition: '',
            wordToDefine: '',
            studentName: 'Jeet Shah',
            studentNumber: '1147343'
        };
    },
    computed: {
        isActive(){

        }
    },
    /* Define the methods */
    methods: {
        /* Get random fact from API */
        getNewFact() {
            fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
                .then(response => response.json())
                .then(data => {
                    this.randomFact = data.text;
                });
        },
        /* Get weather information from API */
        getWeather() {
            fetch(`https://goweather.herokuapp.com/weather/${this.city}`)
                .then(response => response.json())
                .then(data => {
                    //this.weather.city = data.city;
                    this.weather.temperature = data.temperature;
                    this.weather.wind = data.wind;
                    this.weather.description = data.description;
                });
        },
        /* Define a word from API */
        defineWord() {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.wordToDefine}`)
                .then(response => response.json())
                .then(data => {
                    this.word = data[0].word;
                    this.phonetic = data[0].phonetic;
                    this.partOfSpeech = data[0].meanings[0].partOfSpeech;
                    this.definition = data[0].meanings[0].definitions[0].definition;
                });
        }
    },
    mounted() {
        this.getNewFact();
        this.getWeather();
    }
});
app.mount('#app');