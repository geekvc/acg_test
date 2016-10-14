Router.configure({
  //layoutTemplate:'layout',
  loadingTemplate:'loading',
  layoutTemplate: 'mainLayout',
  notFoundTemplate:'notFound',
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

Router.route('/contents/:_id',{
//匹配/videos/xyz
  name: 'videoPage',
  /*data: function(){
  //指定data数据源
  var videoId=this.params._id;
    return Videos.findOne({_id: videoId});

  }*/
  //改为在模板中使用helper获取数据
})

//hook
Router.onBeforeAction('dataNotFound',{only: 'videoPage'});
