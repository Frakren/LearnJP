new Vue({
    el:'#Menu',
    data:{

    },
    methods: {
        loadContent(type){
            switch(type)
            {
                case 0:
                    alert("Hiragana");
                    break;
                case 1:
                    alert("Katakana");
                    break;
                case 2:
                    alert("Kanji");
                    break;
            };
            new Vue({
                el:'#task',
                template:`
                             <div>
                                 <ul>
                                     <li><a href="#" @click=""">Alfabeto</a></li>
                                     <li><a href="#" @click=""">Adivinhe</a></li>
                                     <li><a href="#" @click=""">FlashCard</a></li>
                                 </ul>
                             </div>
                         `
            }) 
        }
    },
    template:`
    <ul>
        <li><a href="#" @click="loadContent(0)">Hiragana</a></li>
        <li><a href="#" @click="loadContent(1)">Katakana</a></li>
        <li><a href="#" @click="loadContent(2)">Kanji</a></li>
    </ul>
    `
})