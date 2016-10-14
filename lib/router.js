Router.configure({
  //layoutTemplate:'layout',
  loadingTemplate:'loading',
  layoutTemplate: 'mainLayout',
   waitOn: function() {
    return Meteor.subscribe('allVideos');
  }
});

//Router.route('/',{name: 'videosList'});
Router.route('/', {
  name:'home',

    template: 'home'
});

Router.route('/register',{name: 'register'});
Router.route('/login',{name: 'login'});
Router.route('/contents',{name: 'contents'});




Router.route('/videos/:_id',{  //匹配/videos/xyz
  name:'videoPage',
  data:function(){   //指定data数据源
    return Videos.findOne(this.params._id);
  }
})
