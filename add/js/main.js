//HANDLE TEMPALTE INPUT HERE TO EXTRACT HTML FROM FILE AND SAVE TO FIREBASE.
var data1;
var firebaseConfig = {
    apiKey: "AIzaSyC-BUGGSsvUX8z4W1LcsJzS59yrL4__EsE",
    authDomain: "splurket-66df1.firebaseapp.com",
    databaseURL: "https://splurket-66df1-default-rtdb.firebaseio.com",
    projectId: "splurket-66df1",
    storageBucket: "splurket-66df1.appspot.com",
    messagingSenderId: "286706779903",
    appId: "1:286706779903:web:fd91c29319f9804e192eca",
    measurementId: "G-QWQ2M658KL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
  firebase.analytics();


//Handle Image Upload
function imagelink(get_link1){
	get_link = get_link1;
}




function Addproduct() {
  var markflash = document.getElementById('markflash')
	var product_name = document.getElementById('name').value;
       if(typeof product_name == 'undefined'){
           var product_name = "";
}

	var product_price = document.getElementById('price').value;
       if(typeof product_price == 'undefined'){
           var product_price = "";
}

	var product_category = document.getElementById('category').value;
       if(typeof product_category == 'undefined'){
           var product_category = "";
}

	var product_subcategory = document.getElementById('subcategory').value;
       if(typeof product_subcategory == 'undefined'){
           var product_subcategory = "";
}


	var product_cover = get_link;

	var product_downloadlink = document.getElementById('DownloadLink').value;
       if(typeof product_downloadlink == 'undefined'){
           var product_downloadlink = "";
}


	var product_ship_selection = document.getElementById('shipping-selection').value;
       if(typeof product_ship_selection == 'undefined'){
           var product_ship_selection = "";
}

	var product_ship_template = document.getElementById('shipping-template').value;
       if(typeof product_ship_template == 'undefined'){
           var product_ship_template = "";
}
	var product_description = document.getElementById('prod_desc').value;
       if(typeof product_description == 'undefined'){
           var product_description = "";
}
  var dispdesc1 = document.getElementById('markflash').contentWindow.document.getElementById('text')
       if(typeof product_description == 'undefined'){
           var product_description = "";
}else if(typeof product_description != 'undefined'){
           const text = JSON.stringify(dispdesc1)
         }
console.log(text)

	var user;
	var email1;
	firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        user = firebase.auth().currentUser;
        //splurket@gmail.com
        email1 = user.email;
        var myHeaders = new Headers();
	myHeaders.append("Content-Type", "text/plain");

      var raw = JSON.stringify({
        "flemishGiant": `${email1}`
      });
      //document.write(raw)
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://script.google.com/macros/s/AKfycbwd3VKlX6ajjUYSkrg9YOEu3fDg-F0PJsRvv8ia0bhPX6OHn_Lk1a4N7dVx3nKEacui/exec", requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
          //should be a base64 string by now
          getuserdata(data);
      });
  function getuserdata(data) {
      email = data.encryptedstring;
          var docRef = db.collection("users").doc(email);
          docRef.get().then((doc) => {
              if (doc.exists) {
                  data1 = doc.data()
                  pro_pic = data1.pro_pic;
                  if (data1.username == "" ){
                      user_name = data1.email
                  }
                  if (data1.username != "") {
                      user_name = data1.username;
                  }
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          });
  }
    }
    var product_id;
	var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");

        var raw = JSON.stringify({
          "flemishGiant": `${product_name}&${user.email}`
        });
        console.log(raw)
        //document.write(raw)
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://script.google.com/macros/s/AKfycbwd3VKlX6ajjUYSkrg9YOEu3fDg-F0PJsRvv8ia0bhPX6OHn_Lk1a4N7dVx3nKEacui/exec", requestOptions)
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
          	var strings5= data.encryptedstring;
          	var strings4 = data.encryptedstring.split('&')
          	console.log(strings4)
            product_id = strings4[0];

            //document.write(JSON.stringify(data.encryptedstring))

            db.collection('products').doc(product_id).set({
                    dispdesc: text,
                    product_name: product_name,
                    product_creator: data1.username,
                    product_creatorpic: data1.pro_pic,
                    product_price: product_price,
                    product_category: product_category,
                    product_subcategory: product_subcategory,
                    product_cover: product_cover,
                    product_downloadlink: product_downloadlink,
                    product_ship_selection: product_ship_selection,
                    product_ship_template: product_ship_template,
                    product_description: product_description,
                    reviewsn: '0',
                    product_id: product_id,
            });
          	var myHeaders = new Headers();
	        myHeaders.append("Content-Type", "text/plain");

	        var raw = JSON.stringify({
	          "flemishGiant": `${user.email}`
	        });
	        console.log(raw)
	        //document.write(raw)
	        var requestOptions = {
	          method: 'POST',
	          headers: myHeaders,
	          body: raw,
	          redirect: 'follow'
	        };

	        fetch("https://script.google.com/macros/s/AKfycbwd3VKlX6ajjUYSkrg9YOEu3fDg-F0PJsRvv8ia0bhPX6OHn_Lk1a4N7dVx3nKEacui/exec", requestOptions)
	          .then(function (response) {
	              return response.json();
	          })
	          .then(function (data) {
	          	var profile_id= data.encryptedstring;
	          	let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/")
          //document.write(JSON.stringify(data.encryptedstring))
            db.collection('users').doc(profile_id).collection('myproducts').doc(product_id).set({
                    product_name: product_name,
                    product_creator: email1,
                    product_price: product_price,
                    product_category: product_category,
                    product_subcategory: product_subcategory,
                    views:'0',
                    purchases:'0',
                    reviews:'0',
                    creation_date: `${month}, ${date}, ${year}`,
                    status: 'Active',

            });
            document.getElementById('product_form').style.display = "none";
            document.getElementById('product_submitted').style.display = "block";
            });
	        });

})
}
