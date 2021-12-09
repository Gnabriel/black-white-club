const REF = "dinnerModel" + NN;
function firebaseModel(model) {
  model.addObserver(function () {
    firebase.database().ref(REF).set({});
  });
}
