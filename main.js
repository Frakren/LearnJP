const hiragana=new Vue({
    data:{
        caracter:null
    },
    methods:{

    },
    template:`
        <ul>
            <li><a href="#" @click="">Alfabeto</a></li>
            <li><a href="#" @click="">Adivinha</a></li>
            <li><a href="#" @click="">Frases</a></li>
        </ul>
    `
});
const katakana=new Vue({
    data:{

    },
    methods:{

    },
    template:`
        <ul>
            <li><a href="#" @click="">Alfabeto</a></li>
            <li><a href="#" @click="">Adivinha</a></li>
            <li><a href="#" @click="">Frases</a></li>
        </ul>
    `
});
const kanji=new Vue({
    data:{

    },
    methods:{

    },
    template:`
        <ul>
            <li><a href="#" @click="">Alfabeto</a></li>
            <li><a href="#" @click="">Adivinha</a></li>
            <li><a href="#" @click="">Frases</a></li>
        </ul>
    `
});
Vue.component('bmenu',{
    data: function() {
        return {
        }
    },
    methods:{
        loadContent(type){ 
            switch(type){
                case 0:
                    hiragana.$mount('#b_TypeTask');
                    $.getJSON("../hiragana.json", function(json) {
                        hiragana.caracter=json;
                        console.log(hiragana.caracter);
                    });                
                    break;
                case 1:
                    katakana.$mount('#b_TypeTask');
                    break;
                case 2:
                    kanji.$mount('#b_TypeTask');
                    break;
                default:
            }
        }
    },
    template : `
    <ul>
        <li><a href="#" @click="loadContent(0)">Hiragana</a></li>
        <li><a href="#" @click="loadContent(1)">Katakana</a></li>
        <li><a href="#" @click="loadContent(2)">Kanji</a></li>
    </ul>
    `
});

new Vue({
    el:'#b_menu'
});