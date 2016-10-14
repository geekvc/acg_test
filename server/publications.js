Meteor.publish('allVideos',function(){
  return Videos.find();
});

Meteor.publish('videoById',function(videoId){
  return Videos.find({_id: videoId});
});
