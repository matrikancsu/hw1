var os = require('os');
var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config.secretAccessKey = [process.env.SECRETACCESSKEY];
AWS.config.accessKeyId = [process.env.ACCESSKEYID];

AWS.config.update({region: 'us-east-1'});
var ec2 = new AWS.EC2	();
var params = {
  ImageId: 'ami-d05e75b8', // Amazon Linux AMI x86_64 EBS
  InstanceType: 't2.micro',
  MinCount: 1, MaxCount: 1,
  KeyName: "keypair"
};

// Create the instance
ec2.runInstances(params, function(err, data) {
  if (err) { console.log("Could not create instance", err); return; }

  var instanceId = data.Instances[0].InstanceId;
  console.log("Created instance", instanceId);

    // Add tags to the instance
  setTimeout(function(){ec2.describeInstances({InstanceIds:[instanceId]}, function(err, data){
if (err) { 
        console.log("Could not find instance", err); 
        return; 
    }
    var ip_adddress = data.Reservations[0].Instances[0].PublicIpAddress;
    console.log("ip address: ",ip_adddress);
    console.log("writing to inventory file...");
    var inventorydata = "aws ansible_ssh_host=" + ip_adddress + " " + [process.env.AWS_PATH];
    fs.appendFileSync('inventory', inventorydata, encoding='utf8');
    console.log("finished writing to inventory file");
  });},30000);
});
