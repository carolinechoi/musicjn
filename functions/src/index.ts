import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

import * as vision from '@google-cloud/vision';
const visionClient = new vision.ImageAnnotatorClient();

//may need to delete, use default
const bucketName = 'outsidehax-vision';

export const imageTagger = functions.storage
	.bucket(bucketName)
	.object()
	.onFinalize( async object => {
		const filePath = object.name;

		const imageUri = 		'gs://outsidehax-vision/'+filePath;
		//gs://'+bucketName+'/'+filePath;

		const docId = filePath.split('.jpg')[0];

		const docRef = admin.firestore().collection('photos').doc(docId);

		const results = await visionClient.faceDetection(imageUri);

		const joyLikelihood = results[0].faceAnnotations.map(obj => obj.joyLikelihood);
		const sorrowLikelihood = results[0].faceAnnotations.map(obj => obj.sorrowLikelihood);
		const happy = joyLikelihood[0] === "VERY_LIKELY";

		let joyScore = 0;
		let sadScore = 0;
       for (var j=0;j< joyLikelihood.length;j++){
        if(joyLikelihood[j] === "VERY_LIKELY")
     joyScore +=  3;
 else if(joyLikelihood[j] === "LIKELY")
     joyScore +=  2;
 else if( joyLikelihood[j] === "POSSIBLE")
     joyScore +=  1;
       }

       for (var ss=0; ss < sorrowLikelihood.length;ss++){
       if(sorrowLikelihood[ss] === "VERY_LIKELY")
     sadScore +=  3;
 else if(sorrowLikelihood[ss] === "LIKELY")
     sadScore +=  2;
 else if( sorrowLikelihood[ss] === "POSSIBLE")
     sadScore +=  1;
 
       }
       const dominantEmotion = ( joyScore >= sadScore ) ? "HAPPY" : "SAD";
       return docRef.set({ joyScore, sadScore, dominantEmotion })
   });
 





