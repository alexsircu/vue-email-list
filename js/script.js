

var app = new Vue(
  {
    el: "#root",
    data: {
      emailCreated: null
    },
    methods: {

    },
    mounted: function () {
      for (var i = 0; i < 10; i++) {
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((result) => {
            console.log(result.data.response);
            this.emailCreated += result.data.response;
          }
        );
      }
    }
  }
);
