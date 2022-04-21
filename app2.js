const app = Vue.createApp({
    // This contatins data, functions, template to render
    //template:'<h2>I am template </h2>'
    data(){
        return{
            title:'The empire strikes back',
            author:"George martin",
            year: "2020",
            showBooks:true,
            nota:"proba"
        }
    },
    methods:{
        changeTitle(title){
            console.log("You clcik")
            this.title=title// Remember to put "this" to refer the data
        },
        showBooks2(){
            this.showBooks = !this.showBooks
        }

    }
})

app.mount('#app2')