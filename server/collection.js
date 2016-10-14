Meteor.publish('allVideos',function(){
  return Videos.find();
})
