var redis = require("redis")
var client = redis.createClient(6379,'172.23.238.210');

module.exports = function(jobId,stageName,done){
			 client.hmget(jobId+'_stages',stageName,done);
};
