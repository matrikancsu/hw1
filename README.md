
# HW1
## Digital Ocean
- Login into the your digital ocean account and go to the API tab to generate your API token. 
- Using the API token and listkeys curl command extract the tokenid.
- Next using the rsa -keygen generate ublic and private keys. 
- Public key is to be passed under the settings tab --> security --> SSH Keys. 
- Create environment variables to pass the API token, SSH_Key and path to the public and private keys.
#### Provision a droplet on digital ocean
```sh
node digitalocean.js
````
##AWS
- Create access_key_id and secret_access_key and pass them to the environemnt variables.
- Login to AWS
- Create keypairs. 
- Add security groups.
- Edit security group and edit inbound and set  SSH to anywhere.
- Create user groups and provide it full access.
- Add the user to this group.
#### Provision a droplet on digital ocean
```sh
node AWS.js
````
## Setting up Ansible
- Setup nginx server
- Pass the inventory files and the private key pair file alongwith playbook.yml as the following commands
```sh 
For AWS:
ansible-playbook --private-key=<private-key file> -u <user>-i inventory playbooks/playbook.yml
````
```sh
For DO:
ansible-playbook -i inventory playbook.yml -u root
````

### Configuration Managament
The package.json has all the depencencies to be installed. To install all depenndencies run
````sh
npm install
````
### Generating Video
- Used Screen cast o matic
- Can be found at [http://www.screencast-o-matic.com/] 

### Git your repo
  - Type some Markdown on the left
  - See HTML in the right
  - Magic

### AWS EC2
Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster. You can use Amazon EC2 to launch as many or as few virtual servers as you need, configure security and networking, and manage storage. Amazon EC2 enables you to scale up or down to handle changes in requirements or spikes in popularity, reducing your need to forecast traffic.

##### Features
- Virtual computing environments, known as instances
- Preconfigured templates for your instances, known as Amazon Machine Images (AMIs), that package the bits you need for your server (including the operating system and additional software)
- Various configurations of CPU, memory, storage, and networking capacity for your instances, known as instance types
- Secure login information for your instances using key pairs (AWS stores the public key, and you store the private key in a secure place)
- Storage volumes for temporary data that's deleted when you stop or terminate your instance, known as instance store volumes
- Persistent storage volumes for your data using Amazon Elastic Block Store (Amazon EBS), known as Amazon EBS volumes
- Multiple physical locations for your resources, such as instances and Amazon EBS volumes, known as regions and Availability Zones
- A firewall that enables you to specify the protocols, ports, and source IP ranges that can reach your instances using security groups
- Static IP addresses for dynamic cloud computing, known as Elastic IP addresses
- Metadata, known as tags, that you can create and assign to your Amazon EC2 resources
- Virtual networks you can create that are logically isolated from the rest of the AWS cloud, and that you can optionally connect to your own network, known as virtual private clouds (VPCs)

[Source : http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html]

[Youtube Link : http://youtu.be/nsFPSuPtDIA?hd=1]
