"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const vision = require("@google-cloud/vision");
const visionClient = new vision.ImageAnnotatorClient();
//may need to delete, use default
const bucketName = 'outsidehax-vision';
exports.imageTagger = functions.storage
    .bucket(bucketName)
    .object()
    .onFinalize((object) => __awaiter(this, void 0, void 0, function* () {
    const filePath = object.name;
    const imageUri = 'gs://outsidehax-vision/' + filePath;
    //gs://'+bucketName+'/'+filePath;
    const docId = filePath.split('.jpg')[0];
    const docRef = admin.firestore().collection('photos').doc(docId);
    const results = yield visionClient.faceDetection(imageUri);
    const joyLikelihood = results[0].faceAnnotations.map(obj => obj.joyLikelihood);
    const sorrowLikelihood = results[0].faceAnnotations.map(obj => obj.sorrowLikelihood);
    const happy = joyLikelihood[0] === "VERY_LIKELY";
    let joyScore = 0;
    let sadScore = 0;
    for (var j = 0; j < joyLikelihood.length; j++) {
        if (joyLikelihood[j] === "VERY_LIKELY")
            joyScore += 3;
        else if (joyLikelihood[j] === "LIKELY")
            joyScore += 2;
        else if (joyLikelihood[j] === "POSSIBLE")
            joyScore += 1;
    }
    for (var ss = 0; ss < sorrowLikelihood.length; ss++) {
        if (sorrowLikelihood[ss] === "VERY_LIKELY")
            sadScore += 3;
        else if (sorrowLikelihood[ss] === "LIKELY")
            sadScore += 2;
        else if (sorrowLikelihood[ss] === "POSSIBLE")
            sadScore += 1;
    }
    const dominantEmotion = (joyScore >= sadScore) ? "HAPPY" : "SAD";
    const happy = dominantEmotion === 'HAPPY';
    return docRef.set({ happy, joyScore, sadScore, dominantEmotion });
}));
//# sourceMappingURL=index.js.map