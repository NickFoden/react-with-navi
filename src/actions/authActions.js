import { auth, firestore } from "../firebase/index";

export const registerUser = (email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      doCreateUser(authUser.user.uid, email);
    })
    .then(() => {
      console.log("user added");
    })
    .catch(error => {
      if (error.code === "auth/email-already-in-use") {
        window.alert("Your email is already registered please log in.");
      }
      console.log("Error registering user " + error);
      //   window.alert(error);
    });
};

export const doCreateUser = (id, email) => {
  const DocRef = firestore.collection("users").doc(`${id}`);

  return DocRef.set({
    email,
    uid: id,
    userType: "guest"
  })
    .then(() => {
      console.log("user added to firestore");
    })
    .catch(error => {
      console.log("Error adding to firestore" + error);
    });
};

export function forgotPassword(email) {
  return auth
    .doPasswordReset(email)
    .then(() => {
      window.alert("Check your email for reset link.");
    })
    .catch(error => {
      console.log("error in password reset of " + error);
    });
}

export const loginUser = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch(error => {
    if (error.code === "auth/user-not-found") {
      window.alert(
        "This email has not been registered yet. \n \n Sign Up to get started"
      );
    } else if (error.code === "auth/wrong-password") {
      window.alert(
        "Sorry password is incorrect. Please retype or \n can reset with Forgot Password below"
      );
    } else {
      window.alert("Sorry an error " + error.message);
    }
  });
  console.log("finished login " + auth.authUser);
};

// Sign out
export const theSignOut = () => {
  auth.signOut();
};
// Password Reset
export const thePasswordReset = email => auth.sendPasswordResetEmail(email);
