
const redis = require ('redis');
var client = redis.createClient(6379,'172.23.238.210');

module.exports=function(jobId,done)
{
  client.hgetall(jobId+'_stages',function(err,reply){
    if(err)
      console.log(err);
      else {
        done(err,reply);
      }
  });
}
