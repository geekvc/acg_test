Template.videoPage.onRendered(function() {
  this.subscribe('videoById', Router.current().params._id);
});
Template.videoPage.helpers({
  video: function(){
    return Videos.findOne(Router.current().params._id);
  }
})
