const apn = require("apn");

let users = [
{ name: "John",  "devices": ["2824986643c091e6173f332c1a80167eb872064ae28018dc87f48e58275993a2"]},
];

let service = new apn.Provider({
	cert: "./development_com.upchina.bhtrader.pem",
	key: "./development_com.upchina.bhtrader.pkey",
});

users.forEach( (user) => {

	let note = new apn.Notification();
	// note.alert = `Hey ${user.name}, I just sent my first Push Notification`;

  // The topic is usually the bundle identifier of your application.
  // note.topic = "com.nino.art";
  note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
  note.mutableContent = 1;
  // note.aps.category = 
  // note.imageUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540447062094&di=5e85f334bbe4ffb427ff8e0810e836c1&imgtype=0&src=http%3A%2F%2Fimglf1.ph.126.net%2FoljWz5jLr1qQkpczN2vbtg%3D%3D%2F6630482825513573314.jpg";
  // note.sound = "ping.aiff";
  note.badge = 1;
  note.alert = ({"title":"无问西东","body":"如果提前了解你将要面对的人生，你是否还会有勇气前来。看见的和听到的经常会令人沮丧，世俗是这样强大，强大到生不出改变他们的念头。","imageUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540475212762&di=882a65f3b651f1a0699c6d322754d18c&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1408%2F03%2Fc2%2F37003829_1407042717534_mthumb.jpg"});
    // noti.alert = "无问西东";
  // note.body = "如果提前了解你将要面对的人生，你是否还会有勇气前来。看见的和听到的经常会令人沮丧，世俗是这样强大，强大到生不出改变他们的念头。";
  // note.payload = {'messageFrom': 'John Appleseed'};
  console.log(`Sending: ${note.compile()} to ${user.devices}`);

  service.send(note, user.devices).then( result => {
  	console.log("sent:", result.sent.length);
  	console.log("failed:", result.failed.length);
  	console.log(result.failed);
  });
});

// For one-shot notification tasks you may wish to shutdown the connection
// after everything is sent, but only call shutdown if you need your
// application to terminate.
service.shutdown();

// let tokens = ["5d2010c21697b5095d13336ebe9937de81ad4b3a3ec03f4867cbac32cfe7270d"];

// let service = new apn.Provider({
//  cert: "./apns/apns-dev-cert.pem",
//   key: "./apns/apns-dev-key.pem",
// });

// let note = new apn.Notification({
// 	alert:  "Breaking News: I just sent my first Push Notification",
// });

// // The topic is usually the bundle identifier of your application.
// note.topic = "com.nino.art";

// console.log(`Sending: ${note.compile()} to ${tokens}`);
// service.send(note, tokens).then( result => {
//     console.log("sent:", result.sent.length);
//     console.log("failed:", result.failed.length);
//     console.log(result.failed);
// });


// For one-shot notification tasks you may wish to shutdown the connection
// after everything is sent, but only call shutdown if you need your 
// application to terminate.
service.shutdown();