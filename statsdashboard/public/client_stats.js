$(document).ready(function(){
	console.log('Connected to Client');
	const socket = io('http://localhost:3030');
	const app = feathers()
	.configure(feathers.socketio(socket))
	const stats = app.service('realtime_stats');
	const logs=app.service('joblog')
	function updateUi(){
		stats.find().then(response=>{
			document.getElementById('t111').innerHTML=response.data[1].oldcount;
			document.getElementById('t112').innerHTML=response.data[1].inserted;
			document.getElementById('t113').innerHTML=response.data[1].updated;
			document.getElementById('t114').innerHTML=response.data[1].deleted
			document.getElementById('t115').innerHTML=response.data[1].newcount;

			document.getElementById('t121').innerHTML=response.data[0].oldcount;
			document.getElementById('t122').innerHTML=response.data[0].inserted;
			document.getElementById('t123').innerHTML=response.data[0].updated;
			document.getElementById('t124').innerHTML=response.data[0].deleted
			document.getElementById('t125').innerHTML=response.data[0].newcount;
		})
		logs.find().then(response1=>{
			document.getElementById('t211').innerHTML=response1.data[1].createdAt;
			document.getElementById('t212').innerHTML=response1.data[1].updatedAt;
			document.getElementById('t213').innerHTML=response1.data[1].jobstatus;

			document.getElementById('t221').innerHTML=response1.data[2].createdAt;
			document.getElementById('t222').innerHTML=response1.data[2].updatedAt;
			document.getElementById('t223').innerHTML=response1.data[2].jobstatus;

			document.getElementById('t231').innerHTML=response1.data[0].createdAt;
			document.getElementById('t232').innerHTML=response1.data[0].updatedAt;
			document.getElementById('t233').innerHTML=response1.data[0].jobstatus;
		})
	};
setInterval(function() {
  updateUi();
}, 7000);
// });
// Handler live query
// const$.subscribe(stats => {
//   statsMirror=stats.sort((a, b) => a.order < b.order ? -1 : 1);
// //   messagesMirror = messages.sort((a, b) => a.order < b.order ? -1 : 1);
// stats.forEach((stat, i) => {
//   statDiv.innerHTML=stat.stat
//    });
  // messages.forEach((message, i) => {
  //   console.log(`${i}: ${message._id} ${message.text} ${message.order}`);

  // updateUi();
});

// function updateUi() {
//   const listEl = document.getElementById('stats');
//   listEl.innerHTML=messagesMirror.data;
// }