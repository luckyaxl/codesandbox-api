/**
 * Imports
 */

const {firestoreUpdateDirectoryById, firestoreGetDirById} = require('../firestore')

const updateDirectories = async function (sandboxID, dirID, body) {
	let error = false
	if(!sandboxID || !dirID){
		//console.log("Invalid sandboxID: " + sandboxID + " or dirID: " + dirID)
		return {error:true, data:{title:["Invalid sandboxID: " + sandboxID + " or dirID: " + dirID]}}
	} else if(!body || !body.directory){
		//console.log("No body or no directory")
		//console.log(body)
		return {error:true, data:{title:["No body or no directory"]}}
	}

	let ok = await firestoreUpdateDirectoryById(sandboxID, dirID, body.directory)

	if(!ok)
		return {error:true, data:{title:["Failed to update module"]}}

	return await firestoreGetDirById(sandboxID, dirID)
  
}

module.exports = updateDirectories
